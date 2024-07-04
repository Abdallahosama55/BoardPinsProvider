import correct from '../../assets/icons/Group 165.png'
import HeaderConnectedMerchants from '../../components/provider/HeaderConnectedMerchants'
import MerchantCards from '../../components/provider/merchant/MerchantCards'
import StyledPagination from '../../components/provider/atoms/commonatoms/StyledPagination'; // Adjust the import path as necessary

function Merchant() {
  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' />
        <h3 className='font-bold text-lg'>Connected Merchants</h3>
      </div>
    
      <HeaderConnectedMerchants />
      <main className='py-8'>
        <MerchantCards />
        <div className='w-full flex justify-center py-8'>
          <StyledPagination count={10} shape="rounded" />
        </div>
      </main>
    </div>
  )
}

export default Merchant;
