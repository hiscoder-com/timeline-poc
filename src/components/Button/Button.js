import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { Timeline } from '@knight-lab/timelinejs';
// import '@knight-lab/timelinejs/dist/css/timeline.css';
import { log } from '../../utils';
import PropTypes from 'prop-types';

const events = [
  {
    media: {
      url: 'https://link.to.file',
    },
    start_date: {
      year: '2017',
      month: '01',
      day: '01',
    },
    text: {
      headline: 'A headline',
      text: 'Some text here',
    },
  },
  {
    media: {
      url: 'https://link.to.another.file',
    },
    start_date: {
      year: '2006',
      month: '01',
      day: '01',
    },
    text: {
      headline: 'Another headline',
      text: 'Some more text here',
    },
  },
];

function Button({ text, onClick }) {
  log('test');

  const timelineEl = React.useRef(null);
  React.useEffect(() => {
    if (timelineEl.current) {
      new Timeline(timelineEl.current, { events });
    }
  }, [timelineEl.current]);

  return (
    <>
      <div ref={timelineEl}></div>
    </>
  );
}

Button.defaultProps = {
  text: 'Test',
};

Button.propTypes = {
  /** Title */
  text: PropTypes.string,
  /** Event by clicking on the button. */
  onClick: PropTypes.func,
};

export default Button;
