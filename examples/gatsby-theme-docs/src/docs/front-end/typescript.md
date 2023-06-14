---
title: TypeScript
description: Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.
---
Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.

[ссылка](https://github.com/FedorovAlexander/typescript-interview-questions-ru)

## Что такое Triple-Slash директивы?

Директивы с тройной косой чертой - это однострочные комментарии, содержащие тег XML для использования в качестве директив компилятора. Каждая директива указывает, что загружать в процессе компиляции. Директивы с тройной косой чертой работают только в верхней части своего файла и будут рассматриваться как обычные комментарии в любом другом месте файла.

- `/// <reference path="..." />` - является наиболее распространенной директивой и определяет зависимость между файлами.
- `/// <reference types="..." />` - похож на path, но определяет зависимость для пакета.
- `/// <reference lib="..." />` - позволяет явно включить встроенный файл lib.

## Преимущества TypeScript:

- **Статическая типизация**. Кто-то легко может засунуть строку вместо числа, там где числа быть не должно. Проблема давняя и её видал наверное каждый разработчик. Без статической типизации у языка появляется много проблем, когда продукт начинает расти.
- **Компиляция**. TypeScript компилируется и проверяет ошибки. Это позволяет избежать некоторых ошибок ещё до проверки работоспособности самого решения! Если вы написали что-то не так, то TS сразу даст вам знать😊
- **Хорошая документация**. TypeScript хорошо задокументирован. Чтобы вы не пытались найти, вы наверняка найдете это в официальной документации.
- **Транспиляция из коробки**. Вы настраиваете компилятор ручками (с помощью конфигурации) и сами можете задать в какой стандарт нужно превратить ваш текущий код.
- **Полноценное ООП**. Разработчики TypeScript смогли сделать то, что давно не могли сделать в JavaScript: сделать полноценное ООП с типами, интерфейсами, перечислениями и многим другим

## Что такое модуль в TypeScript?

Модули в TypeScript - это набор соответствующих функций, классов и интерфейсов.

Вы можете думать о модулях как о контейнерах, которые необходимы для выполнения задачи. Модули можно импортировать, чтобы легко обмениваться кодом между проектами.

## Что такое утверждение типа в TypeScript?

Это процесс, который вынуждает компилятор пересматривать свое отношение к данным

Утверждение типа, похоже на преобразование (приведение) типов (преобразование типов, приведение типов), за исключением того, что от них не остается того и следа в скомпилированном коде, а внутренний механизм, различен. Именно поэтому они и оцениваются.

Утверждая тип, разработчик говорит компилятору - "поверь мне, я знаю, что делаю" (Поверьте мне, я знаю, что делаю).

## Когда нужно использовать ключевое слово unknown?

Вам следует использовать unknown, если вы не знаете, какой тип ожидать заранее, но хотите назначить его позже, и ключевое слово any не будет работать.

## Что такое декораторы и к чему их можно применить?

Декоратор - это особый вид объявления, который позволяет вам изменять классы или члены классов сразу, помечая их аннотацией `@<name>`. Каждый декоратор должен ссылаться на функцию, которая будет оцениваться во время выполнения.

Например, декоратор @sealed будет соответствовать запечатанной функции. Все, что помечено `@sealed`, будет использоваться для оценки запечатанной функции.

```tsx
function sealed(target) {
	// do something with 'target' ...
}
```

Их можно прикрепить к:

- Объявлениям классов
- Методам
- Свойствам-аксессорам
- Свойствам
- Параметрам

По умолчанию декораторы не включены. Чтобы включить их, вы должны отредактировать поле `experimentalDecorators` в параметрах компилятора в файле tsconfig.json или в командной строке.

## В чем разница между tuple и массивом в TypeScript?

Обычно `tuple` представляет собой фиксированного размера массив, состоящий из элементов известного типа. Порядок элементов должен соблюдаться.

```tsx
const primaryColors: [string, string, string] = [
	"#ff0000",
	"#00ff00",
	"#0000ff",
];
console.log(primaryColors);
```

## TypeScript поддерживает абстрактные классы?

TypeScript поддерживает абстрактные классы с 2015 года, что приводит к ошибкам компилятора при попытке создать экземпляр этого класса. TypeScript 4.2 добавляет поддержку объявления, что функция конструктора является абстрактной.