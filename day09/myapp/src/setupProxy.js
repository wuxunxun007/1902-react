const proxy = require("http-proxy-middleware");
// console.log(1);
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://wyj.taogou1.cn",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  app.use(
    proxy("/daxun", {
      target: "http://www.daxunxun.com",
      changeOrigin: true,
      pathRewrite: {
        "^/daxun": ""
      }
    })
  );
};