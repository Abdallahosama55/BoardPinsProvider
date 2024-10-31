import React, { useState } from "react";
import HeaderProductionsGroup from "../../components/provider/ProductionGroup/HeaderProductionsGroup";
import HeaderConnectedMerchants from "../../components/provider/HeaderConnectedMerchants";
import SelectProductionsGroup from "../../components/provider/ProductionGroup/SelectProductionsGroup";
import MerchantCards from "../../components/provider/merchant/MerchantCards";
import CardProductionsGroup from "../../components/provider/ProductionGroup/CardProductionsGroup";
import CreateProductionGroupModal from "../../components/provider/ProductionGroup/CreateProductionGroupModal";

function ProductionGroup() {
    const [isOpen, setisOpen] = useState(false)
    const onClose=()=>{
        setisOpen(false)
    }
  return (
    <div className=" bg-white p-6 rounded-xl min-h-full ">
<HeaderProductionsGroup setisOpen={setisOpen}/>


<SelectProductionsGroup/>

 <CardProductionsGroup />
 <CreateProductionGroupModal isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}

export default ProductionGroup;
