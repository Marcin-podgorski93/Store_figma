const express = require("express");
const path = require("path");
const jsonServer = require("json-server");

const app = express();

// Serwowanie statycznych plików z public (tu będą Twoje zdjęcia)
app.use(
  "/product-photos",
  express.static(path.join(__dirname, "public/product-photos"))
);

// json-server jako middleware (API)
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use("/api", router);

// Uruchomienie serwera na porcie 10000 lub z ENV
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server działa na porcie ${PORT}`);
});
