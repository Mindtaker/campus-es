import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import TripButton from "../TripButton/TripButton";

const useStyles = createUseStyles({
  image: {
    border: "solid 1px black",
    fontSize: 80,
    width: "100%",
  },
  description: {
    fontSize: 18,
  },
  card: {
    border: "#7F9FBC solid 2px",
    background: "#EDEDED",
    margin: 20,
    padding: 25,
    position: "relative",
    textAlign: "left",
    width: 350,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "right",
  },
});

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export default function TripItem({
  image,
  name,
  description,
  price,
  ...props
}) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.card}>
        <img
          className={classes.image}
          src={image}
          alt={name}
          aria-label={name}
        />
        <h2>{name}</h2>
        <p className={classes.description}>{description}</p>
        <div aria-label="price" className={classes.price}>
          ${price.toLocaleString(undefined, currencyOptions)}
        </div>
      </div>
      <div>
        <TripButton name={name} {...props} />
      </div>
    </div>
  );
}

TripItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
