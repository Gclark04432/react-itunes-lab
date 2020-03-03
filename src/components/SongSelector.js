import React from 'react';

const SongSelector = (props) => {

  const options = props.songs.map(song => {
    return(
      <option value={song.id.attributes['im:id']} key={song.id.attributes['im:id']}>
        {song['im:name'].label}
      </option>
    )
  })

  function handleSongSelectedId(event){
    const selectedSongId = event.target.value;
    props.songIdSelected(selectedSongId);
  }

  return (
    <select defaultValue="default" onChange={handleSongSelectedId}>
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )

}

export default SongSelector;
