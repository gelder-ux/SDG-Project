// src/components/SensorData.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SensorData = ({ data, chartId }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current && data) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Sensor Data',
              data: data.values,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
            y: {
              type: 'linear',
              position: 'left',
            },
          },
        },
      });
    }

    // Cleanup chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartContainer, data]);

  return <canvas id={chartId} ref={chartContainer} />;
};

export default SensorData;
