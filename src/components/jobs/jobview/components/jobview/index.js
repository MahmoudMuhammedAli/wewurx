import React from "react";
import Styles from "./jobview.module.scss";
import MainInfo from "./componentes/maininfo";
import JobDescription from "./componentes/jobdescription";
import JobDuration from "./componentes/jobduration";
import SiteAddress from "./componentes/siteaddress";
import Contacts from "./componentes/jobcontacts";
import InvoiceActivityBox from "../../../../shared/invoice-activity-box";
import SendInvoiceModal from "../../../../shared/sendinvoicemodal";

const JobView = (props) => {
  return (
    <div className={` viewjob__page ${Styles.jobview}`}>
      <div className={Styles.jobview__invoicedstatus}>invoiced</div>

      <MainInfo />
      <JobDescription />
      <JobDuration />
      <SiteAddress />
      <Contacts />
      <InvoiceActivityBox
        heading='New invoice created'
        buttonText='Send'
        Modal={SendInvoiceModal}
      />
      <InvoiceActivityBox
        heading='Invoice was sent to test@test.com'
        buttonText='Resend'
        Modal={SendInvoiceModal}
      />
    </div>
  );
};
export default JobView;
