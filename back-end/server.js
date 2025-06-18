const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();

// Serwowanie zdjęć statycznych
app.use(
  "/product-photos",
  express.static(path.join(__dirname, "public/product-photos"))
);

// json-server API pod /products (z db.json)
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use("/products", router); // <-- ważne, API jest pod /products

// Opcjonalnie: root może zwracać jakieś info lub przekierować
app.get("/", (req, res) => {
  res.send("Backend działa! API pod /products");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server działa na porcie ${PORT}`);
});
