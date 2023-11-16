// src/components/SensorList.js
import React from 'react';

const SensorList = ({ tankList, onItemClick }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Tank List</h5>
      </div>
      <ul className="list-group list-group-flush">
        {tankList.map((tank) => (
          <li
            key={tank.id}
            className="list-group-item list-group-item-action"
            onClick={() => onItemClick(tank)}
          >
            <div>
              <strong>{tank.name}</strong>
            </div>
            <div>ID: {tank.id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorList;
