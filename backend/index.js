const express = require("express")
const app = express();
const {updateTodo} = require("./types")
const {createTodo} = require("./types")
app.use(express.json());
const {todo} = require("./db")
const cors = require("cors");
app.use(cors());
app.post("/todo",async(req,res)=>{
    const createPayload = req.body ;
    const parsePayload = createTodo.safeParse(createPayload) ;
    if(!parsePayload.success){
        res.status(411).json({
            msg : "Your sent the wrong inputs"
        })
        return ;     
    }
    else{
        // put it in mongodb
        await todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : false
        })
        res.json({
            msg : "Todo created !"
        })
    }
})
app.get("/todos",async (req,res)=>{
    const response = await todo.find({
        completed : false
    })
    res.json({
        todos : response
    })
})
app.put("/completed",async(req,res)=>{
    const createPayload = req.body ;
    const parsePayload = updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You have sent the wrong inputs ."
        })
        return ;
    }
    else{
        //update in mongodb
        await todo.updateOne({
            _id : req.body.id
        },{
            completed : true
        })
        res.json({
            msg:"Todo marked as completed ."
        })    
    }
})
const PORT = 3000 ;
app.listen(PORT , (
    console.log(`application listening at port : ${PORT}`)
))