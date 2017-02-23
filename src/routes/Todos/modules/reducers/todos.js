const todo = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      console.log(state, 'state', action, 'action')
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS': 
      return action.payload
    case 'TOGGLE_TODO':
      return Object.keys(state).map(t =>
        todo(state, action)
      )
    default:
      return state
  }
}

export default todos
