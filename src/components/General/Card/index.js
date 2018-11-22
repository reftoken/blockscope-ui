import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import * as classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import CardWrapper from './CardWrapper';
import CardActions from '../CardActions';

const propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  headerRender: PropTypes.func
};

const defaultProps = {
  headerRender: () => {}
};

class Card extends Component {
  state = {
    collapsed: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ collapsed: !state.collapsed }));
  };

  render() {
    const { classes, children, headerRender } = this.props;
    return (
      <CardWrapper>
        <CardActions
          onClick={this.handleExpandClick}
          className={classes.actions}
          disableActionSpacing
        >
          {headerRender()}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.collapsed
            })}
            aria-expanded={this.state.collapsed}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.collapsed} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </CardWrapper>
    );
  }
}

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default withStyles(styles)(Card);
