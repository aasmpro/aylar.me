import React from "react";
import { baseURL } from "../core/config";

export const Footer = ({ children }) => {
  return (
    <div className="pt-5 pb-10 flex flex-col justify-center items-center">
      <div className="text-xs">
        {children} | <a href={`${baseURL}/admin`} target="_blank" rel="noreferrer">Panel</a>
      </div>
    </div>
  );
};
