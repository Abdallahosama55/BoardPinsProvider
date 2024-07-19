import { MdOutlineWhatsapp } from "react-icons/md";
import icon_chat from '../../../assets/icons/Frame 1171275911.svg';
import setting from '../../../assets/icons/Chat.svg';
function CardsInfo({ title, role, phone, imgSrc,status ,itemsCategories }) {
    return (
      <div className="rounded-2xl shadow-custom bg-white relative p-5 py-4">
      
      <img src={setting} alt="Profile Pic" className="w-4 h-4 end-0 absolute  mx-5  mb-4" />
        <img src={imgSrc} alt="Profile Pic" className="w-16 h-16   mb-4" />
     <div className=" my-1">
     
     <h3 className=" text-xl font-bold">{title}</h3>
     <p className="">{role}</p>
 
     </div>

       
        <div className="grid grid-cols-2 gap-7">
        {itemsCategories.map((item,key)=>
        <div key={key} className=" py-2">
        
        <span className=" px-3  border-[1px] border-[#6161FF] text-[#6161FF] rounded-3xl flex">{item}</span>   
        </div>
   
        
        )}


        </div>

        <div className=" flex items-center mt-2">
        <p className=" bg-[#45DD4B12] text-[#52CD8F] px-3 py-1 rounded-2xl ">{status}</p>
        <div className="  flex  gap-3 w-full justify-end  ">

        <button className="   rounded-full bg-[#52CD8F] flex justify-center items-center w-[35px] h-[35px]"> 
        
<MdOutlineWhatsapp color="white" size={18} />
        
        </button>
      
       </div>


        
        </div>
     
      </div>
    );
  }
  
  export default CardsInfo;
  