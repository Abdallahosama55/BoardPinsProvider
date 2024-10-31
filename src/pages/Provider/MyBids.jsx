import React, { useState } from 'react';
import HeaderBiddingProject from '../../components/provider/BiddingProject/HeaderBiddingProject';
import SidebardBiddingProject from '../../components/provider/BiddingProject/SidebardBiddingProject';
import MyBidsCards from '../../components/provider/BiddingProject/MyBidsCards';
import { useTranslation } from 'react-i18next';

function MyBids() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const statusItems = [
    { value: "PendingRequest", label: t("statusItems.pendingRequest") },
    { value: "Approved", label: t("statusItems.approved") },
    { value: "Rejected", label: t("statusItems.rejected") },
    { value: "Inprogress", label: t("statusItems.inProgress") },
    { value: "Finished", label: t("statusItems.finished") },
    { value: "Closed", label: t("statusItems.closed") }
  ];

  const skillsItems = [
    { value: "kirolosAdel", label: t("skillsItems.kirolosAdel") },
    { value: "MOhamedIbrahim", label: t("skillsItems.mohamedIbrahim") },
    { value: "AbdallahOsama", label: t("skillsItems.abdallahOsama") },
    { value: "YousefAI", label: t("skillsItems.yousefAI") }
  ];

  const deadlineItems = [
    { value: "lessThanWeek", label: t("deadlineItems.lessThanWeek") },
    { value: "moreThanWeek", label: t("deadlineItems.moreThanWeek") }
  ];

  return (
    <div className="p-6 bg-white rounded-2xl">
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={t("myBids")} Sort_by={t('Sort_by')} />
     
      <div className="relative grid py-2 w-full grid-cols-8 gap-5">
        <SidebardBiddingProject
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          statusItems={statusItems}
          skillsItems={skillsItems}
          deadlineItems={deadlineItems}
          headers={{
            filter: t("filter"),
            status: t("status"),
            skills: t("skills"),
            deadline: t("deadline"),
            priceRange: t("priceRange")
          }}
        />
        <div className="col-span-8 h-full lg:col-span-6">
          <MyBidsCards />
        </div>
      </div>
    </div>
  );
}

export default MyBids;
