const app = require('express').Router();
const commentsController = require('../../controllers/commentsController');

app.route('/:articleId').post(commentsController.createComment);

module.exports = app;
