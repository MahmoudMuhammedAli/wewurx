import React from "react";
import Styles from "../passwordspecificationmodal/passwordspecificationmodal.module.scss";

import Modal from "../../../../../../../../shared/modal";

const CannotRememberModal = ({
  isCannotRememberModalOpened,
  setIsCannotRememberModalOpened,
}) => {
  return (
    <Modal isOpen={isCannotRememberModalOpened}>
      <div className={Styles.specification}>
        <button
          onClick={() => setIsCannotRememberModalOpened(false)}
          className={Styles.specification__closebutton}
        >
          Close
        </button>

        <h3 className={Styles.specification__heading}>Password Policy</h3>
        <p>
          If you cannot remember this users password, you can request a new
          password by going to the main login page &gt; selecting "Forgot your
          password?" &gt; enter the email address of the user. They will then
          get a link to reset their password.
        </p>
      </div>
    </Modal>
  );
};
export default CannotRememberModal;
