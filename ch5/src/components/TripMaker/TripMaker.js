import React, { useReducer, createContext } from "react";
import TripBuilder from "../TripBuilder/TripBuilder";
import TripButton from "../TripButton/TripButton";
import TripSummary from "../TripSummary/TripSummary";

export const TripContext = createContext();

const rules = {
  buy: true,
  promo: false,
  reserve: true,
  cancel: false,
};

/**
 * En la siguiente función realizamos la lógica del pedido de ordenes y cancelaciones
 * con la utilización del Hook useReducer. Se utiliza un objeto rules que define las 
 * reglas a seguir por la opción Cancel.
 */
function cartReducer(state, item) {
  switch (item.button) {
    case "buy":
      console.log("[MAIL] You bought an order to " + item.name);
      rules.cancel = true;
      return [...state, item];
    case "promo":
      console.log("[MAIL] Discount obtained on " + item.name);
      rules.cancel = true;
      return [...state, item];
    case "reserve":
      console.log("[MAIL] You reserved " + item.name);
      rules.cancel = true;
      return [...state, item];
    case "cancel":
      const lastItem = state[state.length - 1];
      if (lastItem) {
        if (rules[lastItem.button] && rules.cancel) {
          const update = [...state];
          update.pop();
          console.log("[MAIL] You cancel " + lastItem.name);
          rules.cancel = false;
          return update;
        } else {
          rules.cancel
            ? console.log("Can't cancel a promotion")
            : console.log("You already cancelled the last order");
          return state;
        }
      } else {
        console.log("There are no ordered items");
        return state;
      }
    default:
      return state;
  }
}

export default function TripMaker() {
  const [trip, setTrip] = useReducer(cartReducer, []);
  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      <TripButton button={"cancel"} />
      <TripBuilder />
      <TripSummary />
    </TripContext.Provider>
  );
}
