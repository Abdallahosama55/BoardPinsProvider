import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlanCard from './PlanPriceCard';

function PricePlan() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState('Monthly');

  const FreePlans = [
    {
      title: t('plans.free.title'),
      price: t('plans.free.price'),
      buttonText: t('plans.free.buttonText'),
      listItems: t('plans.free.features', { returnObjects: true }),
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparent',
      buttonTextColor: '#6161FF',
    }
  ];

  const StandardPlans = [
    {
      title: t('plans.standard.title'),
      price: t('plans.standard.price'),
      buttonText: t('plans.standard.buttonText'),
      listItems: t('plans.standard.features', { returnObjects: true }),
      borderColor: '#6161FF',
      buttonBgColor: '#6161FF',
      buttonTextColor: '#F5F6FA',
      viewBadge: true,
    }
  ];

  const PremiumPlans = [
    {
      title: t('plans.premium.title'),
      price: t('plans.premium.price'),
      buttonText: t('plans.premium.buttonText'),
      listItems: t('plans.premium.features', { returnObjects: true }),
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparent',
      buttonTextColor: '#6161FF',
    }
  ];

  return (
    <div className="mt-12">
      <header className="flex w-full justify-end gap-3">
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === 'Monthly' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
          }`}
          onClick={() => setSelectedPlan('Monthly')}
        >
          {t('monthly')}
        </button>
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === 'Annual' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
          }`}
          onClick={() => setSelectedPlan('Annual')}
        >
          {t('annual')}
        </button>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 mx-0 lg:mx-0">
          <div className="p-4 mt-12">
            {FreePlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
          {StandardPlans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
          <div className="p-4 mt-12">
            {PremiumPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PricePlan;
