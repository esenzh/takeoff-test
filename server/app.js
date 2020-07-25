const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const FileStore = require("session-file-store")(session);


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(
  session({
    store: new FileStore(),
    key: "user_sid",
    secret: "very secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api", require("./routes/contact.route"));

const PORT = config.get("port" || 5000);

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
  }
}

start();
