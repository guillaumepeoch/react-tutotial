import React, { Component } from 'react';
// connect is in charge to connect the Class Component with Redux
import { connect } from 'react-redux';
// pass as the second argument in the connect function
// so that we can have the actions avilable inside this.props
// But it should always be 'dispached'
import { moviesList, directorsList } from './actions';

class App extends Component {

  componentWillMount(){
    this.props.getMovies();
    this.props.getDirectors();
  }

  renderMovies(movies){
    return movies ?
      movies.map(function(movie){
        return (
          <div key={movie.name}> { movie.name } </div>
        );
      }):null;
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.renderMovies(this.props.data.movies)}
      </div>
    );
  }
}

// Always listening for an Action (When there is a new state)
// Inject new state inside the component
// Si that later we are able to access the movies in this.props.movies
// This injects the new state inside the component
const mapStateToProps = function(state){
  return {
    data:state.movies
  }
}

// Best Practice
const mapDispatchToProps = function(dispatch){
  return {
    getMovies:function(){
      dispatch(moviesList())
    },
    getDirectors:function(){
      dispatch(directorsList())
    }
  }
}

// 1 - connect the component App with Redux
// First argument : mapStateToProps
// Second argument : actions
export default connect(mapStateToProps,mapDispatchToProps)(App);
