import React from 'react';


const moviesList = function(props){

  const movies = props.movies ?
      props.movies.map(function(movie,i){
        return (
          <div key={i}> { movie.name } </div>
        );
      }):null;

  return (
    <div>
      {movies}
    </div>
  )
};

export default moviesList
