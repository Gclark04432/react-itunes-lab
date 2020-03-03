import React from 'react';

const SongSelector = (props) => {

  const options = props.songs.map(song => {
    return(
      <option value={song.id.attributes['im:id']} key={song.id.attributes['im:id']}>
        {song ['im:name'].label}
      </option>
    )
  })

  return (
    <div>
    <h2>SongSelector</h2>
    <select defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
    </div>
  )

}

export default SongSelector;
