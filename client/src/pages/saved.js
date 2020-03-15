import React, { useEffect, useState } from 'react';
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

const Saved = () => {
	const classes = useStyles();

	const [savedArticles, setSavedArticles] = useState([]);

	useEffect(() => {
		API.findAllWhereSaved().then(responseSavedArticles => {
			setSavedArticles(responseSavedArticles.data);
		});
	}, []);

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{savedArticles.length !== 0 ? (
					<Grid item xs={12}>
						{savedArticles.map(a => {
							return <Card articleObj={a} />;
						})}
					</Grid>
				) : (
					<p>You have no articles</p>
				)}
			</Grid>
		</div>
	);
};

export default Saved;
