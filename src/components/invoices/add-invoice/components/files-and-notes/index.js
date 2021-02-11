import React from "react";
import Styles from "./files-and-notes.module.scss";

const FilesAndNotes = (props) => {
  return (
    <div className={Styles.files}>
      <p className={Styles.files__p}>
        Please save the invoice prior to adding notes/documents.
      </p>
    </div>
  );
};

export default FilesAndNotes;
