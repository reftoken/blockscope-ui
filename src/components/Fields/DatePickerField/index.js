import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired
};

const DatePickerField = props => (
  <DatePicker
    // value={props.input.value}
    onChange={(_, date) => props.input.onChange(date)}
    hintText={props.label}
    openToYearSelection
    style={{ marginTop: 25 }}
    maxDate={new Date()}
  />
);

DatePickerField.propTypes = propTypes;

export default DatePickerField;
