import * as Sentry from "@sentry/node";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
app.enable("trust proxy");

const defaultOrigin: string[] = process.env.NODE_ENV !== "production" ? ["https://localhost"] : [];
const origin = process.env.CORS_URLS ? process.env.CORS_URLS.split(",") : ["https://mattriley.info"];

const corsOptions = {
  allowedHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST"],
  origin: defaultOrigin.concat(origin),
  preflightContinue: false,
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === "production") {
  app.use(helmet.hsts({
    maxAge: 31536000,
    preload: true,
  }));

  app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);
  app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);
}

app.disable("x-powered-by");

app.set("port", process.env.PORT || 3000);

export default app;
