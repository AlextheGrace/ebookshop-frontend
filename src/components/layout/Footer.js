import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { isAbsolute } from 'path';

const styles = {
	root: {
		flexGrow: 1,
		marginTop: 30,
		position: 'absolute',
		width: '100',
		height: '100'
	}
};

class Footer extends React.Component {
	render() {
		const { classes } = this.props;

		return <div className={classes.root}>Footer</div>;
	}
}
Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
