import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardGallery from './CardGallery';

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};
class Gallery extends Component {
	state = {
		dataList: [],
		isLoading: true
	}

	getData() {
		axios
			.get("https://www.reddit.com/r/pics/.json?jsonp=")
			.then(response => response.data.data.children.map(imageinfo => ({
				id: imageinfo.data.id,
				title: imageinfo.data.title,
				thumbnail: imageinfo.data.thumbnail,
				thumbnailWidth: imageinfo.data.thumbnail_width,
				thumbnailHeight: imageinfo.data.thumbnail_height,
				image: imageinfo.data.url,
				author: imageinfo.data.author,
				description: imageinfo.data.selfttext,
				score: imageinfo.data.score,
				totalAwards: imageinfo.data.total_awards_received,
				awardings: imageinfo.data.all_awardings
				}))).then(dataList => {
				this.setState({
					dataList,
					isLoading: false
				})
			})
			.catch(error => this.setState({ error, isLoading: false }));
	  }

	componentDidMount() {
		this.getData();
	}

	render() {
		const { isLoading, dataList } = this.state;
		return (
			<Box {...bodyBgColor} pt={14}  pb={6}>
				<Container width={1}>
					<Grid item container  spacing={2}>
						{!isLoading ? (
							dataList.map(data => (
								<Grid item xs={12} sm={6} md={4} key={data.id}>
									<CardGallery imageDetail={data.id} />
								</Grid>
							))
						): (
							<Grid item xs={12}>
								Loading....
							</Grid>
						)}
					</Grid>

				</Container>
			</Box>
		)
	}
}

export default Gallery
