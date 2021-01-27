import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import RolesModal from "../rolesexplainedmodal";
import Styles from "./permissions.module.scss";

const roleOptions = [
  { name: "Not Field Worker", value: "notFieldWorker" },
  { name: "Field Manger", value: "fieldManager" },
  { name: "Field worker Full", value: "fieldWorkerFull" },
  { name: "Field worker Limited", value: "fieldWorkerLimited" },
];

const renderSelector = ({ input }) => {
  return (
    <select {...input} className={Styles.permissions__main__select}>
      {roleOptions.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const Permissions = (props) => {
  const [isRolesModalOpened, setIsRoledModalOpened] = useState(false);
  return (
    <div className={Styles.permissions}>
      <h4 className={Styles.permissions__heading}>Permissions and roles</h4>

      <div className={Styles.permissions__main}>
        <h5 className={Styles.permissions__main__heading}>ACCOUNT OWNER</h5>
        <div>
          <label className={Styles.permissions__main__label}>
            Field Worker Role
          </label>
          <Field component={renderSelector} name='role' />
          <button
            className={Styles.permissions__main__button}
            onClick={() => setIsRoledModalOpened(true)}
          >
            Roles explained
          </button>
        </div>
      </div>
      <RolesModal
        isRolesModalOpened={isRolesModalOpened}
        setIsRoledModalOpened={setIsRoledModalOpened}
      />
    </div>
  );
};

export default reduxForm({ form: "staffViewPermissions" })(Permissions);
