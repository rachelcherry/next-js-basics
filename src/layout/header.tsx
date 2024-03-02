import React from "react";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useRouter } from "next/router";
const { Header } = Layout;
const CustomHeader = () => {
  // You'll need to edit this array
  const menuItems: { key: string; label: string; href: string }[] = [
    { key: "0", label: "Home", href: "/" }, /* creates keys with label for home page*/
    { key: "1", label: "News", href: "/news" }, /* creates keys with label for news page*/
    { key: "2", label: "About", href: "/about" }, /* creates keys with label for about page*/
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
      <Header /* adds a header tag and styles in accordingly*/
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0",
          height: "100%",
          lineHeight: "60px",
        }}
      ></Header> 
      <div />
      <Menu /*creates a menu tag that can go from page to page */
        selectedKeys={[selectedKey]}/* gets the menu items*/
        onClick={handleClick} /* call the function to switch between pages */
        mode="horizontal"
        theme="dark"
        style={{ width: "100%" }}
      >
        {menuItems.map((item) => ( /* map the items in the menu to the page*/
          <Menu.Item
            key={item.key}
            style={{
              background: selectedKey === item.key ? "#52C41A" : "transparent",
            }}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default CustomHeader;
