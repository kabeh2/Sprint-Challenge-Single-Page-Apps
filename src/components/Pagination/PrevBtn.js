import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

const PrevBtn = props => {
  const [prevDisabled, setPrevDisabled] = useState(false);

  useEffect(() => {
    if (props.prev === "") {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
  }, [props.prev, prevDisabled]);

  return (
    <button
      className="prev_btn"
      onClick={props.onClick}
      disabled={prevDisabled}
    >
      <Icon name="left triangle" />
      <p>Back</p>
    </button>
  );
};

export default PrevBtn;
