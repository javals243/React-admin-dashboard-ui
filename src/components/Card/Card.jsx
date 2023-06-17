import React, { useState } from "react";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import Chart from "react-apexcharts";
import "react-circular-progressbar/dist/styles.css";
const Card = (props) => {
  const [expended, setExpended] = useState(false);

  return (
    <AnimateSharedLayout>
      {expended ? (
        <Expendedcard params={props} setExpended={() => setExpended(false)} />
      ) : (
        <CompactCard params={props} setExpended={() => setExpended(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// COmpactCard structure

const CompactCard = ({ params, setExpended }) => {
  const Png = params.png;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: params.color.background,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpended}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue} %`}
        />
        <span>{params.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>{params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};
const Expendedcard = ({ params, setExpended }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",

        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00:.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="expendedCard"
      style={{
        background: params.color.background,
        boxShadow: params.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpended} />
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">
        <Chart series={params.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};
export default Card;
