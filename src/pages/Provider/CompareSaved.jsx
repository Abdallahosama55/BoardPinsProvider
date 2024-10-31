import React from 'react';
import HeaderCommonComparison from '../../components/provider/CompareInProvider/Compare/HeaderCommonComparison';
import { Bookmark } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function CompareSaved() {
    const { t } = useTranslation(); // Initialize the translation function

    const cardData = [
        {
            id: 1,
            title: t('paymentGateways.comparison'), // Use i18n translation keys
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('paymentGateways.gateway1') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('paymentGateways.gateway2') },
                { id: 3, imgSrc: 'https://via.placeholder.com/100', alt: t('paymentGateways.gateway3') },
            ],
        },
        {
            id: 2,
            title: t('comparison.another'),
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison1') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison2') },
            ],
        },
        {
            id: 3,
            title: t('comparison.anotherOne'),
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison3') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison4') },
            ],
        },
        {
            id: 4,
            title: t('comparison.different'),
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison7') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison8') },
            ],
        },
        {
            id: 5,
            title: t('comparison.anotherOneAgain'),
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison9') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison10') },
                { id: 3, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison11') },
            ],
        },
        {
            id: 6,
            title: t('comparison.final'),
            items: [
                { id: 1, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison12') },
                { id: 2, imgSrc: 'https://via.placeholder.com/100', alt: t('comparison.comparison13') },
            ],
        },
    ];

    return (
        <div className="p-2 py-12 bg-white px-8">
            <HeaderCommonComparison Showbutton={false} />

            <main>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-12">
                    {cardData?.map((card) => (
                        <div className="card" key={card.id}>
                            <h5 className="text-[#404040] py-2">{card.title}</h5>
                            <div className="bg-[#F9F9F9] px-2 rounded-xl min-h-[200px]">
                                <div className='flex w-full justify-end text-[#FFC226] py-5'>
                                    <Bookmark color='#FFC226' />
                                </div>
                                <div className='flex items-center justify-center'>
                                    {card?.items?.map((item, index) => (
                                        <React.Fragment key={item.id}>
                                            <div className="max-w-[100px] max-h-[100px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {index < card.items.length - 1 && (
                                                <span className="bg-primary rounded-full text-white p-3 text-sm font-bold">
                                                    VS
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default CompareSaved;
