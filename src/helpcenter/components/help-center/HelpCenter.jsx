import React, { useState } from "react";
import HelpCenterOverview from "../help-center-overview/HelpCenterOverview";
import HelpCenterQuestions from "../help-center-questions/HelpCenterQuestions";

const HelpCenter = () => {
  const [state, setState] = useState(true);

  const [categoryData, setCategoryData] = useState({
    id: "",
    icon: "",
    category: "",
    description: "",
    categoryType: ""
  });

  const handleState = () => {
    setState(false);
  };
  console.log(categoryData);
  console.log(state);
  return (
    <div>
      {state ? (
        <HelpCenterOverview
          handleState={handleState}
          setCategoryData={setCategoryData}
        />
      ) : (
        <HelpCenterQuestions categoryData={categoryData} />
      )}
    </div>
  );
};

export default HelpCenter;
