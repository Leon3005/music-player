import React from "react";
import librarySong from "./LibrarySong";

const Library = () => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="librarySongs">
        <librarySong />
      </div>
    </div>
  );
};

export default Library;
