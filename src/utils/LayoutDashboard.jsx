import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/provider/NavbarProvider";
import Sidebar from "../components/provider/SidebarProvider";
import Invite from "../components/provider/Invite/Invite";
import DataWelcomeModal from "../components/provider/DataWelcomeModal/DataWelcomeModal";
import { selectUser, setUser } from "../redux/features/userSliceDate";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useGetUserInfoQuery } from "../services/userApi";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

const LayoutDashboard = () => {
  const [IsOpen, setIsOpen] = useState();
  const [IsOpenWelcome, setIsOpenWelcome] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { data, error, isLoading } = useGetUserInfoQuery(); // RTK Query to get user info
  const { i18n } = useTranslation();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data)); // Store user info in global state if fetched
    }
  }, [data, dispatch]);

  // Set the body direction and font style based on the language
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (i18n.language === "ar") {
      htmlElement.setAttribute("dir", "rtl");
      htmlElement.style.fontFamily = "Cairo, sans-serif"; // Set font to Cairo for Arabic
    } else {
      htmlElement.setAttribute("dir", "ltr");
      htmlElement.style.fontFamily = "Poppins, sans-serif"; // Set font to Poppins for English
    }
  }, [i18n.language]); // Run this effect when the language changes

  if (isLoading) return <p className="flex justify-center items-center min-h-screen"><CircularProgress /></p>;
  if (error) return <p>Error loading user data.</p>;

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FA] relative">
      <Sidebar className="z-10" handleIsopen={() => setIsOpen(true)} />
      <div className="flex flex-col flex-1">
        <Invite isOpen={IsOpen} handleIsclose={() => setIsOpen(false)} />
        {user.is_approvid ? "" : <DataWelcomeModal isOpen={true} handleIsclose={() => setIsOpenWelcome(false)} />}
        <Navbar className="z-20" />
        <div
          className="flex-1 h-full outline-0 rounded-2xl mx-6 bg-[#ffffff]  overflow-y-auto"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 #fffff",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
