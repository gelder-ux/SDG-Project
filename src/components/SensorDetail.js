// src/components/SensorDetail.js
import React from "react";
import SensorChart from "./SensorChart"; // Replace with the correct path to your SensorChart component

const SensorDetail = ({ selectedTank }) => {
  return (
    <div>
      {selectedTank && (
        <div>
          <header className="tank-header">
            <h2 className="tank-header__name">Tank: {selectedTank.name}</h2>
            <span className="tank-header__species">Species: {selectedTank.species}</span>
          </header>
          <section className="tank-sensors__wrapper">
            <ul className="list-unstyled">
              {selectedTank.sensors.map((sensor, index) => (
                <li key={index}>
                  {sensor.name}
                  <SensorChart data={sensor.data} />{" "}
                  {/* Use actual sensor data */}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default SensorDetail;
