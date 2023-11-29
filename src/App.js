// src/App.js
import React, { useState, useEffect } from "react";
import TankList from "./components/TankList";
import SensorDetail from "./components/SensorDetail";

const App = () => {
  useEffect(() => {
    // Add a class to the body element
    document.body.classList.add("paf-app");

    // Create a link element
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family=Red+Hat+Display"; // Replace with the actual path

    // Append the link element to the head of the document
    document.head.appendChild(link);

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("paf-app");
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render
  const [tankList, setTankList] = useState([
    {
      id: 1,
      species: "SM8_A",
      name: "F1",
      sensors: [
        {
          name: "Sensor A",
          data: [
            /* mock data for Sensor A */
          ],
        },
        {
          name: "Sensor B",
          data: [
            /* mock data for Sensor B */
          ],
        },
        {
          name: "Sensor C",
          data: [
            /* mock data for Sensor C */
          ],
        },
      ],
    },
    {
      id: 2,
      species: "SM8_B",
      name: "F2",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 3,
      species: "SW",
      name: "F3",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 4,
      species: "Bleach",
      name: "F4",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 5,
      species: "Limu",
      name: "F5",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 6,
      species: "SM5_B",
      name: "F6",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 7,
      species: "Limu",
      name: "F7",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 8,
      species: "A3",
      name: "F8",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 9,
      species: "SM3",
      name: "F9",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 10,
      species: "SM5_A",
      name: "F10",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 11,
      species: "SM5_A",
      name: "F11",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 12,
      species: "Bleach",
      name: "F12",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 13,
      species: "Bleach",
      name: "F13",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 14,
      species: "SM9_A",
      name: "F14",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 15,
      species: "SM1_A",
      name: "F15",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 16,
      species: "Bleach",
      name: "F16",
      sensors: [
        {
          name: "Sensor X",
          data: [
            /* mock data for Sensor X */
          ],
        },
        {
          name: "Sensor Y",
          data: [
            /* mock data for Sensor Y */
          ],
        },
      ],
    },
    {
      id: 17,
      species: "SM1_B",
      name: "F17",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 18,
      species: "Limu",
      name: "F18",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 19,
      species: "A2",
      name: "F19",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 20,
      species: "Bleach",
      name: "F20",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 21,
      species: "SM2_A",
      name: "F21",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 22,
      species: "SM2_B",
      name: "F22",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 23,
      species: "SM7",
      name: "F23",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 24,
      species: "Limu",
      name: "F24",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 25,
      species: "Limu",
      name: "F25",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
      ],
    },
    {
      id: 26,
      species: "A1_A",
      name: "F26",
      sensors: [
        {
          name: "Sensor P",
          data: [
            /* mock data for Sensor P */
          ],
        },
        {
          name: "Sensor Q",
          data: [
            /* mock data for Sensor Q */
          ],
        },
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
      <nav className="paf-nav">
        <a href="#" className="btn tanks-button nav-button" onClick={handleBackClick}>Tanks</a>
        <h1 className="paf-title">PAF Data Hub</h1>
        <a href="#" className="btn qr-button nav-button">QR</a>
      </nav>
      <div className="row">
        {/* Show the list and detail view on larger screens */}
        <div className="col">
          {/* Show the detail view when a tank is selected */}
          {selectedTank && (
            <div>
              <SensorDetail selectedTank={selectedTank} />
            </div>
          )}
          {!selectedTank && (
            <TankList tankList={tankList} onItemClick={handleTankClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
