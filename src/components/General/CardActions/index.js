import { CardActions as MUICardActions } from '@material-ui/core';
import styled from 'styled-components';
import defaultTheme from '../../../constants/defaultTheme';
import { lighten } from 'polished';

const CardActions = styled(MUICardActions)`
  background-color: ${props => lighten(0.09, props.theme.black90)};
`;

CardActions.defaultProps = defaultTheme;

export default CardActions;
