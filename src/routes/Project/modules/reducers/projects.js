const projects = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECT':
      return action.payload
    default:
      return state
  }
}

export default projects