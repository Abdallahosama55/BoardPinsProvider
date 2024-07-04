
import Logo from "../../assets/images/Logo.png"
import search from "../../assets/images/Navbar/search (1).png"
import chat from "../../assets/icons/pluscircle.png"
const NavbarProvider = () => {
  return (
    <nav className=" flex py-2 md:ms-4 mb-6 text-white w-full">
<img src={Logo} className="  md:w-[14%] w-[25%] h-[90%] "/>
<div className=" md:w-[58%] flex items-center w-[45%] md:text-[18px] text-[12px] relative bg-white rounded-[13px] md:ms-12 ms-4">

<img src={search} className=" md:w-[25px] w-[20px] md:left-[95%] left-[80%]  absolute"/>
<input type="text" placeholder="What are you looking for?" className=" px-5 w-full rounded-[13px] text-black opacity-50 h-full"/>
</div>
<div>

<button className=" bg-[#6161FF] md:px-5 md:py-4 md:rounded-[12px] rounded-[8px]  py-2 px-3 flex items-center ms-5">
<img src={chat} width={25}/>

<span className=" px-3 md:block hidden">Add New</span>
</button>

</div>
  </nav>
  );
};

export default NavbarProvider;
