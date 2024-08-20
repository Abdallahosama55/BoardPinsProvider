import React from "react";

function HeaderProductionsGroup({setisOpen}) {
  return (
    <div>
      {" "}
      <header className=" flex justify-center items-center  rounded-xl bg-[#F8F8F8] py-12">
        <div className=" text-center lg:w-[75%]">
          <h1 className=" text-dark font-bold text-3xl">
            Welcome to Production groups!
          </h1>
          <p className=" py-2 text-lg text-[#292D32] p-3">
            Now you can create production groups with more than one merchant
            in-order to reach your target quantity of production in less time
          </p>
          <button className=" bg-primary text-white py-3 rounded-xl px-5 my-3" onClick={()=>{setisOpen(true)}}>
            Create New
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderProductionsGroup;
