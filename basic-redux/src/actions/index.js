export function moviesList(){
  return {
    type:'MOVIES_LIST',
    payload:[
      {id:'1', name:'Pulp Fiction'},
      {id:'2', name:'NoteBook'},
      {id:'3', name:'Kill Bill'}
    ]
  }
}

export function directorsList(){
  return {
    type:'DIRECTORS_LIST',
    payload:[
      {id:'1', name:'Tarrantino'},
      {id:'2', name:'Scorses'}
    ]
  }
}
