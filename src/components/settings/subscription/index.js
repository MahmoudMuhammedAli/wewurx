import React, { useState } from "react";
import AddONs from "./components/addons";
import Package from "./components/package";
import TermsAndConditions from "./components/termsandconditions";
import TotalPrice from "./components/totalprice";
import Users from "./components/users";
import Styles from "./subscription.module.scss";

const Subscription = (props) => {
  const [isTermsModalOpened, setIsTermsModalOpened] = useState(false);
  console.log(isTermsModalOpened, "from subscriptions");
  const closeTermsModal = () => {
    setIsTermsModalOpened(false);
  };
  const openTermsModal = () => {
    setIsTermsModalOpened(true);
  };

  const handleTermsLinkClick = (e) => {
    e.preventDefault();
    openTermsModal();
  };
  return (
    <div className={Styles.subscription}>
      <h2 className={Styles.subscription__heading}>Your Wewurx subscription</h2>
      <Package initialValues={{ packageValue: "ultimate" }} />
      <Users initialValues={{ numberOfUsers: 1 }} />
      <AddONs />
      <TotalPrice />
      <footer className={Styles.subscription__footer}>
        <div className={Styles.subscription__footer__terms}>
          <p>
            See{" "}
            <a
              href='/conditionsandterms.html'
              className={Styles.subscription__footer__terms__link}
            >
              Terms & Conditions
            </a>{" "}
            for more details
          </p>
          <a href='#' className={Styles.subscription__footer__viewinvoice}>
            View your invoice
          </a>
          <br />
          <a href='#' className={Styles.subscription__footer__carddetails}>
            Update card details
          </a>
          <br />
          <a
            href='#'
            className={Styles.subscription__footer__cancelsubscription}
          >
            Cancel subscription
          </a>
        </div>
        <div className={Styles.subscription__activate}>
          <button>Activate</button>
        </div>
      </footer>
      {/* <TermsAndConditions
        isModalOpened={isTermsModalOpened}
        closeModal={closeTermsModal}
      /> */}
    </div>
  );
};

export default Subscription;
