import styled from 'styled-components';
import { Step as StepperStep } from '@material-ui';
import { lighten } from 'polished';
import defaultTheme from '../../../constants/defaultTheme';

/* stylelint-disable selector-combinator-blacklist */
const Step = styled(StepperStep)`
  & > * {
    height: 45px !important;
  }
  svg {
    fill: ${props =>
      props.disabled
        ? lighten(0.75, props.theme.primary)
        : props.theme.secondary} !important;
  }
`;

Step.defaultProps = defaultTheme;

export default Step;
