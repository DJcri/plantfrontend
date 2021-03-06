import React from "react";
import img from "../images/plant.jpg";

import { connect } from 'react-redux';
import { deletePlant } from '../actions/index';

const PlantCard = (props) => {

  const { user } = props;

  return (
    <div className="plant-card">
      <img src={img} alt="plant" />
      {/* <img src={user.plants.image} alt="plant" /> */}
      <div>
      <button onClick={()=> props.deletePlant(props.user.id)}>Delete Plant X</button>
      <h3>Plant Name</h3>
      </div>
      {/* <h3>{user.plants.nickname}</h3> */}
      <div className="info">
        It's a plant, it needs water every once in a while.
        {/* Water it {user.plants.h20frequency} */}
      </div>

    </div>
  );
};



export default connect(()=>{}, { deletePlant })(PlantCard);
