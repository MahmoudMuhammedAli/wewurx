import React from "react";
import AddStaffMemberBar from "./addstaffmemberbar";
import MemberInfo from "./memberinfo";
import Styles from "./usermanagement.module.scss";
import MemberInfoStyle from "./memberinfo/memberinfo.module.scss";

const UserManagement = (props) => {
  return (
    <div className={Styles.usermanagement}>
      <h3 className={Styles.usermanagement__heading}>Staff members</h3>
      <AddStaffMemberBar />
      <div className={MemberInfoStyle.bar}>
        <div className={MemberInfoStyle.bar__name}>
          Name <i className='fa fa-arrow-circle-o-down'></i>
        </div>
        <div className={MemberInfoStyle.bar__role}>
          Role <i className='fa fa-arrow-circle-o-down'></i>
        </div>
        <div className={MemberInfoStyle.bar__contact}>
          Contact <i className='fa fa-arrow-circle-o-down'></i>
        </div>
        <div className={MemberInfoStyle.bar__teams}>
          Teams <i className='fa fa-arrow-circle-o-down'></i>
        </div>
        <div className={MemberInfoStyle.bar__skills}>
          skills <i className='fa fa-arrow-circle-o-down'></i>
        </div>
      </div>
      <MemberInfo />
      <MemberInfo />
      <MemberInfo />
      <MemberInfo />
      <MemberInfo />
    </div>
  );
};

export default UserManagement;
