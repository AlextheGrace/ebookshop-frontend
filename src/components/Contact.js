import React, { Component } from 'react';
import { Header } from './layout';
import Grid from '@material-ui/core/Grid';

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className="Contact">
				<Grid container spacing={24} style={{ padding: 40 }}>
					Contact
				</Grid>
			</div>
		);
	}
}

export default Contact;
