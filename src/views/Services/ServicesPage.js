"use client";
import React, { useState } from "react";
import ManagedOfficePage from "@/views/MangedOffice/ManagedOfficePage";
import ServiceHeader from "./component/ServiceHeader";
import CoworkingSpace from "../CoworkingSpace/CoworkingSpace";

const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState("Managed Office");

  const handleTabChange = (index) => {
    setCurrentPage(index);
  };

  let componentToRender = <ManagedOfficePage />;
  if (currentPage === "Coworking Space") {
    componentToRender = <CoworkingSpace />;
  }

  return (
    <div className="w-100">
      <ServiceHeader
        currentPage={currentPage}
        handleTabChange={handleTabChange}
      />
      {componentToRender}
    </div>
  );
};

export default ServicesPage;
