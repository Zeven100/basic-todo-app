import { useState } from 'react' ;
export function CreateTodo(){
    const [title , setTitle] = useState("")
    const [description ,  setDescription] = useState("")
  
    return (
    
        <div>
            <input type="text" placeholder="title" id="title" onChange={function(e){
                const value = e.target.value ;
                setTitle(value);
            }} /><br /><br />
            <input type="text" placeholder="description" id="desc" onChange={function(e){
                const value = e.target.value ;
                setDescription(value);
            }} /><br /><br />
            <button onClick={()=>{
                //axios could make this much simpler
                fetch("http://localhost:3000/todo",{
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        completed : false
                    }),
                    headers : {
                        "Content-Type" : "application/json"
                    }
                }).then(async function(res){
                    const json = await res.json();
                    alert("Todo added")
                }
                )
                
            }}>Add Todo</button>
        </div>
    )
}
