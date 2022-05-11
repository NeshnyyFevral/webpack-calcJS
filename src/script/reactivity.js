let target = null;
class Dep {
  constructor() {
    this.subscribers = [];
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach((e) => e());
  }
}

let result = {
  finally: '0',
};

Object.keys(result).forEach((key) => {
  let value = result[key];
  const dep = new Dep();

  result = new Proxy(result, {
    get() {
      dep.depend();
      return value;
    },
    set(...args) {
      const newValue = args[2];
      value = newValue;
      dep.notify();
      return true;
    },
  });
});

const watcher = (func) => {
  target = func;
  target();
  target = null;
};

export { watcher, result };
