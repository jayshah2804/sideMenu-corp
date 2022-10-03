import React from "react";
import classes from "./SideMenu.module.css";
import SideMenuData from "./SideMenuData";

const DUMMY_MENU_DATA = [
  {
    main: "Dashboard",
  },
  {
    main: "Student Department",
    sub: ["Employees", "Delete Employees", "Private Drive"],
  },
  {
    main: "S.S Divine School",
    sub: ["Departments", "Admins", "Trips", "Budget & Insurance"],
  },
  {
    main: "Departments",
  },
];

const SideMenu = () => {
  return (
    <div className={classes.subMenu}>
      {DUMMY_MENU_DATA.map(({ main, sub }) => {
        return <SideMenuData main={main} sub={sub} />;
      })}
    </div>
  );
};

export default SideMenu;
