const db = require('../models');

module.exports = {
	createComment: (req, res) => {
		db.Comments.create({ comment: req.body.comment }).then(insertedComment => {
			const updatedData = { $push: { comments: insertedComment._id } };
			db.Articles.findByIdAndUpdate(req.params.articleId, updatedData).then(updatedArticle => {
				res.json(updatedArticle);
			});
		});
	}
};
