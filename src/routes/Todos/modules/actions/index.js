import database from '../../../../store/database'

export const fetchTodos = () => {
  return dispatch => {
    database.ref('todos').on('value', snapshot => {
      dispatch({
        type: 'FETCH_TODOS',
        payload: (snapshot.val() === null) ? {} : snapshot.val()
      })
    })
  }
} 

export const addTodo = (text) => {
  const todo = {
    text, 
    completed: false
  }
  return dispatch => database.ref('todos').push(todo)
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (todo, id) => {
  todo.completed = !todo.completed
  return dispatch => database.ref('todos/' + id).update(todo)
  // return {
  //   type: 'TOGGLE_TODO',
  //   id
  // }
}
