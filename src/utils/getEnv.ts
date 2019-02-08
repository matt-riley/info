import { Storage } from "@google-cloud/storage";
import fs from "fs";

const dotEnvExists = fs.existsSync(".env");
if (dotEnvExists) {
    process.exit();
}

const storage = new Storage();

const bucketName = "envvars.api.mattriley.info";
storage
    .bucket(bucketName)
    .file(".env")
    .download({ destination: ".env" });
