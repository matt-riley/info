import dotenv from "dotenv";

const environment = process.env.NODE_ENV;

dotenv.load({
  path: `.env`,
});
