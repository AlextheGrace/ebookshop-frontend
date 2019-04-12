import React, { Component } from 'react';
import { Header } from './layout';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
	img: {}
};

class Authors extends Component {
	constructor(props, context) {
		super(props);
	}
	render() {
		const { classes } = this.props;
		return (
			<div className="Authors">
				<Grid container spacing={32} style={{ padding: 40 }}>
					{/* authors */}

					<Grid item xs={4}>
						<h3>Daniel Alexander</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202885/danielalexander.jpg"
							alt="daniel alexander"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							Daniel Alexander was a roadie and stage manager working in theatre and touring with rock and
							roll bands from the 60s until retiring from the music business in 1983
						</p>
						<p>Current whereabouts unknown.</p>
					</Grid>

					<Grid item xs={4}>
						<h3>Ray Meddis</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202885/Raymeddis.jpg"
							alt="Ray Meddis"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							Ray Meddis is an Emeritus Professor at the University of Essex were he is currently the
							Director of the Hearing Research laboratory.
						</p>
					</Grid>

					<Grid item xs={4}>
						<h3>Roger Grace</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202884/RogerGrace.jpg"
							alt="Roger Grace"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							Roger Grace received his PhD from University College London and has spent more than 15 years
							as a Lecturer in Palaeolithic Archaeology. He has recently retired from his position as
							Computer Officer in the Psychology Dept. University of Essex. see personal website
						</p>
					</Grid>

					<Grid item xs={4}>
						<h3>John Lord</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202885/johnLord.jpg"
							alt="daniel alexander"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							John Lord has been a professional flint knapper for over 25 years. He has given many
							demonstrations in museums, and for other organisations, as well as being involved with
							academic projects concerned with the understanding of knapping techniques and producing
							replicas of stone age tools.He conducts course at his base in Norfolk. see
							http://www.flintknapping.co.uk
						</p>
					</Grid>

					<Grid item xs={4}>
						<h3>Esmée Attema & David Ewing</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202884/EmseeDavid.jpg"
							alt="daniel alexander"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							Esmée Attema is a student at the University of Sheffield where she is currently studying for
							her MA in Public Humanities. David Ewing is a student at the University of Sheffield where
							he is currently studying for his MA in Public Humanities. In his spare time he writes for
							and edits Now Then Manchester.
						</p>
					</Grid>

					<Grid item xs={4}>
						<h3>Enid Hibbert & Pamela Finch</h3>
						<img
							className="books"
							src="https://res.cloudinary.com/ikarus-books/image/upload/v1554202885/EnidPamela.jpg"
							alt="daniel alexander"
						/>
					</Grid>
					<Grid item xs={8}>
						<p>
							Enid Hibbert is a retired teacher whose family came to Creswell 100 years ago to find work
							at the Colliery. She has been interested in archaeology and social history for many years
							and is the joint secretary of the Elmton with Creswell Local History Group. She has been
							involved in research of both villages and their people. This has resulted in the publication
							of several booklets about this quiet part of Derbyshire. Pamela Finch is a local amateur
							archaeologist and historian who has lived in Elmton for nearly 60 years. Her collection of
							flints, chert and arrow heads found when field walking is now in the care of Creswell Crags
							Museum. She is a joint secretary of the Elmton with Creswell Local History Group and has
							been involved in research of the villages for the various booklets produced for the group.
						</p>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(styles)(Authors);
