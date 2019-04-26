import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import axios from 'axios';
import './books.css';

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

class Books extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			featuredBooks: [],
			books: [
				{ title: 'something about flints', author: 'Roger Grace' },
				{ title: 'something about flints', author: 'Roger Grace' },
				{ title: 'something about lifting speakers', author: 'Daniel Alexander' }
			]
		};
	}

	componentDidMount() {
		axios
			.get(process.env.REACT_APP_API_URL + '/books')
			.then(res => {
				this.setState({ books: res.data });
			})
			.catch(error => {
				console.log(`error getting books: ${error}`);
			});

		axios
			.get(process.env.REACT_APP_API_URL + '/books/latest')
			.then(res => {
				this.setState({ featuredBooks: res.data });
			})
			.catch(error => {
				console.log(`error getting books: ${error}`);
			});
	}

	render() {
		const { classes } = this.props;
		const { books, featuredBooks } = this.state;

		return (
			<div className={classes.root}>
				<Grid container spacing={16} style={{ padding: 40 }}>
					<Grid item xs={12} className={classes.Grid}>
						<img
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554314839/ikaruslogocropped2.png"
							alt="ikarus logo"
						/>
					</Grid>
					<Grid item xs={12} className={classes.Grid}>
						<h1>Latest publications</h1>
					</Grid>

					{featuredBooks.map(book => (
						<Grid item xs={12} sm={6} md={4} className={classes.Grid}>
							<Link to={`/books/${book._id}`}>
								<img className="books" src={book.img} alt={book.title} />
							</Link>
						</Grid>
					))}

					<Grid container spacing={16} style={{ padding: 20 }}>
						<Grid item justify="flex-start" xs={12} className={classes.Grid}>
							<h1>Books</h1>
						</Grid>
						{books.map(book => (
							<Grid item xs={12} sm={6} md={4} className={classes.Grid}>
								<Link to={`/books/${book._id}`}>
									<LazyLoadImage className="books" src={book.img} alt={book.title} effect="opacity" />
								</Link>
							</Grid>
						))}
					</Grid>
				</Grid>
			</div>
		);
	}
}
Books.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Books);
