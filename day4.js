Promise.resolve().then(() => console.log('1'));

setTimeout(() => console.log('2'), 10);

//task queue handle the call back from the Web API function
queueMicrotask (() => {
    console.log('3');
    queueMicrotask(() => console.log('4'));
})

//microtask queue handle the functin body after await and the .then(), .catch() and .finally() of the promise
console.log('5');