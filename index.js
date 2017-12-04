let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: 'channelId',
	channelSecret: 'channelSecret',
	channelAccessToken: 'channelAccessToken'
});
var FOODS=[];
FOODS[0] = "水餃";
FOODS[1] = "羊肉";
FOODS[2] = "蛋包飯";
FOODS[3] = "滷味";
FOODS[4] = "香菇雞";
FOODS[5] = "拉麵";
FOODS[6] = "牛肉麵";
FOODS[7] = "一心煎餃";
FOODS[8] = "酸辣粉";
FOODS[9] = "咖喱雞肉飯";
FOODS[10] = "新開咖哩飯";
FOODS[11] = "燉飯";
FOODS[12] = "蛋包飯";
FOODS[13] = "海鮮粥";
FOODS[14] = "腿庫飯";
FOODS[15] = "青菜瘦肉粥";
bot.on('message', function(event) {
	// 把收到訊息的 event 印出來
	// console.log(event);
	if(event.message.type = 'text') {
		var msg = event.message.text;
		var userID = event.source.userId;
		switch(msg){
			case "吃飯":
				var option = Math.floor(Math.random()*15);
				event.reply("你可以吃... " +FOODS[option] + "XDDD" ).then(function(data) {
					// sucess
					console.log("\n" + userID + " ： " + msg);
				}).catch(function(error) {
					// error
					console.log('error');
				});
				break;
			default:
				event.reply("蛤！你說什麼？").then(function(data) {
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
	var get_userId = config.clientAppUserID;
	var sendMsg = "push msg to one user";
	bot.push(get_userId, sendMsg);
	console.log('userId: ' + get_userId);
	console.log('send: ' + sendMsg);
},3000);
