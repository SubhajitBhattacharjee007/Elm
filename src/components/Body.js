import React, { useState } from "react";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

function Body(props) {
  const [template, setTemplate] = useState(props.template);
  return (
    <>
      <LeftPanel setTemplate={setTemplate} />
      <RightPanel template={template} />
    </>
  );
}

export default Body;
