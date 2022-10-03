import React, { useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrClose } from "react-icons/gr";

import classes from "./Header.module.css";
import orgLogo from "../../Assets/eximious-logo.png";
import littleLogo from "../../Assets/Little_logo.jpg";
import adminPhoto from "../../Assets/admin.jpg";
import SideMenu from "./SideMenu";

const Nav = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState();
  const sideMenuClickHandler = () => {
    setSideMenuIsOpen(true);
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {!sideMenuIsOpen && (
            <CgMenuMotion
              style={{ fontSize: "25px" }}
              onClick={sideMenuClickHandler}
            />
          )}
          {sideMenuIsOpen && (
            <GrClose
              style={{ fontSize: "25px" }}
              onClick={() => setSideMenuIsOpen(false)}
            />
          )}
          <img src={littleLogo} alt="" className={classes.littleLogo} />
        </div>
        <div className={classes.orgDetails}>
          <img src={orgLogo} alt="" className={classes.logo} />
          <IoMdNotificationsOutline className={classes.notification} />
          <img src={adminPhoto} alt="" className={classes.adminPhoto} />
        </div>
      </div>
      {sideMenuIsOpen && <SideMenu />}
    </React.Fragment>
  );
};

export default Nav;
