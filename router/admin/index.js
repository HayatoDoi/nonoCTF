/* File name           : admin.js
 * Author              : Hayato Doi
 * Outline             : 管理者用のページ
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
const express = require('express');
const router = express.Router();
// middleware that is specific to this router
router.use((req, res, next) => {
	// ここに、アクセスチェックを追加する。
	// console.log('session: ', req.session.user);
	if(req.session.user || req.url === '/login'){
		next();
	}else{
		res.redirect('/admin/login');
	}
});
// define the home page route
router.get('/', (req, res) => {
	res.send('admin');
});
// 記事を投稿するページ
router.get('/posting',(req, res) => {
	// console.log(req.body);
	res.render('admin');
});
// 記事のデータを受け取ってデータベースに格納するページ
router.post('/posting',(req, res) => {
	const DBarticle = require('../../module/DB');
	DBarticle.article.insert({
		title	: req.body.title,
		text	: req.body.text,
		time	: Date.now()
	});
	console.log(req.body.title);
	console.log(req.body.text);
	res.send('受け取った');
});
// ログインページ
router.get('/login', (req, res) => {
	res.render('loginform');
	// res.send('login page');
});
router.post('/login', (req, res) => {
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
