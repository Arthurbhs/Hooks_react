export function numberAdd2(dispatch){

 fetch('url')
  .then(resp => resp.json())
  .then(json => dispatch({type: 'userListReady', payload: json}))

    dispatch({type: 'number_add2'})
}