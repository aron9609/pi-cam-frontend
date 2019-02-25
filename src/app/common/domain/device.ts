export class Device {
  id: number;
  name: string;
  description: string;
  ip: string;
  port: string;

  constructor(a: Device) {
    return Object.assign(this, a);
  }
}
