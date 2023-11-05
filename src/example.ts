export function hello(people: string[]): string {

  if (people.length === 0) {
    return 'Hello, my friend.';
  }

  const koszon: string[] = [];
  const shoutingGreetings: string[] = [];

  for (const person of people) {
    if (person === person.toUpperCase()) {
      shoutingGreetings.push(person);
    } else {
      koszon.push(person);
    }
  }
  let greetingMessageNorm = 'Hello ';
  if(koszon.length === 1 ){
    greetingMessageNorm += koszon[0] + '.';
  } else if (koszon.length > 1 ) {
    for(var i = 0; i < koszon.length; i++){
      if (i === koszon.length-1){
        greetingMessageNorm = greetingMessageNorm.slice(0, -2) + ' ';
        greetingMessageNorm += "and " + koszon[i] + ".";
      } else{
        greetingMessageNorm += koszon[i] + ", ";
      }
    }
  }

  let greetingMessageBold = 'Hello ';
  if (shoutingGreetings.length === 1 ){
    greetingMessageBold = "HELLO " + shoutingGreetings[0] + "!";
  } else if (shoutingGreetings.length > 1 ) {
    greetingMessageBold = 'HELLO ';
    for(var i = 0; i < shoutingGreetings.length; i++){
      if (i === shoutingGreetings.length-1){
        greetingMessageBold = greetingMessageBold.slice(0, -2) + ' ';
        greetingMessageBold += "AND " + shoutingGreetings[i] + "!";
      } else{
        greetingMessageBold += shoutingGreetings[i] + ", ";
      }
    }
  }

  if(shoutingGreetings.length === 0 && koszon.length > 0){
    return greetingMessageNorm;
  } else if(shoutingGreetings.length > 0 && koszon.length === 0){
    return greetingMessageBold;
  } else if(shoutingGreetings.length !== 0 && koszon.length !== 0){
    return greetingMessageNorm + " " + greetingMessageBold;
  } 

    return "";
  }