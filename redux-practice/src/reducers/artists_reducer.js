export default function(prevState = {}, action){
  switch (action.type) {
    case 'ARTISTS':
        return {
          ...prevState,
          artists:action.payload
        }
      break;
    default:
      return prevState;
  }
};
