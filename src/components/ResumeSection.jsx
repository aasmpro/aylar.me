import React from "react";

import { ResumeSectionItem } from "./ResumeSectionItem";

export const ResumeSection = ({ title, icon, items }) => {
  return (
    <div className="py-2">
      <div className="font-black pb-1">
        <i className={`${icon} mr-2 text-[13px] select-none`} />
        {title}
      </div>
      <div className={`${title==="Skills"?"sm:grid sm:grid-cols-3":title==="Certificates"?"sm:grid sm:grid-cols-2":""}`}>
      {/* <div className={`${title==="Skills" || title==="Certificates"?"sm:grid sm:grid-cols-2":""}`}> */}
        {items?.map((item) => (
          <ResumeSectionItem section={title} {...item} />
        ))}
      </div>
    </div>
  );
};
