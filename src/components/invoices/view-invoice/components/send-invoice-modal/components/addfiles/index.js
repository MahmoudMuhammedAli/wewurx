import React from "react";
import { useSelector } from "react-redux";
import Styles from "./addfiles.module.scss";

import UploadedFilesDirectory from "./components/uploaded-files-directory";
import InputFiles from "./components/input-files";

const AddFiles = (props) => {
  const state = useSelector((state) => state);
  const { sendInvoiceFiles } = state;

  const handleUploadFileClick = () => {
    const lastInputNumber = sendInvoiceFiles.length + 1;
    window[`inputFile${lastInputNumber}`].click();
  };

  return (
    <div className={Styles.addfiles}>
      <InputFiles />
      <UploadedFilesDirectory />
      <button className={Styles.addfiles__btn} onClick={handleUploadFileClick}>
        + Add files
      </button>
    </div>
  );
};

export default AddFiles;
