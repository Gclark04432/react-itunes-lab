import React, { Component } from 'react';
import SongSelector from '../components/SongSelector';

class SongContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSongId: ""
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(result => result.json())
    .then(songList => this.setState( {songs: songList.feed.entry}))
  }

  render() {
    return (
      <div>
      <h1>SongContainer</h1>
      <SongSelector songs={ this.state.songs }/>
      </div>
    )
  }

}

export default SongContainer;
