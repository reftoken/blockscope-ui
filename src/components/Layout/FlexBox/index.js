import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'stretch')};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  margin: 0;
  padding: 0;
`;

export default FlexBox;
