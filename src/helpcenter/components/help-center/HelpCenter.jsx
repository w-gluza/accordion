import React from "react";
import HelpCenterOverview from "../help-center-overview/HelpCenterOverview";
import HelpCenterQuestions from "../help-center-questions/HelpCenterQuestions";

const HelpCenter = () => {
  return (
    <div>
      <HelpCenterOverview />
      <HelpCenterQuestions />
    </div>
  );
};

export default HelpCenter;
