import React from "react";
import Styles from "./edit-note-modal.module.scss";
import Modal from "../../modal";
import EditNoteFields from "../edit-note-fields";

const EditNoteModal = ({
  idEditNoteModalOpened,
  setIsEditNoteModalOpened,
  type,
  body,
  id,
}) => {
  return (
    <Modal isOpen={idEditNoteModalOpened}>
      <div className={Styles.editnote}>
        <button
          onClick={() => setIsEditNoteModalOpened(false)}
          className={Styles.editnote__close}
        >
          <i className='fa fa-close'></i>
        </button>
        <h3 className={Styles.editnote__heading}>Edit note</h3>

        <EditNoteFields
          type={type}
          body={body}
          initialValues={{
            body,
            isInternal: type?.toLowerCase() === "internal",
          }}
        />

        <footer className={Styles.editnote__footer}>
          <button
            className={Styles.editnote__cancel}
            onClick={() => setIsEditNoteModalOpened(false)}
          >
            Cancel
          </button>
          <button className={Styles.editnote__update}>Update</button>
        </footer>
      </div>
    </Modal>
  );
};

export default EditNoteModal;
