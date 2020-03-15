import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar(props) {
	const classes = useStyles();

	//state that will keep track of whatever page i am on
	const [currentPage, setCurrentPage] = useState(window.location.pathname);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						News
					</Typography>
					{currentPage === '/' ? (
						<>
							<Button onClick={props.handleScrape} color='inherit'>
								Scrape
							</Button>
							<Button
								onClick={() => {
									setCurrentPage('/saved');
								}}
								component={Link}
								to='/saved'
								color='inherit'
							>
								Saved
							</Button>
						</>
					) : (
						<Button
							onClick={() => {
								setCurrentPage('/');
							}}
							component={Link}
							to='/'
							color='inherit'
						>
							Home
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
