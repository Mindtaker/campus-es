import React, { useContext } from "react";
import { createUseStyles } from "react-jss";

import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 50,
    fontSize: 20,
    "& li": {
      width: 180,
    },
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    padding: 25,
  },
});

export default function TripSummary() {
  const classes = useStyles();
  const { trip } = useContext(TripContext);
  const cart = trip.filter((item) => item.button !== "reserve");
  return (
    <div className={classes.wrapper}>
      <h2>Cart:</h2>
      <ul className={classes.list}>
        {cart.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
