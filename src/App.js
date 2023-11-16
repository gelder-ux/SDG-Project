// src/App.js
import React, { useState } from 'react';
import SensorList from './components/SensorList';
import SensorDetail from './components/SensorDetail';

const App = () => {
  const [tankList, setTankList] = useState([
    {
      id: 1,
      name: 'Tank 1',
      sensors: [
        { name: 'Sensor A', data: [10, 15, 22, 30, 18, 25] },
        { name: 'Sensor B', data: [5, 12, 18, 25, 30, 22] },
      ],
    },
    {
      id: 2,
      name: 'Tank 2',
      sensors: [
        { name: 'Sensor X', data: [20, 25, 30, 15, 12, 18] },
        { name: 'Sensor Y', data: [8, 10, 15, 20, 28, 35] },
      ],
    },
    // Add more tanks as needed
  ]);
  const [selectedTank, setSelectedTank] = useState(null);

  const handleTankClick = (tank) => {
    setSelectedTank(tank);
  };

  return (
    <div className="container-fluid">
      <h1 className="mt-3">Sensor Data Visualization</h1>
      <div className="row">
        <div className="col-md-4">
          <SensorList tankList={tankList} onItemClick={handleTankClick} />
        </div>
        <div className="col-md-8">
          <SensorDetail selectedTank={selectedTank} />
        </div>
      </div>
    </div>
  );
};

export default App;
