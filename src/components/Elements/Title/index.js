import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from './Headings';

const propTypes = {
  heading: PropTypes.string
};

const defaultProps = {
  heading: '1'
};

const Title = ({ heading, ...rest }) => {
  switch (heading) {
    case '2':
      return <Heading2 {...rest} />;
    case '3':
      return <Heading3 {...rest} />;
    case '4':
      return <Heading4 {...rest} />;
    case '5':
      return <Heading5 {...rest} />;
    case '6':
      return <Heading6 {...rest} />;
    default:
      return <Heading1 {...rest} />;
  }
};

Title.defaultProps = defaultProps;
Title.propTypes = propTypes;
export default Title;
