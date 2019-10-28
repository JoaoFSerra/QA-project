import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 500
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function QuestionCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Title of Question
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Answer Text
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">See Answers</Button>
      </CardActions>
    </Card>
  );
}
