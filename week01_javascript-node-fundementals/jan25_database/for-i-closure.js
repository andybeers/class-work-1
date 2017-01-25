
function makeClosure(n) {
    return function() {
        console.log(n);
    }
}

for(var i = 0; i < 10; i++) {
    setTimeout(makeClosure(i), i*10);
}
