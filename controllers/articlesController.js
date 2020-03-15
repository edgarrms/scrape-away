const db = require('../models');
const scrape = require('../scripts/scrape');

module.exports = {
	findAllArticles: (req, res) => {
		db.Articles.find({ isSaved: false })
			.populate('comments')
			.then(resultArticles => {
				res.json(resultArticles);
			});
	},

	findAllWhereSaved: (req, res) => {
		db.Articles.find({ isSaved: true }).then(resultArticles => {
			res.json(resultArticles);
		});
	},

	findOneWhereUnsaved: (req, res) => {
		db.Articles.findOne({ _id: req.params.articleId, isSaved: false })
			.populate('comments')
			.then(resultArticles => {
				res.json(resultArticles);
			});
	},

	createArticle: (req, res) => {
		//grab all the articles
		scrape.then(scrapedArticles => {
			//once we have the articles, we insert them into the database
			db.Articles.insertMany(scrapedArticles).then(insertedArticles => {
				res.json(insertedArticles);
			});
		});
	},
	saveArticle: (req, res) => {
		db.Articles.updateOne(
			{
				_id: req.params.articleId
			},
			{
				isSaved: true
			}
		).then(updatedArticle => {
			res.json(updatedArticle);
		});
	}
};
