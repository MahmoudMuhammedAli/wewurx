import React, { useState } from "react";
import Styles from "./note-box.module.scss";
import EditNoteModal from "../edit-note-modal";

const NoteBox = ({ type, body, date, fname, lname }) => {
  const [isEditNoteModalOpened, setIsEditNoteModalOpened] = useState(false);

  return (
    <div
      className={Styles.box}
      style={{
        backgroundColor: `${
          type?.includes("portal")
            ? "#E4F3FF"
            : type?.includes("internal")
            ? "#FFFDE4"
            : "#fff"
        }`,
        paddingTop: `${type ? "2rem" : "1rem"}`,
      }}
    >
      {type && <div className={Styles.box__type}>{type}</div>}

      <div className={Styles.box__body}>{body}</div>
      <footer className={Styles.box__footer}>
        <div className={Styles.box__footer__info}>
          <b className={Styles.box__footer__info__date}>
            {date.toLocaleString()}
          </b>
          <span>
            by {fname} {lname}
          </span>
        </div>
        <div className={Styles.box__footer__buttons}>
          <button
            className={Styles.box__footer__buttons__button}
            onClick={() => setIsEditNoteModalOpened(true)}
          >
            Edit
          </button>
          <button className={Styles.box__footer__buttons__button}>
            Delete
          </button>
        </div>
      </footer>
      <EditNoteModal
        idEditNoteModalOpened={isEditNoteModalOpened}
        setIsEditNoteModalOpened={setIsEditNoteModalOpened}
        body={body}
        type={type}
      />
    </div>
  );
};

export default NoteBox;
