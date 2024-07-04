import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, InputAdornment, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarAccordion from './atoms/atomsSidebar/AccordionSidebar'; // Import the SidebarAccordion component
import MyBoard from '../../assets/icons/grid4.svg';
import icon_close_workspace from '../../assets/images/sidebar/Group 165 (2).png';
import icon_chat from '../../assets/icons/Frame 1171275911.svg';
import icon_chart from '../../assets/icons/Group.svg';
import icon_Merchants from '../../assets/icons/listcenter.svg';
import icon_right from '../../assets/icons/Frame.svg';
import pin1 from '../../assets/icons/pin-1 1.svg';
import icon_Management from '../../assets/icons/Frame 1171275913.svg';
import invite from '../../assets/icons/circle-clock--clock-loading-measure-time-circle.svg';
import icon_setting from '../../assets/images/sidebar/Setting.png';
import { IoMdExit } from "react-icons/io";

const SidebarProvider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: icon_close_workspace, text: 'Workspace1' },
    { icon: icon_close_workspace, text: 'Workspace2' },
    // Add more menu items as needed
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? 'top-[1%]' : 'top-[10%]'} ${isOpen ? 'left-[48%]' : 'left-[0%]'}  ${isOpen ? 'text-[red]'  :'' }  p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color='#000'/>} 
      </button>
      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-64 p-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 py-12 top-0 md:py-0 md:h-full md:w-[18%]`}
      >
        <ul className="space-y-2 poppins-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to="/" className="block font-[500] text-[#666666] rounded-[30px]">
                <SidebarAccordion icon={item.icon} text={item.text} />
              </Link>
            </li>
          ))}
          <li className=' '>
            <TextField
              placeholder="Search.."
              type="search"
              fullWidth
              size="small"
              sx={{
                "& fieldset": { border: 'none' },
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
            <Link to="/myboard" className="block hover:bg-white hover:text-[#6161FF] hover:font-[500] font-[500] mt-3 text-[#292D32] p-2 rounded-lg">
              <div className='flex items-center px-2 py-0'>
                <img src={MyBoard} alt="My Board" className='w-[30px] icon' />
                <span className='hover:font-[500] text-[14px] px-3'> My Board Pins</span>
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
            <Link to="/dashboard" className="block hover:bg-white hover:text-[#6161FF] hover:font-[500] mt-3 text-[#292D32] p-2 rounded-lg">
              <div className='flex items-center px-2 py-0'>
                <img src={icon_chart} alt="My Board" className='icon w-[30px]' />
                <span className='hover:font-[500] font-[500] text-[14px] px-3'> Dashboard</span>
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
            <Link to="/" className="block hover:bg-white hover:text-[#6161FF] hover:font-[500] mt-3 text-[#292D32] p-2 rounded-lg">
              <div className='flex items-center px-2 py-0'>
                <img src={icon_chat} alt="My Board" className='icon w-[30px]' />
                <span className='hover:font-[500] font-[500] text-[14px] px-3'> Chat</span>
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
            <div className="block hover:text-[#6161FF] text-[#292D32]">
              <Accordion sx={{ boxShadow: 'none', margin: 0, backgroundColor: "transparent", padding: 0 }} style={{ borderRadius: '9px', padding: "0px", margin: 0, border: '0px solid #ddd', overflow: 'hidden' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ color: "#292D32", fontSize: "14px", fontWeight: "400", margin: "0px", paddingBottom: 0 }}
                >
                  <div className='flex justify-center items-center'>
                    <img src={icon_Merchants} alt='workspace' className='w-[30px] px-0 m-0 ' />
                    <span className='font-[500] text-[14px] px-3'> Merchants</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className='hover:bg-white rounded-[9px] p-3'>
                      <Link to='/merchant' className='flex items-center gap-2 hover:text-[#6262FF]'>
                        <img className='w-[20px] icon' src={icon_right} alt="pin"/>
                        <span className='font-[500] text-md'>Connected</span>
                      </Link>
                    </li>
                    <li className='hover:bg-white rounded-[9px] p-3'>
                      <Link to='/merchantPinned' className='flex items-center gap-2 hover:text-[#6262FF]'>
                        <img className='w-[20px] icon' src={pin1} alt="pin"/>
                        <span className='font-[500] text-md'>Pinned</span>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
         
            </div>
          </li>
          <li>
            <Link to="/" className="block hover:text-[#6161FF] hover:bg-white text-[#292D32] rounded-[9px]">
              <Accordion sx={{ boxShadow: 'none', margin: 0, backgroundColor: "transparent", padding: 0 }} style={{ borderRadius: '9px', padding: "0px", margin: 0, border: '0px solid #ddd', overflow: 'hidden' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ color: "#292D32", fontSize: "14px", fontWeight: "400", margin: "0px", paddingBottom: 0 }}
                >
                  <div className='flex justify-center items-center'>
                    <img src={icon_Management} alt='workspace' className='w-[30px] icon' />
                    <span className='font-[500] text-[14px] px-3'> Management</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li className='hover:bg-white rounded-[9px] p-3'>
                      <Link to='/' className='flex items-center gap-2 hover:text-[#6262FF]'>
                        <img className='w-[20px]' src={pin1} alt="pin"/>
                        <span className='font-[500] text-md'>Pending</span>
                      </Link>
                    </li>
                    <li className='hover:bg-white rounded-[9px] p-3'>
                      <Link to='/' className='flex items-center gap-2 hover:text-[#6262FF]'>
                        <img className='w-[20px]' src={pin1} alt="pin"/>
                        <span className='font-[500] text-md'>Created</span>
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
      
          <p className='text-[#292D32] px-5 py-3 '>ACCOUNT</p>
        <Link to="/" className="block hover:bg-white  hover:text-[#6161FF] hover:font-[500]  mt-3 text-[#292D32] p-2 rounded-lg">
     
        <div className=' flex items-center px-2 py-0'>
        
          <img src={icon_setting} alt="My Board" className=' w-[20px]  text-[#292D32]' />
          <span className=' hover:font-[500] font-[500] text-[14px] px-3'> Settings</span>
        </div>
      </Link>
          </li>
    
    <li>
    <button className=' bg-[#6262FF] rounded-lg w-full py-2 mt-5 '>
    <Link  to="/upgrade">Upgrade</Link>
    
    </button>


    
    </li>
    
    
    <li>
        
    <Link to="/" className="block hover:bg-white  hover:text-[#6161FF] hover:font-[500]  mt-3 text-[#292D32] p-2 rounded-lg">
    
    <div className=' flex items-center px-2 py-0'>
    
    <img src={invite} alt="My Board" className=' w-[20px]  text-[#292D32]' />
    <span className=' hover:font-[500] font-[500] text-[14px] px-3'> Invite</span>
    </div>
    </Link>
    </li>
    
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;
