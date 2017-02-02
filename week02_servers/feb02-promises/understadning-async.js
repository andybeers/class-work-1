function sayHello(name) {
    
    const fn = () => {
        console.log('hello', name);
    };

    setTimeout(() => {
        name = 'replaced';
    }, 500);

    setTimeout(fn, 1000);

}

sayHello('401d5');

