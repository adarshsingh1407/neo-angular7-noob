const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const SERVER_CONFIG = require('./config/serverConfig');
const ServerHelper = require('./helpers/serverHelper');

const port = process.env.PORT || SERVER_CONFIG.DEFAULT_PORT;
const nodeEnv = process.env.NODE_ENV;

const CONST = require('./server/constants');

const app = express();

// Security Headers
app.use(helmet())

// Logging
app.use(morgan(SERVER_CONFIG.MORGAN_FORMAT));

// Compression
app.use(compression(SERVER_CONFIG.COMPRESSION_OPTIONS))

// Error Handlers
app.use(ServerHelper.logErrors);
app.use(ServerHelper.clientErrorHandler);
app.use(ServerHelper.errorHandler);

app.use(cors())

app.use(express.static('dist'));

app.get('/heroes', (req, res) => {
  res.send(CONST.HEROES);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`neo-angular7-noob Online on port:${port} with env:${nodeEnv}`));
