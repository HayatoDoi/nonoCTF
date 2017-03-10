/*
 * 引数の名前が使用可能か, を調べる
 * File name	: /module/DB/isNameFree.js
 * Author			: Hayato Doi
 * license		: MIT
 *
 * =================================================================
 *
 * @isNameFree(name) 引数の名前が使用可能ならtrue, 不可ならfalse
 *
 * =================================================================
 *
 * Copyright (c) 2017, Hayato Doi
*/

// ライブラリをまとめたファイルからよっこいしょ
const db = require('./library');

// idに一致する記事を返す。
module.exports = (name) => {
	return new Promise((resolve, reject) => {
		db.serialize(() => {
			// db.get('SELECT title, text, time FROM article WHERE id=$id',{
			db.get('SELECT name FROM User_name WHERE name=$name',{
				$name: name
			},(err, res)=>{
				if(err){
					return reject(err);
				}
				console.log(res);
				resolve(res);
			});
		});
	});
}
