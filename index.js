const _$ = require("bijou.js")
module.exports = function(host, res, req, error, version, ejs){
	path = req.originalUrl
	res.send(_$.markdownToHTML("# big text"))
}