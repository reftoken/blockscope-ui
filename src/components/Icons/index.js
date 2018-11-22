import styled, { css } from 'styled-components';
import MUIDashboardIcon from '@material-ui/icons/Dashboard';
import MUIAccountIcon from '@material-ui/icons/AccountCircle';
import MUIArchiveIcon from '@material-ui/icons/Archive';
import MUILinkIcon from '@material-ui/icons/Link';
import MUIPaymentIcon from '@material-ui/icons/Payment';
import MUISettingsIcon from '@material-ui/icons/Settings';
import MUISaveIcon from '@material-ui/icons/Save';
import MUIMoneyIcon from '@material-ui/icons/AttachMoney';
import MUIWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MUICheckIcon from '@material-ui/icons/Check';
import MUIDoneIcon from '@material-ui/icons/Done';
import MUICloseIcon from '@material-ui/icons/Close';
import MUIUsersIcon from '@material-ui/icons/SupervisorAccount';
import MUIArrowBackIcon from '@material-ui/icons/ArrowBack';
import MUIArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MUIInfoIcon from '@material-ui/icons/Info';
import MUIWarningIcon from '@material-ui/icons/Warning';
import MUIHelpIcon from '@material-ui/icons/Help';
import MUIUpdateIcon from '@material-ui/icons/Update';
import MUISwapIcon from '@material-ui/icons/SwapHorizontalCircle';
import MUIDateRange from '@material-ui/icons/DateRange';
import MUICheckCircleIcon from '@material-ui/icons/CheckCircle';
import MUIAccountBalance from '@material-ui/icons/AccountBalance';
import MUIAccessTime from '@material-ui/icons/AccessTime';
import MUIFile from '@material-ui/icons/FileCopy';

const baseStyles = css`
  fill: ${props => (props.fill ? props.fill : 'white')} !important;
  margin: ${props => (props.margin ? props.margin : 0)} !important;
  height: ${props => (props.size ? props.size : '24')}px !important;
  width: ${props => (props.size ? props.size : '24')}px !important;
`;

export const FileIcon = styled(MUIFile)`
  ${baseStyles}
`;

export const AccountBalanceIcon = styled(MUIAccountBalance)`
  ${baseStyles}
`;

export const TimeIcon = styled(MUIAccessTime)`
  ${baseStyles}
`;

export const CheckCircleIcon = styled(MUICheckCircleIcon)`
  ${baseStyles}
`;

export const DateRangeIcon = styled(MUIDateRange)`
  ${baseStyles}
`;

export const SwapIcon = styled(MUISwapIcon)`
  ${baseStyles}
`;

export const DoneIcon = styled(MUIDoneIcon)`
  ${baseStyles}
`;

export const CloseIcon = styled(MUICloseIcon)`
  ${baseStyles}
`;

export const WalletIcon = styled(MUIWalletIcon)`
  ${baseStyles}
`;

export const CheckIcon = styled(MUICheckIcon)`
  ${baseStyles}
`;

export const AccountIcon = styled(MUIAccountIcon)`
  ${baseStyles}
`;

export const UsersIcon = styled(MUIUsersIcon)`
  ${baseStyles}
`;

export const DashboardIcon = styled(MUIDashboardIcon)`
  ${baseStyles}
`;

export const ArchiveIcon = styled(MUIArchiveIcon)`
  ${baseStyles}
`;

export const LinkIcon = styled(MUILinkIcon)`
  ${baseStyles}
`;

export const PaymentIcon = styled(MUIPaymentIcon)`
  ${baseStyles}
`;

export const SaveIcon = styled(MUISaveIcon)`
  ${baseStyles}
`;

export const SettingsIcon = styled(MUISettingsIcon)`
  ${baseStyles}
`;

export const MoneyIcon = styled(MUIMoneyIcon)`
  ${baseStyles}
`;

export const ArrowBackIcon = styled(MUIArrowBackIcon)`
  ${baseStyles}
`;

export const ArrowForwardIcon = styled(MUIArrowForwardIcon)`
  ${baseStyles}
`;

export const InfoIcon = styled(MUIInfoIcon)`
  ${baseStyles}
`;

export const WarningIcon = styled(MUIWarningIcon)`
  ${baseStyles}
`;

export const HelpIcon = styled(MUIHelpIcon)`
  ${baseStyles}
`;

export const UpdateIcon = styled(MUIUpdateIcon)`
  ${baseStyles}
`;
