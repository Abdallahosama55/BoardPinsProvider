import React, { useState } from 'react';
import PlanCard from './PlanPriceCard';

function PricePlan() {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');
  const FreePlans = [
    {
      title: 'Free',
      price: 'EGP 0',
      buttonText: 'Start Now',
      listItems: [
        'Limited access to service provider directory',
        'Search on the service providers is limited to 3 times only per day',
        'One Category in Board',
        '3 pins only',
        'Manage basic projects with to-do lists and task assignments ',
        'web app'
      ],
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparent',
      buttonTextColor: '#6161FF',
    },
  
  ];


  const StandardPlans = [
    {
      title: 'Standard',
      price: 'EGP 299',
      buttonText: 'Subscribe Now',
      listItems: [
        'Unlimited search per day (Editable)',
        'Unlimited connection requests Find the PERFECT service provider for every need.',
        'Unlimited Categories in Board',
        'Create Pins Collection',
        'Project Management Powerhouse Collaborate seamlessly with advanced tools like shared boards, file sharing, and in-app messaging.',
        'Basic reporting and analytics',
        'Exclusive Discounts: Get special offers from select service providers on the platform (limited time only!).'
      ],
      borderColor: '#6161FF',
      buttonBgColor: '#6161FF',
      buttonTextColor: '#F5F6FA',
      viewBadge:true


    },
  
  ];
  const PremiumPlans = [
    {
      title: 'Premium',
      price: 'EGP 399',
      buttonText: 'Start Now',
      listItems: [
        'All features of Standard Plan',
        'Unlimited search per day',
        'Unlimited Categories in Board',
        'Create Pins Collection Dedicated account manager for support and onboarding Pre-negotiated discounted rates with some service providers',
        'Invite your service provider ',
        'Collaborate with your service provider through shared projects and tasks',


      ],
      borderColor: '#1E1E1E',
      buttonBgColor: 'transparentF',
      buttonTextColor: '#6161FF',
    },
  
  ];

  return (
    <div className=' mt-12'>
      <header className="flex w-full justify-end gap-3">
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === 'Monthly' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
          }`}
          onClick={() => setSelectedPlan('Monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-5 py-2 font-[500] rounded-3xl ${
            selectedPlan === 'Annual' ? 'bg-[#6161FF] text-[#FDFDFD]' : 'bg-[#E8E8E8] text-[#1E1E1E]'
          }`}
          onClick={() => setSelectedPlan('Annual')}
        >
          Annual
        </button>
      </header>



      <main>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-4 mx-0 lg:mx-0">
      <div className="p-4 mt-12">
      {FreePlans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          price={plan.price}
          buttonText={plan.buttonText}
          listItems={plan.listItems}
          borderColor={plan.borderColor}
          buttonBgColor={plan.buttonBgColor}
          buttonTextColor={plan.buttonTextColor}
        />
      ))}
      </div>
      {StandardPlans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          price={plan.price}
          buttonText={plan.buttonText}
          listItems={plan.listItems}
          borderColor={plan.borderColor}
          buttonBgColor={plan.buttonBgColor}
          buttonTextColor={plan.buttonTextColor}
          viewBadge={plan.viewBadge}
        />
      ))}
      <div className="p-4 mt-12">
      {PremiumPlans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          price={plan.price}
          buttonText={plan.buttonText}
          listItems={plan.listItems}
          borderColor={plan.borderColor}
          buttonBgColor={plan.buttonBgColor}
          buttonTextColor={plan.buttonTextColor}
        />
      ))}
      </div>
    </div>
    
      
      
      
      </main>
    </div>
  );
}

export default PricePlan;
