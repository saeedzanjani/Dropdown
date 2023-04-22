export interface IEventListener {
  eventType: string;
  listener: Function;
  target: any;
  options: any;
}
