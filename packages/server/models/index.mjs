import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/sessions-analytics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // eslint-disable-next-line
    console.log("Database connection established");
  })
  .catch((error) => {
    // eslint-disable-next-line
    console.error(error);
  });
