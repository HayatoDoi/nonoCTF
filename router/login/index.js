/* File name           : /router/login/index.js
 * Author              : Hayato Doi
 * Outline             : ログインページ
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
const express = require('express');
const router = express.Router();
// ログインページ
router.get('/', (req, res) => {
	res.render('loginform');
	// res.send('login page');
});
router.post('/', (req, res) => {
	const crypto = require('crypto');
	const config = require('../../config');
	let adminUser = config.ADMIN_USER;
	let adminPassword = config.ADMIN_PASSWORD;
	// 受け取ったパスワードのハッシュ化
	const sha256sum = crypto.createHash('sha256');
	sha256sum.update(req.body.password);
	// console.log(sha256sum.digest('hex'));
	if(adminUser === req.body.username
			&& adminPassword === sha256sum.digest('hex')){
		req.session.user = { name: config.AdminUser };
		res.redirect('/admin');
	}else{
		res.render('loginform',{error:'パスワードが間違っています。'});
	}
});

module.exports = router;
