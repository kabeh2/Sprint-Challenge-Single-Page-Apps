import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

const NextBtn = props => {
  const [prevDisabled, setPrevDisabled] = useState(false);

  useEffect(() => {
    if (props.next === "") {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
  }, [props.next, prevDisabled]);
  return (
    <button
      className="next_btn"
      onClick={props.onClick}
      disabled={prevDisabled}
    >
      <Icon name="right triangle" />
      <p>Next</p>
    </button>
  );
};

export default NextBtn;
