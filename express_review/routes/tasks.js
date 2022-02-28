const express = require("express");
const knex = require("../db/client");

const router = express.Router();

router.get('/', (req, res) => {
    knex("tasks").select("*").orderBy("created_at", "desc")
        .then(data => {
            res.render("tasks/index", {
                tasks: data
            })
        })
})

router.get('/new', (req, res) => {
    if (req.cookies.username) {
        res.render("tasks/new_task")
    } else {
        res.render("users/login")
    }
});

router.post("/", (req, res) => {
    const taskParams = {
        title: req.body.title,
        body: req.body.body
    }
    knex("tasks").insert(taskParams).then(data => {
        res.redirect("/tasks");
    })
})

module.exports = router;