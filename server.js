'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

var server = require('http').Server(app);
var io = require('socket.io').listen(server);

io.on('connection', function(socket)
{
	socket.on('save', function(data)
	{
		var mod = data.module;
		var entry = data.data;
		var url = data.url;

		io.emit('save-' + mod, entry);
	});

	socket.on('update', function(data)
	{
		var mod = data.module;
		var entry = data.data;
		var url = data.url;

		io.emit('update-' + mod, entry);
	});

	socket.on('remove', function(data)
	{
		var mod = data.module;
		var entry = data.data;
		var url = data.url;

		io.emit('remove-' + mod, entry);
	});
});

// Start the app by listening on <port>
server.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);
