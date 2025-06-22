const fs = require("fs");

const raw = fs.readFileSync("db.json", "utf-8");
const updated = raw.replace(
  /http:\/\/localhost:3000/g,
  "https://store-backend-uovj.onrender.com"
);

fs.writeFileSync("db.json", updated);
console.log("✅ db.json został przerobiony pod Render");
