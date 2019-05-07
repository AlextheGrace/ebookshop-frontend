import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { shadows } from '@material-ui/system';
const styles = {
	root: {
		flexGrow: 1,
		marginTop: 30,
		padding: '8px 16px 16px 0',
		color: 'black',
			shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		
		elevation: 6,	
		backgroundColor : "#0000"
	},
	// Grid: {
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	backgroundColor: 'white'
	// },
	// GridContainer: {
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 3,
	// 	},
	// 	shadowOpacity: 0.27,
	// 	shadowRadius: 4.65,
		
	// 	elevation: 6,		
	// }
};

class Footer extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div  className={classes.root}>
				<Grid container spacing={24}  boxShadow={2}  className={classes.GridContainer}>
					<Grid item xs={12} sm={4} className={classes.Grid}>
						For enquiries contact: ikarusbooks@gmail.com
					</Grid>
					<Grid item xs={12} sm={4} className={classes.Grid}>
						©2019 ikarus books
					</Grid>
					<Grid item xs={12} sm={4} className={classes.Grid}>
						Contact us at ikarusbooks@gmail.com
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
