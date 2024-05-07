//Create an object representing a person with 
// properties such as name, age, and email. Write a
//  function that takes an array of these objects and returns a 
//  new array containing only the people who are over 30 years old.



const peopleOver30 = people => people.filter(person => person.age > 30);
