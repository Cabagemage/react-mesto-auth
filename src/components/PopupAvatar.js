import React from "react";
import "../App.css";
import PopupWithForm from "./PopupWithForm";

function PopupAvatar() {
  return (
    <PopupWithForm
    name="avatar"
    form="avatar"
    title="Обновить аватар"
    buttonText="Обновить 123213"
    isOpen={isOpen}
    isClose={isClose}
    closeToOverlay={closeToOverlay}
    children={
      <>
    <div className="popup popup_function_avatar">
      <form novalidate className="popup__form popup__form_function_avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close popup_close_avatar"
          ></button>
          <h2 className="popup__edit">{title}</h2>
          <div className="popup__inputs">
            <input
              type="url"
              name="avatar"
              required
              className="popup__input popup__input_type_link"
              placeholder="Ссылка"
            />
            <span id="avatar-error" className="popup__input_type_error"></span>
          </div>
        </div>
      </form>
    </div>
    </>
      }
    />
  )}

export default PopupAvatar;
