import React from "react";
import Styles from "./files-and-notes.module.scss";

const FilesAndNotes = (props) => {
  return (
    <div className={Styles.filesandnotes}>
      <p>Please save the quote prior to adding notes/documents.</p>
    </div>
  );
};

export default FilesAndNotes;
