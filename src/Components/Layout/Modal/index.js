import styled from 'styled-components';
import colors from '../../constants/colors';

/* stylelint-disable selector-combinator-blacklist */
const Modal = styled.section`
  max-width: ${props => (props.width ? props.width : '450px')};
  align-items: 'center';
  margin: ${props => (props.margin ? props.margin : '0 auto 40px')};
  background: #fff;
  padding: 30px;
  border: ${props => (props.noBorder ? 'none' : `1px solid ${colors.gray}`)};
  box-shadow: 0px 0px 40px -5px rgba(0, 0, 0, 0.11);
  position: ${props => (props.pos ? props.pos : 'static')};

  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 10px;
    border-left: 0;
    border-right: 0;
    margin: 0 auto 20px;
  }

  & > aside {
    min-width: 300px;

    &:first-child {
      margin-right: 50px;
      padding-right: 50px;
      border-right: 1px solid ${colors.gray};
    }

    &:last-child {
      padding-left: 40px;
      margin-left: 50px;
      border-left: 1px solid ${colors.gray};
    }

    @media screen and (max-width: 700px) {
      min-width: 0;

      &:first-child {
        margin-right: 0;
        margin-bottom: 20px;

        border-right: 0;
        border-bottom: 1px solid ${colors.gray};
      }

      &:last-child {
        margin-left: 0;
        padding-left: 0;
        margin-top: 20px;

        border-left: 0;
        border-top: 1px solid ${colors.gray};
      }
    }
  }

  & > main {
    flex: 1;

    &:first-child:last-child {
      max-width: none;
    }
  }
`;

export default Modal;
