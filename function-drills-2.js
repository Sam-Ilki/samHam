function jediName(firstName, lastName){
  return jName = lastName.slice(0, 3) + 
  firstName.slice(0, 2);
}

jediName('Samantha', 'Ambroise');


function beyond(num){
  if (num === Infinity){
      console.log('And beyond');
  }
  if (isFinite(num) && num > 0){
      console.log('To infinity');
  }
  if (isFinite(num) && num < 0){
      console.log('To negative infinity')
  }
  if (num === 0){
      console.log('Staying home')
  }
}

beyond(40);

