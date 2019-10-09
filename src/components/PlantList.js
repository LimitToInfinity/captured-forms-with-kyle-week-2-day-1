import React from "react";

export default function PlantList(props) {

    const plants = props.plants.map(plant => {
        return <li>{plant.name}</li>
      });

    return(
        <ul className="plant-list">
            {plants}
        </ul>
    );
}