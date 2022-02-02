//JS Style:

//file names or variable names
// camelCase or snake_case
// stay consistent

function hello () {
    console.log('hello')
}

// Objects Review:

const guest1 = {
    name: 'Steph',
    email: 'steph@example.com',
    visitTime: '9:10am',
    phone: '778-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime}`)
    }
}

//create more guests
const guest2 = {
    name: 'Bob',
    email: 'bob@example.com',
    visitTime: '12:00pm',
    phone: '555-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime}`)
    }
}

//create another guest
const guest3 = Object.assign({}, guest1)

console.log(guest3)
guest3.name = 'Ken'
guest3.visitTime = '11:10am'
console.log(guest3)
guest3.printGuest()


