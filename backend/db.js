
const mongoose = require("mongoose")
// Never push mongodb links on github !!!

mongoose.connect("mongodb+srv://admin:IRi1BHNQ5Pn4A3YK@cluster0.mq6wgc5.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title :String ,
    description : String ,
    completed : Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}