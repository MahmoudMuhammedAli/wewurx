import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./edit-note-textarea.module.scss";

const EditNoteFields = (props) => {
  return (
    <div className={Styles.fields}>
      <label className={Styles.fields__label}>
        <Field name='isInternal' component='input' type='checkbox' />
        Internal
      </label>
      <Field
        name='body'
        component='textarea'
        className={Styles.fields__textarea}
      />
    </div>
  );
};

export default reduxForm({ form: "editNote" })(EditNoteFields);
