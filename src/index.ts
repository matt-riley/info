import * as profiler from "@google-cloud/profiler";
import * as traceAgent from "@google-cloud/trace-agent";
if (process.env.NODE_ENV === "production") {
  traceAgent.start();
  profiler.start();
}

import server from "./server";

server();
