import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./permisions.module.scss";

const renderSelector = (list) => ({ input }) => {
  return (
    <select {...input} className={Styles.permissions__select}>
      {list.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const officeStaffOptions = [
  { name: "Not Office staff", value: "notOfficeStaff" },
  { name: "Office admin", value: "officeAdmin" },
  { name: "Office manager", value: "officeManager" },
];
const fieldWorkerRoles = [
  { name: "Not Field Worker", value: "notFieldWorker" },
  { name: "Field Manager", value: "fieldManager" },
  { name: "Field worker Full", value: "fieldWorkerFull" },
  { name: "Field worker Limited", value: "fieldWorkerLimited" },
];

const Permisions = (props) => {
  return (
    <div className={Styles.permissions}>
      <h4 className={Styles.permissions__heading}>Permissions and roles</h4>
      <div className={Styles.permissions__selectorwrapper}>
        <label className={Styles.permissions__label}>Office staff</label>
        <Field
          name='officeStaff'
          component={renderSelector(officeStaffOptions)}
        />
      </div>
      <div className={Styles.permissions__selectorwrapper}>
        <label className={Styles.permissions__label}>Field Worker Role</label>
        <Field
          name='fieldWorkerRole'
          component={renderSelector(fieldWorkerRoles)}
        />
        <label>Roles explained</label>
      </div>
    </div>
  );
};
export default reduxForm({ form: "addStaffMember" })(Permisions);
