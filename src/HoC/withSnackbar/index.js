import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { openSnackbar } from '../../state/snackbar/actions';

const withSnackbar = WrappedComponent => props => (
  <WrappedComponent {...props} />
);

const mapDispatchToProps = dispatch => ({
  openSnackbar: snackbar => dispatch(openSnackbar(snackbar)),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withSnackbar,
);
