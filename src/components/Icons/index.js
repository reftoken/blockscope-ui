import styled, { css } from 'styled-components';
import {
  Dashboard as MUIDashboardIcon,
  AccountCircle as MUIAccountIcon,
  Archive as MUIArchiveIcon,
  Link as MUILinkIcon,
  Payment as MUIPaymentIcon,
  Settings as MUISettingsIcon,
  Save as MUISaveIcon,
  AttachMoney as MUIMoneyIcon,
  AccountBalanceWallet as MUIWalletIcon,
  Check as MUICheckIcon,
  Done as MUIDoneIcon,
  Close as MUICloseIcon,
  SupervisorAccount as MUIUsersIcon,
  ArrowBack as MUIArrowBackIcon,
  ArrowForward as MUIArrowForwardIcon,
  Info as MUIInfoIcon,
  Warning as MUIWarningIcon,
  Help as MUIHelpIcon,
  Update as MUIUpdateIcon,
  SwapHorizontalCircle as MUISwapIcon,
  DateRange as MUIDateRange,
  CheckCircle as MUICheckCircleIcon,
  AccountBalance as MUIAccountBalance,
  AccessTime as MUIAccessTime,
  FileCopy as MUIFile
} from '@material-ui/icons';

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
