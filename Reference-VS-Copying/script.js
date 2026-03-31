const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

let ad ='Onur';
let ad2 = ad;
console.log(ad, ad2);
ad = 'Ali';
console.log(ad, ad2);

const team = players;
console.log(players, team);
team[3] = 'Lux';
console.log(players, team);

const team2 = players.slice();
team2[3] = 'Poppy';
console.log(team2, players);

const team3 = [].concat(players);
const team4 = [...players];

team4[3] = 'sa as';
console.log(team3, team4);

const team5 = Array.from(players);

// with Objects 
const person = {
  name: 'Wes Bos',
  age: 80,
  social: {
    twitter: '@sss',
    instagram: '@aaa',
    facebook: 'ddd'
  }
};

const captain = person;
captain.number = 99;
console.log(captain);

const captain2 =Object.assign({}, person, {number:45, age : 55});
console.log(captain2);

const dev = Object.assign({}, person);

dev.name = 'wesley';
dev.social.facebook = '@changed';

console.clear();
console.log(person);
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(person));
dev2.social.twitter = '@orWhat';

console.log(person);
console.log(dev2);