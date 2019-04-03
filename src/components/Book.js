import React, { Component } from 'react';
import { Header } from './layout'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {},
	GridContainer: {
		maxWidth: 50
	},
	Grid: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	},
	Featured: {
		maxWidth: 800,
		maxHeight: 300
	},
	bookItem: {
		maxWidth: 200,
		maxHeight: 300,
		shadowOffset:{  width: 10,  height: 10,  },
		shadowColor: 'black',
		shadowOpacity: 1.0,
	}
};


class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/books/${this.props.match.params.title}`)
      .then((res) => {
        console.log(res);
        this.setState({book: res.data})
      })
    console.table(this.props.match.params.title);
  };
  render() {
    const { classes } = this.props;
    const { book } = this.state;
    return (
      <div className="Book">
      <Header />
      <Grid container spacing={16} style={{ padding: 40 }}>
          <Grid item xs={4} className={classes.Grid} >
						<img
							src={book.img}
							alt="flintknapping"
						/>
					</Grid>
          <Grid item xs={4} >
            <p>{book.description}</p>
					</Grid>

          <Grid item xs={4} >
              Buy
					</Grid>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Book);
