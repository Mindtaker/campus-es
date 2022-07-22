import React from "react";
import TripItem from "../TripItem/TripItem";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const places = [
  {
    image: "img01.jpg",
    name: "San Rafael",
    price: 2500,
    description:
      "San Rafael is the second most important city of the Mendoza province and is the main tourist center in all of Cuyo, with the capacity to accommodate more than 150,000 visitors per season.",
  },
  {
    image: "img02.jpg",
    name: "Mar del Plata",
    price: 2000,
    description:
      "Mar del Plata is one of the major fishing ports and the biggest seaside beach resort in Argentina. With a population of 614,350 as per the 2010 census, it is the 5th largest city in Argentina.",
  },
  {
    image: "img03.jpg",
    name: "La Cumbrecita",
    price: 3000,
    description:
      "La Cumbrecita is a small town located in the Calamuchita Valley in the Sierras Grandes of the Córdoba province, Argentina. At an altitude of 1450 meters above sea level. It is located in the Calamuchita department.",
  },
];

const buttons = [
  'promo',
  'reserve',
  'buy',
]

export default function TripBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {places.map((place, index) => (
        <TripItem
          key={place.name}
          image={__dirname + "images/" + place.image}
          name={place.name}
          price={place.price}
          description={place.description}
          button={buttons[index]}
        />
      ))}
    </div>
  );
}
