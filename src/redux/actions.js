export function changeText(payload) {
  return {
    type: 'CHANGE_TEXT',
    payload
  }
}

export function thunkAction(payload) {
  return (dispatch) => {
    dispatch(changeText(payload));

    return {
      type: 'THUNK_ACTION',
      payload
    }
  }
}
