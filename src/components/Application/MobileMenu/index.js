import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { BarOne, BarTwo, BarThree } from './Bars';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired
};

const MobileMenu = ({ handleClick, collapsed }) => (
  <Wrapper onClick={handleClick}>
    <BarOne collapsed={collapsed} />
    <BarTwo collapsed={collapsed} />
    <BarThree collapsed={collapsed} />
  </Wrapper>
);

MobileMenu.propTypes = propTypes;

export default MobileMenu;
