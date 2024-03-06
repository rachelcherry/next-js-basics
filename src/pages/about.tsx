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
        <Typography.Title >About the Author</Typography.Title> {/* information about me */}
        <Typography.Paragraph> {/* paragraph that contains the information */}
          My name is Rachel Cherry, and I am a current Junior at Boston Unviersity studying Computer Science. I am from Baltimore, Maryland, and I am intended to graduate from BU in 2025. I am interested in Software Engineering and love to code! I am currently taking CS 391 and designed this website about Space. 
        </Typography.Paragraph> 
        <div 
        style={{
             width: "150px",
             height: "150px",
             overflow: "hidden",
             borderRadius: "50%", /* lines 27-31 makes the image circular  */
             objectFit: "cover",
           
        }}
        >
        <Image /* create an image */
        width= {150}
        height={150}
        src= "me.png" /* create from the picture uploaded */
        alt= "image"
    />
    </div>
      </div>
    </>
  );
}