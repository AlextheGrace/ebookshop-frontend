import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
	root: {
		flexGrow: 1,
		marginTop: 30,
		boxShadowTop: 'solid 1px black',
		padding: '8px 16px 16px 0',
		background: 'black',
		color: 'white'
	}
};

class Footer extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container spacing={24}>

					<Grid item xs={12} sm={4}>
						for enquiries 
					</Grid>
					<Grid item xs={12} sm={4} >
						<Paper>footer 2</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Paper>footer 3</Paper>
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
