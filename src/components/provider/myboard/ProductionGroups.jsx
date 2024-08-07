import { IoPersonRemove } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import iconEdit from '../../../assets/icons/pepicons-pop_expand.png';
import iconSetting from '../../../assets/icons/Group (1).png';
import imgIcon from '../../../assets/icons/Ellipse 232.png';

const merchants = [
  {
    name: "Mohamed Adel",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Farg",
    rating: 4,
    role: "Software Engineer",
    timeAgo: "2 hours ago",
  },
  {
    name: "Mohamed Kareem",
    rating: 4,
    role: "Test Engineer",
    timeAgo: "2 hours ago",
  },
];

const Header = () => (
  <header className="py-5 items-center gap-2 flex  flex-row relative">
    <div className="p-3 bg-[#D9D9D9] rounded-xl">
      <GrGroup size={22} />
    </div>
    <div className="mt-3 md:mt-0">
      <h3 className="font-[400] text-[22px]">Production Groups</h3>
    </div>
    <div className="flex md:absolute right-0 mt-3 md:mt-0">
      <button className="w-[25px]">
        <img src={iconEdit} alt="Edit Icon" />
      </button>
      <button className="w-[25px] ml-2">
        <img src={iconSetting} alt="Setting Icon" />
      </button>
    </div>
  </header>
);

const MerchantInfo = ({ name, rating, role, timeAgo }) => (
  <div className="col-span-12 md:col-span-5">
    <div className="flex gap-4 items-center">
      <img src={imgIcon} className="rounded-full w-[45px] h-[45px]" alt="Merchant Icon" />
      <div className="text-[#404040]">
        <div className="p-2">
          <div className="flex gap-4 items-center">
            <h2 className="text-md font-[500]">{name}</h2>
            <div className="flex rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < rating ? "#FFC229" : "#D9D9D9"} />
              ))}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="gap-5 flex">
            <div className="text-sm text-[#919191]">{role}</div>
            <div className="text-sm text-[#919191]">{timeAgo}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Actions = () => (
  <div className="col-span-12 md:col-span-3 flex items-center gap-5 mt-3 md:mt-0">
    <div className="flex gap-3">
      <button className="rounded-2xl text-white px-5 md:px-9 py-1 bg-[#52CD8F]">
        <FaWhatsapp />
      </button>
      <button className="rounded-2xl font-bold text-[#000000] md:px-9 px-3 py-1 bg-[#D9D9D9]">
        500
      </button>
    </div>
  </div>
);

const ProjectActions = () => (
  <div className="col-span-12 md:col-span-4 flex items-center gap-3 mt-3 md:mt-0">
    <div className="font-medium text-sm text-[#6161FF]">
      Create project with this merchant
    </div>
    <button className="font-medium flex items-center gap-2 text-[#FF111199]">
      <IoPersonRemove />
      Remove
    </button>
  </div>
);

function ProductionGroups() {
  return (
    <div className="p-4 font-poppins">
      <Header />
      <main>
        <div className="py-6 grid grid-cols-12 gap-4 max-w-full overflow-x-auto">
          {merchants.map((merchant, index) => (
            <>
              <MerchantInfo {...merchant} />
              <Actions />
              <ProjectActions />
            </>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductionGroups;
