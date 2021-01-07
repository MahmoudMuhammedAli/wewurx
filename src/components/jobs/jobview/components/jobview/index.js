import React from "react";
import Styles from "./jobview.module.scss";
import MainInfo from "./componentes/maininfo";
import JobDescription from "./componentes/jobdescription";
import JobDuration from "./componentes/jobduration";
import SiteAddress from "./componentes/siteaddress";
import Contacts from "./componentes/jobcontacts";
import InvoiceCreated from "./componentes/invoicecreated";
import InvoiceSent from "./componentes/invoicesent";

const JobView = (props) => {
  return (
    <div className={` viewjob__page ${Styles.jobview}`}>
      <div className={Styles.jobview__invoicedstatus}>invoiced</div>

      <MainInfo />
      <JobDescription />
      <JobDuration />
      <SiteAddress />
      <Contacts />
      <InvoiceCreated />
      <InvoiceSent />
    </div>
  );
};
export default JobView;
