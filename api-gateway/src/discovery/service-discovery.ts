import { serviceRegistry } from "./service-registry.js";
import type { ServiceInstance } from "./service-registry.js";

export class ServiceDiscovery{
  discover(serviceName:string):ServiceInstance[]{
    return serviceRegistry.getHealthyInstances(serviceName)
  }
}
export const serviceDiscovery = new ServiceDiscovery()