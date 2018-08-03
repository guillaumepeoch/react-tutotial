import React, { Component } from 'react';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

import { connect } from 'react-redux';
import { artistsList, searchArtist } from '../actions';

class Home extends Component {

    state = {
        artists:[]
    }

    componentWillMount() {
        this.props.getArtists();
    }


    getKeywords = (event) => {
        let key = event.target.value;
        console.log(key)
        this.props.searchArtist(key)
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.data.artists}/>
            </div>
        )
    }

}

const mapStateToProps = function(state){
  return {
    data:state.artists
  }
}

// Best Practice
const mapDispatchToProps = function(dispatch){
  return {
    getArtists:function(){
      dispatch(artistsList())
    },
    searchArtist:function(key){
      dispatch(searchArtist(key))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
