/*
 * データベースを操作するモジュール
 * File name	: /module/DB/index.js
 * Author			: Hayato Doi
 * license		: MIT
 *
 * =================================================================
 *
 * @db.article.insert()			記事データベースに格納する
 * @db.article.get()				記事データベースから記事を取り出す
 * @db.article.getList()		記事データベースからすべての記事を取り出し,listで返す
 *
 * @db.bugreport.insert()		バグレポートデータベースに格納する
 *
 * =================================================================
 *
 * Copyright (c) 2017, Hayato Doi
*/

module.exports.article = require('./addUser');
module.exports.isNameFree = require('./isNameFree');
