import { ADD_TODO, DELETE_TODO,COMPLETE_TODO,EDITABLE,EDIT_TODO, COMPLITED,INCOMPLITED} from "../constant/actionTypes";



const initialtState = {
    todos:[
    //      {
    //    id: "",
    //    text: "",
    //    isCompleted: false,
    //    editable : false
    //  },
]
}

export const TodoReducer = (state=initialtState, action) =>{
    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todos:[...state.todos,action.paramAdd]
        }
        break;

        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(todo=>todo.id !== action.paramDelete)
            
        }
        break;

        case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.paramComplete
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
            // { ...todo, isCompleted: false }
        )
      }

      case EDITABLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.paramEditable
            ? { ...todo, editable: !todo.editable }
            : todo
        )
      };
    
      case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.paramEditId
            ? { ...todo, text: action.paramEditText, editable : false }
            : todo
        )
      };


      case COMPLITED :
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.isCompleted === true
            // ? { ...todo, text: action.paramEditText, editable : false }
            // : todo
        )
      };

      case INCOMPLITED :
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          todo.isCompleted === false
          
            
        )
      };
        default: return state
    }
}
