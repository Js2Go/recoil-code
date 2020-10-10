const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // console.log(req)
  const urlObj = url.parse(req.url, true)
  const query = urlObj.query
  // console.log(query.userID)
  res.end(JSON.stringify({
    name: 'mazi' + query.userID
  }))
}).listen(8090)
