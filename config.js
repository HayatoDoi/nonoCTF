/* File name           : /config.js
 * Author              : Hayato Doi
 * Outline             : 各種の設定ファイル
 * license             : MIT
 * Copyright (c) 2017, Hayato Doi
 */
module.exports = {

	// 立ち上げるポート番号
	PORT : 3000,

	// 管理者ページアカウント(そのうちDBに入れるかも。)
	ADMIN_USER : 'admin',
	ADMIN_PASSWORD : 'b18d3e6b16054937a1da30da08773acf7528b09cb45ba772842a00623b94b30c',

	// ログの出力先
	LOG_PATH : '/var/log/lookme/',

	//デバッグモードdebug mode
	// If it is a production environment
	// DEBUG_MODE : false,
	DEBUG_MODE : true,
};
