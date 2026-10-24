
import "dotenv/config";

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function validateServiceUrl(name: string): string {
  const value = requiredEnv(name);
  const url = new URL(value);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error(`${name} must use HTTP or HTTPS`);
  }

  return value.replace(/\/+$/, "");
}

const PORT = Number(process.env.PORT ?? 4000);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT must be a valid TCP port");
}

export const env = {
  PORT,
  USER_SERVICE_URL: validateServiceUrl("USER_SERVICE_URL"),
  PRODUCT_SERVICE_URL: validateServiceUrl("PRODUCT_SERVICE_URL"),
};
