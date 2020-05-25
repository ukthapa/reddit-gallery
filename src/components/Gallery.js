import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardGallery from './CardGallery';
// import Filter from './Filter';
import { DataContextConsumer } from '../contexts/DataContext';

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};
class Gallery extends Component {
	// static contextType = DataContext;
	render() {
		// const { isLoading, dataList } = this.context;
		return (
			<Box {...bodyBgColor} pt={14}  pb={6}>
				<Container width={1}>
					{/* <Filter /> */}
					<Grid item container  spacing={2}>
						<DataContextConsumer>
							{value => {
								return !value.isLoading ? (
									value.dataList.map(image => {
										return <CardGallery key={image.id} imageDetail={image} />
									})
									) : (
										<Grid item xs={12}>Loading....</Grid>
									)
								}
							}
						</DataContextConsumer>
					</Grid>
				</Container>
			</Box>
		)
	}
}

export default Gallery
