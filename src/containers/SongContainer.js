import React, { Component } from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSongId: ""
    }
    this.selectSongById = this.selectSongById.bind(this);
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(result => result.json())
    .then(songList => this.setState( {songs: songList.feed.entry}))
  }

  selectSongById(songId){
    this.setState({ selectedSongId: songId})
  }

  getSongBySelectedSongId(){
    const selectedSong = this.state.songs.find(song => {
      return song.id.attributes['im:id'] === this.state.selectedSongId
    })
    return selectedSong;
  }

  render() {
    return (
      <div>
      <h1>Current iTunes Top 20</h1>
      <SongSelector songs={ this.state.songs } songIdSelected={ this.selectSongById }/>
      <SongDetail selectedSong={ this.getSongBySelectedSongId() }/>
      </div>
    )
  }

}

export default SongContainer;
