import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Loader from './Loader';
import LoadingText from './LoadingText';

const propTypes = {
  children: PropTypes.string
};

const Spinner = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Loader />
    <LoadingText>{children}</LoadingText>
  </Wrapper>
);

Spinner.propTypes = propTypes;

export default Spinner;
