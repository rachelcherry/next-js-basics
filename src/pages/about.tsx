import { Inter } from "next/font/google";
import { Typography } from "antd";
import React from "react";
import {Image} from "antd";

const inter = Inter({ subsets: ["latin"] });

// You don't need to edit this file

export default function About() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography.Title>About the Author</Typography.Title>
        <Typography.Paragraph>
          My name is Rachel Cherry, and I am a current Junior at Boston Unviersity studying Computer Science. I am intended to graduate in 2025. I am interested in Software Engineering and love to code!
        </Typography.Paragraph>
        <div 
    
        >
        <Image 
        width= {150}
        height={150}
        src= "me.png"
        alt= "image"
    />
    </div>
      </div>
    </>
  );
}