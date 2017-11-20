const line = require('@line/bot-sdk');
const client = new line.Client({
	channelAccessToken: '9PcsZfPtX2/LN0QGVNM3HZbKhTnZTE7pXxDf5Fg+GCv3zXdvCPjSf/Ova4HDUDXR6CLR6ZG4IxNsMqYiXJkqKb6fcSwj34+xZZ5ssJOTC04vK9LvpdqPliUjtYWjSWc4MQDJpMxF4YLykOesAS7HbAdB04t89/1O/w1cDnyilFU='
});

const message = {
	type:'text',
	text:'Hello World!'
};

client.pushMessage('<to>',message)
  .then(() => {

  })
  .catch((err) => {
  	// error handling
  	console.log("Error");
  });