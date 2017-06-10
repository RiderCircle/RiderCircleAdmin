'use strict';


module.exports = function(app) {
	app.route('/test')
		.get(function (request, response) {
			response.json([{ name: 'Beverages' }, { name: 'Condiments' }]);
		});
};