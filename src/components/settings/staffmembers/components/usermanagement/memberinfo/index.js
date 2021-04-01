import React from "react";
import Styles from "./memberinfo.module.scss";
import { Link } from "react-router-dom";
import faker from "faker";

const MemberInfo = (props) => {
  return (
    <div className={`${Styles.bar} ${Styles.barHovered}`}>
      {" "}
      <div className={Styles.bar__name}>
        <div className={Styles.bar__name__avatar}>
          <img src={faker.image.people()} />
        </div>
        <div className={Styles.bar__name__names}>
          <p className={Styles.bar__name__names__firstname}>Mohamed</p>
          <p className={Styles.bar__name__names__lastname}>Saafan</p>
        </div>
      </div>
      <div className={`${Styles.bar__roleBlack} ${Styles.bar__role}`}>
        Office manager, Field Worker: Full
      </div>
      <div className={`${Styles.bar__contact__link} ${Styles.bar__contact}`}>
        Mohamed@wewurx.com
      </div>
      <div className={`${Styles.bar__teamsBlack} ${Styles.bar__teams}>`}>
        Web development
      </div>
      <div className={`${Styles.bar__skillsBlack} ${Styles.bar__skills}`}>
        React, Typescript, CSS, Node,MongoDB
      </div>
      <Link
        to='/system/settings/staffmembers/managementuser/1p09183er'
        className={Styles.bar__button}
      >
        View
      </Link>
    </div>
  );
};

export default MemberInfo;
