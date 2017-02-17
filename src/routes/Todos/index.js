import TodoView from './components/TodoView';
export default (store) => {
  console.log(TodoView, 'view');
  let route = {
    path: 'todos',
    component: TodoView
  }
  return route;
}