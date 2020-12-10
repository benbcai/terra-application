import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';

import styles from './HiddenTab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Callback function triggering on selection.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
  isSelected: false,
};

const HiddenTab = ({
  id,
  associatedPanelId,
  index,
  isSelected,
  label,
  metaData,
  onBlur,
  onFocus,
  onSelect,
  tabIds,
  ...customProps
}) => {
  const attributes = {};
  const paneClassNames = cx([
    'hidden',
    { 'is-active': isSelected },
    attributes.className,
  ]);

  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(event, metaData);
    } else {
      handleArrows(event, index, tabIds);
    }
  }

  function onClick(event) {
    onSelect(event, metaData);
  }

  if (onSelect) {
    attributes.tabIndex = isSelected ? 0 : -1;
    attributes.onClick = onClick;
    attributes.onKeyDown = onKeyDown;
    attributes.onBlur = onBlur;
    attributes.onFocus = onFocus;
  }
  attributes['aria-selected'] = isSelected;

  return (
    <div
      {...customProps}
      {...attributes}
      id={id}
      aria-controls={associatedPanelId}
      role="tab"
      className={paneClassNames}
    >
      {isSelected ? <span className={cx('check')}><IconCheckmark /></span> : null}
      <span className={cx('label')}>{label}</span>
    </div>
  );
};

HiddenTab.propTypes = propTypes;
HiddenTab.defaultProps = defaultProps;

export default HiddenTab;