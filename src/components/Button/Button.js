import React, { useEffect } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { Timeline } from '@knight-lab/timelinejs';
//import '@knight-lab/timelinejs/dist/css/timeline.css';
import { log } from '../../utils';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  log('test');
  useEffect(() => {
    new Timeline(
      'timeline-embed',
      'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml'
    );
  }, []);

  return (
    <>
      <div id="timeline-embed" style="width: 100%; height: 600px"></div>
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
