// Sparkline.tsx
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
}

const Sparkline: React.FC<SparklineProps> = ({ data, width = 100, height = 30, color = 'rgba(75, 192, 192, 1)' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        const chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((_, index) => index),
            datasets: [
              {
                data,
                borderColor: color,
                borderWidth: 1,
                fill: false,
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
            elements: {
              line: {
                tension: 0.4, // Smoothing
              },
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });

        return () => {
          chartInstance.destroy();
        };
      }
    }
  }, [data, color]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Sparkline;
