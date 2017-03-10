/* File name           : /app.js
 * Author              : Hayato Doi
 * Outline             : npm startをするとまずコレが起動する
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const config = require('./config');

// ログの出力
// app.use(morgan({ format: 'dev', immediate: true }));
// テンプレートエンジンの使用
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// POSTデータの受取り
app.use(bodyParser.urlencoded({extended: true}));
// sessionの使用
app.use(session({
	secret: 'nonoCTF',
	resave: false,
	saveUninitialized: false,
	cookie: {
		//30分有効
		maxAge: 30 * 60 * 1000
	}
}));

// /assetsは静的なファイルの置き場
app.use('/assets', express.static(__dirname + '/assets'));

// ==== ルータ ====

// 以降ルートページはここに書いていくよ。
const index = require('./router/index');
app.use('/', index);

app.use((req, res, next) => {
	res.status(404)
		.render('go-to-the-front-page',{
			title : 'Not Found'
		});
});

// デバッグモードのときは動かない
if(!config.DEBUG_MODE){
	app.use((err, req, res, next) =>{
		res.status(500)
			.render('go-to-the-front-page',{
				title : 'Internal Server Error'
			});
	});
}
app.listen(config.PORT, () => {
	console.log('Server running at http://localhost:' + config.PORT);
	if(config.DEBUG_MODE){
		console.log('Mode  : Debug');
	}else{
		console.log('Mode  : Production');
	}
});

