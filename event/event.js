// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'off', 'once', 'emit'

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Register event handler
  // remove itself after running once
  once(eventName, cb) {
    let wrapper = (...args) => {
      cb.apply(args);
      this.off(eventName, cb);
    };
    this.on(eventName, wrapper);
  }

  // Trigger all callbacks associated
  // with a given eventName
  emit(eventName) {
    const cbs = this.events[eventName];
    if (!cbs) {
      return false;
    }
    cbs.forEach(cb => {
      cb();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
