import React, { useState, useEffect, useContext } from "react";

import { API, getURL } from "../core/api";

import { SettingsContext } from "../context/SettingsContext";
import { ResumeSection } from "./ResumeSection";

export const Resume = () => {
  const stg = useContext(SettingsContext);
  const [profile_image, set_profile_image] = useState({});
  const [profile, set_profile] = useState({});
  const [cover_letter, set_cover_letter] = useState({});
  const [links, set_links] = useState([]);
  const [sections, set_sections] = useState([]);
  const [languages, set_languages] = useState([]);

  const getProfileImage = () => {
    API.get
      .profile_image("resume")
      .then((response) => {
        if (response.success) {
          set_profile_image(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getProfile = () => {
    API.get
      .profile("resume")
      .then((response) => {
        if (response.success) {
          set_profile(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCoverLetter = () => {
    API.get
      .cover_letter("resume")
      .then((response) => {
        if (response.success) {
          set_cover_letter(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getLinks = () => {
    API.get
      .links("resume")
      .then((response) => {
        if (response.success) {
          set_links(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSections = () => {
    API.get
      .sections("resume")
      .then((response) => {
        if (response.success) {
          set_sections(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getLanguages = () => {
    API.get
      .languages("resume")
      .then((response) => {
        if (response.success) {
          set_languages(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProfileImage();
    getProfile();
    getCoverLetter();
    getLinks();
    getSections();
    getLanguages();
  }, []);

  return (
    <div className="hidden print:block">
      <div className="flex flex-row flex-wrap items-start justify-between">
        <div className="flex flex-row flex-wrap items-start justify-start">
          <div
            className={`w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] bg-${stg.resume_color}-500 border-2 border-black rounded-full overflow-hidden flex flex-col justify-center`}>
            <img
              className="w-[100px] h-[100px] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] object-cover"
              alt=" "
              src={getURL(profile_image?.url)}
            />
          </div>
          <div className="ml-6 mt-3">
            <div className="text-2xl font-extrabold">{profile?.first_name} {profile?.last_name}</div>
            <div className="text font-bold mt-1 w-[60%]">{cover_letter?.title}</div>
          </div>
        </div>
        <div className="text-right text-[0.65rem] mt-3">
          {links?.map((item) => (
            <div>
              <a
                className={`text-${stg.resume_color}-700 text-[0.65rem] font-bold`}
                href={item.url}>
                {item.title}
              </a>
              <i className={`${item.icon} ml-2 text-${stg.resume_color}-700`} />
            </div>
          ))}
          {profile?.birthday ? (
            <div>
              <span className={`text-${stg.resume_color}-700 text-[0.65rem] font-bold`}>
                {profile?.birthday}
              </span>
              <i
                className={`fas fa-calendar ml-2 text-${stg.resume_color}-700`}
              />
            </div>
          ) : null}
          {profile?.nationality ? (
            <div>
              <span className={`text-${stg.resume_color}-700 text-[0.65rem] font-bold`}>
                {profile?.nationality}
              </span>
              <i className={`fas fa-flag ml-2 text-${stg.resume_color}-700`} />
            </div>
          ) : null}
          {languages?.map((item) => (
            <div>
              <span
                className={`text-${stg.resume_color}-700 text-[0.65rem] font-bold`}>
                {item.title}<span className="font-bold"> | {item.level}</span>
              </span>
              <i className={`fas fa-language ml-2 text-${stg.resume_color}-700`} />
            </div>
          ))}
        </div>
      </div>
      <div className="border-b-[1px] my-5 border-black"></div>
      {cover_letter?.description?.length > 0 ? (
        <>
          <div className="text-xs">
            {cover_letter?.description?.map((line) => (
              <p>{line}</p>
            ))}
          </div>
          <div className="border-b-[1px] my-5 border-black"></div>
        </>
      ) : null}
      {sections?.map((section) => (
        <ResumeSection
          title={section.title}
          icon={section.icon}
          items={section.items}
        />
      ))}
      {/* <div className="py-1.5">
        <div className="font-black pb-1">
          <i className="fas fa-language mr-2 text-[13px] select-none" />
          Languages
        </div>
        <div className="flex flex-row">
          {languages?.map((item) => (
            <div className="mr-16">
              <div
                className={`font-extrabold text-${stg.resume_color}-700`}>
                {item.title}
              </div>
              <div className="text-[0.75rem]">{item.level}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};
