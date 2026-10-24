import { Router } from "express";
import {
  createProxyMiddleware,
  fixRequestBody,
} from "http-proxy-middleware";

import { env } from "../config/env.js";

const router = Router();

router.use(
  "/users",
  createProxyMiddleware({
    target: env.userServiceUrl,
    changeOrigin: true,
    proxyTimeout: env.gatewayTimeoutMs,

    on: {
      proxyReq: fixRequestBody,

      error: (_error, _req, res) => {
        res.end(
          JSON.stringify({
            error: "USER_SERVICE_UNAVAILABLE",
            message: "The user service is unavailable",
          }),
        );
      },
    },
  }),
);

router.use(
  "/products",
  createProxyMiddleware({
    target: env.productServiceUrl,
    changeOrigin: true,
    proxyTimeout: env.gatewayTimeoutMs,

    on: {
      proxyReq: fixRequestBody,

      error: (_error, _req, res) => {
        res.end(
          JSON.stringify({
            error: "PRODUCT_SERVICE_UNAVAILABLE",
            message: "The product service is unavailable",
          }),
        );
      },
    },
  }),
);

export default router;