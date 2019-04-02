import React, { Component } from 'react';
import { Header } from './layout'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {

  },
  GridContainer: {
    maxWidth: 50,
  },
  Grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
  
  }
};

class Authors extends Component {
	constructor(props, context) {
		super(props);
	}
  render() {
    const { classes } = this.props;
    return (
      <div className="Authors">
        <Header></Header>
        <Grid container spacing={32} style={{padding: 40}}>

        <Grid item xs={6} className={classes.Grid}>
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid}>
          {/* <img src={require("./assets/img/chaineoperatore.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>
 
        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>
 
        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

        <Grid item xs={6} className={classes.Grid} >
          {/* <img src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img> */}
        </Grid>

      </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Authors);
