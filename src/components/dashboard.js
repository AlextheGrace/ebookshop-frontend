import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      books: [],
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
	}

	render() {
		const { classes } = this.props;
    const { books } = this.state;
		return (
			<div>
				<Button fullWidth variant="contained" className={classes.submit}>
					Publish new book
				</Button>
				<Paper className={classes.root}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell align="right">Title</TableCell>
								<TableCell align="right">published</TableCell>
								<TableCell align="right">price</TableCell>
								<TableCell align="right">options</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{books.map(book => (
								<TableRow key={book._id}>
									<TableCell component="th" scope="row">
										{book.title}
									</TableCell>
									<TableCell align="right">{book.publishedAt}</TableCell>
									<TableCell align="right">${book.price}</TableCell>
									<TableCell align="right"><Button>edit</Button><Button>delete</Button></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
