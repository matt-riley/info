import express from "express";
import http from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.set("port", process.env.PORT || 3000);

app.disable("x-powered-by");

const server = () =>
  http.createServer(app).listen(app.get("port"), () => {
    // tslint:disable-next-line:no-console
    console.log("Express server listening on port " + app.get("port"));
  });

server();
