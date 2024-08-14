// index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy middleware to forward requests from '/api' to your backend API server
app.use('/api', createProxyMiddleware({
    target: 'http://10.0.10.61:30002', // Replace with your actual API server
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove '/api' prefix when forwarding
    },
}));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});