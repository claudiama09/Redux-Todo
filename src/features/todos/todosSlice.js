const initialState = [
    { id: 0, text: 'learn react', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
} 
  
export default function todoReducer(state = initialState, action){
  switch (action.type){
    case 'todo/todoAdded': {
      // const newTodo = {
      //   id: nextTodoId(state),
      //   text: action.payload,
      //   completed: false
      // }
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    }
    case 'todo/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload){
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    default:
      return state;
  }
}