import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SidebardBiddingProject from '../../components/provider/BiddingProject/SidebardBiddingProject';
import HeaderBiddingProject from '../../components/provider/BiddingProject/HeaderBiddingProject';
import BiddingProjectsCards from '../../components/provider/BiddingProject/BiddingProjectsCards';
import SavedBiddingProjectCards from './../../components/provider/BiddingProject/SavedBiddingProjectCards';

function SavedBiddingProject() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const statusItems = [
    { value: "savedProjectsType", label: t("savedProjectsType") },
    { value: "draftProjectsType", label: t("draftProjectsType") },
  ];

  const skillsItems = [
    { value: "kirolosAdel", label: t("kirolosAdel") },
    { value: "mohamedIbrahim", label: t("mohamedIbrahim") },
    { value: "abdallahOsama", label: t("abdallahOsama") },
    { value: "yousefAi", label: t("yousefAi") },
  ];

  const deadlineItems = [
    { value: "lessThanWeek", label: t("lessThanWeek") },
    { value: "moreThanWeek", label: t("moreThanWeek") },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl">
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={t("savedProjectsType")} Sort_by={t('Sort_by')} />
      
      <div className="relative grid py-2 w-full grid-cols-8 gap-5">
        <SidebardBiddingProject
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          statusItems={statusItems}
          skillsItems={skillsItems}
          deadlineItems={deadlineItems}
          headers={{
            filter: t("filter"),
            status: t("type"),
            skills: t("projectOwner"),
            deadline: t("deadline"),
            priceRange: t("priceRange"),
          }}
        />
        <div className="col-span-8 h-full lg:col-span-6">
          <SavedBiddingProjectCards />
        </div>
      </div>
    </div>
  );
}

export default SavedBiddingProject;
