import styled from 'styled-components';
import colors from '../../constants/colors';

/* stylelint-disable selector-combinator-blacklist */
const IconWrapper = styled.div`
  background: ${colors.lightgray};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  & svg {
    fill: black !important;
    opacity: 0.3;
  }

  :hover svg {
    opacity: 0.8;
    fill: ${colors.error} !important;
  }
`;
/* stylelint-enable selector-combinator-blacklist */

export default IconWrapper;
