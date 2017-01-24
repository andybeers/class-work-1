var n = +process.argv[2];
var stdout = process.stdout;

var fizzle;
for(var i = 1; i <= n; i++) {
    fizzle = '';
    if(i % 3 === 0) {
        fizzle = 'fizz';
    }
    
    if(i % 5 === 0) {
        fizzle += 'buzz';
    }

    if(!fizzle) fizzle = i;
    
    stdout.write(fizzle + '\n');
    
}