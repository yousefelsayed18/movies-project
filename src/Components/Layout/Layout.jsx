import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Nvbar/Navbar"
export default function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/moviedetails");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
}
