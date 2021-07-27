import React from "react";
import LibrarySong from "./LibrarySong";
import $ from "jquery";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const onClick = () => {
    $(".modal-window").show();
  };

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="librarySongs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
      <button onClick={onClick}>Request a song!</button>
    </div>
  );
};

export default Library;
