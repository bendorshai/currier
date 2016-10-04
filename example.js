var currier = require('currier');

var add4Numbers = currier(function(first, second, third, fourth) {
    console.log(first+second+third+fourth);
});

// Silent
add4Numbers(1,2);

// Prints 10
add4Numbers(3,4);