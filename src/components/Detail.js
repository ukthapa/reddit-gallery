import React, { Component } from 'react';
import { DataContextConsumer } from '../contexts/DataContext';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Back from "./Back";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from "@material-ui/core";

const bodyBgColor = {
	bgcolor: '#f3f3f3',
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class Detail extends Component {
	render() {
		return (
			<Box {...bodyBgColor} pt={14}  pb={8} px={3}>
				<Back />
				<Container width={1}>
					<Grid item container  spacing={2}>
						<DataContextConsumer>
							{value => {
								const{title, author, description, score, totalAwards, imageURL} = value.detailInfo;
								return (
									<Grid item xs={12}>
										<Box variant="outlined" p={4} boxShadow={3} borderRadius={10} bgcolor="white">
											<Grid item container  spacing={2}>
												<Grid item xs={12} md={6}>
													<img src={imageURL} alt={title} width="100%" height="auto"/>
												</Grid>
												<Grid item xs={12} md={6}>
												<MuiThemeProvider theme={theme}>
													<Typography component="h1" variant="h3" gutterBottom>
														{ title }
													</Typography>
													<Typography variant="subtitle2" gutterBottom>
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
												</MuiThemeProvider>
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
