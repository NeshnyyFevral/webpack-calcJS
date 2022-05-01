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

const result = {
  prefinally: '',
  finally: '0',
};

Object.keys(result).forEach((key) => {
  let value = result[key];
  const dep = new Dep();

  Object.defineProperty(result, key, {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
    },
  });
});
const watcher = (func) => {
  target = func;
  target();
  target = null;
};

export { watcher, result };
