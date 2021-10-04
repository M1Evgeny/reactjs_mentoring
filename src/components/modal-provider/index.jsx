import React from "react";
import { useModal } from "../context/modal-context";
import { ModalWindow } from "../modal-window";
import { DeleteModal } from "../delete-modal";
import { SuccessModal } from "../success-modal";

export const ModalProvider = () => {
  const [modalObject, setModalObject] = useModal();

  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    if (currentClass === "modal-background" || currentClass === "close") {
      setModalObject({ modalType: "" });
    }
  };

  switch (modalObject.modalType) {
    case "add-movie":
      return (
        <ModalWindow
          hidden={false}
          handleModalClose={handleModalClose}
          modalTitle={"ADD MOVIE"}
        />
      );
    case "delete-modal":
      return <DeleteModal hidden={false} handleModalClose={handleModalClose} />;
    case "edit-movie":
      return (
        <ModalWindow
          hidden={false}
          handleModalClose={handleModalClose}
          modalTitle={"EDIT MOVIE"}
          id={modalObject.id}
        />
      );
    case "success-modal":
      return (
        <SuccessModal hidden={false} handleModalClose={handleModalClose} />
      );
    default:
      return "";
  }
};
