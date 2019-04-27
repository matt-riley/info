import http from "http";

import apollo from "./apollo";
import app from "./app";

apollo.applyMiddleware({ app, path: "/" });

const server = () => http.createServer(app).listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.info("Express server listening on port " + app.get("port"));
});

export default server;
