import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jsonServer from "json-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Serwuj publiczne pliki (np. zdjęcia)
app.use(
  "/product-photos",
  express.static(path.join(__dirname, "public/product-photos"))
);

// Router json-server (na root /)
app.use("/", middlewares, router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Serwer działa na http://localhost:${port}`);
});
