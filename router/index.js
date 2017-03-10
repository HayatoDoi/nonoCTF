/* File name           : index.js
 * Author              : Hayato Doi
 * Outline             : 一番始めにアクセスされるページ。
 *                     : ルーティングも行う。
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
const express = require('express');
const sanitizer = require('sanitizer');
const router = express.Router();
// Dateクラスの拡張
require('date-utils');
const now = new Date();

// middleware that is specific to this router
router.use((req, res, next) => {
	//デバッグモードの時, ログを出力する.
	if(require('../config').DEBUG_MODE){
		console.log('===[%s]================', now.toFormat('HH24:MI:SS'));
		console.log('Access : http://localhost:%s%s', require('../config').PORT,req.url);
		console.log('User   : %s', req.session.user);
		console.log('Param  : %j', req.body);
		console.log('');
	}
	next();
});
// define the home page route
router.get('/', (req, res) => {
	res.render('top-page');
});
/* == 以下, 各ページ == */
// admin page
const admin = require('./admin');
router.use('/admin', admin);

// /login ログインページ
const login = require('./login');
router.use('/login', login);

// /login ログインページ
const signup = require('./signup');
router.use('/signup', signup);

// listen page
router.get('/license', (req, res) =>{
	// res.send('license');
	res.render('license');
});


module.exports = router;
