import React from 'react';
import CardsInfo from "./CardsInfo";
import pic from '../../../assets/images/merchants/Rectangle 4649.png'; // Ensure the import path is correct
import { useTranslation } from 'react-i18next'; // Import useTranslation

function MerchantCards() {
  const { t } = useTranslation(); // Initialize useTranslation

  const cardsData_ConnectMerchant = [
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), "Frontend"] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), t('merchant_connect.tags.tag2')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), t('merchant_connect.tags.tag2')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), "Frontend"] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), t('merchant_connect.tags.tag2')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), t('merchant_connect.tags.tag2')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), "Frontend"] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant_connect.tags.tag1'), t('merchant_connect.tags.tag2')] },
    { title: t('merchant_connect.projectName'), role: t('merchant_connect.role'), phone: "101455", imgSrc: pic, status: t('merchant_connect.statusAccepted'), itemsCategories: [t('merchant.tags.tag1'), t('merchant.tags.tag2')] },
  ];

  return (
    <div className="grid grid-cols-12 gap-5">
      {cardsData_ConnectMerchant?.map((card, index) => (
        <div key={index} className="lg:col-span-3 col-span-12 ">
          <CardsInfo 
            title={card.title} 
            role={card.role} 
            phone={card.phone} 
            imgSrc={card.imgSrc} 
            status={card.status}
            itemsCategories={card.itemsCategories}
          />
        </div>
      ))}
    </div>
  );
}

export default MerchantCards;
