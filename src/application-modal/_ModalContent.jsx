import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import ActionFooter from 'terra-action-footer';
import Scroll from 'terra-scroll';

import ModalHeader from './_ModalHeader';
import ModalOverlay from './_ModalOverlay';
import styles from './ModalContent.module.scss';
import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlayProvider from '../application-loading-overlay/ApplicationLoadingOverlayProvider';
import ApplicationConceptContext from '../application-container/private/ApplicationConceptContext';
import useNotificationBanners from '../notification-banner/private/useNotificationBanners';

const cx = classNamesBind.bind(styles);

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

const propTypes = {
  title: PropTypes.string,
  toolbar: PropTypes.element,
  children: PropTypes.node,
  refCallback: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    PropTypes.shape({
      height: PropTypes.oneOf([240, 420, 600, 870, 960]),
      width: PropTypes.oneOf([320, 640, 960, 1280, 1600]),
    }),
  ]),
};

const defaultProps = {
  size: 'small',
};

const ModalContent = (props) => {
  const {
    title,
    toolbar,
    size,
    children,
    onRequestClose,
    refCallback,
    ...customProps
  } = props;

  const applicationConceptBanner = React.useContext(ApplicationConceptContext);
  const theme = React.useContext(ThemeContext);

  const { NotificationBannerProvider, NotificationBanners } = useNotificationBanners();

  let modalHeight;
  let modalWidth;
  if (typeof size === 'string') {
    modalHeight = heightFromSize[size] || 420;
    modalWidth = widthFromSize[size] || 640;
  } else if (typeof size === 'object') {
    modalHeight = size.height || 420;
    modalWidth = size.width || 640;
  } else {
    modalHeight = 420;
    modalWidth = 640;
  }

  const modalClassNames = cx('application-modal', `height-${modalHeight}`, `width-${modalWidth}`, theme.className);

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <>
      {
        /*
          When an aria-label is set and tabIndex is set to 0, VoiceOver will read
          the aria-label value when the modal is opened
        */
      }
      <div
        {...customProps}
        tabIndex={platformIsiOS ? '-1' : '0'}
        aria-modal="true"
        aria-label={title}
        className={modalClassNames}
        role="dialog"
        ref={(ref) => { if (refCallback) { refCallback(ref); } }}
      >
        <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
          {text => (
            <VisuallyHiddenText data-terra-abstract-modal-begin tabIndex="-1" text={text} />
          )}
        </FormattedMessage>
        <ContentContainer
          fill
          header={(
            <>
              <ModalHeader
                title={title}
                onClose={onRequestClose}
              />
              {toolbar}
              {applicationConceptBanner && applicationConceptBanner.modalBanner}
              <NotificationBanners />
            </>
          )}
          footer={(
            <ActionFooter end={<Button text="Close" onClick={() => { onRequestClose(); }} />} />
          )}
        >
          <NotificationBannerProvider>
            <ApplicationLoadingOverlayProvider>
              <ApplicationErrorBoundary>
                <Scroll>
                  {children}
                </Scroll>
              </ApplicationErrorBoundary>
            </ApplicationLoadingOverlayProvider>
          </NotificationBannerProvider>
        </ContentContainer>
        <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
          {text => (
            <VisuallyHiddenText text={text} />
          )}
        </FormattedMessage>
      </div>
    </>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
