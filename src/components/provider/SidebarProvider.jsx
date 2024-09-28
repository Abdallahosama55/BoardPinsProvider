import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdExit } from "react-icons/io";
import Logo from "../../assets/images/Logo.png";
import "../../../src/App.css";
import {
  biddingprojectIcon,
  chatIcon,
  compareIcon,
  dashboardIcon,
  merchantIcon,
  myboardIcon,
  searchIcon,
  productiongroupIcon,
  projectmangementIcon,
  settingIcon,
  inviteIcon,
  arrowdownIcon,
  KnowloagebaseIcon,
  connectedmerchanetIcon,
  pinnedmerchanetIcon,
  tasksIcon,
  sharedprojectIcon,
  mybidsIcon,
  savedIcon,
  discoverprojectIcon,
  compareItemIcon,
  compareformIcon,
} from "../../assets/CustomIcon/SidebarIcon";
import { FiSearch } from "react-icons/fi";

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [dropdowns, setDropdowns] = useState({
    chat: false,
    projectManagement: false,
    Merchant: false,
    compare: false,
    biddingProject: false,
    productionGroup: false,
    Setting: false,
  });

  const location = useLocation();

  const menuItems = [
    { id: 1, icon: myboardIcon, text: "My Board Pins", path: "myboard" },
    {
      id: 2,
      icon: dashboardIcon,
      text: "Dashboard",
      path: "dashboard",
    },
    {
      id: 3,
      icon: chatIcon,
      text: "Chat",
      dropdown: "chat",
      subItems: [
        { id: "chat", text: "Chat", icon: chatIcon, path: "/chat" },
        {
          id: "knowledgebase",
          text: "Knowledge Base",
          icon: KnowloagebaseIcon,
          path: "/knowledgebase",
        },
      ],
    },
    {
      id: 4,
      icon: merchantIcon,
      text: "Merchant",
      dropdown: "Merchant",
      subItems: [
        {
          id: "connected",
          text: "Connected",
          icon: connectedmerchanetIcon,
          path: "/merchant",
        },
        {
          id: "pinned",
          text: "Pinned",
          icon: pinnedmerchanetIcon,
          path: "/merchantPinned",
        },
      ],
    },
    {
      id: 5,
      icon: projectmangementIcon,
      text: "Project Management",
      dropdown: "projectManagement",
      subItems: [
        {
          id: "tasks",
          text: "Tasks",
          icon: projectmangementIcon,
          path: "/projectmangement-tasks",
        },
        {
          id: "sharedprojects",
          text: "Shared Projects",
          icon: sharedprojectIcon,
          path: "/projectmangement-SharedProjects",
        },
      ],
    },
    {
      id: 6,
      icon: biddingprojectIcon,
      text: "Bidding Projects",
      dropdown: "biddingProject",
      path: "/bidding-project/offer",
      subItems: [
        {
          id: "discover",
          text: "Discover Projects",
          icon: discoverprojectIcon,
          path: "/bidding-project",
        },
        {
          id: "mybids",
          text: "My Bids",
          icon: mybidsIcon,
          path: "/mybids",
        },
        {
          id: "saved",
          text: "Saved Projects",
          icon: savedIcon,
          path: "/saved-BiddingProject",
        },
      ],
    },
    {
      id: 7,
      icon: compareIcon,
      text: "Compare Space",
      path: "/compare",
      dropdown: "compare",
      subItems: [
        {
          id: "compare",
          text: "Compare",
          icon: compareItemIcon,
          path: "/compare-between",
        },
        {
          id: "saved",
          text: "Saved",
          icon: compareformIcon,
          path: "/compare/saved",
        },
      ],
    },
    {
      id: 8,
      icon: productiongroupIcon,
      text: "Production Group",
      path: "/production-group",
    },
    { id: 9, text: "ACCOUNT" },
    {
      id: 10,
      icon: settingIcon,
      text: "Setting",
      dropdown: "Setting",
      subItems: [
        { id: "billing", text: "Billing", icon: "", path: "/setting-billing" },
        { id: "profile", text: "Profile", icon: "", path: "/setting-profile" },
      ],
    },
    { id: 11, icon: inviteIcon, text: "Invite", onClick: handleIsopen },
  ];

  useEffect(() => {
    const currentPath = location.pathname;

    // Find the exact or partial match for main items
    const currentItem = menuItems.find((item) =>
      currentPath.includes(item.path)
    );
    if (currentItem) {
      setSelectedItem(currentItem.id);
    }

    // Handle sub-items
    menuItems.forEach((item) => {
      if (item.subItems) {
        const currentSubItem = item.subItems.find((subItem) =>
          currentPath.includes(subItem.path)
        );
        if (currentSubItem) {
          setSelectedItem(item.id);
          setSelectedSubItem(currentSubItem.id);
        }
      }
    });
  }, [location.pathname, menuItems]); // Ensure menuItems is included in the dependency array

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (id) => setSelectedItem(id);

  const handleSubItemClick = (itemId, subItemId) => {
    setSelectedItem(itemId);
    setSelectedSubItem(subItemId);
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => {
      const updatedDropdowns = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prev[key] : false;
        return acc;
      }, {});
      return updatedDropdowns;
    });
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? "top-[1%]" : "top-[3%]"} ${
          isOpen ? "left-[48%]" : "left-[5%]"
        } p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>

      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 py-4 top-0 md:py-0 md:h-full md:w-[17.5%]`}
      >
        <div className="flex justify-between items-center w-full">
          <Link to={"/myboard"}>
            <img src={Logo} className="w-[200px] pt-4" alt="Logo" />
          </Link>
        </div>

        <ul
          className="font-popines flex flex-col text-sm gap-4 font-[500] max-h-[90vh] overflow-y-auto py-4 px-1 mt-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 ##1E1E1EBF",
          }}
        >
          <li className="bg-[#F2F2F2] rounded-lg  flex items-center text-[#666666] p-3 ">
            <FiSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-0 flex-grow"
            />
          </li>

          {menuItems?.map((item) => (
            <React.Fragment key={item.id}>
              <Link
                to={item.path}
                className={`flex flex-col gap-1 px-2 py-3 ${
                  selectedItem === item.id
                    ? "bg-white shadow-custom2 rounded-lg py-3 font-[600] text-[#6161FF]"
                    : "text-dark"
                }`}
                onClick={() => {
                  handleItemClick(item.id);
                  if (item.onClick) item.onClick(); // Trigger onClick if available
                }}
              >
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => item.dropdown && toggleDropdown(item.dropdown)}
                >
                  <div className="flex-grow flex items-center w-full gap-3">
                    {item.icon && (
                      <span
                        style={{
                          color: selectedItem === item.id ? "#6161FF" : "#000",
                        }}
                        className={`${
                          selectedItem === item.id ? "change-my-color" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                    )}
                    {item.text}
                  </div>
                  {item.dropdown && (
                    <div className="flex justify-end pe-4">{arrowdownIcon}</div>
                  )}
                </div>
                {item.subItems && dropdowns[item.dropdown] && (
                  <ul className="mt-2 py-3 flex flex-col gap-8">
                    {item.subItems.map((subItem) => (
                      <Link
                        to={subItem.path}
                        key={subItem.id}
                        className={`flex items-center gap-2 px-3 ${
                          selectedSubItem === subItem.id
                            ? " change-my-color  border-l-[3px]"
                            : "text-black"
                        }`}
                        onClick={() => handleSubItemClick(item.id, subItem.id)}
                      >
                        {subItem.icon && (
                          <span
                            style={{
                              color:
                                selectedSubItem === subItem.id
                                  ? "#ffffff"
                                  : "#000",
                            }}
                          >
                            {subItem.icon}
                          </span>
                        )}
                        {subItem.text}
                      </Link>
                    ))}
                    
                  </ul>
                  
                )}
        
              </Link>
              {item.id===10 ?           <button className=" text-white  bg-[#6262FF] rounded-lg w-full py-2 mt-4">
            <Link to="/upgrade">Upgrade</Link>
          </button> :"" }

            </React.Fragment>
          ))}
      

          
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;
