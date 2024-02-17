require("dotenv").config();
const server = require("./src/app");
const { PORT } = process.env; 
server.get("/", (req, res) => {
  res.status(200).send("<h1>PROXY STARTING</h1>");
});
server.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    error: true,
    message: message,
  });
});
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
