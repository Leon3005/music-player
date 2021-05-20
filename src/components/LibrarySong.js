import React from "react";

const librarySong = ({ currentSong }) => {
  return (
    <div className="librarySong">
      <img src={currentSong.cover} alt="song cover"></img>
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default librarySong;
