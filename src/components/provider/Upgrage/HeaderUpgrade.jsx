import card from "../../../assets/icons/Group 165.svg"
function HeaderUpgrade({title}) {
  return (
    <div>
    <div className=" flex gap-2 py-3">
    <img src={card} className=" w-[35px]"/>
    <h2 className="text-[#292D32] font-bold text-2xl">{title}</h2>
    
    </div>
    </div>
  )
}

export default HeaderUpgrade