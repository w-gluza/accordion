import React from "react";
import BaseExpansionPanel from "../base-expansion-panel/BaseExpansionPanel";

const HelpCenterQuestions = ({ categoryData }) => {
  return (
    <div>
      <p>Help Center Question</p>
      <BaseExpansionPanel categoryData={categoryData} />
    </div>
  );
};

export default HelpCenterQuestions;
