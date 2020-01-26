import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { helpCenterCategories } from "../../types/HelpCenterCategories";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  section: {
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    width: "200px",
    height: "300px",
    margin: "20px"
  }
}));

const BaseCard = ({ handleState }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      {helpCenterCategories.map(element => (
        <Card key={element.id} className={classes.card} onClick={handleState}>
          <CardContent>
            <h4>{element.category}</h4>
            <Typography>{element.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
export default BaseCard;
