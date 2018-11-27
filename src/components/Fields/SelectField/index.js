import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { InputLabel } from '@material-ui/core';
import { Select } from 'redux-form-material-ui';
import defaultTheme from '../../../constants/defaultTheme';

import FormError from '../FormError';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  meta: PropTypes.object
};

const SelectField = ({ theme, label, meta: { touched, error }, ...props }) => {
  return (
    <Fragment>
      <InputLabel>{label}</InputLabel>
      <Select error={touched && !!error} fullWidth {...props} />

      {error && <FormError theme={theme}>{error}</FormError>}
    </Fragment>
  );
};

SelectField.defaultProps = defaultTheme;

SelectField.propTypes = propTypes;

export default SelectField;
