import React from "react";
import BaseCard from "../base-card/BaseCard";

const HelpCenterOverview = ({ handleState, setCategoryData }) => {
  return (
    <div>
      <p>Main Page</p>
      <BaseCard handleState={handleState} setCategoryData={setCategoryData} />
    </div>
  );
};

export default HelpCenterOverview;
