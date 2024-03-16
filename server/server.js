require("dotenv").config();
const express = require("express");
const connectDB = require("./server/database/db");
const bodyParser = require("body-parser");
const router = require("./router/router");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");
// const notFound = require("./middleware/not-found");
const errHandler = require("./middleware/error-handler");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CREATING A FILE TO STORE ALL THE TOKENS
const userTokenStore = fs.createWriteStream(
  path.join(__dirname, "userTokens.log"),
  { flags: "a" }
);
//init morgan
app.use(morgan("tiny", { stream: userTokenStore }));

// app.use(notFound);
app.use(errHandler);

app.use("/", router);
const port = process.env.PORT || 2001;

//init connections as async function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server started in port = http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
// app.listen(port, () => console.log(`server started on ${port}`));
