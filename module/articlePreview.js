const md = require("node-markdown").Markdown;
const htmlToText = require('html-to-text');
const moment = require("moment");

module.exports = (id, title, markdown, time) =>{
	let authorName = require('../config').AUTHOR_NAME;
	let authorProfile = require('../config').AUTHOR_PROFILE;
	// console.log(title);
	let text = htmlToText.fromString(md(markdown,false));
	// console.log(text.substring(0,300));
	// console.log(time);
	// console.log(moment(time).format("YYYY-MM-DD"));
	data =  '';
	data += '<h3 class="title"><a href="/page/'+id+'">'+title+'</a></h3>';
	data += '<p>'+text.substring(0,300)+'....</p>';
	data += '<a href="'+authorProfile+'">'+authorName+'</a> | ';
	data += moment(time).format("YYYY-MM-DD");
	data += '<hr width="100%">'
	return data;
};
