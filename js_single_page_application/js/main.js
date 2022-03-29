// "http://localhost:3000/api/v1/questions" // =>  GET index
// "http://localhost:3000/api/v1/questions/4"  //=> GET show
// "http://localhost:3000/api/v1/questions" // POST create
// "http://localhost:3000/api/v1/questions/99" // DELETE destroy
// "http://localhost:3000/api/v1/questions/82" // PATCH update

// Cross-Origin requests happen in the following cases
// 1. when we try to make a request from a different domain to our API
// e.g. a request from facebook to google => two completely different domains
// 2. when we try to make a request from the same domain but different ports
// e.g. localhost:9999 => localhost:3000
// 3. when we try to make a request from the same domain but different protocols
// e.g. http://localhost:3000 => https://locahost:3000
// 4. when we try to make a request from a sub domain to a domain
// e.g. developers.google.com => www.google.com

const baseUrl = "http://localhost:3000/api/v1";

const Question = {
    // fetch all the question from the rails server
    all() {
        return fetch(`${baseUrl}/questions`).then(res => res.json())
    },
    one(qid) {
        return fetch(`${baseUrl}/questions/${qid}`).then(res => res.json())
    },
    create(params) {
        return fetch(`${baseUrl}/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
            credentials: "include"
        }).then(res => res.json())
    },
    update(params, qid) {
        return fetch(`${baseUrl}/questions/${qid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
            credentials: "include"
        }).then(res => res.json())
    },
    delete(qid) {
        return fetch(`${baseUrl}/questions/${qid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => res.json())
    }
}

const Session = {
    create(params) {
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
            credentials: "include"
        }).then(res => {
            return res.json()
        })
    }
}

Session.create({ email: "admin@user.com", password: "123" }).then(res => {
    console.log(res)
})

Question.all().then(questions => {
    // console.log(questions)
    let questionsHTML = '';
    questions.forEach(question => {
        questionsHTML += `
        <li>
            <a class="question-link" data-qid="${question.id}">
                <span>${question.id}</span>
                ${question.title}
            </a>
        </li>
        `
    })
    document.querySelector(".question-list").innerHTML = questionsHTML;
})


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navbar > a").forEach(aTag => {
        aTag.addEventListener("click", event => {
            event.preventDefault();
            // remove the active class from other a tags
            document.querySelector(".item.active").classList.remove("active");
            // put active class on the a tag that we clicked on
            event.currentTarget.classList.add("active");

            // remove the active class from the sections
            document.querySelector(".page.active").classList.remove("active")
            // find out the section that we need to add the active class then add on it
            const sectionId = event.currentTarget.getAttribute("data-target");
            document.querySelector(`#${sectionId}`).classList.add("active")
        })
    })

    document.querySelector(".question-list").addEventListener("click", event => {
        const questionId = event.target.getAttribute("data-qid");
        if (questionId) {
            Question.one(questionId).then(question => {
                console.log(question)
                // redirection
                document.querySelector(`[data-target="question-show"]`).click()
                // display the content in that show section
                const questionHTML = `
                    <div class="ui segment question-show-container">
                        <div class="ui header">${question.title}</div>
                        <p>${question.body}</p>
                        <small>Asked by: ${question.author.full_name}</small>
                        <a class="ui right floated orange button link" data-target="question-edit" data-id="${question.id}" href="">Edit</a>
                        <a class="ui right floated red button link" data-target="delete-question" data-id="${question.id}" href="">Delete</a>
                    </div>
                    <div class="ui segment">
                        <h3 class="ui horizontal divider">Answers</h3>
                        <ul class="ui relaxed divided list">
                            ${question.answers.map(answer => `<div class="item">${answer.body} | answered by: ${answer.author_full_name}</div>`).join("")}
                        </ul>
                    </div>
                `
                document.querySelector("#question-show").innerHTML = questionHTML;
            })
        }
    })

    document.querySelector("#new-question-form").addEventListener("submit", event => {
        event.preventDefault();
        const titleText = document.querySelector("#title").value;
        const bodyText = document.querySelector("#body").value;
        Question.create({ title: titleText, body: bodyText }).then(res => {
            console.log(res)
        })
    })

    document.querySelector("#question-show").addEventListener("click", event => {
        event.preventDefault();
        const buttonTarget = event.target.getAttribute("data-target");
        if (buttonTarget) {
            // we clicked the buttons
            if (buttonTarget === 'question-edit') {
                // clicked the edit button
                // redirect to the edit page
                document.querySelector(`[data-target="question-edit"]`).click();
                // fill the content of the edit form
                const qid = event.target.getAttribute("data-id");
                Question.one(qid).then(question => {
                    document.querySelector("#edit-title").value = question.title;
                    document.querySelector("#edit-body").value = question.body;
                    document.querySelector("#edit-id").value = question.id
                })
            } else {
                // clicked the delete button
                const qid = event.target.getAttribute("data-id");
                Question.delete(qid).then(res => {
                    console.log(res)
                })
            }
        }
    })
    document.querySelector("#edit-question-form").addEventListener("submit", event => {
        event.preventDefault();
        const editTitle = document.querySelector("#edit-title").value;
        const editBody = document.querySelector("#edit-body").value;
        const editId = document.querySelector("#edit-id").value;
        Question.update({ title: editTitle, body: editBody }, editId).then(res => {
            console.log(res)
        })
    })
})