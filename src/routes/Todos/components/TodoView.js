import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export const TodoView = () => (
  <div>
    <h1>This is TODOs!</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoView