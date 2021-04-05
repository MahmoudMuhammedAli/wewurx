import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./add-note.module.scss";

const AddNote = (props) => {
  return (
    <div className={Styles.addnote}>
      <header className={Styles.addnote__header}>
        <label className={Styles.addnote__header__label} htmlFor='noteBody'>
          Add new note
        </label>
        <div className={Styles.addnote__header__checkboxes}>
          <label>
            <Field name='isPortal' component='input' type='checkbox' />
            Portal communication
          </label>
          <label>
            <Field name='isInternal' component='input' type='checkbox' />
            Internal
          </label>
        </div>
      </header>
      <main className={Styles.addnote__main}>
        <Field
          name='body'
          component='textarea'
          className={Styles.addnote__main__textarea}
          id='noteBody'
        />
        <button className={Styles.addnote__main__button}>Done</button>
      </main>
    </div>
  );
};

export default reduxForm({ form: "addNote" })(AddNote);
