import React from 'react';
import { log } from '../../utils';
import PropTypes from 'prop-types';
import Timeline from '../Timeline';
import { Card as CardData } from 'translation-helps-rcl';

function Card() {
  log('test');

  return (
    <>
      <CardData
        closeable={true}
        disableFilters={true}
        disableNavigation={true}
        disableSettingsButton={true}
        itemIndex={0}
        setItemIndex={0}
        markdownView={true}
        title={'Test Card Timeline'}
        hideMarkdownToggle={true}
        showSaveChangesPrompt={false}
      >
        <Timeline />
      </CardData>
    </>
  );
}

Card.defaultProps = {
  text: 'Test',
};

Card.propTypes = {
  /** Title */
  text: PropTypes.string,
  /** Event by clicking on the Card. */
  onClick: PropTypes.func,
};

export default Card;
