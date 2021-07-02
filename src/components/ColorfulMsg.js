import React from "react";

const Msg = (props) => {
  return <p style={{ color: props.color }}>{props.children}</p>;
};
export default Msg;
