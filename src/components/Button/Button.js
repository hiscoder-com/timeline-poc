import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { Timeline } from '@knight-lab/timelinejs';
// import '@knight-lab/timelinejs/dist/css/timeline.css';
import { log } from '../../utils';
import PropTypes from 'prop-types';

const events = [
  {
    start_date: {
      year: '-2000',
    },
    end_date: {
      year: '-1700',
    },
    text: {
      headline: 'A headline',
      text: 'Some text here',
    },
  },
  {
    start_date: {
      year: '-1300',
    },
    text: {
      headline: 'Another headline',
      text: '<h2>Some more text here</h2> Hello <b>WORLD</b>',
    },
  },
];

const options = {
  // height: '1000px',
  // width: '1000px',
  // default_bg_color: 'white',
  // scale_factor: 2,
  // initial_zoom: 5,
  // timenav_position: 'bottom', //'top'
};

function Button({ text, onClick }) {
  log('test');

  const timelineEl = React.useRef(null);
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (timelineEl.current) {
      new Timeline(timelineEl.current, { events, options });
    }
  }, [timelineEl.current]);

  return (
    <>
      <div style={{ height: '600px' }} ref={timelineEl}></div>
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
