import React, { useState } from "react";
import Styles from "./item-description.module.scss";

const ItemDescription = (props) => {
  const [description, setDescription] = useState("");

  return (
    <div className={Styles.description}>
      <h5 className={Styles.description__heading}>Description</h5>
      <textarea
        className={Styles.description__textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default ItemDescription;
