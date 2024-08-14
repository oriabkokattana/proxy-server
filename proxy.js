// api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Create proxy middleware
  const proxy = createProxyMiddleware({
    target: 'http://broker-api.com:30002', // Replace with your actual API server
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove '/api' prefix when forwarding
    },
  });

  // Forward request
  proxy(req, res);
};
