// Write chatr code here!

// === FECTH API ===

//Routes built into Chatr-Express
//GET /messages -> A JSON array of Messages
//POST /messages -> A confirmation (creates a message)
//PATCH /messages/:id -> A confirmation (edit message)
//DELETE /messages/:id -> A confirmation (deletes a message)

//GET request
//Calling "fetch" with URL as its only argument, it will make
//a GET request to that URL.  It is asynchronous and returns a promise

fetch("http://localhost:3434/messages")
//fetch returns an object that represents the HTTP response
// you can use the asynchronous methods .text() or .json() on the response to
//parse its body  Make sure to return it from the callback
.then(response => response.json())

//.then(data => console.table(data))
.then(console.table)

//list of messages
// const loadMessages = () => {
//     fetch("/messages")
//     .then(res => res.json())
//     .then(messages => {
//         const messagesContainer = document.querySelector("#messages");
//         let messagesHTML = "";
//         messages.forEach(message => {
//             messagesHTML += `
//             <li>
//                 ${message.body}
//                 <i  data-id=${message.id} class="delete-link">x</i>
//             </li>
//             `;
//             messagesContainer.innerHTML = messagesHTML;
//         })
//     })
// }

// //refresh list intermittently
// const refreshIntervalMsg = 3000;
// document.addEventListener("DOMContentLoaded", () => {
//     loadMessages();
//     setInterval(loadMessages, refreshIntervalMsg)
// });

// //POST AJAX req to create hard coded message
// //req Form
// const fd = new FormData();
// fd.set("body", "Hello World!")
// fetch("/messages", {
//     method: "POST",
//     body: fd
// });

// //POST AJAX to create message throught headers and hard coded data
// fetch("/messages", {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify({ body: "Goodbye World"})
// })

//All our requests to messages
const Message = {
    index(){
        return fetch("http://localhost:3434/messages")
        .then(response => response.json())
    },
    create(params){
        return fetch('/messages', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(params)
        })
    },
    delete(id){
        return fetch(`/messages/${id}`, {
            method: "DELETE"
        }) 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const messagesUL = document.querySelector('#messages')
    const messageForm = document.querySelector('#new-message')

    const refreshMessages = () => {
        Message.index()
        .then(messages => {
            messagesUL.innerHTML = messages.map(message => {
                return `
                <li>
                    <strong>#${message.id}</strong>
                    ${message.body}
                    </br>
                    <button data-id=${message.id} class="delete-button">Delete</button>
                </li>
                `;
            }).join('')
        })
    }
    setInterval(refreshMessages, 3000)

    messageForm.addEventListener('submit', event => {
        event.preventDefault()

        const { currentTarget } = event; //the form element

        //Use FormData to create an object representation
        //of key value pairs of the form that we pass as an argument
        //to the constructor
        const formData = new FormData(currentTarget)

        //formData.get returns the value associated with the given key
        //from within the FormData object

        Message.create({ body: formData.get("body")})
        .then(() => {
            console.log("Message Created!")
            refreshMessages()
            currentTarget.reset() //reset empties the form inputs
        })
    })

    messagesUL.addEventListener('click', event => {
        const { target } = event //the element that triggered the event

        if (target.matches('.delete-button')){
            Message.delete(target.dataset.id)
            .then(() => {
                console.log("Message deleted!")
                refreshMessages()
            })
        }
    })
   
})





