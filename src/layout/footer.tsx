import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const CustomFooter = () => {

  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#333", color: "white"}}>
       &copy; BU Spark! All Rights Reserved.
    </Footer>
  );
};

export default CustomFooter;