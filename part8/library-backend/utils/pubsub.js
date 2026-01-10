import { ee } from "../index.js";

export function createAsyncIterator(eventName) {
  return {
    async *[Symbol.asyncIterator]() {
      const queue = [];
      let resolveNext;

      const push = (value) => {
        if (resolveNext) {
          resolveNext({ value, done: false });
          resolveNext = null;
        } else {
          queue.push(value);
        }
      };

      ee.on(eventName, push);

      try {
        while (true) {
          if (queue.length > 0) {
            yield queue.shift();
          } else {
            yield await new Promise(resolve => {
              resolveNext = resolve;
            });
          }
        }
      } finally {
        ee.off(eventName, push);
      }
    }
  };
}
