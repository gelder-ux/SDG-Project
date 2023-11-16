// src/App.js
import React, { useState } from 'react';
import TankList from './components/TankList';
import SensorDetail from './components/SensorDetail';

const App = () => {
  const [tankList, setTankList] = useState([
    {
      id: 1,
      name: 'Tank 1',
      sensors: [
        { name: 'Sensor A', data: [/* mock data for Sensor A */] },
        { name: 'Sensor B', data: [/* mock data for Sensor B */] },
        { name: 'Sensor C', data: [/* mock data for Sensor C */] },
      ],
    },
    {
      id: 2,
      name: 'Tank 2',
      sensors: [
        { name: 'Sensor X', data: [/* mock data for Sensor X */] },
        { name: 'Sensor Y', data: [/* mock data for Sensor Y */] },
      ],
    },
    // Add more tanks with sensors as needed
    // ...
    {
      id: 15,
      name: 'Tank 15',
      sensors: [
        { name: 'Sensor P', data: [/* mock data for Sensor P */] },
        { name: 'Sensor Q', data: [/* mock data for Sensor Q */] },
      ],
    },
  ]);
  const [selectedTank, setSelectedTank] = useState(null);

  const handleTankClick = (tank) => {
    setSelectedTank(tank);
  };

  const handleBackClick = () => {
    setSelectedTank(null);
  };

  return (
    <div className="container-fluid">
      <h1 className="mt-3">Sensor Data Visualization</h1>
      <div className="row">
        {/* Show the list and detail view on larger screens */}
        <div className="col-md-4 d-md-block">
          {/* Show the detail view when a tank is selected */}
          {selectedTank && (
            <div>
              <button className="btn btn-link" onClick={handleBackClick}>
                Back to List
              </button>
              <SensorDetail selectedTank={selectedTank} />
            </div>
          )}
          {!selectedTank && <TankList tankList={tankList} onItemClick={handleTankClick} />}
        </div>
      </div>
    </div>
  );
};

export default App;
