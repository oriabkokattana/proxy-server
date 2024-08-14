// api/proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'http://10.0.10.61:30002', // Replace with your actual API server
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove '/api' prefix when forwarding
    },
  });

  proxy(req, res);
};
