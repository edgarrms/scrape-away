import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
		marginBottom: '40px'
	},
	media: {
		height: 140
	}
});

export default function MediaCard(props) {
	console.log(props);
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			{props.isSelectedArticle === true ? (
				<>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{props.comment}
						</Typography>
					</CardContent>
				</>
			) : (
				<>
					<CardActionArea>
						<Link href={props.articleObj.link} target='_blank'>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{props.articleObj.heading}
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									{props.articleObj.info}
								</Typography>
							</CardContent>
						</Link>
					</CardActionArea>
					<CardActions>
						<Button onClick={() => props.handleSaveArticle(props.articleObj._id)} size='small' color='primary'>
							Saved
						</Button>
						<Button
							onClick={() => {
								props.handleGetSelectedArticle(props.articleObj._id);
							}}
							size='small'
							color='primary'
						>
							Comment
						</Button>
					</CardActions>
				</>
			)}
		</Card>
	);
}
