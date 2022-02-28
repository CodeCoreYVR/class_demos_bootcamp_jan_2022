build an express project
1. create a clean folder
2. npm init -y
3. create the main file (index.js)
4. npm i express ejs
5. npm i -D nodemon morgan
6. add start script inside package.json "start": "nodemon"
7. do the set up for express server in index.js
app.set, app.use, app.listen

related to db
8. npm i knex pg
9. createdb dbname (psql -d dbname => \dt)
10. knex init
11. change knexfile.js
12. knex migrate:make name
13. knex migrate:latest(psql -d dbname => \dt)
14. client.js


for using cookies => npm i cookie-parser
for using req.body => urlencoded
for using assets files => path
for using delete/patch routes => method-override
