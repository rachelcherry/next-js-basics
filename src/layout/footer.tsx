import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const CustomFooter = () => { /* creates a footer tag for the page */

  return (
    <Footer /* creates footer that looks like example */ style={{ textAlign: "center", color: "black"}}>
       Spark! &copy;2023 Created by Spark!  
    </Footer >
  );
};

export default CustomFooter;