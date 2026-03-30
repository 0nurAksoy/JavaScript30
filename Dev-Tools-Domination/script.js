const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }, {name: 'Ares', age: 2}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};
// Regula
  console.log('Hello World!');

  // Interpolate
console.log('Hello, it is a %s string!', 'welcoming');

// Style
console.log(' %c I am some great text', 'font-size:50px; background: blue; text-shadow: 10px 10px 0 yellow')

// warning
console.warn('No, no no no no, NOOOOOOOOOOO');

// Error :
console.error('Oh, shit! Here we go again.');

// Inf
console.info('I going to write a fun fact in here.');

// Testin
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong !');
console.assert(1 === 1, 'That is wrong ! ');

// clearin
console.clear();

// Viewing DOM Element
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} human years old.`);
  console.groupEnd(`${dog.name}`);
});

// countin
console.count('Onur');
console.count('Onur');
console.count('Mehmet');
console.count('Mehmet');
console.count('Ali');
console.count('Ali');
console.count('Halil');
console.count('Halil');
console.count('Halil');
console.count('Ahmet');
console.count('Onur');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(dogs);