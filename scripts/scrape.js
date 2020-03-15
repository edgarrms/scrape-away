const cheerio = require('cheerio');
const axios = require('axios');

const scrape = new Promise((resolve, reject) => {
	//should return a promise
	axios.get('https://www.usatoday.com/tech/').then(response => {
		//load the entire web page into cheerio
		const $ = cheerio.load(response.data);

		//targetting the entire article section
		const articleSection = $('div.gnt_m:nth-child(2)');

		//grab all the articles off the page
		//cheerio returned an array of elements with this classname
		// const articleArray = $('.gnt_m_flm_a');

		//declare an array that will hold all the articles
		const articleArray = [];

		articleSection.find('.gnt_m_flm_a').each((i, currentArticle) => {
			//create an article obj
			const articleObj = {};

			articleObj.heading = $(currentArticle)
				.text()
				.trim();
			articleObj.info = $(currentArticle).attr('data-c-br');
			articleObj.link = 'https://www.usatoday.com' + $(currentArticle).attr('href');

			if (articleObj.heading && articleObj.info && articleObj.link) {
				articleArray.push(articleObj);
			}
		});

		resolve(articleArray);
	});
});

module.exports = scrape;
