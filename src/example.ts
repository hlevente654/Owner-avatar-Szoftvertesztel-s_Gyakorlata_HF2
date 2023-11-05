export function hello(people: string[]): string {
  if (people.length === 0) {
    return 'Hello, my friend.';
  }
  const shoutingGreetings: string[] = [];
  const normalGreetings: string[] = [];

  for (const person of people) {
    if (person === person.toUpperCase()) {
      shoutingGreetings.push(person);
    } else {
      normalGreetings.push(person);
    }
  }

  let normM = "";
  if(normalGreetings.length <= 1){
    normM = normalGreetings.join(', ');
  }else {
    const last = normalGreetings.pop();
    normM = `${normalGreetings.join(', ')} and ${last}`;
  }
  const normalGreeting = normalGreetings.length === 0 ? '' : `Hello ${normM}.`;

  let boldM = "";
  if(shoutingGreetings.length <= 1){
    boldM = shoutingGreetings.join(', ');
  }else {
    const last = shoutingGreetings.pop();
    boldM = `${shoutingGreetings.join(', ')} AND ${last}`;
  }
  const shoutingGreeting = shoutingGreetings.length === 0 ? '' : `HELLO ${boldM}!`;

  return `${normalGreeting} ${shoutingGreeting}`.trim();
}