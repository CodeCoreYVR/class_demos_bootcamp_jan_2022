const baseUrl = "http://localhost:3000/api/v1";

export const Question = {
    // fetch all the question from the rails server
    index() {
        return fetch(`${baseUrl}/questions`).then(res => res.json())
    },
    show(qid) {
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
    destroy(qid) {
        return fetch(`${baseUrl}/questions/${qid}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(res => res.json())
    }
}

export const Session = {
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

