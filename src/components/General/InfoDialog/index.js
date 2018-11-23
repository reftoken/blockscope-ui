import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { InfoIcon, CheckIcon } from '../../Icons';
import { Wrapper } from '../../Layout';
import defaultTheme from '../../../constants/defaultTheme';

const propTypes = {
  content: PropTypes.object.isRequired
};

class InfoDialog extends Component {
  state = {
    open: false
  };

  toggleDialog = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  render() {
    const { content, theme } = this.props;
    const { open } = this.state;
    return (
      <Wrapper>
        <Tooltip title="Click to show info" placement="top">
          <IconButton onClick={this.toggleDialog} aria-label="Info">
            <InfoIcon fill={theme.secondary} />
          </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={this.toggleDialog}
          aria-labelledby="info-dialog"
        >
          <Wrapper>{content}</Wrapper>
          <Button
            color="primary"
            onClick={this.toggleDialog}
            variant="outlined"
          >
            <CheckIcon fill={theme.secondary} />
            OK
          </Button>
        </Dialog>
      </Wrapper>
    );
  }
}

InfoDialog.defaultProps = defaultTheme;
InfoDialog.propTypes = propTypes;

export default InfoDialog;
