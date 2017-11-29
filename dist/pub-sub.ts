interface callbackFunc {
  (data: any): any;
}

export class PubSub {
  private static events = {};

  constructor() {}

  public static subscribe(eventName: string, func: callbackFunc) {
    PubSub.events[eventName] = PubSub.events[eventName] || [];
    PubSub.events[eventName].push(func);
  }

  public static unsubscribe(eventName: string, func: callbackFunc) {
    if (PubSub.events[eventName]) {
      for (let i = 0; i < PubSub.events[eventName].length; i++) {
        if (PubSub.events[eventName][i] === func) {
          PubSub.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  public static emit(eventName: string, data: any) {
    if (PubSub.events[eventName]) {
      PubSub.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
}

