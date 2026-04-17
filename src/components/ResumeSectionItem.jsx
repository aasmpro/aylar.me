import React, { useContext } from "react";
import { isSkills, isCertificates } from "../core/utils";
import { SettingsContext } from "../context/SettingsContext";

export const ResumeSectionItem = ({
  section,
  title,
  association,
  location,
  from_date,
  to_date,
  description,
  bullets,
}) => {
  const stg = useContext(SettingsContext);

  return (
    <div className={`${isSkills(section)||isCertificates(section)?"":"py-2"}`}>
      <div className="flex flex-row justify-between items-start">
        <div>
          <div className={`${isSkills(section)||isCertificates(section)?"text-sm":""} font-extrabold text-${stg.resume_color}-700`}>
            {title}
          </div>
          <div className="text-[0.75rem] font-bold -mt-0.5 text-neutral-900">{association}</div>
        </div>
        <div className="text-right text-[0.6rem] -space-y-0.5">
          <div className={`text-${stg.resume_color}-700`}>{from_date}</div>
          <div className={`text-${stg.resume_color}-700`}>{to_date}</div>
          <div className={`text-${stg.resume_color}-700`}>{location}</div>
        </div>
      </div>
      <div>
        {description ? (
          <div className="pt-0.5 text-xs">
            {description.map((line) => (
              <p>{line}</p>
            ))}
          </div>
        ) : null}
        {bullets ? (
          <ul className="list-disc pl-5 pt-1 text-xs">
            {bullets.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
