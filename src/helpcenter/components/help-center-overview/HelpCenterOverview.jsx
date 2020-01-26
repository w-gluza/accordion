import React from "react";
import BaseCard from "../base-card/BaseCard";

const HelpCenterOverview = ({ handleState }) => {
  return (
    <div>
      <p>Main Page</p>
      <BaseCard handleState={handleState} />
    </div>
  );
};

export default HelpCenterOverview;
