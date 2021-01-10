import React from "react";
import Styles from "./companyinfo.module.scss";
import Branding from "./components/branding";
import CompanyInformation from "./components/companyinformation";
import CustomerGlobalSettings from "./components/customerportalglobalsettings";
import JobOptions from "./components/joboptions";
import RegionalSettings from "./components/regionalsettings";

const CompanyInfo = (props) => {
  return (
    <div className={Styles.companyinfo}>
      <h2 className={Styles.companyinfo__heading}>Company information</h2>
      <CompanyInformation
        initialValues={{
          companyName: "WeWurx",
          taxType: "VAT",
          email: "hello@wewurx.com",
        }}
      />
      <Branding initialValues={{ accentColour: "e66b22" }} />
      <RegionalSettings />
      <JobOptions />
      <CustomerGlobalSettings />
      <button className={Styles.companyinfo__submit}>save</button>
    </div>
  );
};

export default CompanyInfo;
