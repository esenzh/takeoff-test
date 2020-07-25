const express = require("express");
const config = require("config");

const app = express();

const PORT = config.get("port" || 5000);

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
      console.log("Server Error", e.message)
  }
}

start()
