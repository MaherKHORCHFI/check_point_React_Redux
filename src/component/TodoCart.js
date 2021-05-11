import { useState } from "react"
import { useDispatch } from "react-redux"
import {deleteTodo,completeTodo,editableTodo,editTodo} from "../redux/actions/TodoActions"

const TodoCart = ({todo}) =>{
    const [newText,setNewText] = useState(todo.text)
    const dispatch = useDispatch()

    const complete = () => {
    dispatch(completeTodo(todo.id))};

    const editabl = () => {
        dispatch(editableTodo(todo.id))
    }


    return(
        <div>
            {
                todo.editable? (
            <>
            <input type='text' value={newText} onChange={e=>setNewText(e.target.value)}/>
            <button onClick={()=>{dispatch(editTodo(todo.id,newText))}}>Save</button>
            <button onClick={editabl}>Cancel</button>
            </>        
                ):(

            <>
            <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}
            <span><input type="checkbox" onChange={complete}/></span>
            </p>
            
            <button onClick={editabl}>Edit</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </>

                )
            }

            

        </div>
    )
}

export default TodoCart