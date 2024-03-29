require("dotenv").config();
const server = require("./src/app");
const { conn } = require("./src/db");
const { PORT } = process.env;
server.get("/", (req, res) => {
  res.status(200).send("<h1>PROXY USERS STARTING</h1>");
});
server.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    error: true,
    message: message,
  });
});
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening local on port: http://localhost:${PORT}`);
  });
}); 