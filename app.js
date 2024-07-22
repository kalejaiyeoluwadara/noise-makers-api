const express = require("express");
require("dotenv").config();
const noisemakers = require("./routes/noisemakers");
const auth = require("./routes/auth");
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

app.use(express.json());
app.use("/api/v1", noisemakers);
app.use("/auth", auth);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
