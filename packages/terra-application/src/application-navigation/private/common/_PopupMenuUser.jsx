import React from 'react';
import classNames from 'classnames/bind';
import Avatar, { Generic } from 'terra-avatar';
import ThemeContext from 'terra-theme-context';

import { userConfigPropType } from '../utils/propTypes';

import styles from './PopupMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType.isRequired,
};

const PopupMenuUser = ({ userConfig }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('utility-user-layout', theme.className)}>
      <div className={cx('avatar-container')}>
        <div className={cx('avatar-outline')} />
        {
      (userConfig.initials || userConfig.imageSrc)
        ? <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials || userConfig.name} size="1.174rem" isAriaHidden />
        : <Generic alt={userConfig.name} size="1.174rem" isAriaHidden />
      }
      </div>
      <div className={cx('info-container')}>
        <div aria-hidden className={cx('name')}>{userConfig.name}</div>
        {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
      </div>
    </div>
  );
};

PopupMenuUser.propTypes = propTypes;

export default PopupMenuUser;
