import React from "react";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useRouter } from "next/router";
const { Header } = Layout;
const CustomHeader = () => {
  // You'll need to edit this array
  const menuItems: { key: string; label: string; href: string }[] = [
      { key: "0", label: "Home", href: "/" },
      { key: "1", label: "News", href: "/news" },
      { key: "2", label: "About", href: "/about" },
    // each menu item must contain:
    // key: unique string (should be integer-like, e.g. '0' or '1')
    // label: string
    // href: string (route path) (should not have a trailing-slash, like '/news/'; '/news' is correct.)
  ];
  // Don't touch this code, use it in your Menu component from Antd
  const router = useRouter();
  const selectedKey = menuItems
    .findIndex((item) => item.href === router.pathname)
    .toString();

  const handleClick = (e: MenuInfo) => {
    const parsedKey = parseInt(e.key);
    if (parsedKey < 0 || parsedKey >= menuItems.length) return;
    router.push(menuItems[parsedKey].href);
  };


  // Start editing here

  return (
    <>
  <Header style={{ display: "flex", alignItems: "center" }}></Header>
  <Menu 
  selectedKeys={[selectedKey]}
  onClick={handleClick}
  mode="horizontal"
  theme="dark"
  style={{width: "100%"}}
  >
  {menuItems.map((item) => (
    <Menu.Item key={item.key}
    style={
    {
background:selectedKey===item.key? "#52C41A" : "transparent",

    }
    
    }
    
    
    >{item.label}</Menu.Item>
  ))}
</Menu>
  </>
  )
};

export default CustomHeader;
