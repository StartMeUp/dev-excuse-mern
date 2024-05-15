import { dbConnect } from "./db/connect";
import express from "express";
import { preRoutesMiddleware } from "./middlewares/preroutes.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();
const port = 3001;

preRoutesMiddleware(app);

app.get("/", (req, res) => {
  res.status(200).send("server OK");
});

import excuseRoutes from "./routes/excuse.routes";
app.use("/excuses", excuseRoutes);

errorMiddleware(app);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to the database");
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("an error has occured :", err.message);
  });
