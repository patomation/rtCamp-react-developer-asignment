export function toggleExample(){
  return (dispatch, getState) => {
    dispatch({
      type: 'VISIBLE',
      value: getState.visible ? false : true });
  }
}
