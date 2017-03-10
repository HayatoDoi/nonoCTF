/* File name           : /router/singup/index.js
 * Author              : Hayato Doi
 * Outline             : ユーザ追加のページ
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
const express = require('express');
const router = express.Router();
// ログインページ
router.get('/', (req, res) => {
	res.render('signup/form');
	// res.send('login page');
});

router.post('/', (req, res) => {
	let opsion = {
		failure : false,//失敗フラグ
		username : req.body.username,
		password : req.body.password,
		password_a : req.body.password_a
	};
	// パスワードと確認パスワードが間違っていたときにエラー文を表示間違っていたときにエラー文を表示間違っていたときにエラー文を表示...
	if(req.body.password !== req.body.password_a){
		opsion.failure = true;
		opsion.error_password_a = 'Passwords do not match.'
	}
	// 失敗フラグが立ってたら再度フォームを表示
	if(opsion.failure === true){
		res.render('signup/form',opsion);
	}else{
		res.redirect('/login');
	}
	// const crypto = require('crypto');
	// const config = require('../../config');
	// let adminUser = config.ADMIN_USER;
	// let adminPassword = config.ADMIN_PASSWORD;
	// // 受け取ったパスワードのハッシュ化
	// const sha256sum = crypto.createHash('sha256');
	// sha256sum.update(req.body.password);
	// // console.log(sha256sum.digest('hex'));
	// if(adminUser === req.body.username
	// 		&& adminPassword === sha256sum.digest('hex')){
	// 	req.session.user = { name: config.AdminUser };
	// 	res.redirect('/admin');
	// }else{
	// 	res.render('loginform',{error:'パスワードが間違っています。'});
	// }
});

module.exports = router;
