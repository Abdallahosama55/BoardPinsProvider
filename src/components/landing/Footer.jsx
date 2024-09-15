import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import call from "../../assets/icons/phonr.svg";
import bank from "../../assets/icons/mail.svg";
import insta from "../../assets/icons/insta.png";
import face from "../../assets/icons/face.svg";
import { useTranslation } from "react-i18next";
import { ImLinkedin } from "react-icons/im";
import { BsUniversalAccessCircle } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

function Footers() {
  const footerContent = {
    en: {
      joinText: "Join Board Pins Today!",
      unlockText: "Unlock Opportunities, Expand Your Business",
      becomePartner: "Become a Partner 🠚",
      menu: [
        { text: "Home", link: "/#home" },
        { text: "Explore all Benefits", link: "/#benefits" },
        { text: "About Us", link: "/#about" },
        { text: "How It Works", link: "/#how-it-works" },
      ],
      contact: {
        heading: "Contact Us",
        phone: "(+20) 1555871500",
        email: "info@baggr.org",
      },
      policies: {
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
      },
    },
    ar: {
      joinText: "انضم إلى Board Pins اليوم!",
      unlockText: "افتح الفرص، ووسّع عملك",
      becomePartner: "كن شريكًا 🠚",
      menu: [
        { text: "الرئيسية", link: "/#home" },
        { text: "استكشاف جميع المزايا", link: "/home#benefits" },
        { text: "من نحن", link: "/about#about" },
        { text: "كيف يعمل", link: "/home#howUsage" },
      ],
      contact: {
        heading: "تواصل معنا",
        phone: "(+20) 1555871500",
        email: "info@baggr.org",
      },
      policies: {
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
      },
    },
  };

  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const { joinText, unlockText, becomePartner, menu, contact, policies } = footerContent[currentLanguage];

  return (
    <div
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      className={` pb-5 ${currentLanguage === "ar" ? "font-cairo" : "font-poppins"}`}
    >
      <section>
        <div className="text-center mt-12 mb-10 pb-8 border-[#000] border-b-2 xl:mx-36 lg:mx-16 mx-6">
          <p className="text-[#333] text-[2.075rem] font-[400] leading-[2.90988rem]">
            {joinText}
          </p>
          <p className="text-dark opacity-[0.9] text-light text-4xl font-light">
            {unlockText}
          </p>
          <HashLink
            to={"/signup"}
            className="m-auto inline-flex relative bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {becomePartner}
          </HashLink>
        </div>
        <div className="xl:w-10/12 lg:w-11/12 w-full mx-auto px-10">
          <ul className="flex lg:flex-row  gap-3 flex-col">
            <ul className="flex-1">
              {menu.map((item, index) => (
                <li key={index} className="underline my-2 text-[#000] text-[1rem] font-[400] ">
                  <HashLink to={item.link} smooth>
                    {item.text}
                  </HashLink>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              <li className="text-[#000] text-[1rem] my-3 font-[400] ">
                {contact.heading}
              </li>
              <li className="text-[#000] text-[1rem] mb-3 font-[300] ">
                <LazyLoadImage src={call} className="inline-block w-5 me-1" />{" "}
                <a href={`tel:${contact.phone}`} className="underline">
                  {contact.phone}
                </a>
              </li>
              <li className="text-[#000] text-[1rem] font-[300] ">
                <LazyLoadImage src={bank} className="inline-block w-5 me-1" />{" "}
                <a href={`mailto:${contact.email}`} className="underline">
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="flex-1">
              <p className="text-[#000] xl:text-[2.67106rem] lg:text-[2.2rem] text-[2rem] font-[600] ">
                Board Pins<span className="text-[#6161FF]">.</span>
              </p>
              <div className="grid grid-cols-4 w-4/6 p-6 pt-2">
                <a
                  href="https://www.facebook.com/share/bFgxZv43avVrNcGi/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 bg-[#ECECEC] p-2 rounded-lg mx-2"
                >
                  <LazyLoadImage src={face} alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/boardpins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 bg-[#ECECEC] p-2 rounded-lg mx-2"
                >
                  <LazyLoadImage src={insta} alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/board-pins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 flex items-center justify-center bg-[#ECECEC] p-2 rounded-lg mx-2"
                >
                  <ImLinkedin color="#0A66C2" />
                </a>
              </div>
              <div className="flex text-dark flex-wrap underline text-sm gap-5 flex-row">
                <a
                  href="/PrivacyPolicy.docx" // Corrected file path
                  className="underline flex gap-3 items-center"
                  download
                >
                  <BsUniversalAccessCircle />
                  <h3>{policies.privacy}</h3>
                </a>
                <a
                  href="/TermsAndConditions.docx" // Corrected file path
                  className="underline flex items-center gap-2"
                  download
                >
                <CgNotes />
                  <h3>{policies.terms}</h3>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footers;
