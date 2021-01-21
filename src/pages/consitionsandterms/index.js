import React, { useState } from "react";
import Styles from "./termsandconditions.module.scss";

const TermsAndConditions = ({ isModalOpened, closeModal }) => {
  console.log(isModalOpened, "from terms and conditions");
  return (
    <div className={Styles.terms}>
      <button onClick={closeModal} className={Styles.terms__closebutton}>
        <i className='fa fa-window-close '></i>
      </button>
      <header className={Styles.terms__header}>
        <h2 className={Styles.terms__heading}>TERMS & CONDITIONS</h2>
      </header>
      <div className={` ${Styles.terms__container} ${Styles.terms__document}`}>
        <i className='fa fa-file-text-o'></i>
      </div>
      <section
        className={`${Styles.terms__section} ${Styles.terms__container}`}
      >
        <p>
          By using the WeWurx service which includes www.wewurx.com and any
          subdomain you agree to be bound by the following terms and conditions
          (‘Terms of Service’)
        </p>{" "}
        <p>
          WeWurx reserves the right to update and change the Terms of Service
          from time to time without notice. Any new features that augment or
          enhance the current Service, including the release of new tools and
          resources, shall be subject to the Terms of Service. Continued use of
          the Service after any such changes shall constitute your consent to
          such changes. You can review the most current version of the Terms of
          Service at any time here: www.wewurx.com/terms-conditions/
        </p>
        <p>
          Violation of any of the terms below will result in the termination of
          your Account. While WeWurx prohibits such conduct and Content on the
          Service, you understand and agree that WeWurx cannot be responsible
          for the Content posted on the Service and you nonetheless may be
          exposed to such materials. You agree to use the Service at your own
          risk.
        </p>
      </section>
      <section
        className={`${Styles.terms__section} ${Styles.terms__container}`}
      >
        <h3>Account Terms</h3>
        <p>You must be 13 years or older to use this Service.</p>
        <p>
          You must be a human. Accounts registered by ‘bots’ or other automated
          methods are not permitted.
        </p>
        <p>
          You must provide your legal full name, a valid email address, and any
          other information requested in order to complete the signup process.
        </p>
        <p>
          Your login may only be used by one person and a single login shared by
          multiple people is not permitted. You may create separate logins for
          as many people as you’d like.
        </p>
        <p>
          You are responsible for maintaining the security of your account and
          password. Workever cannot and will not be liable for any loss or
          damage from your failure to comply with this security obligation.
        </p>
        <p>
          Field Workers are responsible for device security, their passwords,
          and hardware.
        </p>
        <p>
          You are responsible for all Content posted and activity that occurs
          under your account (even when Content is posted by others who have
          accounts under your account).
        </p>
        <p>
          If you are using a free account you are not permitted to block ads.
        </p>
        <p>
          One person or legal entity may not maintain more than one free
          account.
        </p>
        <p>
          You may not use the Service for any illegal or unauthorized purpose.
          You must not, in the use of the Service, violate any laws in your
          jurisdiction (including but not limited to copyright laws).
        </p>
      </section>
    </div>
  );
};
export default TermsAndConditions;
