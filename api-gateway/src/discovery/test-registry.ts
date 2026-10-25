import { serviceRegistry } from "./service-registry.js";

serviceRegistry.register({
  id:"product1",
  name:"products",
  url:"http://localhost:5002",
  status:"UP"
})
serviceRegistry.register({
  id:"product2",
  name:"products",
  url:"http://localhost:5003",
  status:"UP"
})
console.log("All product instances",serviceRegistry.getInstances("products"))
console.log("Healthy product instances",serviceRegistry.getHealthyInstances("products"))