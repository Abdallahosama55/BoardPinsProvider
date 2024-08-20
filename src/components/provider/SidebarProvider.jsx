import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarAccordion from "./atoms/atomsSidebar/AccordionSidebar"; // Import the SidebarAccordion component
import MyBoard from "../../assets/icons/grid4.svg";
import icon_close_workspace from "../../assets/images/sidebar/Group 165 (2).png";
import icon_chat from "../../assets/icons/Frame 1171275911.svg";
import icon_chart from "../../assets/icons/Group.svg";
import icon_Merchants from "../../assets/icons/listcenter.svg";
import icon_right from "../../assets/icons/Frame.svg";
import pin1 from "../../assets/icons/pin-1 1.svg";
import icon_Management from "../../assets/icons/Frame 1171275913.svg";
import invite from "../../assets/icons/circle-clock--clock-loading-measure-time-circle.svg";
import icon_brain from "../../assets/icons/brain.svg";
import icon_setting from "../../assets/images/sidebar/Setting.png";
import Logo from "../../assets/images/Logo.png";
import { IoMdExit } from "react-icons/io";
import Invite from "./Invite/Invite";
import { CgProfile } from "react-icons/cg";
import { MdGroups2, MdOutlinePayment } from "react-icons/md";
import Bidding from "../../assets/icons/Bidding.svg";
import discover from "../../assets/icons/discover.svg";
import mybids from "../../assets/icons/mybids.svg";
import Saved from "../../assets/icons/savedd.svg";
import compares from '../../assets/icons/compare.png';

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (id) => {
    setSelectedItem(id); // Set the unique identifier of the clicked item
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: icon_close_workspace, text: "Workspace1" },
   
    // Add more menu items as needed
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? "top-[1%]" : "top-[3%]"} ${
          isOpen ? "left-[48%]" : "left-[5%]"
        }  ${
          isOpen ? "text-[red]" : ""
        }  p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>
      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 p-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0  py-4 top-0 md:py-0 md:h-full md:w-[18%]`}
      >
        <div className=" flex  justify-between items-center w-full">
          <img src={Logo} className=" w-[200px] py-6 " />
        </div>

        <ul
          className="space-y-2 py-4 mb-12  poppins-medium overflow-y-auto  h-[85%]"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 ##1E1E1EBF",
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to="/"
                className="block font-[500] text-[#666666] rounded-[30px]"
              >
                <SidebarAccordion icon={item.icon} text={item.text} />
              </Link>
            </li>
          ))}
          <li className=" ">
            <TextField
              placeholder="Search.."
              type="search"
              fullWidth
              size="small"
              sx={{
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                style: {
                  borderRadius: "8px",
                  padding: "5px",
                  paddingLeft: "10px",
                  backgroundColor: "#F2F2F2",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </li>
          <li>
            <Link
              to="/myboard"
              onClick={()=>handleItemClick('MyBoard')}
              className={`block hover:bg-white ${selectedItem==='MyBoard'?"text-[#6161FF] rounded shadow-custom mx-2 bg-white":""} hover:text-[#6161FF] hover:font-[500] font-[500] mt-3  text-[#292D32] p-2 rounded-lg`}
            >
              <div className="flex items-center px-2 py-0">
                <img src={MyBoard} alt="My Board" className="w-[30px] icon" />
                <span className="hover:font-[500] text-[14px] px-3">
                  {" "}
                  My Board Pins
                </span>
              </div>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              onClick={()=>handleItemClick ('Dashboard')}
              className={`block hover:bg-white ${selectedItem==='Dashboard'?"text-[#6161FF]  rounded shadow-custom bg-white mx-2":""} hover:text-[#6161FF] hover:font-[500] font-[500] mt-3 text-[#292D32] p-2 rounded-lg`}
            >
              <div className="flex items-center px-2 py-0">
                <img
                  src={icon_chart}
                  alt="My Board"
                  className="icon w-[30px]"
                />
                <span className="hover:font-[500] font-[500] text-[14px] px-3">
                  {" "}
                  Dashboard
                </span>
              </div>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <Link
          
            onClick={()=>handleItemClick('Chat')}
            className={`block hover:bg-white ${selectedItem==="Chat" ?"text-[#6161FF] bg-white mx-1 rounded shadow-custom ":""} hover:text-[#6161FF] hover:font-[500] font-[500] mt-3  rounded-lg`} >
              <Accordion
                sx={{
                  boxShadow: "none",
                  margin: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }}
           
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#292D32",
                    fontSize: "14px",
                    fontWeight: "400",
                    margin: "0px",
                    paddingBottom: 0,
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={icon_chat}
                      alt="workspace"
                      className="w-[30px] "
                    />
                    <span className="font-[500] text-[14px] px-3">
                      {" "}
                      AI Chat
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/chat"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[18px] " src={icon_chat} alt="pin" />
                        <span className="font-[500] text-sm">Chat</span>
                      </Link>
                    </li>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/knowledgebase"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img
                          className="w-[20px] "
                          src={icon_brain}
                          alt="knowledge base"
                        />
                        <span className="font-[500] text-sm">
                          knowledge base
                        </span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>

          <li >
            <div className="block hover:text-[#6161FF] text-[#292D32]  hover:bg-white rounded-xl ">
              <Accordion
                sx={{
                  boxShadow: "none",
                  margin: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                style={{
                  borderRadius: "9px",
                  padding: "0px",
                  margin: 0,
                  border: "0px solid #ddd",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#292D32",
                    fontSize: "12px",
                    fontWeight: "400",
                    margin: "0px",
                    paddingBottom: 0,
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={icon_Merchants}
                      alt="workspace"
                      className="w-[30px] px-0 m-0 "
                    />
                    <span className="font-[500] text-[14px] px-3">
                      {" "}
                      Merchants
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/merchant"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img
                          className="w-[20px] icon"
                          src={icon_right}
                          alt="pin"
                        />
                        <span className="font-[500] text-sm">Connected</span>
                      </Link>
                    </li>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/merchantPinned"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px] icon" src={pin1} alt="pin" />
                        <span className="font-[500] text-sm">Pinned</span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </li>
          <li>
            <Link className="block hover:text-[#6161FF] hover:bg-white text-[#292D32] rounded-[9px]">
              <Accordion
                sx={{
                  boxShadow: "none",
                  margin: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                style={{
                  borderRadius: "9px",
                  padding: "0px",
                  margin: 0,
                  border: "0px solid #ddd",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#292D32",
                    fontSize: "14px",
                    fontWeight: "400",
                    margin: "0px",
                    paddingBottom: 0,
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={icon_Management}
                      alt="workspace"
                      className="w-[30px] icon"
                    />
                    <span className="font-[500] text-[14px] px-3">
                      {" "}
                      Project Manage
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/projectmangement-tasks"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={pin1} alt="pin" />
                        <span className="font-[500] text-md">Tasks</span>
                      </Link>
                    </li>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/projectmangement-SharedProjects"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={pin1} alt="pin" />
                        <span className="font-[500] text-md">
                          Shared Projects
                        </span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <Link className="block hover:text-[#6161FF] hover:bg-white text-[#292D32] rounded-[9px]">
              <Accordion
                sx={{
                  boxShadow: "none",
                  margin: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                style={{
                  borderRadius: "9px",
                  padding: "0px",
                  margin: 0,
                  border: "0px solid #ddd",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#292D32",
                    fontSize: "14px",
                    fontWeight: "400",
                    margin: "0px",
                    paddingBottom: 0,
                  }}
                >
                  <div className="flex justify-center hover:text-[#6161FF]  items-center">
                    <img
                      src={Bidding}
                      alt="workspace"
                      className="w-[30px] icon"
                    />
                    <span className="font-[500] text-[14px] px-3">
                      {" "}
                      Bidding Projects
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/bidding-project"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={discover} alt="pin" />
                        <span className="font-[500] text-md">
                          Discover Projects
                        </span>
                      </Link>
                    </li>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/mybids"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={mybids} alt="pin" />
                        <span className="font-[500] text-md">My Bids</span>
                      </Link>
                    </li>

                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/saved-BiddingProject"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={Saved} alt="pin" />
                        <span className="font-[500] text-md">
                          Saved Projects
                        </span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <Link to="compare" className="block hover:text-[#6161FF] hover:bg-white text-[#292D32] rounded-[9px]">
              <Accordion
                sx={{
                  boxShadow: "none",
                  margin: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }}
                style={{
                  borderRadius: "9px",
                  padding: "0px",
                  margin: 0,
                  border: "0px solid #ddd",
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#292D32",
                    fontSize: "14px",
                    fontWeight: "400",
                    margin: "0px",
                    paddingBottom: 0,
                  }}
                >
                  <div className="flex justify-center hover:text-[#6161FF]  items-center">
                    <img
                      src={compares}
                      alt="workspace"
                      className="w-[30px] icon"
                    />
                    <span className="font-[500] text-[14px] px-3">
                      {" "}
                  Compare
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/compare-between"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={discover} alt="pin" />
                        <span className="font-[500] text-md">
                        Compare
                        </span>
                      </Link>
                    </li>
                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/compare/saved"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={Saved} alt="pin" />
                        <span className="font-[500] text-md">saved</span>
                      </Link>
                    </li>

                    <li className="hover:bg-white rounded-[9px] p-3">
                      <Link
                        to="/compare/forms"
                        className="flex items-center gap-2 hover:text-[#6262FF]"
                      >
                        <img className="w-[20px]" src={Saved} alt="pin" />
                        <span className="font-[500] text-md">
                         form
                        </span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <Link
              to="/production-group"
              onClick={()=>handleItemClick ('Dashboard')}
              className={`block hover:bg-white ${selectedItem==='Dashboard'?"text-[#6161FF]  rounded shadow-custom bg-white mx-2":""} hover:text-[#6161FF] hover:font-[500] font-[500] mt-3 text-[#292D32] p-2 rounded-lg`}
            >
              <div className="flex items-center px-2 py-0">
           
                <MdGroups2   className="icon w-[30px]" />
                <span className="hover:font-[500] font-[500] text-[14px] px-3">
                  {" "}
                Production Group
                </span>
              </div>
              <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
            </Link>
          </li>
          <li>
            <p className="text-[#292D32] px-5 py-3 ">ACCOUNT</p>

            <li>
              <Link className="block hover:text-[#6161FF] hover:bg-white text-[#292D32] rounded-[9px]">
                <Accordion
                  sx={{
                    boxShadow: "none",
                    margin: 0,
                    backgroundColor: "transparent",
                    padding: 0,
                  }}
                  style={{
                    borderRadius: "9px",
                    padding: "0px",
                    margin: 0,
                    border: "0px solid #ddd",
                    overflow: "hidden",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      color: "#292D32",
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0px",
                      paddingBottom: 0,
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={icon_setting}
                        alt="workspace"
                        className="w-[15px] p-1 icon"
                      />
                      <span className="font-[500] text-[14px] px-3">
                        {" "}
                        Setting
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="hover:bg-white rounded-[9px] p-3">
                        <Link
                          to="/setting-profile"
                          className="flex items-center gap-2 hover:text-[#6262FF]"
                        >
                          <CgProfile />
                          <span className="font-[500] text-md">Profile</span>
                        </Link>
                      </li>
                      <li className="hover:bg-white rounded-[9px] p-3">
                        <Link
                          to="/setting-billing"
                          className="flex items-center gap-2 hover:text-[#6262FF]"
                        >
                          <MdOutlinePayment />
                          <span className="font-[500] text-md">Billing</span>
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <style>{`
                .icon {
                  width: 30px;
                  height: 30px;
                }
                .block:hover .icon {
                  filter: brightness(0) saturate(100%) invert(35%) sepia(65%) saturate(565%) hue-rotate(200deg) brightness(97%) contrast(102%);
                }
              `}</style>
              </Link>
            </li>
          </li>

          <li>
            <button className=" bg-[#6262FF] rounded-lg w-full py-2 mt-5 ">
              <Link to="/upgrade">Upgrade</Link>
            </button>
          </li>

          <li>
            <Link className="block hover:bg-white  hover:text-[#6161FF] hover:font-[500]  mt-3 text-[#292D32] p-2 rounded-lg">
              <div
                className=" flex items-center px-2 py-0"
                onClick={() => handleIsopen()}
              >
                <img
                  src={invite}
                  alt="My Board"
                  className=" w-[20px]  text-[#292D32]"
                />
                <span className=" hover:font-[500] font-[500] text-[14px] px-3">
                  {" "}
                  Invite
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;
