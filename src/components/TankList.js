// src/components/SensorList.js
import React from 'react';

const TankList = ({ tankList, onItemClick }) => {
  return (
    <div>
      <h2 className="sr-only">Tank List</h2>
      <div className="tank-list">
        {tankList.map((tank) => (
            <a key={tank.id}
              href="#"
              className="btn btn-light tank-button"
              onClick={() => onItemClick(tank)}
            >
              <div className="tank-button__species">{tank.species}</div>
              <div className="tank-button__name">{tank.name}</div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default TankList;
