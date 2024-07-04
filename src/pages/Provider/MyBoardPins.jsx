


import InprogressProject from '../../components/provider/myboard/InprogressProject'
import MerchantsConnect from '../../components/provider/myboard/MerchantsConnect'
import ProductionGroups from '../../components/provider/myboard/ProductionGroups'
import ProjectTsks from '../../components/provider/myboard/ProjectTsks'
import Recents from '../../components/provider/myboard/Recents'
import Reminder from '../../components/provider/myboard/Reminder'
import Table from '../../components/provider/myboard/table'

function MyBoardPins() {
  
  return (
    <div className=' bg-white rounded-[30px] px-3 font-poppins  shadow'>
    <div className=' py-3 grid justify-center items-center grid-cols-12 gap-2'>


    <div className=' md:col-span-10 col-span-12 px-5'>
    <h5 className=' text-[#1E1E1E] font-[500] text-[30px]'>Hey, Kirolos 👋</h5>
    <p className=' text-[#1E1E1E] font-[400] text-[15px]' >What would you like to create to day?</p>
    
    </div>
    
    <div className=' md:col-span-2 flex justify-center col-span-12 '>
    <button className=' bg-[#6161FF]  my-5 mt-1 text-[#FDFDFD] md:py-3 py-2 rounded-xl px-5'>Mange Cards</button>
    </div>
    
    </div>


    <div className=' py-5 md:mx-5 grid grid-cols-12 gap-5'>
    
    
    <div className=' relative shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
 
    <InprogressProject/>
    </div>

    <div className=' shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
    <div className="relative overflow-x-auto  sm:rounded-lg">
   
 
   <Table/>
</div>
    
    </div>

     
    <div className='  w-full shadow-custom rounded-xl col-span-12 px-5'>

    <ProjectTsks/>

 
    </div>

    <div className=' shadow-custom rounded-xl md:col-span-6 col-span-12 px-5'>
    <div className=' relative'>
 
    <Recents/>
    </div>
    
    
    </div>
    <div className=' shadow-custom relative rounded-xl md:col-span-6  col-span-12 px-5'>
<Reminder/>
    
    
    </div>
    <div className='  w-full shadow-custom rounded-xl col-span-12 px-5'>

    <MerchantsConnect/>

 
    </div>
    <div className='  w-full shadow-custom rounded-xl col-span-12 px-5'>

    <ProductionGroups/>

 
    </div>
    </div>
    
    </div>
  )
}

export default MyBoardPins