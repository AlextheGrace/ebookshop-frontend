import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Header } from './layout'
import { Book } from './Books';
import './books.css';

 

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
  Featured: {
    maxWidth: 800,
    maxHeight: 300
  },
  bookItem: {
    maxWidth: 200,
    maxHeight: 300
  }
};



class Books extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
      featuredBooks: [],
			books: [{ title: "something about flints", author:"Roger Grace"  },{ title: "something about flints", author:"Roger Grace"  },{ title: "something about lifting speakers", author:"Daniel Alexander"  } ]
		};
	}

  render() {
    const { classes } = this.props;
    const { stuff } = this.state;
  


return (
  <div className={classes.root}>
  <Header></Header>

  <Grid container spacing={16} style={{padding: 40}}>
        <Grid item xs={12} className={classes.Grid}>
          <h1>Latest publications</h1>
        </Grid>
        <Grid item xs={4} className={classes.Grid}>
          <img  className={classes.Featured} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>

        <Grid item xs={4} className={classes.Grid}>
          <img  className={classes.Featured} src={require("./assets/img/chaineoperatore.jpg")} alt="flintknapping"></img>
        </Grid>

        <Grid item xs={4} className={classes.Grid}>
          <img  className={classes.Featured} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>


  <Grid container spacing={24} style={{padding: 20}}>
        <Grid item xs={12} className={classes.Grid}>
          <h1>Books</h1>
        </Grid>

        <Grid item xs={4} className={classes.Grid} >
          <img className={classes.bookItem} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>
 
        <Grid item xs={4} className={classes.Grid} >
          <img className={classes.bookItem} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>

        <Grid item xs={4} className={classes.Grid} >
          <img  className={classes.bookItem} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>

        <Grid item xs={4} className={classes.Grid} >
          <img className={classes.bookItem}  src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>
 
        <Grid item xs={4} className={classes.Grid} >
          <img className={classes.bookItem}  src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>

        <Grid item xs={4} className={classes.Grid} >
          <img  className={classes.bookItem} src={require("./assets/img/flintknapping.jpg")} alt="flintknapping"></img>
        </Grid>
      </Grid>
    </Grid>
  </div>
);
}
}
Books.propTypes = {
  classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(Books);

