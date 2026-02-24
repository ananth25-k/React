import React from "react";
import "./Sidemenu.css";
import Sidebaritem from "./SidebarItem";
import items from "./Servies/Sidebar.json";
function Sidemenu() {
  return (
    <>
      <div className="layout">
        <div className="sidebar">
          {items.map((item, index) => (
            <Sidebaritem key={index} item={item} />
          ))}
        </div>

        <div className="main-content" style={{marginTop:"70px"}}>
          Main Content Area Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Perferendis praesentium temporibus soluta architecto repellendus
          odit, provident aliquid illo. Placeat, accusantium labore hic quos
          nesciunt praesentium rerum deleniti laborum ipsum molestias.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quidem,
          veritatis et nemo, nobis impedit cupiditate optio molestias, odit
          possimus dolores ipsam quo? Natus, consectetur atque. Perspiciatis
          recusandae consectetur nemo?
        </div>
        
      </div>
    </>
  );
}

export default Sidemenu;
