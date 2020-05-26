import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { DataContextConsumer } from '../contexts/DataContext';

const useStyles = theme => ({
	link: {
		textDecoration: 'none',
		"&:hover": {
			textDecoration: 'none',
		}
	},
	root: {
	  display: 'flex',
	  alignItems: 'center',
	  transition: 'all .2s ease',
	  textDecoration: 'none',
	  "&:hover": {
		boxShadow: '1px 4px 12px #ccc',
		transform: 'translateY(-4px)',
		transition: 'all .2s ease'
	  },
	  cursor: 'pointer'
	},
	details: {
	  display: 'flex',
	  flex: 1
	},
	cover: {
	  width: 200,
	  height: 200,
	  flex: 1
	},
	header: {
		fontSize: '14px',
	}
  });

  class CardGallery extends Component {
	  render() {
		const {id, title, thumbnail } = this.props.imageDetail;
		const { classes } = this.props;
		return (
				<DataContextConsumer>
					{value => (
						<Grid item xs={12} sm={6} md={4} onClick={() =>
							value.handleDetail(id)
							}>
							<Link to={`/${id}`} className={classes.link}>
								<Card className={classes.root} variant="outlined">
									<CardMedia
										className={classes.cover}
										image={thumbnail}
										title= {title}
									/>
									<div className={classes.details}>
										<CardContent>
											<Typography component="h2" className={classes.header} >
												{ title }
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Link>
						</Grid>
					)}
				</DataContextConsumer>
		)
	  }
  }

export default withStyles(useStyles) (CardGallery)
