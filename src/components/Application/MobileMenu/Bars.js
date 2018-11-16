import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';

const base = `
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
`;

export const BarOne = styled.div`
  ${base};
  background-color: ${props =>
    props.collapsed ? props.theme.black90 : props.theme.black30};
  transform: ${props =>
    props.collapsed ? 'rotate(-45deg) translate(-9px, 6px)' : 'none'};
`;

export const BarTwo = styled.div`
  ${base};
  background-color: ${props =>
    props.collapsed ? props.theme.black90 : props.theme.black30};
  opacity: ${props => (props.collapsed ? 0 : 1)};
`;

export const BarThree = styled.div`
  ${base};
  background-color: ${props =>
    props.collapsed ? props.theme.black90 : props.theme.black30};
  transform: ${props =>
    props.collapsed ? 'rotate(45deg) translate(-9px, -6px)' : 'none'};
`;

BarOne.defaultProps = defaultTheme;
BarTwo.defaultProps = defaultTheme;
BarThree.defaultProps = defaultTheme;
