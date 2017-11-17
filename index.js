let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: config.channelId,
	channelSecret: config.channelSecret,
	channelAccessToken: config.channelAccessToken
});
// 主動發訊息給 Client App
setTimeout(function() {
	var get_userId = config.clientAppUserID;
	var sendMsg = "test fuckyou";
	bot.push(get_userId, [sendMsg]);
	console.log('userId: ' + get_userId);
	console.log('send: ' + sendMsg);
},100); // 0.1 seconds

bot.on('message', function(event) {
	// 把收到訊息的 event 印出來
	// console.log(event);
	if(event.message.type === 'sticker') {
		event.reply("調皮搗蛋！！ 誰叫你傳貼圖的！！").then(function(data) {
			// sucess
			console.log(userID + " : [傳貼圖]");
		}).catch(function(error) {
		// error
			console.log('error');
		});
	}
	else if(event.message.type = 'text') {
		var msg = event.message.text;
		var userID = event.source.userId;
		switch(msg){
			case "userid":
				event.reply("Your userId is " + userID).then(function(data) {
					// sucess
					console.log("User Id = " + userID);
				}).catch(function(error) {
					// error
					console.log('error');
				});
				break;
			default:
				event.reply("蛤！你說 " + msg + " ?").then(function(data) {
					// sucess
					console.log(userID + " : " + msg);
				}).catch(function(error) {
					// error
					console.log('error');
				});
				break;
		}
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


