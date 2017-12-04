
let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: 'channelId',
	channelSecret: 'channelSecret',
	channelAccessToken: 'channelAccessToken'
});

bot.on('message', function(event) {
	if(event.message.type = 'text') {
		var msg = event.message.text;
		var userID = event.source.userId;
		event.reply(userID + "：" + msg).then(function(data) {
			// sucess
			console.log(userID + " : " + msg);
		}).catch(function(error) {
			// error
			console.log('error');
		});

		client.once( "connect", function () {
    		console.log( 'Client: Connected to port 8000' );
    		client.emit( "LINE", "Hello World", function ( message ) {
        		console.log( 'Echo received: ', message );
        		client.disconnect();
    		} );
		} );
	}
});


const linebotParser = bot.parser(),
	app = express();
app.post('/webhook', linebotParser);

// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080,function() {
	let port = server.address().port;
	console.log("My Line bot App running on port", port);
});

// 主動發訊息給 Client App
setTimeout(function() {
	var get_userId = 'U63ecf035ad69cf2571e4322814f2c479';
	var sendMsg = "hello world";
	// linebot 傳送跌倒訊息
	bot.push(get_userId, [sendMsg]);
	console.log('userId: ' + get_userId);
	console.log('send: ' + sendMsg);
},100); 