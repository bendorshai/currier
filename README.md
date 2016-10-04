
## Installation

```
$ npm install currier --save
```
## Code Example

```js
// Create a curried function add4Numbers
var add4Numbers = currier(function(first, second, third, fourth) {
    console.log(first+second+third+fourth);
});

// Send 3 arguments out of 4, reaction: Silent
add4Numbers(1,2,3);

// Send last final argument, rection: Prints 10
add4Numbers(4);
```

## Motivation

Curried functions are the basis of pure functional Programming Languages like ELM.
We wanted to exapamd JavaScript with this pure functional property.

## Git

https://github.com/bendorshai/currier