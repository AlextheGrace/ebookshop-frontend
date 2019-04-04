import React, { Component } from 'react';
import { Header } from './layout';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StripeCheckout from 'react-stripe-checkout';

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
		shadowOffset: { width: 10, height: 10 },
		shadowColor: 'black',
		shadowOpacity: 1.0
	}
};

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {}
		};
  }
  
  onToken = (token) => {
    const body = {
      amount: 666,
      token: token
    }
    axios
    .post("http://localhost:5000/checkout", body)
    .then(res => {
      console.log(res);
      alert("Payment Success");
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
};
  }


	componentDidMount() {
		axios.get(`http://localhost:5000/api/books/${this.props.match.params.title}`).then(res => {
			console.log(res);
			this.setState({ book: res.data });
		});
		console.table(this.props.match.params.title);
	}
	render() {
		const { classes } = this.props;
		const { book } = this.state;
		return (
			<div className="Book">
				<Header />
				<Grid container spacing={16} style={{ padding: 40 }}>
					<Grid item xs={4} className={classes.Grid}>
						<img src={book.img} alt="flintknapping" />
					</Grid>
					<Grid item xs={4}>
						<p>{book.description}</p>
						<Button variant="contained" href="#contained-buttons" className={classes.button}>
							Buy
						</Button>
						<StripeCheckout
							amount={book.price}
							billingAddress
							description={book.title}
              image="https://res.cloudinary.com/ikarus-books/image/upload/v1554314839/ikaruslogocropped2.png"
              token={this.onToken}
							locale="auto"
							name="Ikarus Books"
							stripeKey="pk_test_1ZH6zDjZwu9QY27YC61eaA1Y00SflpwI85"
							zipCode
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Book);
