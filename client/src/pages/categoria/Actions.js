import dispatcher from '../../dispatcher'

export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_CAT',
    text
  })
}
