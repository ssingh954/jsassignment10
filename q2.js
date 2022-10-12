/*
Q2. Is filter a Higher Order function in Javascript ?If yes, why ?
Ans. 
Yes filter a HOF in Js because filter function takes in a call back that returns either true or false value
*/

const students = [
    { name: 'John James', status: true},
    { name: 'Micheal Obi', status: false },
    { name: 'Bola Ade', status: true },
    { name: 'Emmanuel', status: false },
    { name: 'Faithfulness', status: true },
  ];
  const presentStudent =students.filter(student => student.status == true);
  console.log(presentStudent);