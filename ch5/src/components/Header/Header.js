import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User/User";

const useStyles = createUseStyles({
  text: {
    fontSize: 25,
    textAlign: "right",
    bottom: 10,
    right: 10,
    position: "absolute",
  },
  logo: {
    position: "absolute",
    height: 70,
  },
  wrapper: {
    borderBottom: "black solid 1px",
    padding: [15, 10],
    height: 70,
    position: "relative"
  },
});

export default function Header() {
  const user = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img className={classes.logo} src={__dirname + "images/logo.png"} alt="logo" aria-label="logo" />
      <div className={classes.text}>Welcome, {user.name}</div>
    </div>
  );
}
