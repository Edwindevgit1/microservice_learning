export interface ServiceInstance {
  id: string;
  name: string;
  url: string;
  status: "UP" | "DOWN";
}

class ServiceRegistry {
  private services = new Map<string, ServiceInstance[]>();

  register(instance: ServiceInstance): void {
    const instances = this.services.get(instance.name) ?? [];

    const existingIndex = instances.findIndex(
      (service) => service.id === instance.id,
    );

    if (existingIndex !== -1) {
      instances[existingIndex] = instance;
    } else {
      instances.push(instance);
    }

    this.services.set(instance.name, instances);
  }

  getInstances(serviceName: string): ServiceInstance[] {
    return [...(this.services.get(serviceName) ?? [])];
  }

  getHealthyInstances(serviceName: string): ServiceInstance[] {
    return this.getInstances(serviceName).filter(
      (service) => service.status === "UP",
    );
  }

  deregister(serviceName: string, instanceId: string): boolean {
    const instances = this.services.get(serviceName);

    if (!instances) {
      return false;
    }

    const updatedInstances = instances.filter(
      (service) => service.id !== instanceId,
    );

    if (updatedInstances.length === instances.length) {
      return false;
    }

    if (updatedInstances.length === 0) {
      this.services.delete(serviceName);
    } else {
      this.services.set(serviceName, updatedInstances);
    }

    return true;
  }
}

export const serviceRegistry = new ServiceRegistry();