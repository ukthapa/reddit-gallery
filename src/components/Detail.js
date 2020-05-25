import React, { Component } from 'react';
import { DataContextConsumer } from '../contexts/DataContext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Back from "./Back";
import Typography from '@material-ui/core/Typography';

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};
class Detail extends Component {
	render() {
		return (
			<Box {...bodyBgColor} pt={11}  pb={6} px={3}>
				<Back />
				<Container width={1}>
					<Grid item container  spacing={2}>
						<DataContextConsumer>
							{value => {
								const{id, title, author, description, score, totalAwards, awardings, imageURL} = value.detailInfo;
								return (
									<Grid item xs={12}>
										<Box variant="outlined" p={4} boxShadow={3} borderRadius={10} bgcolor="white">
											<Grid item container  spacing={2}>
												<Grid item xs={12} md={6}>
													<img src={imageURL} alt={title} width="100%" height="auto"/>
												</Grid>
												<Grid item xs={12} md={6}>
												<Typography component="h1" variant="h4">
													{ title }
												</Typography>
												<Typography>
													{ description }
												</Typography>
												<Typography >
													<strong>Author: </strong>{ author }
												</Typography>
												<Typography >
													<strong>Score: </strong>{ score }
												</Typography>
												<Typography >
													<strong>Total Awards: </strong>{ totalAwards }
												</Typography>
												</Grid>
											</Grid>
										</Box>
									</Grid>
								)
							}}
						</DataContextConsumer>
					</Grid>
				</Container>
			</Box>
		)
	}
}


export default Detail
