const express = require('express')
const serveStatic = require('serve-static')
const app = express()
const cors = require('cors')
app.use(express.static('uploads'));

app.use(express.json());
app.use(cors());

const db = require("./config/models");
db.sequelize.sync();

// simple route
app.get("/" ,(req, res) => {
    res.json({ message: "Welcome to belhom application." });
  });

require("./articles/articles.routes")(app);
require("./products/products.routes")(app);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });