import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdExit } from "react-icons/io";
import Logo from "../../assets/images/Logo.png";
import { TbSquareRoundedCheck } from "react-icons/tb";

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
import { useGetAllWorkspacesMutation } from "../../services/WorkspacesServices";
import { useTranslation } from "react-i18next";

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [workspaces, setWorkspaces] = useState([]); // Store workspaces fetched from API
  const{t,i18n}=useTranslation()
  const [dropdowns, setDropdowns] = useState({
    chat: false,
    projectManagement: false,
    Merchant: false,
    compare: false,
    biddingProject: false,
    productionGroup: false,
    Setting: false,
  });

  const [getAllWorkspaces, { isLoading, isSuccess, isError, data }] = useGetAllWorkspacesMutation();

  useEffect(() => {
    const fetchWorkspaces = async () => {
      const token = localStorage.getItem('accessToken');
      const userUuid = localStorage.getItem('uuid');

      if (!token || !userUuid) {
        console.error('Token or User UUID not found in localStorage');
        return;
      }

      try {
        // Trigger the mutation to fetch workspaces
        await getAllWorkspaces({user_uuid: userUuid });
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, [getAllWorkspaces]);

  useEffect(() => {
    if (isSuccess && data?.status === 'success') {
      setWorkspaces(data.data);
    } else if (isError) {
      console.error('Failed to fetch workspaces');
    }
  }, [isSuccess, isError, data]);

  const location = useLocation();


  const menuItems = [
    { id: 1, icon: myboardIcon, text: "menu.myBoardPins", path: "myboard" },
    {
      id: 2,
      icon: dashboardIcon,
      text: "menu.dashboard",
      path: "dashboard",
    },
    {
      id: 3,
      icon: chatIcon,
      text: "menu.chat",
      dropdown: "chat",
      subItems: [
        { id: "chat", text: "menu.chat", icon: chatIcon, path: "/chat" },
        {
          id: "knowledgebase",
          text: "menu.knowledgeBase",
          icon: KnowloagebaseIcon,
          path: "/knowledgebase",
        },
      ],
    },
    {
      id: 4,
      icon: merchantIcon,
      text: "menu.merchant",
      dropdown: "Merchant",
      subItems: [
        {
          id: "connected",
          text: "menu.connected",
          icon: connectedmerchanetIcon,
          path: "/merchant",
        },
        {
          id: "pinned",
          text: "menu.pinned",
          icon: pinnedmerchanetIcon,
          path: "/merchantPinned",
        },
      ],
    },
    {
      id: 5,
      icon: projectmangementIcon,
      text: "menu.projectManagement",
      dropdown: "projectManagement",
      subItems: [
        {
          id: "tasks",
          text: "menu.tasks",
          icon: projectmangementIcon,
          path: "/projectmangement-tasks",
        },
        {
          id: "sharedprojects",
          text: "menu.sharedProjects",
          icon: sharedprojectIcon,
          path: "/projectmangement-SharedProjects",
        },
      ],
    },
    {
      id: 6,
      icon: biddingprojectIcon,
      text: "menu.biddingProjects",
      dropdown: "biddingProject",
      path: "/bidding-project",
      subItems: [
        {
          id: "discover",
          text: "menu.discoverProjects",
          icon: discoverprojectIcon,
          path: "/bidding-project",
        },
        {
          id: "mybids",
          text: "menu.myBids",
          icon: mybidsIcon,
          path: "/mybids",
        },
        {
          id: "saved",
          text: "menu.savedProjects",
          icon: savedIcon,
          path: "/saved-BiddingProject",
        },
      ],
    },
    {
      id: 7,
      icon: compareIcon,
      text: "menu.compareSpace",
      path: "/compare",
      dropdown: "compare",
      subItems: [
        {
          id: "compare",
          text: "menu.compare",
          icon: compareItemIcon,
          path: "/compare-between",
        },
        {
          id: "saved",
          text: "menu.saved",
          icon: compareformIcon,
          path: "/compare/saved",
        },
      ],
    },
    {
      id: 8,
      icon: productiongroupIcon,
      text: "menu.productionGroup",
      path: "/production-group",
    },
    { id: 9, text: "menu.account" },
    {
      id: 10,
      icon: settingIcon,
      text: "menu.setting",
      dropdown: "Setting",
      subItems: [
        { id: "billing", text: "menu.billing", icon: "", path: "/setting-billing" },
        { id: "profile", text: "menu.profile", icon: "", path: "/setting-profile" },
      ],
    },
    { id: 11, icon: inviteIcon, text: "menu.invite", onClick: handleIsopen },
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
          isOpen ? "start-[48%]" : "start-[5%]"
        } p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>

      <div
        className={`fixed inset-x-0  px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 transform ${
          isOpen 
            ? "translate-x-0"
            : i18n.language === "ar" 
            ? "translate-x-full" 
            : "-translate-x-full"
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
  

          {workspaces?.map(workspace => (
          <li key={workspace.id} className=" p-1  bg-[#FFD5CF] text-[#FF6161] rounded-lg">
              
              <span > <TbSquareRoundedCheck size={22}  /></span>
          <span className=" text-[#666666]">{t('workspace.title')}</span>
          
          </li>
        ))}
          <li className="bg-[#F2F2F2] rounded-lg  flex items-center text-[#666666] p-3 ">
            <FiSearch />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              className="bg-transparent px-2 outline-0 flex-grow"
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
                    {t(item.text)}

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
                        {t(subItem.text)}
                      </Link>
                    ))}
                  </ul>
                )}
              </Link>
              {item.id === 10 ? (
                <button className=" text-white  bg-[#6262FF] rounded-lg w-full py-2 mt-4">
                  <Link to="/upgrade">{t('Upgrade')}</Link>
                </button>
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;
