import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDITABLE, EDIT_TODO, COMPLITED, INCOMPLITED} from "../constant/actionTypes"

export  const addTodo = (newTodo) =>{
    return {
        type:ADD_TODO,
        paramAdd: newTodo,
        
    }

}

export  const deleteTodo = (id) =>{
    return {
        type:DELETE_TODO,
        paramDelete: id
    }

}

export const completeTodo = (id) =>{
    return{
        type:COMPLETE_TODO,
        paramComplete : id
    }
}

export const editableTodo = (id) => {
  return {
    type: EDITABLE,
    paramEditable: id
    };
};

export const editTodo = (id,textEditable) => {
  return { 
    type: EDIT_TODO, 
    paramEditId:id,
    paramEditText: textEditable
    };
};

export const done = (id,isCompleted)=>{
    return {
        type : COMPLITED,
        paramComplitedId : id,
        paramComplitedTask : isCompleted

    }
}

export const notDone = (id,isCompleted)=>{
    return {
        type : INCOMPLITED,
        paramComplitedId : id,
        paramComplitedTask : isCompleted
    }
}

