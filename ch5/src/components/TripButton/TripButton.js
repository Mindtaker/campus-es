import React, { useReducer, useContext } from "react";
import { createUseStyles } from "react-jss";

import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  "@global": {
    button: {
      padding: "10px 20px",
      color: "white",
      fontSize: 20,
      borderRadius: 10,
      border: "1px solid black",
      textTransform: "uppercase",
      cursor: "pointer",
      margin: "0 20px 20px",
    },
  },
  buy: {
    backgroundColor: "#008CBA",
  },
  reserve: {
    backgroundColor: "#4CAF50",
  },
  promo: {
    backgroundColor: "#7c81ff",
  },
  cancel: {
    margin: "20px 20px 0px 0px",
    backgroundColor: "#f44336",
  },
  wrapper: {
    textAlign: "right",
  },
});

const reducer = (key) => key + 1;
export default function TripButton({ name, button }) {
  const classes = useStyles();
  const { setTrip } = useContext(TripContext);
  const [id, updateId] = useReducer(reducer, 0);

  /**
   * En la siguiente función analizamos el tipo de botón cliqueado y utilizamos el hook
   * previamente importado para realizar la acción correspondiente de compra, promoción
   * reserva o cancelación de la órden.
   */
  function buttonManager(button) {
    switch (button) {
      case "buy":
        setTrip({
          name,
          id: `${name}-${id}`,
          button,
        });
        updateId();
        break;
      case "promo":
        setTrip({
          name,
          id: `${name}-${id}`,
          button,
        });
        updateId();
        break;
      case "reserve":
        setTrip({
          name,
          id: `${name}-${id}`,
          button,
        });
        updateId();
        break;
      case "cancel":
        setTrip({
          button,
        });
        break;
      default:
        console.log("error");
    }
  }

  return (
    <div className={classes.wrapper}>
      <button
        className={classes[button]}
        id={button}
        onClick={() => buttonManager(button)}
      >
        {button}
      </button>
    </div>
  );
}
