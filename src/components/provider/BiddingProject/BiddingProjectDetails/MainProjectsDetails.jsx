import React, { useState } from "react";

import { RiAttachment2 } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { MdDelete, MdEdit, MdLocalOffer, MdWorkOutline } from "react-icons/md";
import { Rating } from "@mui/material";
import icon_person from "../../../../assets/icons/Ellipse 232.png";
import { BsClock } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { BiSolidFilePdf } from "react-icons/bi";
import { IoCloudDownloadOutline } from 'react-icons/io5';
import Modal from "../../atoms/commonatoms/Modal";
import BiddingProjectInfoModal from "./BiddingProjectInfoModal";
import ModalDelete from "../../atoms/commonatoms/ModalDelete";
import { useTranslation } from "react-i18next";

const ProjectDescription = ({openAttachmentModal ,title ,Paragraph,example,Attachment,PlatformUrl}) => (
  <div className="border border-[#0000001A] bg-[rgb(251,251,255)] rounded-2xl p-4">
    <h1 className="border-b-[1px] border-[#D0D0D0] text-[#404040] py-4 mb-5 font-bold">
     {title}
    </h1>
    <h2 className="font-bold text-[#6161FF]">{Paragraph}</h2>
    <ul className="list-disc pl-5 p-3 py-1 text-[#999999]">
      <li>Quis et quis aliquet ornare netus nec.</li>
      <li>Quis amet feugiat bibendum non lorem tincidunt nulla.</li>
    </ul>
    <p className="font-medium text-red-400">
      Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
      <span className="underline cursor-pointer text-primary">{example}</span>
    </p>
    <div>
      <h5 className="text-dark font-medium text-[16px] py-5">{Attachment}</h5>
      <div className="text-sm flex items-center gap-4">
        <AttachmentButton icon={<RiAttachment2 />} label={Attachment} openAttachmentModal={openAttachmentModal} />
        <AttachmentButton icon={<IoIosLink />} label={PlatformUrl} />
      </div>
    </div>
  </div>
);



const AttachmentButton = ({ icon, label, openAttachmentModal }) => (
  <button className="px-4 text-xs border border-[#404040] rounded-2xl py-2 flex items-center gap-3" onClick={() => openAttachmentModal()}>
    {icon} {label}
  </button>
);

const SkillsNeeded = () => {
  const { t } = useTranslation();
  const skills = ["React", "Django", "Deep learning"];
  return (
    <div className="border border-[#0000001A] bg-[#FBFBFF] rounded-2xl p-4">
      <h1 className="border-b-[1px] border-[#D0D0D0] text-[#404040] py-4 mb-5 font-bold">{t('skills_needed')}</h1>
      <div className="text-center flex flex-wrap gap-3 py-3 text-sm">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillBadge = ({ skill }) => (
  <span className="border border-primary rounded-2xl px-3 gap-2 py-1 flex items-center text-primary">
    <MdLocalOffer /> {skill}
  </span>
);

const Proposal = ({ handleOpenModalEdit, handleOpenModalDelete }) => {
  const { t } = useTranslation();
  return (
    <div className="border border-[#0000001A] bg-[#FBFBFF] rounded-2xl p-4">
      <div className="lg:flex items-center border-b-[1px] py-3 px-3 border-[#D0D0D0]">
        <div className="flex-grow">
          <h1 className="text-[#404040] text-lg font-bold lg:pb-1 pb-4">{t('your_proposal')}</h1>
        </div>
        <div className="flex justify-end gap-4 text-sm px-3">
          <ProposalButton icon={<MdEdit />} label={t('edit')} handleAction={handleOpenModalEdit} />
          <ProposalButton icon={<MdDelete />} label={t('delete')} additionalClasses="text-[#FF111199]" handleAction={handleOpenModalDelete} />
        </div>
      </div>
      <main>
        <div className="flex items-start gap-2 py-3">
          <img src={icon_person} className="w-[40px] rounded-full" alt="icon" />
          <div>
            <div className="flex items-center gap-3">
              kirolos adel
              <Rating name="read-only" value={4.5} readOnly sx={{ fontSize: "1rem" }} />
              <span className="text-xs text-gray-500">(4.5)</span>
            </div>
            <div className="flex gap-2 text-xs">
              <ProposalInfo icon={<MdWorkOutline />} label={t('software_engineer')} />
              <ProposalInfo icon={<BsClock />} label={t('time_available')} />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 bg-[#F2F2F2] p-4">
          <ProposalDetail icon={<HiOutlineCurrencyDollar />} label="500 Egp" subLabel={t('provided_price')} />
          <ProposalDetail icon={<HiOutlineCurrencyDollar />} label="500 Egp" subLabel={t('provided_price')} />
          <ProposalDetail icon={<HiOutlineCurrencyDollar />} label="4 Days" subLabel={t('deadline')} />
        </div>
        <p className="text-sm text-gray-400  p-4">
          {t('proposal_message')}
        </p>
        <button className="flex gap-1 bg-[#F2F2F2] rounded px-3 text-sm font-medium items-center">
          <BiSolidFilePdf className="bg-white rounded p-2 m-1" size={40} />
          <h1>
            <span className="block">{t('my_portfolio')}</span>
            <span className="text-xs flex gap-1 items-center"><IoCloudDownloadOutline />30Mb</span>
          </h1>
        </button>
      </main>
    </div>
  );
};

const ProposalButton = ({ icon, label, additionalClasses = "text-dark", handleAction }) => (
  <button className={`flex gap-2 items-center px-3 ${additionalClasses}`} onClick={() => handleAction()}>
    {icon} {label}
  </button>
);

const ProposalInfo = ({ icon, label }) => (
  <span className="flex gap-1 items-center text-[#919191] text-xs py-1">
    {icon} {label}
  </span>
);

const ProposalDetail = ({ icon, label, subLabel, extraSubLabel = "" }) => (
  <div className="flex gap-2 items-center">
    <div className={`bg-[#4040401F] p-2 rounded-full`}>
      {icon}
    </div>
    <div>
      <span className="block font-bold m-0 p-0 text-dark">{label}</span>
      <span className="text-xs p-0 m-0 text-[#919191]">{subLabel}</span>
      {extraSubLabel && <span className="text-[#919191] font-normal text-xs">{extraSubLabel}</span>}
    </div>
  </div>
);

function MainProjectsDetails({ openAttachmentModal }) {
  const [OpenModalEdit, setOpenModalEdit] = useState(false);
  const [OpenModalDelete, setOpenModalDelete] = useState(false);
const {t}=useTranslation()
  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
  };

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false);
  };

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <ProjectDescription openAttachmentModal={openAttachmentModal}   t={t} PlatformUrl={t("platform_url")} title={t("project_description")}  Paragraph={"Lorem ipsum dolor sit amet consectetur"} Attachment={t("attachments")}/>
      <SkillsNeeded />
      
      <Proposal handleOpenModalEdit={handleOpenModalEdit} handleOpenModalDelete={handleOpenModalDelete} />
      <BiddingProjectInfoModal OpenModalEdit={OpenModalEdit} handleCloseModalEdit={handleCloseModalEdit} />
      <ModalDelete OpenModalDelete={OpenModalDelete} handleCloseModalDelete={handleCloseModalDelete} title={t('proposal')} />
    </div>
  );
}

export default MainProjectsDetails;
