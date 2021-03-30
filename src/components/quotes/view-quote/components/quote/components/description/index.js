import React, { useState } from "react";
import Styles from "./description.module.scss";

const Description = (props) => {
  const [dueDate, setDueDate] = useState(new Date());
  return (
    <div className={Styles.description}>
      <h3 className={Styles.description__heading}>Quote Description</h3>
      <p className={Styles.description__content}>
        quote description goes here...
      </p>
      <h4 className={Styles.description__duedatelabel}>Due date</h4>
      <p className={Styles.description__date}>
        {dueDate.toGMTString().substring(0, 22)}
      </p>
    </div>
  );
};

export default Description;
