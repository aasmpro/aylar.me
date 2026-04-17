import React from "react";
import { isSkills, isCertificates } from "../core/utils";
import { ResumeSectionItem } from "./ResumeSectionItem";

export const ResumeSection = ({ title, icon, items }) => {
  return (
    <div className="py-2">
      <div className={`${isSkills(title)||isCertificates(title)?"font-black pb-2":"font-black pb-1"}`}>
        <i className={`${icon} mr-2 text-[13px] select-none`} />
        {title}
      </div>
      <div>
      {/* <div className={`${isSkills(title)?"sm:grid sm:grid-cols-2":isCertificates(title)?"sm:grid sm:grid-cols-2":""}`}> */}
      {/* <div className={`${title==="Skills" || title==="Certificates"?"sm:grid sm:grid-cols-2":""}`}> */}
        {items?.map((item) => (
          <ResumeSectionItem section={title} {...item} />
        ))}
      </div>
    </div>
  );
};
