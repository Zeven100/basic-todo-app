
const mongoose = require("mongoose")
// Never push mongodb links on github !!!

mongoose.connect("your-mongodb-link")
const todoSchema = mongoose.Schema({
    title :String ,
    description : String ,
    completed : Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}
