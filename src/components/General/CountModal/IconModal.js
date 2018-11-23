import styled from 'styled-components';
import Modal from '../../Layout/Modal';
import defaultTheme from '../../../constants/defaultTheme';

const IconModal = styled(Modal)`
  position: relative;
  margin: -50px 0 0;
  display: flex;
  justify-content: center;
  min-width: 100px;
  font-size: 40px;
  color: ${props => props.theme.black90};
  background-color: ${props =>
    props.color ? props.color : props.theme.secondary};
`;

IconModal.defaultProps = defaultTheme;

export default IconModal;
