import { FC, useEffect, useState } from "react";



import "../assets/menu.css";
import React from "react";

interface MenuProps {
  active: boolean;
}

const Menu: FC<MenuProps> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

 const menuItems = ["home", "Skills", "Experience", "Education"];


  const MBclick = (index: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const items = [false, false, false, false, false];
    items[index] = true;
    setActiveItem(items);
  };

  const MButtons = () => {
    const items: any = [];

    for (let i = 0; i < menuItems.length; i++) {
      const Aclass = activeItem[i] ? "active" : "";

      const Mdiv = React.createElement(
        "div",
        {
          onClick: (e) => {
            MBclick(parseInt(e.currentTarget.id));
          },
          key: i,
          id: i,
        },
      
        React.createElement(
          "a",
          { href: "#", className: Aclass },
          React.createElement(
            "img",
            { src: "/PExperiences.png", className:"imgMenu" }         
          ),
          React.createElement("strong", {}, menuItems[i]),
          React.createElement("small", {}, "------------------------")
        )
      );

      items.push(Mdiv);
    }

    return items;
  };

  return (
    <>
      <div className={open ? "mcd-menu opened" : "mcd-menu"}>{MButtons()}</div>

      <div
        id="nav-icon"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Menu;
