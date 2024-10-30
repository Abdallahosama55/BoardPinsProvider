import React from "react";
import profile from "../../../../assets/icons/Ellipse 232.png";
import { AiOutlineLike } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Comment = () => (
  <div className="comment p-4 rounded-2xl border border-gray-400 min-h-[150px] mx-2">
    <div className="flex items-center">
      <div className="flex flex-grow items-center gap-3">
        <img src={profile} alt="profile" className="w-[30px]" />
        <span className="font-bold">You</span>
      </div>
      <div className="text-gray-400 text-xs">3mins</div>
    </div>
    <p className="min-h-[50px] flex items-center">Comment</p>
    <div className="border-t flex items-center pt-2">
      <div className="flex-grow">
        <button>
          <AiOutlineLike color="#001A72" />
        </button>
      </div>
      <div className="text-gray-400 text-xs">Reply</div>
    </div>
  </div>
);

function NewTaskSidebar() {
  const {t}=useTranslation()
  return (
    <div className="flex flex-col border-gray-400 md:mt-2 mt-12 lg:border-l md:border-t-0 border-t p-4">
      <div className="flex-grow">
        <h3 className="text-2xl lg:border-b-2 border-gray-400">{t('Activity')}</h3>
        <div className="comments-container flex flex-col gap-5 pt-8 overflow-y-auto max-h-[400px]">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
      <form className="comment-form p-2 border flex rounded-xl border-gray-400">
        <input
          type="text"
          className="w-full flex-grow outline-none px-3 py-1"
          placeholder={t('comment')}
        />
        <button className="bg-primary lg:p-3 p-1 px-3 text-white rounded">
          {t('send')}
        </button>
      </form>
    </div>
  );
}

export default NewTaskSidebar;
