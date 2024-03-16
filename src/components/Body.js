import React from "react";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

function Body(props) {
  return (
    <>
      <LeftPanel />
      <RightPanel template={props.template} />
    </>
  );
}

export default Body;
