const mongoose = require("mongoose");

Message = require("../models/message");

mongoose.connect('mongodb://localhost/messageboard')

const messages = [{
    title: "mr wiggles",
    body: "body text",
},{
    title: "first message",
    body: "this is the first message",
},{
    title: "coffee",
    body: "we need coffee",
},{
    title: "food",
    body: "we need food",
}]


Message.create(messages)
    .then(result => {
        console.log(result)
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    })