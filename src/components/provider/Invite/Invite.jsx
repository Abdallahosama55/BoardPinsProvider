import React, { useState } from "react";
import Modal from "../atoms/commonatoms/Modal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
  .email("Invalid email format") // Keep this in English as it's part of validation messages
  .required("Email is required"), // Keep this in English as it's part of validation messages
});

const Invite = ({ isOpen, handleIsclose }) => {
  const {t}=useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Member");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    // Handle form submission logic here

    // Reset form after submission
    resetForm();
    handleIsclose(); // Close the modal after submitting
  };

  return (
    <Modal isOpen={isOpen} onClose={handleIsclose} smallModal={"true"}>
      <div className="flex items-center justify-center  lg:max-w-[600px]">
        <div>
          <h2 className="text-center font-bold text-[#333333] text-4xl pt-8">
          {t("invite.title")} {/* Translated title */}
          </h2>
          <p className="text-center lg:text-2xl py-4 text-[#333333] text-light pb-8">
          {t("invite.description")} {/* Translated description */}
          </p>

          <div className="flex">
            <div className="flex-grow">{t("invite.inviteByEmail")}</div>
            <button className="flex items-center gap-1 bg-transparent text-primary text-sm">
            <IoLinkOutline /> {t("invite.copyLink")} {/* Translated copy link */}
            </button>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="flex border border-[#6161FF] rounded-xl p-3 py-2">
                  <Field
                    type="text"
                    name="email"
                    className="flex-grow outline-0"
                    placeholder={t("invite.emailPlaceholder")}
                  />
        
                  <div className="relative">
                    <button
                      type="button"
                      className="bg-[#D9D9D9] py-2 rounded-xl flex items-center gap-1 px-4 w-full text-left"
                      onClick={toggleDropdown}
                    >
                    {t(`invite.${selectedOption.toLowerCase()}`)} <MdOutlineKeyboardArrowDown />
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute border bg-[#D9D9D9] rounded-xl mt-0 w-full">
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Member")}
                        >
                              {t("invite.member")} {/* Translated guest */}
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Admin")}
                        >
                              {t("invite.admin")} {/* Translated guest */}
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleSelectOption("Guest")}
                        >
                              {t("invite.guest")} {/* Translated guest */}
                        </li>
                      </ul>
                    )}
                    
                  </div>
                           
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500" />
                <div className="mt-12 flex gap-2 w-full justify-end">
                  <button
                    type="button"
                    className="px-5 py-3 rounded-xl text-dark bg-[#F5F5F5]"
                    onClick={handleIsclose}
                  >
                 {t("invite.cancel")} {/* Translated cancel */}
                  </button>
                  <button
                    type="submit"
                    className="px-9 py-3 rounded-xl text-white bg-[#6161FF]"
                  >
                     {t("invite.add")}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default Invite;
