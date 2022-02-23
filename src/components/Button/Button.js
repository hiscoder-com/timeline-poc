import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { log } from '../../utils';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  log('test');
  return <MuiButton onClick={onClick}>{text}</MuiButton>;
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
