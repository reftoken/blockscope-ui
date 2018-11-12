import styled from 'styled-components';

export const Heading1 = styled.h1`
  margin: ${props => (props.margin ? props.margin : '.67em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '2em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
export const Heading2 = styled.h2`
  margin: ${props => (props.margin ? props.margin : '.75em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
export const Heading3 = styled.h3`
  margin: ${props => (props.margin ? props.margin : '.83em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.17em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
export const Heading4 = styled.h4`
  margin: ${props => (props.margin ? props.margin : '1.12em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
export const Heading5 = styled.h5`
  margin: ${props => (props.margin ? props.margin : '1.5em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '.83em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
export const Heading6 = styled.h6`
  margin: ${props => (props.margin ? props.margin : '1.67em 0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '.75em')};
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props => (props.secondary ? '#4d4d4d' : '#001529')};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-family: ${props =>
    props.secondary
      ? "'Encode Sans', sans-serif"
      : 'Arial,Helvetica,sans-serif'};
`;
