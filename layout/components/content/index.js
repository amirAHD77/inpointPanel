import React from "react";

import Contentcontainer from "./index.style";

const Content = (props) => {
  return <Contentcontainer>{props.children}</Contentcontainer>;
};

export default Content;
