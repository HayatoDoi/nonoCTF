/*
 * 必要なライブラリをまとめたもの
 * File name	: /module/DB/library.js
 * Author			: Hayato Doi
 * license		: MIT
 *
 * Copyright (c) 2017, Hayato Doi
*/
const path = require('path');
const dbPath = path.resolve(__dirname, '../../databases/nonoCTF.sqlite3');
const sqlite3 = require('sqlite3').verbose();

module.exports = new sqlite3.Database(dbPath);

