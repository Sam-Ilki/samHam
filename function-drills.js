function getYearOfBirth(age){
  return 2018 - age;
}

function createGreeting(name, age){ 
  if (name === undefined || age === undefined) {
      throw new Error('Arguements not valid.');
  }
  
  if (age < 0 || typeof age !== 'number') {
      throw new Error('Age cannot be negative and must be a number.');
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.
   I was born in ${yob}.`;
}

try {
  const greeting1 = createGreeting('Samantha', 25); 
  console.log(greeting1);
} catch(e) {
    console.error(e.message);
}
