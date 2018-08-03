import React,{ Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getArtist, clearArtist } from '../actions';

class Artist extends Component {

    state= {
        artist:[]
    }


    componentWillMount() {
        this.props.artistId(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearArtistDetail();
        console.log(this.props.data)
    }

    render(){
        let artist = this.props.data ? this.props.data[0] : {};
        return (
            <div className="artist_view">
                <div className="artist_background" style={{
                    background:`url(/images/${artist.cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{artist.name}</div>
                </div>
                <div className="artist_description">
                    <p>{artist.bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {artist.style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    { artist.albums ?
                        artist.albums.map( item =>(
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>
                            </div>

                        </div>
                    ))
                    :null
                }
                </div>
            </div>
        );
    }
};


const mapStateToProps = function(state){
  return {
    data:state.artists.artist
  }
}

// Best Practice
const mapDispatchToProps = function(dispatch){
  return {
    artistId:function(artistId){
      dispatch(getArtist(artistId))
    },
    clearArtistDetail:function(){
      dispatch(clearArtist())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist);
