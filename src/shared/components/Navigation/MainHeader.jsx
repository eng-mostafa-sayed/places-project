import React from "react";

import "../../../css/shared/components/Navigation/MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
