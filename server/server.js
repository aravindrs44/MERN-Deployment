const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const authorRoutes = require('./routes/pirate.routes');
authorRoutes(app);

app.listen(port, () => console.log(`EXPRESS running on port ${port} . NOW LET EM KNOW WHO THE HUNKA HUNKA IS!`))