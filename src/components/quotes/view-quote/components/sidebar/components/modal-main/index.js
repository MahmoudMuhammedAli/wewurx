import React from "react";
import { useSelector } from "react-redux";
import HiddenInputs from "../hidden-inputs";
import UploadedFilesDirectory from "../uploaded-files-directory";
import Styles from "./modal-main.module.scss";

const ModalMain = ({ setIsModalOpened }) => {
  const state = useSelector((state) => state);
  const { uploadedQuoteFiles } = state;

  const handleUploadFileClick = () => {
    const lastInputNumber = uploadedQuoteFiles.length + 1;
    window[`inputFile${lastInputNumber}`].click();
  };
  return (
    <main>
      {" "}
      <main className={Styles.main__main}>
        <UploadedFilesDirectory />
      </main>
      <HiddenInputs />
      <footer className={Styles.main__footer}>
        <button className={Styles.main__btn} onClick={handleUploadFileClick}>
          <i className='fa fa-plus'></i> Add files
        </button>
        <button
          onClick={() => setIsModalOpened(false)}
          className={Styles.main__closebtn}
        >
          Close Modal
        </button>
      </footer>
    </main>
  );
};
export default ModalMain;
