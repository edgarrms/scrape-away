import axios from 'axios';

export default {
	findAllWhereUnsaved: () => {
		return axios.get('/api/articles');
	},
	findAllWhereSaved: () => {
		return axios.get('/api/articles/saved');
	},
	findOneWhereUnsaved: articleId => {
		return axios.get(`/api/articles/${articleId}`);
	},
	saveArticle: articleId => {
		return axios.put(`/api/articles/${articleId}`);
	},
	scrapeArticles: () => {
		return axios.post('/api/articles');
	}
};
