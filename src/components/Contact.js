import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Contact extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className="Contact">
				<Grid container spacing={24} style={{ padding: 40 }}>
					Contact for more information or problems with billing or supply of product.
				</Grid>
			</div>
		);
	}
}

export default Contact;
