const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json',
  '.md':   'text/markdown; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/index.html' : req.url;
  // Remove query string
  urlPath = urlPath.split('?')[0];
  const filePath = path.join(__dirname, urlPath);

  try {
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + req.url);
  }
});

server.listen(8080, () => {
  console.log('✅ Server running at http://localhost:8080');
  console.log('   Open: http://localhost:8080/element.html?z=1  (Hydrogen P3 data)');
  console.log('   Open: http://localhost:8080/element.html?z=4  (Beryllium - carcinogen)');
  console.log('   Open: http://localhost:8080/element.html?z=11 (Sodium - water reactive)');
});
