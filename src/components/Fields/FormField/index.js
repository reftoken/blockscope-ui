import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import CheckboxField from './CheckboxField';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  meta: PropTypes.object
};

const FormField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...props
}) =>
  type === 'checkbox' ? (
    <FormControlLabel
      control={
        <CheckboxField
          onChange={() => input.onChange(!input.value)}
          checked={!!input.value}
          color="primary"
        />
      }
      label={label}
      style={{ flex: 1, marginBottom: 10 }}
    />
  ) : (
    <TextField
      {...input}
      {...props}
      type={type}
      error={touched && !!error}
      label={label}
      fullWidth
      style={{ marginBottom: 30 }}
      helperText={touched && error && error}
    />
  );

FormField.propTypes = propTypes;

export default FormField;
