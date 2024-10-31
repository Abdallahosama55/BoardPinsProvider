import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderBiddingProject from '../../components/provider/BiddingProject/HeaderBiddingProject';
import SidebardBiddingProject from '../../components/provider/BiddingProject/SidebardBiddingProject';
import BiddingProjectsCards from '../../components/provider/BiddingProject/BiddingProjectsCards';

function BiddingProject() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const statusItems = [
    { value: "creativeWork", label: t("creativeWork") },
    { value: "marketingAgency", label: t("marketingAgency") },
    { value: "webDevelopment", label: t("webDevelopment") },
  ];

  const skillsItems = [
    { value: "html", label: t("html") },
    { value: "css", label: t("css") },
    { value: "react", label: t("react") },
    { value: "django", label: t("django") },
  ];

  const deadlineItems = [
    { value: "lessThanWeek", label: t("lessThanWeek") },
    { value: "moreThanWeek", label: t("moreThanWeek") },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl">
      <HeaderBiddingProject toggleSidebar={toggleSidebar} title={t("discoverBiddingProjects")}  Sort_by={t('Sort_by')}/>
      
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
            priceRange: t("priceRange"),
          }}
        />
        <div className="col-span-8 h-full lg:col-span-6">
          <BiddingProjectsCards />
        </div>
      </div>
    </div>
  );
}

export default BiddingProject;
