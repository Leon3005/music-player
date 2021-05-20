import React from "react";

const LibrarySong = ({ song }) => {
  return (
    <div className="librarySong">
      <img src={song.cover} alt="song cover"></img>
      <div className="songDescription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
