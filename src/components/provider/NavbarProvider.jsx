import Logo from "../../assets/images/Logo.png";
import search from "../../assets/images/Navbar/search (1).png";
import user from "../../assets/icons/Ellipse 232.png";
import chat from "../../assets/icons/chatsvg.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import NotificationList from "./NavbarProvider/NotificationList";
import PersionalList from "./NavbarProvider/PersionalList";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/features/userSliceDate";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NavbarProvider = ({ handleIsopen }) => {
  const { t } = useTranslation(''); // Use the 'common' namespace
  const [show, setShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <nav className="justify-end items-center lg:justify-start md:justify-start flex mt-2 md:ms-4 mb-1 text-white">
      
      <div className="flex-grow md:block hidden md:w-[58%] flex items-center w-[45%] md:text-[18px] text-[12px] relative bg-white rounded-[13px] md:ms-2 ms-5 min-h-[60px]">
        <form className="w-full flex items-center">
          <input
            type="text"
            placeholder={t('search_placeholder')} // Using translation here
            className="px-5 w-full rounded-[13px] text-black opacity-50 h-full focus:border-blue-500 border focus:shadow-custom outline-0 min-h-[60px]"
          />
          <button
            type="submit"
            className="absolute end-5 flex items-center justify-center h-full"
          >
            <img src={search} className="md:w-[25px] w-[20px]" />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-2">
        <button className="md:flex hidden bg-[#6161FF] md:px-5 md:py-4 md:rounded-[12px] rounded-[8px] py-2 px-3 flex items-center ms-5" onClick={() => navigate('chat')}>
          <img src={chat} width={25} />
          <span className="px-3">{t('chat')}</span> {/* Using translation here */}
        </button>

        <div className="gap-2 md:py-4 py-2 px-3 flex items-center">
          <button
            className="flex relative outline-0 border-[#292D32] border-r-[2px] px-3 justify-center"
            onClick={() => setShowNotification(!showNotification)}
          >
            <IoNotificationsOutline size={28} color="#292D32" />
            <div
            className={` lg:min-w-[400px] lg:w-[400px] lg:top-12 z-50 text-dark bg-white fixed top-0 min-w-full lg:h-auto h-full end-0   rounded-xl shadow-custom z-999 md:end-[9%]  lg:absolute transition-all duration-300 ease-in-out ${
              showNotification ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <NotificationList  setShowNotification={setShowNotification}/>
          </div>
          </button>
         
          <button
            className="relative userlist flex px-3 justify-center items-center"
            onClick={() => setShow(!show)}
          >
            <img
              src={user.profile_picture}
              className="rounded-full border-[2px] border-[#292D32] w-14 h-14"
            />
            <MdKeyboardArrowDown size={28} color="#292D32" />
          </button>
          <div
            className={` top-24 z-50 h-32 text-dark bg-white rounded-xl shadow-custom z-999 w-32 absolute transition-all duration-300 ease-in-out ${
              show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <PersionalList navigate={navigate} /> {/* Corrected prop name */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProvider;
