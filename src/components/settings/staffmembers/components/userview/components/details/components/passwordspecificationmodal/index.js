import React from "react";
import Styles from "./passwordspecificationmodal.module.scss";
import Modal from "../../../../../../../../shared/modal";

const PasswordModal = ({
  isSpecificationModalOPened,
  setIsSpecificationModalOPened,
}) => {
  return (
    <Modal isOpen={isSpecificationModalOPened}>
      <div className={Styles.specification}>
        <button
          onClick={() => setIsSpecificationModalOPened(false)}
          className={Styles.specification__closebutton}
        >
          Close
        </button>

        <h3 className={Styles.specification__heading}>Password Policy</h3>
        <p>Passwords must be at least nine (9) characters long.</p>
        <p>
          Passwords must contain some combination of at least three (3) of the
          following classes of characters: lowercase, uppercase, numeric, and
          "special" (e.g., !, @, #, $, %, ^, etc.) characters.
        </p>
        <p>
          Passwords should not be a dictionary word in any language, slang,
          dialect, jargon, etc.
        </p>
        <p>Passwords should not be based on personal information.</p>
      </div>
    </Modal>
  );
};
export default PasswordModal;
