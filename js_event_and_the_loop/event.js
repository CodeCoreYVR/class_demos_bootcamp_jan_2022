// window.addEventListener('load', () => {

// })

// once the page is loaded, then we can start grabbing the elements and bind the event listener on them
window.onload = () => {
    document.addEventListener('click', () => {
        console.log("The document was clicked!")
    })

    const toxicTim = document.querySelector("#toxic-tim");
    toxicTim.addEventListener('click', function (event) {
        console.log("Toxic Tim was clicked!");
        console.log("target: ", event.target);
        console.log("currentTarget:", this);
        console.log("clientX: ", event.clientX);
        console.log("clientY: ", event.clientY);
    })

    const allTitles = document.querySelectorAll(".doggo.fighter h1");
    allTitles.forEach(node => {
        node.addEventListener('click', () => {
            console.log("Doggo Name was clicked!")
        })
    })

    const teamSalmon = document.querySelector(".team.salmon");

    teamSalmon.addEventListener("click", function (event) {
        console.log("team salmon was clicked!");
        console.log("event: ", event)
        console.log('----------------');
        console.log('type: ', event.type);
        // the name the event
        console.log("target: ", event.target);
        // event.target returns the actual element which triggered this event(click)
        // which element that you clicked on
        console.log("currentTarget: ", event.currentTarget);
        // event.currentTarget always returns the element that owns this event listener
        console.log("this: ", this)
        // the key word this returns event.currentTarget if it's not inside the arrow function!
    })

    const doggos = document.querySelectorAll(".doggo.fighter");
    doggos.forEach(doggoNode => {
        doggoNode.addEventListener('dblclick', event => {
            event.currentTarget.classList.toggle("inverted")
        });

        doggoNode.addEventListener("mousedown", event => {
            event.currentTarget.classList.add("flipped");
        })
        doggoNode.addEventListener("mouseup", event => {
            event.currentTarget.classList.remove("flipped")
        })
    })

    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(inputNode => {
        // this input is the event name, when you type something inside input boxes
        inputNode.addEventListener("input", event => {
            const keySound = new Audio('sounds/vintage-keyboard-1.wav');
            keySound.play();
        })
    })

    document.querySelector("#application-form").addEventListener("submit", event => {
        event.preventDefault();
        // prevents the default behaviour of this form
        const submitSound = new Audio("sounds/small-explosion.wav");
        submitSound.play();
    })

    let lettersTyped = "";
    document.addEventListener("keydown", event => {
        lettersTyped += event.key;
        if (lettersTyped.slice(lettersTyped.length - 5) == "panic") {
            // redirect 
            window.location.href = "http://hackertyper.net"
        }
        console.log(event)
        // you can get these altKey, shiftKey, ctrlKey and metaKey from the event obj.
        // these keys return true or false
    })


}