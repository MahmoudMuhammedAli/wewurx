import React from "react";
import { connect, useSelector } from "react-redux";
import { removeInvoiceFile } from "../../../../../../../../../actions";
import UploadedFile from "../uploaded-file";
import Styles from "./uploaded-files-directory.module.scss";

const UploadedFilesDirectory = ({ removeInvoiceFile }) => {
  const { sendInvoiceFiles } = useSelector((state) => state);
  const renderImages = () => {
    return sendInvoiceFiles.map(({ inputName, src, fileName }) => {
      return (
        <UploadedFile
          inputName={inputName}
          fileName={fileName}
          src={src}
          key={inputName}
          handleFileRemove={removeInvoiceFile}
        />
      );
    });
  };
  return <div>{renderImages()}</div>;
};

export default connect(null, { removeInvoiceFile })(UploadedFilesDirectory);
