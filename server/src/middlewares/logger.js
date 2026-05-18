const logger = (req, res, next) => {
  const reqUrl = req.url;
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${new Date().toISOString()}]: ${req.method} ~ ${reqUrl} ~ ${
        res.statusCode
      } ~ ${duration}ms`
    );
  });

  console.log(`[${new Date().toISOString()}]: ${req.method} ~ ${reqUrl}`);
  next();
};

export default logger;
