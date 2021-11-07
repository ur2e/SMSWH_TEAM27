const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://ec2-18-218-203-237.us-east-2.compute.amazonaws.com:8080", // 비즈니스 서버 URL 설정
      changeOrigin: true,
    })
  );
};
