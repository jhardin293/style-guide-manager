import React, { PropTypes, Component } from 'react'
import Todo from './Todo'

class TodoList extends Component  {
  componentWillMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, onTodoClick } = this.props
    return (
      <ul>
        {Object.keys(todos).map(todo =>
          <Todo
            key={todo}
            {...todos[todo]}
            onClick={() => onTodoClick(todos[todo], todo)}
          />
        )}
      </ul>
    ) 
  }
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

export default TodoList
