
export function buttonClickExample(){
  return dispatch => {
    dispatch({
      type: 'EXAMPLE',
      value: 'New Value of what ever'});
  }
}
