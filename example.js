var currier = require('currier');

var add4Numbers = currier(function(first, second, third, fourth) {
    console.log(first+second+third+fourth);
});

add4Numbers(1,2);
add4Numbers(3,4);

var add4Numbers = currier(function(first, second, third, fourth) {
    console.log(first+second+third+fourth);
});

add4Numbers(1,2,3);
add4Numbers(4);