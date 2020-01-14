const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./helpers/error-handler");
const responseHandler = require("./middlewares/response");
const logger = require('./helpers/logger')('server.js');

// config, helpers & middleware
const config = require("./config/config");

const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(responseHandler);

/* registering routes */
app.use("/api", require("./routes/index"));

/* global error handeler*/
app.use(errorHandler);

/* creating server */
app.listen(config.server_port, () => {
    //logger.info(`Server listening on port ${config.server_port}`);
    console.log(`Server listening on port ${config.server_port}`);
});
