let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: '1545688189',
	channelSecret: '3d9fd88a284afa8b023c8a95ad39425e',
	channelAccessToken: '4muvJafSuXaVcDO3WKUzMrQVUeyLnzK5pBb9As/cn+mGebIDwv7EvaxUpR+Rl+uEmEN4jEEuELt7sqd+id8ecEEa8ruOKp1YlSJJX01F1SUJ0g6MkrauV+0rs8xBtj6AIQmrKhV3KBjcsQUmyLhz2wdB04t89/1O/w1cDnyilFU='
});

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

// 主動發訊息給 Client App
setTimeout(function() {
	var get_userId = 'U2ba452aaac8c5be6c2bdf5e956698e76';
	var sendMsg = "push msg to one user";
	bot.push(get_userId, [sendMsg]);
	console.log('userId: ' + get_userId);
	console.log('send: ' + sendMsg);
},3000);
