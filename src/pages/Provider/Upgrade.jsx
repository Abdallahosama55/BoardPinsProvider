import React from 'react'
import HeaderUpgrade from '../../components/provider/Upgrage/HeaderUpgrade'
import DeatailsUpgrade from '../../components/provider/Upgrage/DeatailsUpgrade'
import PricePlan from '../../components/provider/Upgrage/PricePlan'
import { useTranslation } from 'react-i18next'

function Upgrade() {
  const{t}=useTranslation()
  return (
    <div className='   bg-white rounded-lg p-6'>
    
    <HeaderUpgrade title={t("subscription_plans")}/>
<DeatailsUpgrade/>

<PricePlan/>
    </div>
  )
}

export default Upgrade