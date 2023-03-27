const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// variable to store the referance of players 
const team = players;
// variable to store copy of players
const team1 = [...players];
// variable to copy of persons object
const cap1 = {...persons};
export {players,person,team,team1,cap1}
