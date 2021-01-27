import React from "react";
import Styles from "./rolesexplainedmodal.module.scss";
import Modal from "../../../../../../../../shared/modal";

const RolesModal = ({ isRolesModalOpened, setIsRoledModalOpened }) => {
  return (
    <Modal isOpen={isRolesModalOpened}>
      <div className={Styles.modal}>
        <section className={Styles.modal__section}>
          <h2 className={Styles.modal__section__heading}>Limited</h2>
          <h6 className={Styles.modal__section__subheading}>Job Manger</h6>
          <p>
            Manage allocated jobs, update job status, take images &amp; notes,
            track time and sign on/off
          </p>
        </section>
        <section className={Styles.modal__section}>
          <h2 className={Styles.modal__section__heading}>Full</h2>
          <h6 className={Styles.modal__section__subheading}>Job Manager</h6>
          <p>
            Manage allocated jobs, update job status, take images & notes, track
            time and sign on/off
          </p>
          <br />
          <h6 className={Styles.modal__section__subheading}>Add</h6>
          <p>Allow adding of Jobs, Quotes, Customers, etc</p>
          <br />
          <h6 className={Styles.modal__section__subheading}>Edit</h6>
          <p>Allow editing of Invoices, Quotes, Customers, etc</p>
          <br />
          <h6 className={Styles.modal__section__subheading}>Customers</h6>
          <p>Access Customer section</p>
          <br />
          <h6 className={Styles.modal__section__subheading}>Quotes</h6>
          <p>Access Quote section</p>
          <br />
          <h6 className={Styles.modal__section__subheading}>
            Cost &amp; Invoicing
          </h6>
          <p>Show Cost &amp; Invoicing and any pricing accross the app?</p>
        </section>
        <section className={Styles.modal__section}>
          <h2 className={Styles.modal__section__heading}>
            Manager - same as Full with:
          </h2>
          <h6 className={Styles.modal__section__subheading}>Field Manager</h6>
          <p>
            See all fieldworkers jobs, filter by fieldworkers and assign work to
            one or multiple fieldworkers
          </p>
          <br />
        </section>
        <button
          onClick={() => setIsRoledModalOpened(false)}
          className={Styles.modal__close}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
export default RolesModal;
