import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo,done, notDone } from "../redux/actions/TodoActions"

 const AddTodo = (todoList) =>{
     const [input,setInput] = useState("")
     const dispatch = useDispatch()
     const add =()=>{
         dispatch(addTodo({id:Math.random() , text:input}))
         setInput('')
     }
 const filterDone =()=> {
      dispatch(done())
     }
const filterNotDone =()=> {
      dispatch(notDone())
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
             <div className='filter-button'>
                 <button onClick={filterDone}>Complte Tasks</button>
                 <button onClick={filterNotDone}>Incomplete Tasks</button>
                 
             </div>
         </div> 
     )
 }

 export default AddTodo