import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarContent } from '@material-ui/core';
import StyledSnackbar from './StyledSnackbar';
import defaultTheme from '../../../constants/defaultTheme';
import * as actions from '../../../state/snackbar/actions';

const { theme } = defaultTheme;

const propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  closeSnackbar: PropTypes.func.isRequired,
  processQueue: PropTypes.func.isRequired,
  autoHideDuration: PropTypes.number,
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  theme: PropTypes.shape({}),
};

const defaultProps = {
  autoHideDuration: 6000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  type: 'info',
  theme,
};

class Snackbar extends Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeSnackbar();
  };

  handleExited = () => {
    this.props.processQueue();
  };

  render() {
    const {
      message,
      open,
      type,
      autoHideDuration,
      anchorOrigin,
      theme,
    } = this.props;
    return (
      <StyledSnackbar
        theme={theme}
        type={type}
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={autoHideDuration || null}
        onClose={this.handleClose}
        onExited={this.handleExited}
      >
        <SnackbarContent
          aria-describedby="snackbar-content"
          message={message}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </StyledSnackbar>
    );
  }
}

const mapStateToProps = state => ({
  open: state.snackbar.open,
  message: state.snackbar.message,
  type: state.snackbar.type,
});

const mapDispatchToProps = dispatch => ({
  openSnackbar: message => dispatch(actions.openSnackbar(message)),
  closeSnackbar: () => dispatch(actions.closeSnackbar()),
  processQueue: () => dispatch(actions.processQueue()),
});

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
