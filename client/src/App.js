import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Homepage from './pages/index.js';
import Saved from './pages/saved';

//components
import Navbar from './components/Navbar';

//API
import API from './utils/API';

function App() {
	const [articles, setArticles] = useState([]);

	const handleScrape = () => {
		API.scrapeArticles().then(responseScrappedArticles => {
			API.findAllWhereUnsaved().then(responseArticles => {
				setArticles(responseArticles.data);
			});
		});
	};

	const handleSaveArticle = articleId => {
		API.saveArticle(articleId).then(savedArticle => {
			API.findAllWhereUnsaved().then(responseArticles => {
				setArticles(responseArticles.data);
			});
		});
	};

	useEffect(() => {
		API.findAllWhereUnsaved().then(responseArticles => {
			setArticles(responseArticles.data);
		});
	}, []);

	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Navbar handleScrape={handleScrape} />
			<Switch>
				<Route exact path='/'>
					<Homepage articles={articles} handleSaveArticle={handleSaveArticle} />
				</Route>
				<Route exact path='/saved'>
					<Saved />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
