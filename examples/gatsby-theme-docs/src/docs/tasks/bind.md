---
title: Bind
description: Реализовать свой bind без использования call и apply
---

## Реализовать свой bind без использования call и apply:

1. функция принимает на вход функцию, контекст которой нужно поменять, сам объект контекста и дополнительные аргументы
2. функция возвращает полученную функцию, контекст которой заменён на полученный объект

Ну вот, собственно, логика готова. Чтобы сделать функцию методом объекта контекста нам нужно создать у него новое свойство. И свойство это должно быть уникальным, чтобы не получилось так, что мы случайно изменим существующее поле. Самый простой способ получить уникальное значение — использовать время. Оно вполне уникально и никогда не повторяется. Формируем уникальную строку `const uuid = Date.now().toString();`, создаём новое поле у объекта и кладём туда нашу функцию `context[uuid] = fn;`. Затем мы помещаем вызов функции в новую переменную `const res = context[uuid]();`
 и возвращаем объекту контекста изначальное состояние `delete context[uuid];`. И в самом конце возвращаем переменную с функцией `return res`.

```tsx
function fbind(fn, context) {
  return function() {
    const uuid = Date.now().toString();
    context[uuid] = fn;
    const res = context[uuid]();
    delete context[uuid];
    return res;
  }
}

const user = {
  firstName: '',
  lastName: '',
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

function getFullName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return this.fullName();
}

fbind(getFullName, user, 'Иван', 'Человеков')() // => Иван Человеков
```

```tsx
// Написать call и apply теперь проще простого.
call(fn, context, ...args) {
  const uuid = Date.now().toString();
  context[uuid] = fn;
  const res = context[uuid](...args);
  delete context[uuid];
  return res;
}

apply(fn, context, args) {
  const uuid = Date.now().toString();
  context[uuid] = fn;
  const res = context[uuid](...args);
  delete context[uuid];
  return res;
}
```

**Как реализовать аналог Function.prototype.bind?**

С появлением Rest parameters реализация этой задачи стала чуть проще, чем прежде, когда приходилось делать arguments.slice:

```tsx
Function.prototype.bind = function(context, ...argsBind) {
  const fn = this;

  return function(...args) {
    return fn.apply(context, argsBind.concat(args))
  };
};
```