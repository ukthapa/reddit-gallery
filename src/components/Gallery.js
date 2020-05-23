import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Gallery extends Component {
	render() {
		return (
			<Card className="">
				<div className="">
					<CardContent className="">
						<Typography component="h5" variant="h5">
							Image Title
						</Typography>
					</CardContent>
				</div>
				<CardMedia
					className=""
					image="/static/images/cards/live-from-space.jpg"
					title="Live from space album cover"
				/>
			</Card>
		)
	}
}

export default Gallery
