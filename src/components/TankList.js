// src/components/SensorList.js
import React from 'react';

const TankList = ({ tankList, onItemClick }) => {
  return (
    <div>
      <h2>Tank List</h2>
      <div className="row">
        {tankList.map((tank) => (
          <div key={tank.id} className="col-md-4 mb-3">
            <a
              href="#"
              className="btn btn-light btn-block"
              onClick={() => onItemClick(tank)}
            >
              {tank.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TankList;
