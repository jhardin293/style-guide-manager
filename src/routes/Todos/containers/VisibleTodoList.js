import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../modules/actions'
import TodoList from '../components/TodoList'
import { filterObject } from '../../../helpers'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return filterObject(todos, t => t.completed) 
    case 'SHOW_ACTIVE':
      return filterObject(todos, t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  const  todos = {
    todos: getVisibleTodos(state.todos.todos, state.todos.visibilityFilter)
  }
  return todos
}

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo,
  fetchTodos: fetchTodos
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
