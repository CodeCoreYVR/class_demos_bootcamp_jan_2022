//Exercise RudeBot

function insult(name){
    const randNum = Math.floor(Math.random() * 3)
    //Math.random returns a random number between 0-1

    if (randNum === 0){
        return `${name}, you doofus!`
    } else if (randNum === 1){
        return `${name}, your father smells like strawberries!`
    } else {
        return `${name}, your mother has a hamster!`
    }
}

console.log(insult('Bob'))





