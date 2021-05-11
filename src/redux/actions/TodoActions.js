import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDITABLE, EDIT_TODO} from "../constant/actionTypes"

export  const addTodo = (newTodo) =>{
    return {
        type:ADD_TODO,
        paramAdd: newTodo
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


