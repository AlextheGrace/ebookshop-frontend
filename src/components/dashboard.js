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
import { connect } from 'react-redux';
import { logoutAdmin } from '../reducers/auth';

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

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      books: [],
    };
    this.logout = this.logout.bind(this);
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
  
  logout() {
    this.props.dispatch(logoutAdmin());

  }

	render() {
		const { classes, auth } = this.props;
    const { books } = this.state;
		return (
			<div>	
        <Button fullWidth variant="contained" onClick={this.logout} className={classes.submit}>
					Logout
				</Button>
				<div>{auth.user.username}</div>
				<Button fullWidth variant="contained" className={classes.submit}>
					Publish new book
				</Button>
				<Paper className={classes.root}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell align="left">Title</TableCell>
								<TableCell align="center">published</TableCell>
								<TableCell align="center">price</TableCell>
								<TableCell align="center">options</TableCell>
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


const mapStateToProps = ({ auth, user }) => ({
  auth,
  user
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));

