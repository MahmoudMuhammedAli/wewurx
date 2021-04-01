import React from "react";
import Modal from "../modal";
import Styles from "./signin-modal.module.scss";

const SignInModal = ({ isOpened, setIsOpened }) => {
  return (
    <Modal isOpen={isOpened}>
      <div className={Styles.signin}>
        <button onClick={() => setIsOpened(false)}>close</button>
      </div>
    </Modal>
  );
};

export default SignInModal;
