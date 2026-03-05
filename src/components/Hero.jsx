import React, { useContext } from "react";

import { getURL } from "../core/api";
import { SettingsContext } from "../context/SettingsContext";

import { TransformText } from "./TransformText";

export const Hero = ({ image, first_name, last_name, title, links }) => {
  const stg = useContext(SettingsContext);
  return (
    <div
      id="Hero"
      className="min-h-screen flex flex-col lg:flex-row flex-wrap items-center justify-center -mt-12">
      <div className="relative group">
        <div
          class={`w-[230px] h-[230px] min-w-[230px] min-h-[230px] max-w-[230px] max-h-[230px] absolute -inset-0.5 bg-gradient-to-r from-${stg.theme_color}-800 to-${stg.theme_color}-300 mx-10 mt-5 top-10 lg:-top-2 rounded-full overflow-hidden blur-2xl opacity-70 transition duration-1000 animate-pulse`}></div>
        <div
          className={`relative w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] mb-10 mt-12 sm:mt-0 bg-${stg.theme_color}-300 rounded-full overflow-hidden mx-5 flex flex-col justify-center`}>
          <img
            className="w-[250px] h-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px] object-cover border-4 border-[#333333] rounded-full"
            alt=" "
            src={getURL(image)}
          />
        </div>
      </div>
      <div className="relative font-extrabold mx-5 lg:ml-10 mb-10 flex flex-col items-center lg:items-start">
        <div className="sm:text-7xl sm:-mb-6 sm:-mt-2 text-5xl -mb-3">
          <TransformText>{first_name}</TransformText>
        </div>
        <div className="sm:text-7xl text-4xl mt-2">
          <TransformText>{last_name}</TransformText>
        </div>
        <div className="sm:text-3xl text-xl mt-5 md:mt-0">
          <TransformText textColor={"text-neutral-600"}>{title}</TransformText>
        </div>
        <div className="font-bold flex flex-row flex-wrap justify-center lg:justify-start mt-5">
          {links?.map((item) => (
            <div
              className={`mt-2 bg-${stg.theme_color}-300 cursor-pointer px-3 pt-0.5 sm:pt-0 rounded-full transition duration-300 hover:ring-2 hover:ring-${stg.theme_color}-300 hover:bg-white text-${stg.theme_color}-900 mr-1.5 whitespace-nowrap select-none`}>
              <i className={`${item.icon} mr-2 my-1 text-${stg.theme_color}-900`} />
              <a href={item.url}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 hidden lg:block">
        <a href="#content" title="scroll down!">
          <span className="select-none px-2 text-2xl font-bold text-light-0 mr-3.5">
            <span className="animate-bounce absolute mt-1"><i class="fa-solid fa-arrow-down-long"></i></span>
          </span>
        </a>
      </div>
    </div>
  );
};
