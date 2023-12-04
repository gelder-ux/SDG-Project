// src/App.js
import React, { useState, useEffect } from "react";
import TankList from "./components/TankList";
import SensorDetail from "./components/SensorDetail";
import axios from "axios";
import { LineChart } from "@mui/x-charts/LineChart";
import { bool } from "prop-types";

var timestamps = [];
var temperature = [];
// false means off/bad; true means on/good; intialize to off/bad
var floatBinary = false;
var powerBinary = false;
var floatString = "bad";
var powerString = "off";
var waterLevelStatusClass= "";
var powerStatusClass = "";
var tankId;
var tankSpecies;

const App = () => {
  useEffect(() => {
    // Add a class to the body element
    document.body.classList.add("paf-app");

    // Create a link element
    const link = document.createElement("link");

    const favicon = document.createElement("link");
    favicon.href =
      "https://www.thepaf.org/wp-content/uploads/2023/04/favicon-32x32-1.png";

    // Update the document title
    document.title = "PAF Data Hub";
    favicon.rel = "icon";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family=Red+Hat+Display"; // Replace with the actual path

    // Append the link element to the head of the document
    document.head.appendChild(link);
    document.head.appendChild(favicon);

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
          data: [(1, 2), (3, 4), (5, 6)],
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
    const dataEx = require("./data/sensaphone_ex1.json");
    //console.log("data");
    //console.log(dataEx);
    //console.log("done");

    const sensaphoneData = dataEx.sensaphone_data;
    console.log(sensaphoneData);
    // Check if sensaphoneData is an array before using forEach
    if (Array.isArray(sensaphoneData)) {
      sensaphoneData.forEach((item, index) => {
        //console.log(`Data point ${index + 1}:`);
        //console.log("Timestamp:", item.timestamp);
        timestamps[index] = new Date(item.timestamp).getTime();
        //console.log("Temperature (Celsius):", item.temperature_celsius);
        temperature[index] = item.temperature_celsius;
        //console.log("Float Sensor:", item.float_sensor);
        //console.log("Power Sensor:", item.power_sensor);
        //console.log("------------------------");
        floatBinary = item.float_sensor;
        powerBinary = item.power_sensor;
      });
    } else {
      console.error("Invalid data format. sensaphone_data is not an array.");
    }
    setSelectedTank(tank);
    console.log(tank.species);
    tankSpecies = tank.species;
    tankId = tank.id;

    console.log(typeof timestamps[0]);
    console.log(temperature);
    console.log(tank.id);
    if (floatBinary == true) {
      floatString = "good";
      waterLevelStatusClass = "--good";
    } else {
      floatString = "bad";
      waterLevelStatusClass = "--bad";
    }

    if (powerBinary == true) {
      powerString = "on";
      powerStatusClass = "--good";
    } else {
      powerString = "off";
      powerStatusClass = "--bad";
    }
  };

  const handleBackClick = () => {
    setSelectedTank(null);
  };

  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingOrder: "descending",
  };

  return (
    <div className="container-fluid">
      <nav className="paf-nav">
        <a
          href="#"
          className="btn tanks-button nav-button"
          onClick={handleBackClick}
        >
          <svg
            width="38"
            height="42"
            viewBox="0 0 38 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6663 10.9416V10.9624M27.333 27.6082V27.6291M16.558 16.8332C17.7237 15.6679 18.5176 14.183 18.8394 12.5665C19.1611 10.9499 18.9962 9.2742 18.3656 7.75133C17.7349 6.22847 16.6668 4.92683 15.2964 4.01104C13.9259 3.09525 12.3146 2.60645 10.6663 2.60645C9.01806 2.60645 7.4068 3.09525 6.03633 4.01104C4.66587 4.92683 3.59776 6.22847 2.96711 7.75133C2.33645 9.2742 2.17157 10.9499 2.49332 12.5665C2.81507 14.183 3.60899 15.6679 4.77468 16.8332L10.6663 22.727L16.558 16.8332ZM33.2247 33.4999C34.3904 32.3346 35.1843 30.8497 35.506 29.2331C35.8278 27.6165 35.6629 25.9409 35.0322 24.418C34.4016 22.8951 33.3335 21.5935 31.963 20.6777C30.5926 19.7619 28.9813 19.2731 27.333 19.2731C25.6847 19.2731 24.0735 19.7619 22.703 20.6777C21.3325 21.5935 20.2644 22.8951 19.6338 24.418C19.0031 25.9409 18.8382 27.6165 19.16 29.2331C19.4817 30.8497 20.2757 32.3346 21.4413 33.4999L27.333 39.3936L33.2247 33.4999Z"
              stroke="black"
              stroke-width="4.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="sr-only">Tanks</span>
        </a>
        <h1 className="paf-title">PAF Data Hub</h1>
        <a href="#" className="btn qr-button nav-button">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.75 0.25H0.25V12.75H4.41667V4.41667H12.75V0.25ZM0.25 37.75V25.25H4.41667V33.5833H12.75V37.75H0.25ZM25.25 0.25V4.41667H33.5833V12.75H37.75V0.25H25.25ZM33.5833 25.25H37.75V37.75H25.25V33.5833H33.5833V25.25ZM8.58333 8.58333H16.9167V16.9167H8.58333V8.58333ZM8.58333 21.0833H16.9167V29.4167H8.58333V21.0833ZM29.4167 8.58333H21.0833V16.9167H29.4167V8.58333ZM21.0833 21.0833H29.4167V29.4167H21.0833V21.0833Z"
              fill="black"
            />
          </svg>

          <span className="sr-only">QR</span>
        </a>
      </nav>
      <div className="row">
        {/* Show the list and detail view on larger screens */}
        <div className="col">
          {/* Show the detail view when a tank is selected */}
          {selectedTank && (
            <section className="sensor-detail__content">
              <header className="sensor-detail__tank">
                <h2>Tank #: {tankId}</h2>
                <div>Species Name: {tankSpecies}</div>
              </header>
              <div className="sensor-detail__temperature">
                <h2 style={{ color: "black" }}>Temp °C</h2>

                <LineChart
                  xAxis={[
                    {
                      data: timestamps,
                      scaleType: "time",
                      label: "Time",
                      hideTooltip: true,
                    },
                  ]}
                  series={[
                    {
                      dataKey: "temperature_celsius",
                      scaleType: "linear",
                    },
                  ]}
                  dataset={
                    require("./data/sensaphone_ex1.json").sensaphone_data
                  }
                  {...customize}
                />
              </div>
              <div className="sensor-detail__sensors--row">
                <div className={"sensor__water " + waterLevelStatusClass}>
                  <h2>
                    Water Level {floatString}
                  </h2>
                </div>
                <div className={"sensor__dissolved-oxygen "}>
                  <h2>Dissolved O2</h2>
                </div>
                <div className={"sensor__power " + powerStatusClass}>
                  <h2>Power {powerString}</h2>
                </div>
              </div>
            </section>
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
