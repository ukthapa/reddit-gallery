import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardGallery from './CardGallery';
import Filter from './Filter';
import { DataContextConsumer } from '../contexts/DataContext';

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};
class Gallery extends Component {
		render(){
			return (
				<Box {...bodyBgColor} pt={14}  pb={6}>
					<Container width={1}>
						<DataContextConsumer>
						{value => {
							const {isLoading, dataList, updateFilter} = value
							return (
								<React.Fragment>
									<Filter updateFilter={updateFilter} />
									<Grid item container  spacing={2}>
										{!isLoading ? (
											dataList.map(image => {
												return <CardGallery key={image.id} imageDetail={image} />
											})
											) : (
												<Grid item xs={12}>Loading....</Grid>
											)
										}
									</Grid>
								</React.Fragment>
							)
						}}
						</DataContextConsumer>
					</Container>
				</Box>
			)
		}
}

export default Gallery
