const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Db");
  } catch (err) {
    console.log("Err connection to Db", err);
  }
  console.log(`Server is running on port ${process.env.port}`);
});
