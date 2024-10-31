import React from 'react'
import SearchInput from './SearchInput'
import { useTranslation } from 'react-i18next'

function SearchCompare() {
  const{t}=useTranslation()
  return (
    <div className=' bg-[#F8F8F8] py-12 flex justify-center items-center rounded-lg'>
<div className=' text-center py-4'>
    <h1 className=' text-3xl font-bold text-dark mb-2'>{t('comparison.title')}</h1>
    <p>{t('comparison.header_des')}</p>

  <SearchInput/>

</div>



    </div>
  )
}

export default SearchCompare