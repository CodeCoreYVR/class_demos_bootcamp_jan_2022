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

const baseUrl = "http://localhost:3000/api/v1/questions";

const Question = {
    // fetch all the question from the rails server
    all() {
        return fetch(baseUrl).then(res => res.json())
    },
    one(qid) {
        return fetch(`${baseUrl}/${qid}`).then(res => res.json())
    }
}

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
})