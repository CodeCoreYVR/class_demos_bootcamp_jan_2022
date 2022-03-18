const log = console.log;

//Selecting the div with the id  of "larry-the-lion"

const larryTheLion = document.querySelector("#larry-the-lion")
// log(larryTheLion)

const moneyBagsMichael = document.querySelector("#moneybags-michael")
// log(moneyBagsMichael)

//<node>.querySelector('css-selector') a method provided to us that allows us to select an individual Node within the DOM
//it will only return the first node that matches the selector

//Grab the whole Salmon team
const teamSalmon = document.querySelector(".team.salmon")
// log(teamSalmon)

//Use querySelectorAll to return a NodeList of all the elements that match the css selector
const teams = document.querySelectorAll(".team")
// log(teams)
//querySelectorAll will return all the nodes that match the selector in an Array-like structure.  
//It is NOT an Array but has some built in methods that mimic an array
//for example, iterating with "for .. of" and ".forEach()"

// for (const node of teams){
//     log(node)
// }

// teams.forEach(node => log(node))

const toxicTim = document.getElementById('toxic-tim')
// log(toxicTim)

const teams2 = document.getElementsByClassName('team')
// log(teams2)


//------------Picking Doggos-------->

const moneyBagsMichaelAndLarryTheLion = document.querySelectorAll('#larry-the-lion, #moneybags-michael')
// log(moneyBagsMichaelAndLarryTheLion)

const allTeamTealButFirst = document.querySelectorAll('.team.teal .doggo:not(:first-child)')
// log(allTeamTealButFirst)

const secondDogs = document.querySelectorAll('.team .doggo:nth-child(2)')
// log(secondDogs)


//---------------Select Surrounding Nodes/Navigating Nodes

const inBreadDog = document.querySelector('#inbread-dog')

// log(inBreadDog.previousElementSibling) //if there are no previous siblings, it will return null
// log(larryTheLion.previousElementSibling) //returns the previous sibling to larryTheLion, which is inBreadDog
// log(larryTheLion.nextElementSibling) //returns the next sibling, in this case MoneyBagsMichael
// log(inBreadDog.nextElementSibling.nextElementSibling) //you can chain the methods to grab the specific sibling down the line, in this case MoneyBagsMichael
// log(inBreadDog.parentElement) //this will return div of class roster
// log(inBreadDog.parentElement.parentElement) //this will return div of team teal

const roster = inBreadDog.parentElement //returns the roster element

// log(roster.children[0]) //returns inBreadDog
// log(roster.children[1]) //returns LarryTheLion
// log(roster.children) //returns a HTML Collection that is arry-like and can be iterated through

// log(roster.firstElementChild)
// log(roster.lastElementChild)

//matches

//<node>.matches check if a node matches a css selector and return a boolean
// log(inBreadDog.matches('.team.salmon')) //false
// log(inBreadDog.matches('.team.teal')) //false
// log(inBreadDog.matches('.doggo')) //true

//closest
//<node>.closest('<css-query>')
//Searches all ancestors of element (beginning with itself)
//for the first node that matches the query.
//If no matching ancestors, it will return null
//It can be thought of as a reverse querySelector
// log(toxicTim.closest('div')) //return toxicTim node itself
// log(inBreadDog.closest('.team')) //return team teal node
// log(inBreadDog.closest('.team.salmon')) //return null because team salmon not an ancestor

//-----Manipulating Nodes------>

//When using the . notation, we use camelCase to refer to CSS property names
//for example, border-radius will be style.borderRadius

// inBreadDog.style.border = 'solid medium red';
// teamSalmon.style.backgroundColor = 'orange';
// toxicTim.style.justifyContent = 'center';

//Nodes are just special JS objects, so we can also use the [] notation:
// toxicTim.style["background-image"] = "url(images/paws.jpg)"

//---Computed styles of nodes----->
//To read the actual computed styles of a node, use the global function getComputedStyle(<node>) getComputedStyle(toxicTim);
//this global function is only available in the browser, so using it in our index.js will not work
// getComputedStyle(toxicTim) //return the computed/real styles of the node given as an argument

//----------Changing contents of a node--------->

// <node>.innerHTML property will allow us to get/set the HTML within the selected node 
//it will return all of the HTML content as a string

//<node>.outerHTML property will allow us to get or set the whole node

// log(larryTheLion.outerHTML) //return the whole larryTheLion node
// log(larryTheLion.innerHTML)

// <node>.innerText is a getter/setter for the text within a node - returns all the content with the HTML stripped
// i.e. it effectively just returns the text
// We can change this text by setting it to something else
// toxicTim.innerText = "something new"

//Changing ids and classes
//get or set ids
//<node>.id -> .id gets the id property of the node
//<node>.id = "new id" -> set it to a new id

//Same with a class
//Note: because class is a reserved word, we use camelCase "className" instead to refer to node classes
//<node>.className -> .className gets the class property of the node
//<node>.className = "new class" -> set it to a new class

//classList is an abstraction of className, and even though it's a bit slower to use than ClassName,
//it makes it easier to manipullate nodes.  It returns a special array-like object instead of a string,
//and has extra properties like .add and .remove that csan be used on it.
// toxicTim.classList.add('labourer') //this will add the class css property of 'labourer; to toxicTim
// toxicTim.classList.remove('fighter') //this will remove the css property class of fighter from toxicTim

//getAttribute
//setASttribute
//hasAttribute
//removeAttribute

toxicTim.getAttribute('class') // returns value of class attribute
toxicTim.getAttribute('id') // returns value of id attribute
toxicTim.setAttribute('data-id', '7xz80') //add a data-id attribute with value of 7xz80
// toxicTim.setAttribute('bark', 'woof') //add an attribute bark with value woof
toxicTim.hasAttribute('data-description') //will return false because it does not have an attribute like that
toxicTim.removeAttribute('data-id')

//Remove a node
//<node>.remove() - remove the node permanently
//toxicTim.remove() - will remove toxicTim permanently

//-----Vandalize the arena------>
//1
twoTeams = document.getElementsByClassName('team')

for (const node of twoTeams){
    node.style.backgroundColor = 'fuchsia'
}
//2
allDoggos = document.querySelectorAll('.doggo')

allDoggos.forEach(node => {
    node.innerText = 'Rob the Slob'
})
//3
allDoggos.forEach(node => {
    node.style.backgroundImage = "url(https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80)"
})


//-----------Creating elements------>
const drillBitDarrel = document.createElement('div')
//add an id
drillBitDarrel.id = 'drill-bit-darrel';
//add a class
// drillBitDarrel.className = 'doggo fighter'
drillBitDarrel.classList.add('doggo')
drillBitDarrel.classList.add('fighter')
//add a h1 with the dog name
drillBitDarrel.innerHTML = '<h1> Drill Bit Darrel </h1>'
drillBitDarrel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)'

//drillBitDarrel node has been created, but it needs to be attached to a node on the DOM
//we are going to attach drillBitDarrel to theTeal Team
const teamTeal = document.querySelector('.team.teal')
const tealRoster = teamTeal.querySelector('.roster')

//appendChild -> appends a new node as the last child of an existing node
// tealRoster.appendChild(drillBitDarrel)

//insertBefore -> used to append the new node to a specific position in the node, relative to a sibling node
tealRoster.insertBefore(drillBitDarrel, larryTheLion ) //first argument is new node, second is the node you want to move behind/next to the new node 

//clone nodes
tealRoster.insertBefore(drillBitDarrel.cloneNode(),moneyBagsMichael)
tealRoster.appendChild(drillBitDarrel.cloneNode())




