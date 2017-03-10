/*
 * ユーザを登録する.
 * File name	: /module/DB/addUser.js
 * Author			: Hayato Doi
 * license		: MIT
 *
 * =================================================================
 *
 * @addUser() ユーザを登録
 *
 * =================================================================
 *
 * Copyright (c) 2017, Hayato Doi
*/

// ライブラリをまとめたファイルからよっこいしょ
const db = require('./library');

// ユーザを追加
module.exports = (name, password) => {
	db.serialize(()=>{
		db.run('INSERT INTO User_name(name) VALUES($name)',{
			$name : param.name,
		});
	});
	db.cloce();
};
