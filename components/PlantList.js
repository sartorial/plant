import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantObj}) {


const plantList = plantObj.map(plant => { return <PlantCard key={plant.id} id={plant.id} name={plant.name} price={plant.price} image={plant.image}/>})

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
