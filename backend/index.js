const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./src/routes/product.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
