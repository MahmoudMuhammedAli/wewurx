import React from "react";
import { connect, useSelector } from "react-redux";
import { addInvoiceFile } from "../../../../../../../../../actions";
import Styles from "./input-files.module.scss";

const InputFiles = ({ addInvoiceFile }) => {
  const { sendInvoiceFiles } = useSelector((state) => state);
  const inputFiles = [];

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

      addInvoiceFile(inputName, fileName, file, src);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const mapInputFiles = () => {
    if (sendInvoiceFiles) {
      for (let i = 0; i <= sendInvoiceFiles.length; i++) {
        const handleInputChange = (changeEvent) => {
          readFile(changeEvent, `file${i}`);
          console.log("from change ");
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

  mapInputFiles();
  console.log(inputFiles, "from input Fiels");

  return <div>{inputFiles}</div>;
};

export default connect(null, { addInvoiceFile })(InputFiles);
