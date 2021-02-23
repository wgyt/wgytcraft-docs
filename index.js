const fs = require("fs-extra")
const _$ = require("bijou.js")
module.exports = function(host, res, req, error, version, ejs){
	path = req.originalUrl
	if (fs.existsSync(`${__dirname}/${path}.md`)) {
		md = fs.readFileSync(`blog/${path}.md`, 'utf8')
		html = _$.markdownToHTML(md)
		ejs.renderFile(`${__dirname}/index.ejs`, {html:html}, {}, function(err, str){
			res.send(str)
		});

	}else{
		res.status(404).send('<h1>404</h1>')
	}
}