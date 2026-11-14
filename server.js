const http = require("http");
const port = process.env.PORT || 8080;
const started = new Date().toISOString();
http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({
    message: "Hello from Leonn, deployed on Back4App Containers",
    runtime: "node " + process.version,
    started_at: started,
    ram_rss_mb: Math.round(process.memoryUsage().rss / 1048576),
    path: req.url
  }, null, 2));
}).listen(port, () => console.log("listening on " + port));
