import React  from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
	root: {
	  display: 'flex',
	},
	details: {
	  display: 'flex',
	  flexDirection: 'column',
	  flexGrow: 1,
	},
	content: {
	  flex: '1 0 auto',
	},
	cover: {
	  width: 200,
	  height: 200
	},
  }));


function CardGallery(imageDetail) {
	const classes = useStyles();
	return (
		<Link
			variant="body2"
			onClick={() => {
				console.info("I'm a button.");
			}}
		>
			<Card className={classes.root}>
				<CardMedia
					className={classes.cover}
					image="images/live-from-space.jpg"
					title="Live from space album cover"
				/>
				<div className={classes.details}>
					<CardContent className="classes.content">
						<Typography component="h2" variant="h6">
							{/* {imageDetail.id} */}
						</Typography>
					</CardContent>
				</div>
			</Card>
		</Link>
	)
}

export default CardGallery
