import React, { useState, useEffect } from "react";

import { LayoutContainer } from "./index.style";
import Drawer from "./components/drawer";
import Themes from "../utils/themes";

const Layout = (props) => {
  const [sideBarStatus, setSideBarStatus] = useState("sideBarContainerActive");
  const [colors, setColors] = useState();

  useEffect(() => {
    // const temp = Themes();
    // setColors(temp);
  }, []);

  return (
    <LayoutContainer>
      <Drawer>{props.children}</Drawer>
    </LayoutContainer>
  );
};

export default Layout;
