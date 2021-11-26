require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const vendorsRoute = require("./src/routes/vendors.route");
const { connectDb } = require("./src/database/dbConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/vendors", connectDb, vendorsRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    "\n\n=======> Server is listening on port *" + process.env.PORT || 5000
  );
});
