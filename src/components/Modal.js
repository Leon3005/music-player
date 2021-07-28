import React from "react";
import $ from "jquery";
import sendData from "../utils/sendData";

const Modal = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const artist = $("#artist").val();
    const songName = $("#songName").val();
    const songLink = $("#songLink").val();

    if (!artist || !songName || !songLink) {
      $(".fieldError").remove();
      $(event.target).append(`
      <p className="fieldError"> Please fill all fields. </p>
      `);
      return;
    }

    const matchYoutubeUrl = (url) => {
      const p =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (url.match(p)) {
        return true;
      }
      return false;
    };

    const validUrl = matchYoutubeUrl(songLink);

    if (!validUrl) {
      $(".fieldError").remove();
      $(".linkError").remove();
      $(event.target).append(`
      <p className="linkError"> Please verify your YouTube link. </p>
      `);
      return;
    }

    const body = {
      artist,
      songName,
      songLink,
    };

    const { data, error } = await sendData(
      process.env.API_URL || "http://localhost:4000/api/requests",
      body
    );

    if (error) {
      $(".sendError").remove();
      $(event.target).append(`
      <p className="sendError"> Error making request. Please try again later. </p>
      `);
      return;
    }

    if (!error && !data) {
      $(".sendLoading").remove();
      $(event.target).append(`
      <p className="sendLoading"> Request is being sent. Please wait... </p>
      `);
      return;
    }

    $(".modal-window").hide();

    $(".requestForm")[0].reset();
  };

  const onClick = (event) => {
    event.preventDefault();

    $(".modal-window").hide();
  };

  return (
    <div id="open-modal" className="modal-window">
      <div>
        <button className="modal-close" onClick={onClick}>
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
