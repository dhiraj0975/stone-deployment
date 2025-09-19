require("dotenv").config();
const app = require("./src/app");
const serverless = require("serverless-http");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running locally on port ${PORT}`);
});

module.exports = serverless(app);