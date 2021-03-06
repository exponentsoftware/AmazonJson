const offerRoutes = (app, fs) => {
	// variables
	const dataPath = './data/amazon.json';

	// READ
	app.get('/offers', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data));
		});
	});
};

module.exports = offerRoutes;
