import React, { useState } from "react";
import Styles from "./files-and-notes.module.scss";
import NoteBox from "../../../../shared/notes/note-box";
import AddNote from "../../../../shared/notes/add-note";
import FilterButtons from "../../../../shared/notes/filter-buttons";
const FilesAndNotes = () => {
  return (
    <div className={Styles.files}>
      <div className={Styles.files__files}>
        <h3 className={Styles.files__files__heading}>Invoice files</h3>
        <p className={Styles.files__files__text}>
          Use buttons to the left to add your first files
        </p>
      </div>
      <div className={Styles.files__notes}>
        <h5 className={Styles.files__notes__heading}>Notes</h5>
      </div>
      <div className={Styles.files__notes__body}>
        <NoteBox
          type='portal communication'
          body='some portal info goes here..'
          date={new Date()}
          lname='lname'
          fname='fname'
        />
        <NoteBox
          body='some portal info goes here..'
          date={new Date()}
          lname='lname'
          fname='fname'
        />
        <NoteBox
          type='internal'
          body='some portal info goes here..'
          date={new Date()}
          lname='lname'
          fname='fname'
        />
      </div>
      <FilterButtons />
      <AddNote />
    </div>
  );
};

export default FilesAndNotes;
