import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes";
import config from "./config";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
