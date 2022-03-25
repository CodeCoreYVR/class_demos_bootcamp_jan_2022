//AJAX - Asynchronous Javascript and XML

//AJAX is a set of techniques to fetch data from a server asynchronously
//without interfering with the display and behaviour of the existing page in the browser
//What this means is that our page loads while in the background AJAX fetches data
//from the server and makes it available for our use

//----------Add a JSON server globally:------>
// npm i -g json-server

// To run in our project:
// json-server api/data.json

//All Web browsers have a biuilt in tool for AJAX
//Called XMLHttpRequest
//This tool does all the heavy lifting for us
//is establishes a connection with the 'url' that we we want to send and receive from

//----------------XMLHttpRequest-------------->

//to use it, we need to set an instance of it:
const students = new XMLHttpRequest();

//specify what we want to do with it:
students.open("GET", "http://localhost:3000/students");
//open method is available to us through XMLHttpRequest
//takes two arguments:
//first: specify whether we want to send or receive data
//based on http verbs: GET, POST, PUT, PATCH, DELETE
//second: the urll the request will be sent to

students.onload = () => {
    console.log("XML Students: ", JSON.parse(students.responseText))
};

//up to this point we defined our request and finally we need to trigger the request:
students.send();






