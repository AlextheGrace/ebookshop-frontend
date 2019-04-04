import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
      flexGrow: 1,
      marginBottom: -10
    },
  };


class Footer extends React.Component {
    
render() {
  const { classes } = this.props;


  return (
    <div className={classes.root}>
   
    </div>
  );
}

}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Footer);