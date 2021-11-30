const express = require("express");

const app = express();

const port = 8080;

const serverRenderer = require("../dist/server/serverRenderer").default;

app.use(express.static("dist"));
app.use(serverRenderer());

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});