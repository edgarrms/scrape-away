const app = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');

app.use('/api', apiRoutes);

//if no api routes are hit, send the react app
app.use((req, res) => {
	res.sendFile(path.join(__dirname), '../client/build/index.html');
});

module.exports = app;
