import axios from 'axios';
const URL = "http://localhost:3004";

export function artistsList(){

  const artistsRequest = axios.get(`${URL}/artists?_limit=6`)
  .then(function(response){
     return response.data
  })

  return {
    type:'ARTISTS',
    payload: artistsRequest
  }

}


export function searchArtist(name){
  const artistsRequest = axios.get(`${URL}/artists?q=${name}`)
  .then(function(response){
     return response.data
  })

  return {
    type:'ARTISTS',
    payload: artistsRequest
  }
}
