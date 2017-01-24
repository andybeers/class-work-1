
function run() {
    var z;
    var x = 12;
    var y = -42

    if(true) {
        let y = 42;
        console.log(y);
    }
    console.log(y);
}

// run();

for(var i = 0; i < 10; i++) {
    var isEven;
    let isEven;
    if(i % 2 === 0) isEven = 'even';
    console.log(i, isEven);
}

// doesn't work
// console.log(x);