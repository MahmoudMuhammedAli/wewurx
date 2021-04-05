import React from "react";
import AddNote from "../../../../shared/notes/add-note";
import FilterButtons from "../../../../shared/notes/filter-buttons";
import Files from "./components/files";
import Notes from "./components/notes";
import Styles from "./files-and-notes.module.scss";

const FilesAndNotes = (props) => {
  return (
    <div className={Styles.filesandnotes}>
      <Files />
      <div className={Styles.filesandnotes__notes}>
        <h3 className={Styles.filesandnotes__notes__heading}>Notes</h3>
        <Notes />
      </div>
      <FilterButtons />
      <AddNote />
    </div>
  );
};

export default FilesAndNotes;
