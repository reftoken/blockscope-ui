import styled from 'styled-components';

/* stylelint-disable selector-combinator-blacklist */
const IconWrapper = styled.div`
  background: ${props => props.theme.black90};
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
    fill: ${props => props.theme.error} !important;
  }
`;
/* stylelint-enable selector-combinator-blacklist */

export default IconWrapper;
