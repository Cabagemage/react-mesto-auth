import React from "react";
function InfoToolTip({onRegister, isClose, closeToOverlay }) {
  return (
    <div
      className={`popup   popup_function_registration ${onRegister && "popup_opened"}  `}
      onClick={closeToOverlay}
    >
      <div className="popup__container popup__container_function_registration">
        <button
          type="button"
          className="popup__close popup__close_current_image"
          onClick={isClose}
        ></button>
        {/* <img className="image" src={card && card.link} alt="" /> */}
        <h2 className="popup__container popup__container_content_name">
          TestPopup
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
