export default function(prevState = {}, action){
  switch (action.type) {
    case 'ARTISTS':
        return {
          ...prevState,
          artists:action.payload
        }
      break;
      case 'ARTIST':
          return {
            ...prevState,
            artist:action.payload
          }
        break;
    default:
      return prevState;
  }
};
