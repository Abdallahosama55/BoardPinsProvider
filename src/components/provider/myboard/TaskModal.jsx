import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../atoms/atomsEditor/Global.css"; // Make sure to import your styles
import { IoClose } from "react-icons/io5";
import useTiptapEditor from "../atoms/atomsEditor/useTiptapEditor";
import TaskModalForm from "./TaskModalForm";
import { useTranslation } from 'react-i18next';

const TaskModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const editor = useTiptapEditor();

  useEffect(() => {
    editor?.commands?.setContent(JSON.parse(localStorage.getItem("tiptap")));
  }, [editor]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      subtask: false,
      dueDate: "",
      doDate: "",
      photo: null,
      link: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required(t("validation.titleRequired")),
      dueDate: Yup.string().required(t("validation.dueDateRequired")),
      doDate: Yup.string().required(t("validation.doDateRequired")),
    }),
    onSubmit: (values) => {
      values.description = editor.getText();
      values.priority = priority;
      console.log("Form data:", values);
    },
  });

  const handleLinkClick = () => {
    const link = prompt(t("prompt.enterLink"));
    if (link) {
      formik.setFieldValue("link", link);
    }
  };

  const handlePhotoClick = () => {
    document.getElementById("photo-upload").click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[85%] h-[95%] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
        <div className="flex">
          <div className="flex-grow">
            <h1 className="text-2xl text-[#6161FF] font-bold">{t('newTask')}</h1>
          </div>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <IoClose size={22} />
          </button>
        </div>
        <div className="mt-4">
          <TaskModalForm
            formik={formik}
            editor={editor}
            description={description}
            setDescription={setDescription}
            priority={priority}
            setPriority={setPriority}
            handleLinkClick={handleLinkClick}
            handlePhotoClick={handlePhotoClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
