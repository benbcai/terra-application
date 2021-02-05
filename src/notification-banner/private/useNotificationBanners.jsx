import React from 'react';
import classNamesBind from 'classnames/bind';
import Button from 'terra-button';
import ThemeContext from 'terra-theme-context';

import { ApplicationIntlContext } from '../../application-intl';

import BannerRegistrationContext from './BannerRegistrationContext';
import organizeBannersByPriority from './organizeBannersByPriority';
import NotificationBannerView, { getTitleStringIdForType } from './_NotificationBannerView';

import styles from './useNotificationBanners.module.scss';

const cx = classNamesBind.bind(styles);

function getBannerTypeFromVariant(variant) {
  let bannerType;
  switch (variant) {
    case 'hazard-high':
      bannerType = 'alert';
      break;
    case 'hazard-medium':
      bannerType = 'warning';
      break;
    case 'hazard-low':
      bannerType = 'info';
      break;
    default:
      bannerType = variant;
  }

  return bannerType;
}

function comparedBannerSets(newBanners, oldBanners) {
  const additions = [];
  const deletions = [...oldBanners];

  for (let i = 0, count = newBanners.length; i < count; i += 1) {
    if (oldBanners.findIndex(oldBanner => oldBanner.key === newBanners[i].key) < 0) {
      additions.push(newBanners[i]);
    } else {
      deletions.splice(deletions.findIndex(banner => banner.key === newBanners[i].key), 1);
    }
  }

  return {
    additions,
    deletions,
  };
}

/**
 * The `useNotificationBanners` Hook manages registering and prioritizing Notification Banners
 * rendered within the Notification Banner Context.
 *
 * Returns:
 *   - NotificationBannerProvider - React Context Provider - Provides the Banner Registration Context to its children.
 *         This allows any NotificationBanner registered beneath it to be displayed in the NotificationBanner's list.
 *   - NotificationBanners - React Component - Renders a list of prioritized notification banners.
 *
 * @returns { NotificationBannerProvider, NotificationBanners }
 */
const useNotificationBanners = () => {
  /** The registeredBanners ref maintains collection of banner ids and banner props registered to the  NotificationBannerProvider. */
  const registeredBanners = React.useRef({});

  /**
   * The updateBannerState ref stores the update state function used to manage the banners rendered in the NotificationBanners component.
   * This ties the state updates to the `useNotificationBanners` hook, while allowing the NotificationBanners to be rendered above or below
   * the NotificationBannerProvider.
   */
  const updateBannerState = React.useRef();

  const useNotificationBannerExports = React.useMemo(() => {
    /**
    * Adds the banner ID and props to the collection of registered banners. Once registered,
    * it updates the NotificationBanner's state to render the new Banner.
    *
    * @param {UUID} bannerId - unique ID associated to the banner
    * @param {Object} bannerProps - react props associated to the banner. See ../NotificationBanner's propTypes.
    */
    const registerNotificationBanner = (bannerId, bannerProps) => {
      if (!bannerId) {
        throw new Error('A banner cannot be registered without an identifier.');
      }

      const { variant } = bannerProps;

      if (!registeredBanners.current[variant]) {
        registeredBanners.current[variant] = {};
      }

      let existingTimestamp;
      if (registeredBanners.current[variant][bannerId]) {
        existingTimestamp = registeredBanners.current[variant][bannerId].timestamp;
      }

      registeredBanners.current[variant][bannerId] = { ...bannerProps, timestamp: existingTimestamp || Date.now(), key: bannerId };

      if (updateBannerState.current) {
        updateBannerState.current({ banners: { ...registeredBanners.current } });
      }
    };

    /**
      * Removes the banner ID and props from the collection of registered banners. Once unregistered,
      * it updates the NotificationBanner's state to remove the Banner from the list.
      *
      * @param {UUID} bannerId - unique ID associated to the banner
      * @param {String} bannerVariant - the banner variant to remove banner from
      */
    const unregisterNotificationBanner = (bannerId, bannerVariant) => {
      if (!bannerId || !bannerVariant) {
        throw new Error('A banner cannot be unregistered without an identifier or banner variant.');
      }

      if (!registeredBanners.current[bannerVariant][bannerId]) {
        return;
      }

      delete registeredBanners.current[bannerVariant][bannerId];

      if (!registeredBanners.current[bannerVariant].length) {
        delete registeredBanners.current[bannerVariant];
      }

      if (updateBannerState.current) {
        updateBannerState.current({ banners: { ...registeredBanners.current } });
      }
    };

    return {
      /**
       * Provides the Banner Registration Context to its children.
       */
      NotificationBannerProvider: ({ children }) => ( // eslint-disable-line react/prop-types
        <BannerRegistrationContext.Provider value={{ registerNotificationBanner, unregisterNotificationBanner }}>
          {children}
        </BannerRegistrationContext.Provider>
      ),
      /**
       * Renders a list of prioritized notification banners.
       */
      NotificationBanners: ({ id, label, activeClassName }) => {
        const theme = React.useContext(ThemeContext);
        const intl = React.useContext(ApplicationIntlContext);
        const [bannerState, setBannerState] = React.useState({});
        const containerRef = React.useRef();
        const notificationRemovedRef = React.useRef();
        const lastRenderedBannersRef = React.useRef([]);
        const forceUpdate = React.useState(false)[1];
        const lastReadAddedBanner = React.useRef();
        const lastReadRemovedBanner = React.useRef();

        /**
         * Set the updateBannerState ref to the update state function. This ties the state updates to the `useNotificationBanners` hook,
         * while allowing the NotificationBanners to be rendered above or below the NotificationBannerProvider.
         */
        updateBannerState.current = setBannerState;

        const prioritizedBanners = organizeBannersByPriority(bannerState.banners, theme.name);

        const renderedBannerComparison = comparedBannerSets(prioritizedBanners, lastRenderedBannersRef.current);
        lastRenderedBannersRef.current = prioritizedBanners;

        React.useEffect(() => {
          if (renderedBannerComparison.deletions.length || renderedBannerComparison.additions.length) {
            const timeout = setTimeout(() => {
              forceUpdate(val => !val);
            }, 3000);

            return () => {
              clearTimeout(timeout);
            };
          }

          return undefined;
        }, [renderedBannerComparison, forceUpdate]);

        let addedBannersLog;
        if (renderedBannerComparison.additions.length) {
          addedBannersLog = renderedBannerComparison.additions.map((addedBanner) => {
            let translatedBannerLabel = getTitleStringIdForType(getBannerTypeFromVariant(addedBanner.variant));
            if (translatedBannerLabel) {
              translatedBannerLabel = intl.formatMessage({ id: translatedBannerLabel });
            }

            return `New ${label} Notification. ${translatedBannerLabel}, ${addedBanner.description}, ${addedBanner?.bannerAction?.text || ''}, ${addedBanner.onRequestClose ? 'Dismiss' : ''}`;
          }).join(' ');

          if (lastReadAddedBanner.current === addedBannersLog) {
            addedBannersLog += '\u00A0';
          }

          lastReadAddedBanner.current = addedBannersLog;
        }

        let removedBannersLog;
        if (renderedBannerComparison.deletions.length) {
          removedBannersLog = renderedBannerComparison.deletions.map((removedBanner) => {
            let translatedBannerLabel = getTitleStringIdForType(getBannerTypeFromVariant(removedBanner.variant));
            if (translatedBannerLabel) {
              translatedBannerLabel = intl.formatMessage({ id: translatedBannerLabel });
            }

            return `Removed Notification: ${translatedBannerLabel} ${removedBanner.description}.`;
          }).join(' ');

          if (lastReadRemovedBanner.current === removedBannersLog) {
            removedBannersLog += '\u00A0';
          }

          lastReadRemovedBanner.current = removedBannersLog;
        }

        return (
          <div
            role="region"
            aria-label={`${label} Notifications.`}
            id={id}
            className={prioritizedBanners.length && activeClassName ? activeClassName : undefined}
            tabIndex="-1"
            ref={notificationRemovedRef}
          >
            <span className={cx('hidden-log')} aria-live="polite" aria-atomic="true">
              <span>{addedBannersLog}</span>
            </span>
            <span className={cx('hidden-log')} aria-live="polite" aria-atomic="true">
              <span>{removedBannersLog}</span>
            </span>
            <ul ref={containerRef} className={cx('banners-list')}>
              {prioritizedBanners.map((bannerProps, index) => {
                const {
                  bannerAction, custom, description, key, onRequestClose, variant,
                } = bannerProps;

                const bannerType = getBannerTypeFromVariant(variant);

                let actionButton = null;
                if (bannerAction) {
                  actionButton = (
                    <Button
                      text={bannerAction.text}
                      variant="ghost"
                      data-terra-application-notification-banner={variant}
                      onClick={bannerAction.onClick}
                    />
                  );
                }

                let customIcon;
                let customSignalWord;
                if (bannerType === 'custom' && custom !== undefined) {
                  customSignalWord = custom?.signalWord;

                  if (custom.customIconClass) {
                    customIcon = (
                      <svg className={cx(['custom-icon', custom.customIconClass])} />
                    );
                  }
                }

                let translatedBannerLabel = getTitleStringIdForType(bannerType);
                if (translatedBannerLabel) {
                  translatedBannerLabel = intl.formatMessage({ id: getTitleStringIdForType(bannerType) });
                } else {
                  translatedBannerLabel = 'Notification';
                }

                return (
                  <li
                    aria-label={translatedBannerLabel}
                    aria-setsize={prioritizedBanners.length}
                    aria-posinset={index + 1}
                    tabIndex="-1"
                    key={key}
                  >
                    <NotificationBannerView
                      key={key}
                      action={actionButton}
                      onDismiss={onRequestClose ? () => {
                        notificationRemovedRef.current.focus();
                        onRequestClose();
                      } : undefined}
                      type={bannerType}
                      customIcon={customIcon}
                      title={customSignalWord}
                      data-terra-application-notification-banner={variant}
                    >
                      {description}
                    </NotificationBannerView>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      },
    };
  }, []);

  return useNotificationBannerExports;
};

export default useNotificationBanners;
