import styled from 'styled-components';
import { CardContent as MUICardText } from '@material-ui/core';
import { lighten } from 'polished';
import defaultTheme from '../../../constants/defaultTheme';

const CardText = styled(MUICardText)`
  display: flex;
  align-items: center;
  background-color: ${props => lighten(0.09, props.theme.black90)};
`;

CardText.defaultProps = defaultTheme;

export default CardText;
