import React from "react";
import { useSelector, connect } from "react-redux";
import {
  changeQuoteFileDescription,
  removeQuoteFile,
} from "../../../../../../../actions";
import UploadedComponent from "../uploaded-file";
import Styles from "./uploaded-files-directory.module.scss";

const UploadedFilesDirectory = ({
  removeQuoteFile,
  changeQuoteFileDescription,
}) => {
  const uploadedQuoteFiles = useSelector((state) => state.uploadedQuoteFiles);

  const renderImages = () => {
    if (uploadedQuoteFiles) {
      return uploadedQuoteFiles.map(
        ({ fileName, src, inputName, description }) => {
          return (
            <UploadedComponent
              key={inputName}
              fileName={fileName}
              src={src}
              onDelete={() => removeQuoteFile(inputName)}
              inputName={inputName}
              description={description}
            />
          );
        }
      );
    }
    return null;
  };
  return <div className={Styles.directory}>{renderImages()}</div>;
};

export default connect(null, { removeQuoteFile, changeQuoteFileDescription })(
  UploadedFilesDirectory
);
