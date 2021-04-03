import React, { useState } from "react";
import AddFileModal from "../add-file-modal";
import Styles from "./add-file-button.module.scss";

const AddFileButton = (props) => {
  const [isAddFileModalOpened, setIsAddFileModalOpened] = useState(false);
  return (
    <div className={Styles.btn}>
      {" "}
      <button
        onClick={() => setIsAddFileModalOpened(true)}
        className={`sidebar__button sidebar__button--bottom sidebar__button--withplusicon`}
      >
        <i className='fa fa-plus'></i> Add File
      </button>
      <AddFileModal
        isModalOpened={isAddFileModalOpened}
        setIsModalOpened={setIsAddFileModalOpened}
      />
    </div>
  );
};

export default AddFileButton;
