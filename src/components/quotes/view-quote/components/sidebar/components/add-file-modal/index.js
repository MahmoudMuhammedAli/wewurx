import React, { useState } from "react";
import Styles from "./add-file-modal.module.scss";
import Modal from "../../../../../../shared/modal";
import { reduxForm } from "redux-form";
import { connect, useSelector } from "react-redux";
import { addQuoteFile, removeQuoteFile } from "../../../../../../../actions";
import UploadedComponent from "../uploaded-file";

const AddFileModal = ({
  isModalOpened,
  setIsModalOpened,
  addQuoteFile,
  removeQuoteFile,
}) => {
  const state = useSelector((state) => state);
  const { uploadedQuoteFiles } = state;
  const inputFiles = [];
  console.log(uploadedQuoteFiles?.length, "from uploaded quotes files");
  // at every rerender i re evaluate the number of inputs that should be mounted
  const mapInputFiles = () => {
    if (uploadedQuoteFiles) {
      for (let i = 0; i <= uploadedQuoteFiles.length; i++) {
        const handleInputChange = (changeEvent) => {
          readFile(changeEvent, `file${i}`);
        };
        inputFiles.push(
          <input
            key={i}
            type='file'
            hidden
            id={`inputFile${i + 1}`}
            onChange={handleInputChange}
          />
        );
      }
    }
  };

  // attaching input files to the 'inputFiles' array
  mapInputFiles();

  const renderImages = () => {
    if (uploadedQuoteFiles) {
      return uploadedQuoteFiles.map(({ fileName, src, inputName }) => {
        return (
          <UploadedComponent
            fileName={fileName}
            src={src}
            onDelete={() => removeQuoteFile(inputName)}
          />
        );
      });
    }
    return null;
  };

  const readFile = (changeEvent, inputName) => {
    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      const src = loadEvent.target.result;
      const fileName = changeEvent.target.files[0].name;
      const file = changeEvent.target.files[0];
      console.log({
        inputName,
        src,
        fileName,
        file,
      });
      addQuoteFile(inputName, fileName, file, src);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleUploadFileClick = () => {
    // clicking the last element in the input Files array
    const lastInputNumber = inputFiles.length;
    console.log(lastInputNumber, "from last Input Number");
    window[`inputFile${lastInputNumber}`].click();
  };

  return (
    <Modal isOpen={isModalOpened}>
      <div className={Styles.addfile}>
        <p className={Styles.addfile__description}>
          Overall size should be less than 28.6 megabytes
        </p>
        <main className={Styles.addfile__main}>{renderImages()}</main>
        {inputFiles}
        <footer className={Styles.addfile__footer}>
          <button
            className={Styles.addfile__btn}
            onClick={handleUploadFileClick}
          >
            <i className='fa fa-plus'></i> Add files
          </button>
          <button
            onClick={() => setIsModalOpened(false)}
            className={Styles.addfile__closebtn}
          >
            Close Modal
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default connect(null, {
  addQuoteFile,
  removeQuoteFile,
})(reduxForm({ form: "addFile" })(AddFileModal));
