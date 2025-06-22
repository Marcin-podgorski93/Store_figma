const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();
const PORT = process.env.PORT || 3000;

// Serwowanie statycznych plików zdjęć
app.use(
  "/product-photos",
  express.static(path.join(__dirname, "public", "product-photos"))
);

// Użycie json-server jako middleware do obsługi db.json
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

app.listen(PORT, () => {
  console.log(`Backend działa na porcie ${PORT}`);
});
