import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Wrapper } from '../../Layout';

const propTypes = {
  label: PropTypes.string,
  onInputChange: PropTypes.func.isRequired
};

const defaultProps = {
  label: 'Search'
};

const SearchBar = ({ label, onInputChange }) => (
  <Wrapper width="500px" margin="0 0 10px 30px">
    <TextField label={label} fullWidth onChange={onInputChange} />{' '}
  </Wrapper>
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
