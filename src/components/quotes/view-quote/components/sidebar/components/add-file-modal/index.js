import React, { useState } from "react";
import Styles from "./add-file-modal.module.scss";
import Modal from "../../../../../../shared/modal";
import { reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import UploadedFilesDirectory from "../uploaded-files-directory";
import HiddenInputs from "../hidden-inputs";
import ModalMain from "../modal-main";

const AddFileModal = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <Modal isOpen={isModalOpened}>
      <div className={Styles.addfile}>
        <p className={Styles.addfile__description}>
          Overall size should be less than 28.6 megabytes
        </p>
        <ModalMain setIsModalOpened={setIsModalOpened} />
      </div>
    </Modal>
  );
};

export default reduxForm({ form: "addFile" })(AddFileModal);
