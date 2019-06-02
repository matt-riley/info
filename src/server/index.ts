import http from 'http';

import logger from '../utils/logger';
import apollo from './apollo';
import app from './app';

apollo.applyMiddleware({ app, path: '/' });

const server = () => http.createServer(app).listen(app.get('port'), () => {
  logger.info('Express server listening on port ' + app.get('port'));
});

export default server;
