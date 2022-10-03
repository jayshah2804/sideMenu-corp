import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const SideMenuData = ({ main, sub }) => {
  const [subMenuIsAvtive, setSubMenuIsActive] = useState(false);
  return (
    <div>
      <div
        style={{ display: "inline-block" }}
        onClick={() => setSubMenuIsActive((prev) => !prev)}
      >
        {main}
      </div>
      {sub && (
        <div style={{ display: "inline-block" }}>
          {subMenuIsAvtive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      )}
      {subMenuIsAvtive && <div>{sub && sub.map((ele) => <p>{ele}</p>)}</div>}
    </div>
  );
};

export default SideMenuData;
