import React from "react";
import Styles from "./jobcontacts.module.scss";

const Contacts = (props) => {
  return (
    <div className={Styles.contacts}>
      <h3 className={Styles.contacts__heading}>Job contacts</h3>
      <div className={Styles.contacts__mainname}>Firstname Lastname (main)</div>
      <div className={Styles.contacts__phone}>phone (phone)</div>
      <div className={Styles.contacts__mobile}>mobile (mobile)</div>
      <div className={Styles.contacts__email}>email@email.com</div>
      <div className={Styles.contacts__assignedto}>
        Assigned to <span>Firstname Lastname</span>
      </div>
      <div className={Styles.contacts__scheduleddate}>
        <h3 className={Styles.contacts__scheduleddate__heading}>
          Schedule date
        </h3>
        <span className={Styles.contacts__scheduleddate__startdate}>
          {new Date().toGMTString().substring(0, 16)}
        </span>
        <span className={Styles.contacts__scheduleddate__untill}> untill </span>
        <span className={Styles.contacts__scheduleddate__enddate}>
          {new Date().toGMTString().substring(0, 16)}
        </span>
      </div>
    </div>
  );
};
export default Contacts;
