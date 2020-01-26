import React, { useState } from "react";
import HelpCenterOverview from "../help-center-overview/HelpCenterOverview";
import HelpCenterQuestions from "../help-center-questions/HelpCenterQuestions";

const HelpCenter = () => {
  const [state, setState] = useState(true);

  const handleState = () => {
    setState(false);
  };

  console.log(state);
  return (
    <div>
      {state ? (
        <HelpCenterOverview handleState={handleState} />
      ) : (
        <HelpCenterQuestions />
      )}
    </div>
  );
};

export default HelpCenter;
