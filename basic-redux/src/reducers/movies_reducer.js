// // THE REDUCER SETS THE STATE TO THE PAYLOAD ACORDING TO THE TYPE
//
// // FAKE Data to pretend like data is coming in...
// // This comes from the Action Creator
// const action = {
//   type:'MOVIES_LIST',
//   payload:[
//     {id:'1', name:'Pulp Fiction'},
//     {id:'2', name:'NoteBook'},
//   ]
// }
//
// // Reducer
//
// let state = 0;


export default function(prevState = {}, action){
  switch (action.type) {
    case 'MOVIES_LIST':
        return {
          ...prevState,
          movies:action.payload
        };
      break;
    default:
      return prevState
  }
};
