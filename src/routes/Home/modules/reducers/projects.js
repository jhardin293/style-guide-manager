const projects = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      console.log('payload:',action.payload,'assignPayload:',
      )
      return action.payload
    default:
      return state
  }
}

export default projects
