let linebot = require('linebot'),
	express = require('express');

const config = require('./config.json'),
	util = require('util');

let bot = linebot({
	channelId: '1545688189',
	channelSecret: '3d9fd88a284afa8b023c8a95ad39425e',
	channelAccessToken: '4muvJafSuXaVcDO3WKUzMrQVUeyLnzK5pBb9As/cn+mGebIDwv7EvaxUpR+Rl+uEmEN4jEEuELt7sqd+id8ecEEa8ruOKp1YlSJJX01F1SUJ0g6MkrauV+0rs8xBtj6AIQmrKhV3KBjcsQUmyLhz2wdB04t89/1O/w1cDnyilFU='
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
			case "my userId":
				event.reply("Your userId = " + userID).then(function(data) {
					// sucess
					console.log("User Id = " + userID);
				}).catch(function(error) {
					// error
					console.log('error');
				});
				break;
			case "吃飯":
				var option = Math.floor(Math.random()*11);
				event.reply("你可以吃... " +FOODS[option] + "XDDD" ).then(function(data) {
					// sucess
					console.log("\n" + userID + " ： " + msg);
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
// bot.push(config.clientAppUserID, "Nope！ Don't do that！！");

// 主動發訊息給 Client App
setTimeout(function() {
	var get_userId = config.clientAppUserID;
	var sendMsg = "push msg to one user";
	bot.push(get_userId, sendMsg);
	console.log('userId: ' + get_userId);
	console.log('send: ' + sendMsg);
},3000);
