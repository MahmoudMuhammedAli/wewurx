import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./addstaffmemberbar.module.scss";
import { Link } from "react-router-dom";

const AddStaffMemberBar = (props) => {
  return (
    <div className={Styles.bar}>
      <Link
        className={Styles.bar__addstaffbutton}
        to='/system/settings/staffmembers/managementuser'
      >
        {" "}
        <i className='fa fa-plus'></i> Add staff member
      </Link>
      <div className={Styles.bar__searchcontainer}>
        <Field
          name='staffMemberSearchKeywork'
          component='input'
          type='text'
          className={Styles.bar__searchcontainer__input}
          placeholder='keyword'
        />
        <i className='fa fa-search'></i>
      </div>
    </div>
  );
};

export default reduxForm({ form: "staffMembersUserManagement" })(
  AddStaffMemberBar
);
