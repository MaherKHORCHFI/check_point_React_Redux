import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/actions/TodoActions"

 const AddTodo = () =>{
     const [input,setInput] = useState("")
     const dispatch = useDispatch()
     const add =()=>{
         dispatch(addTodo({id:Math.random() , text:input}))
         setInput('')
     }
     return(

         

         <div className='add_todo'>
             <h1>TODO APP</h1>
             <input
             className='input' 
             value={input} onChange={(e)=>setInput(e.target.value)}
             type='text'
             placeholder='write to add new Todo'
             /> 
             <button onClick={add}>Add</button>
         </div> 
     )
 }

 export default AddTodo