---
title: Синтаксис Javascript
description: Вопросы для собеседывания на позицию front-end разработчика. Javascript
---

## `var`

Обьявляет переменную которую можно перезаписать

- **всплывает**(hoisting) в начало области видимости функции при компиляции (имеет область видимости функции). Это значит, что если мы обратимся к переменной ещё до момента её инициализации, то получим `undefined`
- объявляет переменную, которая может быть перезаписана

```tsx
var user = "Pete";

var user; // ничего не делает, переменная объявлена раньше
// ...нет ошибки
```

## `let`

Обьявляет переменную которую можно перезаписать

- область видимости переменной `let` – блок
- объявляет переменную, которая не может быть переопределена

```tsx
let user;
let user;
```

- переменная `let` видна только после объявления

## `const`

Переменная `const` – это константа, в остальном – как `let`

## Types

В JavaScript есть несколько встроенных типов данных:

- Примитивы:
    - [Undefined](https://developer.mozilla.org/ru/docs/Glossary/Undefined) (Неопределённый тип) : `typeof instance === "undefined"`
    - [Boolean](https://developer.mozilla.org/ru/docs/Glossary/Boolean) (Булев, Логический тип) : `typeof instance === "boolean"`
    - [Number](https://developer.mozilla.org/ru/docs/Glossary/Number) (Число) : `typeof instance === "number"`
    - [String](https://developer.mozilla.org/ru/docs/Glossary/String) (Строка) : `typeof instance === "string"`
    - [BigInt](https://developer.mozilla.org/ru/docs/Glossary/BigInt) : `typeof instance === "bigint"`
    - [Symbol](https://developer.mozilla.org/ru/docs/conflicting/Web/JavaScript/Reference/Global_Objects/Symbol) (в ECMAScript 6) : `typeof instance === "symbol"`
- [Null](https://developer.mozilla.org/ru/docs/Glossary/Null) (Null тип ) : `typeof instance === "object"`. Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в цепочке Прототипов;
- [Object](https://developer.mozilla.org/ru/docs/Glossary/Object) (Объект) : `typeof instance === "object"`. Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова `new`: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date и множество других структур;

Кроме встроенных типов данных, в JavaScript также есть специальный тип данных `NaN` (Not a Number), который возникает, когда производятся нечисловые операции с числами, и тип данных `BigInt`, который используется для работы с числами, превышающими максимальное значение типа `Number`

### `[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)`

коллекция пар ключ-значение.
 Объект содержит пары ключ-значение и запоминает первоначальный порядок вставки ключей. Любое значение (как объекты, так и примитивные значения) может использоваться либо как ключ, либо как значение.

```tsx
const map1 = new Map();
mySet1.add('key','value')
map1.get('key');
map.has('key');
map1.size;
map1.delete('key');
```

### `[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)`

коллекция уникальных значений, так называемое «множество».

```tsx
const set = new Set()
set.add('value')
set.has('value')
mySet1.size;       
mySet1.delete('value')

const uniqueArray = [ ...new Set([1, 1, 2, 2, 2, 3])]
```

## Functions

### [Function Declaration](https://learn.javascript.ru/function-expressions#function-expression-v-sravnenii-s-function-declaration)

функция объявляется отдельной конструкцией «function…» в основном потоке кода.

```tsx
function sum(a, b) {
  return a + b;
}
```

### *[Function Expression](https://learn.javascript.ru/function-expressions#function-expression-v-sravnenii-s-function-declaration)*

функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» `=`:

```tsx
let sum = function(a, b) {
  return a + b;
};
```

### [Стрелочные функции](https://learn.javascript.ru/arrow-functions#itogo)

- Не имеют `this`.
- Не имеют `arguments`.
- Не могут быть вызваны с `new`.
- У них также нет `super`

## Objects

### **[Object.prototype](https://learn.javascript.ru/native-prototypes#object-prototype)**

это независимый объект, хранящий свойства и методы, доступные всем объектам, чей `__proto__` ссылается на него (на этот прототип). На этом принципе строится прототипное наследование в JS.

```jsx
let obj = {};

alert(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString === Object.prototype.toString
```

Если определенного свойства нет в объекте, его поиск осуществляется сначала в прототипе объекта, затем в прототипе прототипа объекта и так до тех пор, пока свойство не будет найдено. Это называется цепочкой прототипов.

Обратите внимание, что по цепочке прототипов выше `Object.prototype` больше нет свойства `[[Prototype]]`:

```tsx
alert(Object.prototype.**proto**); // null
```

Создание объекта без протатипа

```tsx
Object.create(null)
```

`prototype` является свойством объекта-функции. Это прототип объектов, созданных с помощью этой функции.

`__proto__` является внутренним свойством объекта, указывающим на его прототип. Текущие стандарты предоставляют эквивалентный `Object.getPrototypeOf(obj)` метод, хотя стандарт де-факто `__proto__` быстрее.

Вы можете найти `instanceof` взаимосвязи, сравнивая функцию `prototype` с `__proto__` цепочкой объектов, и вы можете разорвать эти взаимосвязи, изменив `prototype`.

```tsx
function Point(x, y) {
    this.x = x;
    this.y = y;
}

var myPoint = new Point();

// the following are all true
myPoint.__proto__ == Point.prototype
myPoint.__proto__.__proto__ == Object.prototype
myPoint instanceof Point;
myPoint instanceof Object;

```

Вот `Point` функция-конструктор, она создает объект (структуру данных) процедурно. `myPoint` это объект, созданный с помощью `Point()` so `Point.prototype`, который сохраняется в `myPoint.__proto__` в это время.

## Clone

**[Клонирование и объединение, Object.assign](https://learn.javascript.ru/object-copy#cloning-and-merging-object-assign)**

поверхностное копирование

```jsx
Object.assign(dest, [src1, src2, src3...])
```

```jsx
JSON.stringify()
```

**[Вложенное клонирование](https://learn.javascript.ru/object-copy#vlozhennoe-klonirovanie)**

с помощью [lodash.com](https://lodash.com/)

## Array

это особый тип объекта, предназначенный для работы с упорядоченным набором элементов

Чтобы пройтись по элементам массива:

- `for (let i=0; i<arr.length; i++)` – работает быстрее всего, совместим со старыми браузерами.
- `for (let item of arr)` – современный синтаксис только для значений элементов (к индексам нет доступа).
- `for (let i in arr)` – никогда не используйте для массивов!

### Методы

- `arr.push(...items)` – добавляет элементы в конец,
- `arr.pop()` – извлекает элемент из конца,
- `arr.shift()` – извлекает элемент из начала,
- `arr.unshift(...items)` – добавляет элементы в начало.
- `splice` удаляет из массива и возвращает массив из удалённых элементов

```tsx
arr.splice(index[deleteCount, elem1,..., elemN])
```

- `slice` удаление из массива и возвращает новый массив, в который копирует элементы, начиная с индекса start и до end

```tsx
arr.slice([start], [end])
```

- `concat(...items)` – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

Для поиска среди элементов:

- `indexOf/lastIndexOf(item, pos)` – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
- `includes(value)` – возвращает true, если в массиве имеется элемент value, в противном случае false.
- `find/filter(func)` – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
- `findIndex` похож на `find`, но возвращает индекс вместо значения.

Для перебора элементов:

- `forEach(func)` – вызывает `func` для каждого элемента. Ничего не возвращает.
- Для преобразования массива:
- `map(func)` – создаёт новый массив из результатов вызова func для каждого элемента.
- `sort(func)` – сортирует массив «на месте», а потом возвращает его.

Реализует общий алгоритм сортировки. Нам не нужно заботиться о том, как он работает внутри (в большинстве случаев это оптимизированная [быстрая сортировка](https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0) или [Timsort](https://ru.wikipedia.org/wiki/Timsort))

**По умолчанию элементы сортируются как строки.** 

```tsx
//Для чисел:
arr.sort(function(a, b) { return a - b; });
arr.sort( (a, b) => a - b );
//Для других:
arr.sort(function(a, b) {
  if (a.value > b.value) {
    return 1; }
  if (a.value < b.value) {
    return -1; }
  return 0;
});
```

- `reverse()` – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
- `split/join` – преобразует строку в массив и обратно.
- `reduce(func, initial)` – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

Дополнительно:

- `Array.isArray(arr)` проверяет, является ли arr массивом.

## this

Обычно `this` ссылается на **значение объекта, который в данный момент выполняет функцию**. «В данный момент» означает, что значение `this` **меняется в зависимости от контекста выполнения**, от того места, где мы используем `this`.

**Классическая функция получает свой `this` в момент вызова, а стрелочная в момент объявления**

есть проблема с [потерей контекста](https://learn.javascript.ru/bind#poterya-this)

> что бы избежать проблем с `this`, нужно вообще не использовать `this`
> 

## Closure

1. способность функции во время создания запоминать ссылки на переменные и параметры, находящиеся в текущей области видимости. Обычно область видимости определяется при создании функции.
2. это **комбинация функции и лексического окружения, в котором эта функция была определена**

> Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении, затем во внешнем, затем в следующем и так далее, до глобального.
> 

Функция «счётчик»

```tsx
function makeCounter() {
	let count = 0;
	return function() {
		return count++; // есть доступ к внешней переменной "count"
	};
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```

## [bind](https://learn.javascript.ru/bind#reshenie-2-privyazat-kontekst-s-pomoschyu-bind)

```jsx
func.bind(context);
```

## [call](https://learn.javascript.ru/call-apply-decorators#primenenie-func-call-dlya-peredachi-konteksta)

```jsx
func.call(context, arg1, arg2, ...)
```

## [apply](https://learn.javascript.ru/call-apply-decorators#perehodim-k-neskolkim-argumentam-s-func-apply)

```jsx
func.apply(context, args)
```