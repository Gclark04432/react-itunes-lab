import React from 'react';

const SongDetail = (props) => {

  if (!props.selectedSong) return null

  return (
    <section>
      <h2>{props.selectedSong['im:name'].label}</h2>
      <h3>{props.selectedSong['im:artist'].label}</h3>
      <img src={props.selectedSong['im:image'][2].label}/>
    </section>
  )

}

export default SongDetail;
