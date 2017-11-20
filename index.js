let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: config.channelId,
	channelSecret: config.channelSecret,
	channelAccessToken: config.channelAccessToken
});

const line = require('@line/bot-sdk');

const client = new line.Client({
	channelAccessToken: config.channelAccessToken
});
const msg = {
	type:'text',
	text:'Elderly Falling Down !!!!'
};

var userId = config.clientAppUserID;

client.pushMessage(userId,msg)
  then(() => {
  	console.log("Send: " + msg);
  })
  .catch((err) => {
  	// error handling
  });

bot.on('message', function(event) {
	// 把收到訊息的 event 印出來
	console.log(event);
});


const linebotParser = bot.parser(),
	app = express();
app.post('/webhook', linebotParser);

// 在 localhost 走 8080 port
let server = app.listen(process.env.PORT || 8080,function() {
	let port = server.address().port;
	console.log("My Line bot App running on port", port);
});



