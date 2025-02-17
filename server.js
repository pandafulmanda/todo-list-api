var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];

// GET /api/todos
// This should respond with the full list of todo items.

// GET /api/todos/:id
// This should respond with the information for the matching todo item
// by id.
// If the matching todo does not exist, the server should respond
// with a 404 status code.

// POST /api/todos
// This should take the body of the request and add it to todoList.
// Remember to generate a unique id for the new todo item.
// This endpoint should respond with the new item with it's id.

// PUT /api/todos/:id
// This should update the matching todo item by id with the
// body of the request.  The endpoint should respond with the
// updated item.
// If the matching todo does not exist, the server should respond
// with a 404 status code.

// DELETE /api/todos/:id
// This should remove the matching item from the list of todo items.
// This endpoint should respond with the new length of the list.
// If the matching todo does not exist, the server should respond
// with a 404 status code.


app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})