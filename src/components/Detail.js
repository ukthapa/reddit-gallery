import React, { Component } from 'react';
import { DataContextConsumer } from '../contexts/DataContext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Back from "./Back";
import { Link } from "react-router-dom";

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};
class Detail extends Component {
	render() {
		return (
			<Box {...bodyBgColor} pt={14}  pb={6} px={3}>
				<Back />
				<Container width={1}>
					<Grid item container  spacing={2}>
						<DataContextConsumer>
							{value => {
								const{id, title, author, description, score, totalAwards, awardings, imageURL} = value.detailInfo;
								return (
									<Grid item xs={12}>
										<Card variant="outlined" p={3}>
											{id}
										</Card>
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
