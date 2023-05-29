---
title: Promices
description: Решения задач
---

## Задача 1

```tsx
const log = console.log;
const timeout = (x) =>
  setTimeout(() => {
    log(x);
  });
const promise = (x) => {
  return Promise.resolve(x).then((x) => {
    log(x);
  });
};
// A: Что будет выведено в консоль и почему?
 log(1);
 timeout(2);
 promise(3);
 log(4);
```

Итак, порядок выполнения будет следующим: **`log(1)`** -> **`log(4)`** -> **`promise(3)`** -> **`timeout(2)`** -> **`log(3)`**

## Задача 2

```jsx
function task1() {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 0);

  Promise.resolve().then(() => console.log(3));

  const p = new Promise((resolve, reject) => {
    console.log(4);
    setTimeout(() => {
      resolve();
      reject();
    });
  });

  p.then(() => {
    console.log(5);
  }).catch(() => {
    console.log(6);
  });

  console.log(7);
}
// A: Что будет выведено в консоль и почему?
task1();
```

Итак, вывод в консоль будет: **`1`** -> **`4`** -> **`7`** -> **`3`** -> **`2`** -> **`5`**.

## Задача 3

```jsx
// Что выведет console?

console.log(1);
setImmediate(() => console.log(2));
Promise.resolve(3)
	.then(x => console.log(x));
console.log(4);
setImmediate(() => console.log(5));
console.log(6);

// : 1 4 6 3 2 5
```

## **Как реализовать аналог Promise.all?**

```tsx
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;

          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
```