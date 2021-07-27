import React from "react";
import $ from "jquery";

const Modal = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    const artist = $("#artist").value;
    const songName = $("#songName").value;
    const songLink = $("#songLink").value;

    if (artist === "" || songName === "" || songLink === "") {
      $(".error-text").remove();
      $(event.target).append(`
      <p class="error-text"> Please fill all fields. </p>
      `);
      return;
    }

    $(".modal-window").hide();
  };

  const onClick = (event) => {
    event.preventDefault();

    $(".modal-window").hide();
  };

  return (
    <div id="open-modal" class="modal-window">
      <div>
        <button class="modal-close" onClick={onClick}>
          Close
        </button>
        <h1>Enter song details:</h1>
        <div>
          <form className="requestForm" onSubmit={onSubmit}>
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
              id="songLink"
            />
            <button type="submit">Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
