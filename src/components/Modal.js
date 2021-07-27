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
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </div>
          <div>
            <small>Check out</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
