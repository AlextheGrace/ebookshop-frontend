import React, { Component } from 'react';
import { Header } from './components/layout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import {} from './components'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Main">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Books}/>
          <Route path="/authors" component={Authors}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/books/:id" component={Book}/>
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
