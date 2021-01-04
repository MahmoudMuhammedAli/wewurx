import React from "react";
import Styles from "./maininfo.module.scss";
import StatusSelector from "../../../../../../shared/statusSelector";

const MainInfo = (props) => {
  return (
    <div className={Styles.maininfo__jobinfocontainer}>
      <div className={Styles.maininfo__jobinfo}>
        <div className={Styles.maininfo__jobinfo__naminginfo}>
          <div className={Styles.maininfo__jobinfo__naminginfo__name}>
            jobName
          </div>
          <div className={Styles.maininfo__jobinfo__naminginfo__id}>
            <span className={Styles.maininfo__jobinfo__naminginfo__id__label}>
              job ID
            </span>
            <span>Yup5</span>
          </div>
          <div className={Styles.maininfo__jobinfo__naminginfo__customername}>
            <span>First name </span>
            <span>Last name</span>
          </div>
        </div>

        <div className={Styles.maininfo__jobinfo__priceinfo}>
          <div className={Styles.maininfo__jobinfo__priceinfo__price}>
            £165.00
          </div>
          <div className={Styles.maininfo__jobinfo__priceinfo__label}>
            Cost Items
          </div>
        </div>
      </div>
      <StatusSelector
        onStatusChange={(item) => console.log(item, "from status select")}
      />
      <div className={Styles.maininfo__priority}>
        <span className={Styles.maininfo__priority__label}>Priority</span>{" "}
        <span className={Styles.maininfo__priority__priority}>normal </span>
      </div>
    </div>
  );
};
export default MainInfo;
