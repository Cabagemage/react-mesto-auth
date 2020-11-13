import React from "react";
import PopupWithForm from "./PopupWithForm";
import { currentUserContext } from "../contexts/currentUserContext";

export default function EditProfilePopup({
  isOpen,
  isClose,
  closeToOverlay,
  onUpdateUser,
}) {
  const [name, updateUserName] = React.useState('');
  const [about, updateAboutInfo] = React.useState('');

  const currentUser = React.useContext(currentUserContext);

  React.useEffect(() => {
    updateUserName(currentUser.name);
    updateAboutInfo(currentUser.about);
  }, [currentUser.name, currentUser.about]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      name="edit"
      form="edit"
      title="Редактировать профиль"
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      btnClassName="edit"
      isOpen={isOpen}
      isClose={isClose}
      closeToOverlay={closeToOverlay}
      children={
        <>
          <div className="popup__inputs">
            <input
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              value={name}
              onChange={(e) => updateUserName(e.target.value)}
              required
              className="popup__input popup__input_type_name"
              placeholder="Имя"
            />
            <span id="name-error" className="popup__input_type_error"></span>

            <input
              type="text"
              name="about"
              minLength="2"
              maxLength="200"
              value={about}
              required
              onChange={(e) => updateAboutInfo(e.target.value)}
              className="popup__input popup__input_type_job"
              placeholder="Работа"
            />
            <span id="about-error" className="popup__input_type_error"></span>
          </div>
        </>
      }
    />
  );
}
