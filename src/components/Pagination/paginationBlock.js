import React from "react";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

const PaginationBlock = props => {
  return (
    <React.Fragment>
      <PrevBtn onClick={props.handlePrev} prev={props.prev} />
      <NextBtn onClick={props.handleNext} next={props.next} />
    </React.Fragment>
  );
};

export default PaginationBlock;
