const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
  p.addEventListener('onclick', function() {
      makeGreen();
});
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string', '✨');
// Newer version
// console.log(`Hello I am a ${var} string`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 black');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('This displays information');

// Testing
// This will not show up, because the 1 === 1 is true.
console.assert(1 === 1, 'That is wrong'); 
// If we change it, it will log
console.assert(1 === 2, 'That is wrong');
// or we can do this
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');
// Basically we can test for something, and it it is wrong it will throw us the error in the console, if it is true nothing will happen

// clearing the console
console.clear();

// Viewing DOM Elements
// Shows us all the different properties and methods
console.log(p); // actual element itseld
console.dir(p); // drop-down 

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`); // we can also use console.groupCollapsed()
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} old`);
    console.log(`${dog.name} is ${dog.age * 7} old`);
    console.groupEnd(`${dog.name}`); // closing with the opening line
});

// counting
// This will show us how many times something wass logged
console.count('Whatever');

// timing
// Setting a timer
console.time('fetching data'); // specifying the task
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); // make sure to use the specified name of the task set in the first line
        console.log(data);
    });

// +1 is console.table() 