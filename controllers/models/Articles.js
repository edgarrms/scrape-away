const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create the article schema
const articleSchema = new Schema({
	heading: String,
	info: String,
	link: String,
	isSaved: {
		type: Boolean,
		default: false
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Comments'
		}
	]
});

//create the article model using the schema that we imported
const Articles = mongoose.model('Articles', articleSchema);

//export our model
module.exports = Articles;
