import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/AdminPanel/Sidebar/Sidebar";
export default function AdminPanel() {
  return (
    <>
      <div className="panelcontent bg-bg font-roya   w-full ">
        <div className="container ">
          <Sidebar />
          <div className="main pr-[330px] pt-5">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
