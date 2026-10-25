import { serviceDiscovery } from "./service-discovery.js";

const instances = serviceDiscovery.discover("products");

console.log("Discovered product instances:", instances);