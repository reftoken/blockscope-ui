import styled from 'styled-components';

const Image = styled.img`
  ${props => props.width && `max-width: ${props.width};`};
  ${props => props.width && `max-height: ${props.width};`};
`;

export default Image;
