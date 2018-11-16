import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Loader from './Loader';
import LoadingText from './LoadingText';
import defaultTheme from '../../../constants/defaultTheme';

const propTypes = {
  children: PropTypes.string
};

const Spinner = ({ children, theme, ...props }) => (
  <Wrapper {...props}>
    <Loader theme={theme} />
    <LoadingText theme={theme}>{children}</LoadingText>
  </Wrapper>
);

Spinner.defaultProps = defaultTheme;
Spinner.propTypes = propTypes;

export default Spinner;
