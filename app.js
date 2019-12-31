require('dotenv').config();

const logger = require('./server/lib/logger');
const server = require('./server');
const port = process.env.PORT || 3000;

logger.info('--- STARTING -----------------------------------------------------');
server.listen(port, () => logger.info('Server started: http://localhost:' + port));
