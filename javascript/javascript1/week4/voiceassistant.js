const name = [];
const toDo = [];


function getReply(command) {
    const textToLowerCase = command.toLowerCase();
    // Greetings//
    if(textToLowerCase.includes('hello my name is')) {
    const commandArray = textToLowerCase.split(" ");
    let name = commandArray[commandArray.length -1];
    return `nice to meet you ${name}`;}

    else if (textToLowerCase.includes("hello my name is")) {
    return `I know you already ${name} `;}

    else if (textToLowerCase.includes("what is my name")) {
    return `Your name is ${textToLowerCase[name.length - 1]}`;
    }
    

    else if(name === undefined){
    return `I can not find you in database`;} 

 //To do part//
else if(textToLowerCase.endsWith('todo') || textToLowerCase.endsWith('todo?')) {
    const todoCommand = textToLowerCase.split(" ");
    const addToDo = todoCommand.slice(1, -3);
    const addToDoJoin = addToDo.join(" ");

  if(textToLowerCase.startsWith('add')) {
    toDo.push(addToDoJoin);
    return `${addToDoJoin} added to your todo`;

} else if (textToLowerCase.startsWith('remove')) {
    const removeToFindIndex = toDo.indexOf(addToDoJoin);
    const removeToDo = toDo.splice(removeToFindIndex, 1);
    return `Removed ${addToDoJoin} from my todo`;

} else if(textToLowerCase.startsWith('what is')) {
    return `You have ${toDo.length} todos - ${toDo.join(' and ')}`;

}


}
}

console.log(getReply('Hello my name is NAZAQAT'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add dancing on the floor to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));

