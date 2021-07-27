import React from "react";

const Modal = () => {
  return (
    <div>
      <div id="open-modal" class="modal-window">
        <div>
          <a href="#" title="Close" class="modal-close">
            Close
          </a>
          <h1>Enter song details:</h1>
          <div>
            <form className="requestForm">
              <input
                type="text"
                name="artist"
                className="form-style"
                placeholder="Artist"
                id="artist"
              />
              <input
                type="text"
                name="songName"
                className="form-style"
                placeholder="Song Name"
                id="songName"
              />
              <input
                type="text"
                name="songLink"
                className="form-style"
                placeholder="Song Youtube Link"
                id="songLame"
              />
              <button type="submit">Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
