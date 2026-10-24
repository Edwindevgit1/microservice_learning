import express from "express";
import cors from "cors";

import proxyRoutes from "./routes/proxy.routes.js";

const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "api-gateway",
  });
});

app.use(express.json({ limit: "1mb" }));

app.use(proxyRoutes);

app.use((_req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    message: "Route not found",
  });
});

export default app;