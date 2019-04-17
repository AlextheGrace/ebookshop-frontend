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
		borderTop: 'solid 3px black',
		padding: '8px 16px 16px 0'
	}
};

class Footer extends React.Component {
	render() {
		const { classes } = this.props;

		return <div className={classes.root}>
			<Grid container spacing={24}>

			</Grid> </div>;
	}
}
Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
