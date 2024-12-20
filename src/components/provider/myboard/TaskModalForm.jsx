import React from 'react';
import EditorFully from '../atoms/atomsEditor/EditorFully';
import PriorityButtons from '../atoms/atomsTaskModal/PriorityButtons';
import MenuBar from '../atoms/atomsEditor/MenuBar';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { GoClock } from 'react-icons/go';
import { TbPhoto } from 'react-icons/tb';
import { PiClock } from 'react-icons/pi';
import { IoMdArrowDropright } from 'react-icons/io';
import { IoLinkOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const TaskModalForm = ({
  formik,
  editor,
  priority,
  setPriority,
  handleLinkClick,
  handlePhotoClick,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-span-2 col-span-3">
            <FormField
              id="title"
              name="title"
              label={t('task.title')} // Translated title label
              type="text"
              formik={formik}
            />
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-1">
                {t('task.description')} {/* Translated description label */}
              </label>
              <EditorFully editor={editor} />
              {formik.touched.description && formik.errors.description && (
                <ErrorText>{formik.errors.description}</ErrorText>
              )}
            </div>
            <SubtaskSection t={t} /> {/* Pass t as a prop */}
            <div className="flex flex-wrap items-center gap-3">
              <FormField
                id="dueDate"
                name="dueDate"
                label={t('task.dueDate')} // Translated due date label
                type="date"
                formik={formik}
              />
              <FormField
                id="doDate"
                name="doDate"
                label={t('task.doDate')} // Translated do date label
                type="date"
                formik={formik}
              />
            </div>
            <PriorityButtons priority={priority} setPriority={setPriority} t={t} />
          </div>
          <div className="lg:col-span-1 col-span-3 py-2 px-5">
            <StatusButtons t={t} />
            <div>
              <h3 className="text-[#6F6F6F] mt-3">{t('task.textEditor')}</h3> {/* Translated text editor header */}
              <MenuBar editor={editor} t={t} />
            </div>
            <AttachmentSection handleLinkClick={handleLinkClick} handlePhotoClick={handlePhotoClick} formik={formik} t={t} />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#6161FF] text-white py-2 px-4 rounded-xl hover:bg-blue-700"
          >
            {t('task.addNewTask')} {/* Translated button text */}
          </button>
        </div>
      </form>
    </div>
  );
};

// Extracted FormField Component
const FormField = ({ id, name, label, type, formik }) => (
  <div className="mb-1">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="w-full p-2 bg-[#f8f8f8] rounded-lg"
    />
    {formik.touched[name] && formik.errors[name] && (
      <ErrorText>{formik.errors[name]}</ErrorText>
    )}
  </div>
);

// Extracted ErrorText Component
const ErrorText = ({ children }) => (
  <div className="text-red-500 text-xs mt-1">{children}</div>
);

// Extracted SubtaskSection Component
const SubtaskSection = ({ t }) => (
  <div className="mb-4 ">
    <label className="block text-gray-700 font-bold mb-2">
      <h2 className="text-sm  mb-2 ">{t('task.subtask')}</h2> {/* Translated subtask header */}
      <div className="px-5 py-0 flex gap-2 items-center shadow-custom">
        <input
          type="radio"
          name="subtask"
          id="specifyColor"
          className="mr-2 leading-tight rounded-full border-[3px] border-blue-500"
        />
        <div className="flex-grow py-2 px-1 ">
          <h2 className="font-bold text-dark text-xs">{t('task.subTask1')}</h2> {/* Translated subtask 1 */}
          <p className="font-light text-[9px]">
            {t('task.subTask1Description')} {/* Translated subtask description */}
          </p>
          <div className="flex gap-4 items-center py-1 font-normal">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <PiClock />
              <span>1/2/2024, 07:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <HiOutlineCalendar color="#6161FF" />
              <span>1/2/2024, 12:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3"></div>
      </div>
    </label>
  </div>
);

// Extracted StatusButtons Component
const StatusButtons = ({ t }) => (
  <div>
    <h2 className="text-[#6F6F6F] pb-3">{t('task.pickStatus')}</h2> {/* Translated status header */}
    <div className="flex gap-5 items-center">
      <button className="text-[#FB5607] rounded-3xl bg-[#FB56071A] flex items-center  font-medium text-[15px] min-w-[100px] py-1" type="button">
        <IoMdArrowDropright color="#FB5607" size={25} /> {t('task.toDo')} {/* Translated to-do button */}
      </button>
      <button className="text-[#292D32] rounded-3xl gap-2 flex items-center  text-sm font-medium py-1 min-w-[130px]" type="button">
        <GoClock color="#292D32" size={18} /> {t('task.remindMe')} {/* Translated remind me button */}
      </button>
    </div>
  </div>
);

// Extracted AttachmentSection Component
const AttachmentSection = ({ handleLinkClick, handlePhotoClick, formik, t }) => (
  <div>
    <h3 className="text-[#6F6F6F] mt-6">{t('task.attachment')}</h3> {/* Translated attachment header */}
    <div className="flex mt-2 text-[#6F6F6F]">
      <IoLinkOutline size={22} className="mr-4 cursor-pointer" onClick={handleLinkClick} />
      <TbPhoto size={22} className="cursor-pointer" onClick={handlePhotoClick} />
      <input
        type="file"
        id="photo-upload"
        name="photo"
        style={{ display: 'none' }}
        onChange={(event) => formik.setFieldValue('photo', event.target.files[0])}
      />
    </div>
  </div>
);

export default TaskModalForm;
