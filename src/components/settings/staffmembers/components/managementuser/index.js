import React, { useEffect, useRef, useState } from "react";
import BasicInfo from "./components/basicinfo";
import Styles from "./managementuser.module.scss";
import SideBar from "./components/sidebar";
import Permisions from "./components/permisions";
import StaffRates from "./components/staffrates";
import SchedularColor from "./components/schedularcolor";
import SkillsAndWorkingHours from "./components/skillsandworkinghours";

const ManagementUser = (props) => {
  const pictureRef = useRef(null);
  const [picture, setPicture] = useState(null);

  const handleUploadPictureRefClick = () => {
    pictureRef.current.click();
  };

  const handleUploadPictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <div className={Styles.managementuser}>
      <SideBar />
      <div>
        <h4 className={Styles.managementuser__heading}>Staff members</h4>
        <div className={Styles.managementuser__picture}>
          <input
            type='file'
            hidden
            ref={pictureRef}
            onChange={handleUploadPictureChange}
          />
          <span className={Styles.managementuser__picture__label}>
            Profile photo
          </span>
          <div
            className={Styles.managementuser__picture__picture}
            onClick={handleUploadPictureRefClick}
          >
            <span>Add photo</span>
          </div>
        </div>
        <BasicInfo />
        <Permisions />
        <StaffRates />
        <SchedularColor />
        <SkillsAndWorkingHours />
        <div className={Styles.managementuser__buttons}>
          <button className={Styles.managementuser__cancel}>Cancel</button>
          <button className={Styles.managementuser__save}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ManagementUser;
