import "dotenv/config"

function getNumber(name: string, defaultValue: number): number {
  const value = process.env[name]
  if (!value) {
    return defaultValue
  }
  const parsed = Number(value)
  if (!Number.isFinite(parsed) || parsed <= 0){
    throw new Error(`${name} must be a postive number`)
  }
  return parsed
}

function getRequiredString(name:string):string{
  const value = process.env[name]?.trim()
  if(!value){
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}
export const env = {
  port:getNumber("PORT",4000),
  userServiceUrl:getRequiredString("USER_SERVICE_URL"),
  productServiceUrl:getRequiredString("PRODUCT_SERVICE_URL"),
  gatewayTimeoutMs:getNumber("GATEWAY_TIMEOUT_MS",5000)
}
