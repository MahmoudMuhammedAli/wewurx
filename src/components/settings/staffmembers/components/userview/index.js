import React, { useEffect, useRef, useState } from "react";
import Styles from "./userview.module.scss";
import SideBar from "./components/sidebar";
import { Redirect, Route, Switch } from "react-router-dom";
import Details from "./components/details";
import FilesAndNotes from "./components/filesandnotes";
import WorkingHours from "./components/workinghours";

const UserView = (props) => {
  const pictureRef = useRef(null);
  const [picture, setPicture] = useState(null);

  const handleUploadPictureRefClick = () => {
    pictureRef.current.click();
  };

  const handleUploadPictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <div className={Styles.userview}>
      <SideBar
        staffMemberID={props.match.params.id}
        location={props.location}
      />
      <div>
        <Switch>
          <Route
            path='/system/settings/staffmembers/managementuser/:id/basicinfo'
            exact
          >
            <h4 className={Styles.userview__heading}>Staff members</h4>
            <div className={Styles.userview__picture}>
              <input
                type='file'
                hidden
                ref={pictureRef}
                onChange={handleUploadPictureChange}
              />
              <span className={Styles.userview__picture__label}>
                Profile photo
              </span>
              <div
                className={Styles.userview__picture__picture}
                onClick={handleUploadPictureRefClick}
              >
                <span>Add photo</span>
              </div>
            </div>
            <Details />

            <div className={Styles.userview__buttons}>
              <button className={Styles.userview__cancel}>Cancel</button>
              <button className={Styles.userview__save}>Save</button>
            </div>
          </Route>{" "}
          <Route
            path='/system/settings/staffmembers/managementuser/:id/notes'
            component={FilesAndNotes}
          />
          <Route
            path='/system/settings/staffmembers/managementuser/:id/workinghours'
            component={WorkingHours}
          />
          <Redirect
            to={`/system/settings/staffmembers/managementuser/${props.match.params.id}/basicinfo`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default UserView;
