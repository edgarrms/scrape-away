const app = require('express').Router();
const articleController = require('../../controllers/articlesController');

app
	.route('/')
	.get(articleController.findAllArticles)
	.post(articleController.createArticle)
	.put(articleController.saveArticle)
	.delete();

app.route('/saved').get(articleController.findAllWhereSaved);

app
	.route('/:articleId')
	.get(articleController.findOneWhereUnsaved)
	.put(articleController.saveArticle);

module.exports = app;
