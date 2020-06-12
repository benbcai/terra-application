import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { Portal } from 'react-portal';
import Alert from 'terra-alert';

import BannerRegistrationContext from './private/BannerRegistrationContext';
import { BANNER_TYPES } from './private/utils';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * An action element to be added to the action section of the banner.
   */
  action: PropTypes.element,
  /**
   * The pieces to populate a banner when type=`custom`.
   */
  custom: PropTypes.shape({
    /**
     * The title for the banner which will be bolded.
     */
    bannerTitle: PropTypes.string,
    /**
     * Sets an author-defined class, to control the status bar color to be used.
     */
    colorClass: PropTypes.string,
    /**
     * The class name used to set the icon in the banner.
     */
    icon: PropTypes.element,
  }),
  /**
   * Nodes providing the message content for the banner. Can contain text and HTML.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause
   * the Dismiss button to be included on the banner.
   */
  onDismiss: PropTypes.func,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `info`, `success`, `unsatisfied`, `unverified` or `custom`.
   */
  type: PropTypes.oneOf([
    BANNER_TYPES.ALERT,
    BANNER_TYPES.ERROR,
    BANNER_TYPES.WARNING,
    BANNER_TYPES.UNSATISFIED,
    BANNER_TYPES.UNVERIFIED,
    BANNER_TYPES.ADVISORY,
    BANNER_TYPES.INFO,
    BANNER_TYPES.SUCCESS,
    BANNER_TYPES.CUSTOM,
  ]).isRequired,
};
/* eslint-enable react/no-unused-prop-types */

const Banner = ({
  action, custom, description, onDismiss, type, ...customProps
}) => {
  /**
   * A unique identifier is generated for each Banner during construction. This will be used to
   * uniquely register/unregister the banner with ancestor Banner Managers without requiring consumers to
   * define unique identifiers themselves.
   */
  const uuid = React.useRef(uuidv4());
  const bannerContainer = React.useRef();
  const bannerRegistration = React.useContext(BannerRegistrationContext);
  const [bannerContainerName, setBannerContainerName] = React.useState();

  React.useEffect(() => {
    /**
     * If the bannerRegistration value is the ProviderRegistrationContext's default value,
     * then there is not a matching BannerProvider above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (!bannerRegistration && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('A Banner was not rendered within the context of a BannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.');
    }

    if (bannerRegistration && bannerRegistration.registerBanner) {
      const containerName = bannerRegistration.registerBanner(uuid.current, type);
      bannerContainer.current = document.getElementById(containerName);
      setBannerContainerName(containerName);
    }

    return () => {
      if (bannerRegistration && bannerRegistration.unregisterBanner) {
        bannerRegistration.unregisterBanner(uuid.current, type); // eslint-disable-line
      }
    };
  }, [bannerRegistration, type]);

  if (bannerContainerName === undefined) {
    return null;
  }

  return (
    <Portal node={bannerContainer.current}>
      <Alert
        {...customProps}
        action={action}
        customColorClass={custom?.colorClass}
        customIcon={custom?.icon}
        key={uuid.current}
        onDismiss={onDismiss}
        type={type}
        title={custom?.bannerTitle}
      >
        {description}
      </Alert>
    </Portal>
  );
};

Banner.propTypes = propTypes;

export default Banner;
