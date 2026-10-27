
import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Service is running!");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Keyboard", price: 2500 },
    { id: 2, name: "Mouse", price: 800 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
