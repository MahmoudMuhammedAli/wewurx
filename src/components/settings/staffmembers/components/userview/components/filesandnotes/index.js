import React from "react";
import { reduxForm, Field } from "redux-form";

import Styles from "./filesandnotes.module.scss";

const FilesAndNotes = (props) => {
  return (
    <div className={Styles.files}>
      <h3 className={Styles.files__heading}>Staff member files</h3>
      <div className={Styles.files__notes}>
        <h5 className={Styles.files__notes__heading}>Notes</h5>
        <div className={Styles.files__notes__notes}>
          <Field
            name='note'
            component='textarea'
            className={Styles.files__notes__notes__textarea}
          />
          <button className={Styles.files__notes__notes__button}>Add</button>
        </div>
      </div>
    </div>
  );
};
export default reduxForm({ form: "addStaffMemberNotes" })(FilesAndNotes);
