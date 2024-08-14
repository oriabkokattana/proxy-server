// api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'http://broker-api.com:30002', // Replace with your actual API server
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove '/api' prefix when forwarding
    },
  });

  proxy(req, res);
};
