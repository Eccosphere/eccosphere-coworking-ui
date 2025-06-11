import Tab from "@/components/Tab/Tab";
import React from "react";
import { tabData } from "../config/serviceData";
import style from "./ServiceHeader.module.css";

const ServiceHeader = (props) => {
  const { currentPage, handleTabChange } = props;
  return (
    <div className={style["service-header"]}>
      <Tab item={tabData} page={currentPage} togglePage={handleTabChange} />
    </div>
  );
};

export default ServiceHeader;
