// src/components/SensorDetail.js
import React from 'react';
import SensorChart from './SensorChart'; // Replace with the correct path to your SensorChart component

const SensorDetail = ({ selectedTank }) => {
  return (
    <div>
      {selectedTank && (
        <div>
          <h2>{selectedTank.name}</h2>
          <p>{selectedTank.species}</p>
          <ul className="list-unstyled">
            {selectedTank.sensors.map((sensor, index) => (
              <li key={index}>
                {sensor.name}
                <SensorChart data={sensor.data} /> {/* Use actual sensor data */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SensorDetail;
