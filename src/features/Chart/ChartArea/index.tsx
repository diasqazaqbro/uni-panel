import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Средний GPA по месяцам",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// Generating random GPA values between 2 and 4 for each month
const individualGpaData = labels.map(() => Math.random() * 2 + 2);
const groupGpaData = labels.map(() => Math.random() * 2 + 2);

export const data = {
  labels,
  datasets: [
    {
      label: "Индивидуальный GPA",
      data: individualGpaData,
      borderColor: "#34befa",
      backgroundColor: "rgba(52, 190, 250, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Средний GPA в группе",
      data: groupGpaData,
      borderColor: "#fa8334",
      backgroundColor: "rgba(250, 131, 52, 0.5)",
      yAxisID: "y",
    },
  ],
};

export function ChartArea() {
  return <Line options={options} data={data} />;
}
