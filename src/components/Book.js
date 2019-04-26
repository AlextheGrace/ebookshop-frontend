import React, { Component } from 'react';
import { Header, Footer } from './layout';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StripeCheckout from 'react-stripe-checkout';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import './books.css';

const styles = {
	root: {},
	GridContainer: {
		maxWidth: 50,
		display: 'flex',
		justifyContent: 'center'
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

	onToken = token => {

		const price = this.state.book.price * 100;
		const body = {
			amount: price,
			token: token
		};
		axios
			.post(`${process.env.REACT_APP_API_URL}/books/${this.state.book._id}/checkout`, body)
			.then(res => {
				console.log(res);
				alert('Payment Success');
			})
			.catch(error => {
				console.log('Payment Error: ', error);
				alert('Payment Error');
			});
	};

	componentDidMount() {
		axios.get(`${process.env.REACT_APP_API_URL}/books/${this.props.match.params.title}`).then(res => {
			console.log(res);
			this.setState({ book: res.data });
		});
		
	}
	render() {
		const { classes } = this.props;
		const { book } = this.state;
		const onSuccess = payment => {
			// Congratulation, it came here means everything's fine!
			console.log('The payment was succeeded!', payment);
			// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
			//route to
		};

		const onCancel = data => {
			// User pressed "cancel" or close Paypal's popup!
			console.log('The payment was cancelled!', data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		};

		const onError = err => {
			// The main Paypal's script cannot be loaded or somethings block the loading of that script!
			console.log('Error!', err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		};

		let env = 'sandbox'; // you can set here to 'production' for production
		let currency = 'USD'; // or you can set this value from your props or state
		let total = book.price; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
			production: 'YOUR-PRODUCTION-APP-ID'
		};

		return (
			<div>
				<div className="Book">
					<Grid container spacing={16} justify="space-evenly" style={{ padding: 40 }}>
						<Grid item xs={12} sm={4} className={classes.Grid}>
							<img className="book" src={book.img} alt="flintknapping" />
						</Grid>
						<Grid item xs={12} sm={4}>
							<h2>{book.title}</h2>
							<p>{book.description}</p>
							<h4>Price: ${book.price}</h4>
							<div className="payment-options">
								<StripeCheckout
									amount={book.price * 100}
									billingAddress
									description={book.title}
									image="https://res.cloudinary.com/ikarus-books/image/upload/v1554314839/ikaruslogocropped2.png"
									token={this.onToken}
									locale="auto"
									name="Ikarus Books"
									stripeKey="pk_test_1ZH6zDjZwu9QY27YC61eaA1Y00SflpwI85"
									zipCode
									email
								/>

								<PaypalExpressBtn
									env={env}
									client={client}
									currency={currency}
									total={total}
									onError={onError}
									onSuccess={onSuccess}
									onCancel={onCancel}
								/>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Book);
