import express from "express";
import express_enforces_ssl from "express-enforces-ssl";
import helmet from "helmet";

const app = express();
app.enable("trust proxy");

if (process.env.NODE_ENV === "production") {
  app.use(express_enforces_ssl());
  app.use(helmet.hsts({
    maxAge: 31536000,
    preload: true,
  }));
}

app.disable("x-powered-by");

app.set("port", process.env.PORT || 3000);

export default app;
