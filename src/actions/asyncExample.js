export function asyncExample(){
  return (dispatch) => {
    //Some async action
    return {
      success: true
    }
  }
}


//Works by using somewhere....
dispatch(asyncExample()).then( result => {
  console.log(result.success);
})
