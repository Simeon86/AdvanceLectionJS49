console.log('/////////////////////////////////////////////////////////////////');

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection49JS/lection47/' + src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Failed to load'));

        document.head.append(script)
    });
}

let promise = loadScript('script.js');

let promise2 = loadScript('script2.js');

promise.then(script => console.log(script), err => console.log(err));

promise.then(script => console.log(script));

promise2.then(script => console.log(script), err => console.log(err));

console.log('///////////////////////////Promise Chaining//////////////////////////////////////');

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
}).then(function(result) {
    console.log(result);
    return result * 2;
})

console.log('////////////////////////////////////////////////////////////////////');

let promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})

promise3.then(function(result) {
    console.log(result);
    return result * 2;
})

promise3.then(function(result) {
    console.log(result);
    return result * 2;
})

promise3.then(function(result) {
    console.log(result);
    return result * 2;
})

promise3.then(function(result) {
    console.log(result);
    return result * 2;
})

console.log('////////////////////////////////////////////////////////////////////');

function loadScript1(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection49JS/lection47/' + src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Failed to load'));

        document.head.append(script)
    });
}

loadScript1('script.js').then(script => {
    console.log(script);
    return loadScript1('script2.js');
}).then(script => {
    console.log(script);
    return loadScript1('script3.js');
}).then(script => {
    console.log(script);
    return loadScript1('script3.js');
}).then(script => {
    console.log(script);
    return loadScript1('script3.js');
}).then(script => {
    console.log(script);
    return loadScript1('script3.js');
})

console.log('////////////////////////////////////////////////////////////////////');

function loadScript2(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection49JS/lection47/' + src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('Failed to load'));

        document.head.append(script)
    });
}

loadScript2('script.js')
    .then(script => loadScript2('script2.js'))
    .then(script => loadScript2('script3.js'))
    .then(script => {
        sayHello();
        sayBye();
        foo();
})

