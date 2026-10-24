import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.port, () => {
  console.log(`API Gateway running on port ${env.port}`);
});

server.requestTimeout = 30_000;
server.headersTimeout = 35_000;
server.keepAliveTimeout = 5_000;

function shutdown(signal: string): void {
  console.log(`${signal} received. Shutting down...`);

  server.close((error) => {
    if (error) {
      console.error("Shutdown error:", error);
      process.exitCode = 1;
      return;
    }

    console.log("API Gateway stopped.");
  });

  setTimeout(() => {
    console.error("Graceful shutdown timed out.");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));