import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { dailyOperationsHelpCenter } from "../../types/DailyOperationsHelpCenter";
import { financialsHelpCenter } from "../../types/FinancialsHelpCenter";
import { sharingHelpCenter } from "../../types/SharingHelpCenter";
import { tgtgHelpCenter } from "../../types/TgtgHelpCenter";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  }
}));

const ExpansionPanel = withStyles({
  root: {
    margin: "12px 0px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },

  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    minHeight: "64px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0px 20px 0 rgba(0, 0, 0, 0.09)",
    borderRadius: "4px",
    "&$expanded": {
      backgroundColor: "#45ada1"
    }
  },
  content: {
    "&$expanded": {
      color: "white"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles({
  root: {
    boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.09)",
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px"
  }
})(MuiExpansionPanelDetails);

const BaseExpansionPanel = ({ categoryData }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { categoryType } = categoryData;

  console.log("category type", categoryType);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let helpCenterCategory;

  if (categoryType === "dailyOperationsHelpCenter") {
    helpCenterCategory = dailyOperationsHelpCenter;
  }
  if (categoryType === "financialsHelpCenter") {
    helpCenterCategory = financialsHelpCenter;
  }
  if (categoryType === "sharingHelpCenter") {
    helpCenterCategory = sharingHelpCenter;
  }
  if (categoryType === "tgtgHelpCenter") {
    helpCenterCategory = tgtgHelpCenter;
  }

  return (
    <>
      {helpCenterCategory.map(element => (
        <ExpansionPanel
          key={element.id}
          expanded={expanded === element.id}
          onChange={handleChange(element.id)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {element.question}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{element.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
};

export default BaseExpansionPanel;
