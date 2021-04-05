import React from "react";
import FilesDirectory from "../../../../../../shared/files/files-directory";
import Styles from "./files.module.scss";
import faker from "faker";

const Files = (props) => {
  const filesList = [
    {
      imageSrc: faker.random.image(),
      description: faker.random.words(faker.random.number(20)),
    },
    {
      imageSrc: faker.random.image(),
      description: "short description goes here",
    },
    {
      imageSrc: faker.random.image(),
      description: faker.random.words(faker.random.number(20)),
    },
    {
      imageSrc: faker.random.image(),
      description: faker.random.words(faker.random.number(20)),
    },
  ];
  console.log(filesList, "from files list");
  return (
    <div className={Styles.files}>
      <h3 className={Styles.files__heading}>Quote files</h3>

      <FilesDirectory filesList={filesList} />
    </div>
  );
};

export default Files;
