import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { shadows } from '@material-ui/system';
import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import discover from 'payment-icons/min/flat/discover.svg';

const styles = {
	root: {
		flexGrow: 1,
		marginTop: 30,
		padding: '8px 16px 16px 0',
		color: 'black',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowColor: '#B9B9B9',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
		backgroundColor: '#F1F1F1'
	},
	Grid: {
		display: 'flex',
		justifyContent: 'center'
	},
	cards: {
		height: '2rem',
		margin: '.5rem'
	}
};

class Footer extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>

				<Grid container spacing={24} boxShadow={2} className={classes.GridContainer}>
					<Grid item xs={12} sm={12} className={classes.Grid}>
						<img className={classes.cards} alt="visa" src={visa} />
						<img className={classes.cards} alt="mastercard" src={mastercard} />
						<img className={classes.cards} alt="discover" src={discover} />
					</Grid>
					<Grid item xs={12} sm={12} className={classes.Grid}>
						For enquiries contact: <a href="mailto:ikarusbooks@gmail.com">ikarusbooks@gmail.com</a>
					</Grid>
					<Grid item xs={12} sm={12} className={classes.Grid}>
						©2019 ikarus books
					</Grid>
				</Grid>
			</div>
		);
	}
}
Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
