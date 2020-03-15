import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

//components
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';

//API
import API from '../utils/API';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '40px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));

const Homepage = props => {
	const classes = useStyles();

	const [selectedArticle, setSelectedArticle] = useState({ id: '', heading: '', info: '', link: '' });
	const [isSelectedArticle, setIsSelectedArticle] = useState(false);

	const handleGetSelectedArticle = articleId => {
		API.findOneWhereUnsaved(articleId).then(responseSelectedArticle => {
			setSelectedArticle(responseSelectedArticle.data);
			setIsSelectedArticle(true);
		});
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{isSelectedArticle === true ? (
					<>
						<Card articleObj={selectedArticle} />

						{selectedArticle.comments.map(s => {
							return <Card isSelectedArticle={isSelectedArticle} comment={s.comment} />;
						})}
					</>
				) : (
					<>
						{props.articles.length !== 0 ? (
							<Grid item xs={12}>
								{props.articles.map(a => {
									return <Card key={a._id} poop='adsf' handleGetSelectedArticle={handleGetSelectedArticle} handleSaveArticle={props.handleSaveArticle} articleObj={a} />;
								})}
							</Grid>
						) : (
							<p>You have no articles</p>
						)}
					</>
				)}
			</Grid>
		</div>
	);
};

export default Homepage;
