import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { PureComponent, useEffect, useState } from "react";

// class CustomizedLabel extends PureComponent {
//   render() {
//     const { x, y, stroke, value } = this.props;

//     return (
//       <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
//         {value}
//       </text>
//     );
//   }
// }

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const { x, y, stroke, payload } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
//           {payload.value}
//         </text>
//       </g>
//     );
//   }
// }

const SaleLineChart = ({ oData, tag }) => {
  SaleLineChart.propTypes = {
    oData: PropTypes.object,
    tag: PropTypes.string,
  };
  const [data, setData] = useState();

  useEffect(() => {
    graphHandler();
  }, []);

  useEffect(() => {
    graphHandler();
  }, [tag]);

  function graphHandler() {
    if (tag === "weekly") {
      const data = oData?.weekely_sales;
      setData(data);
    } else if (tag === "monthly") {
      const data = oData?.monthly_sales;
      setData(data);
    } else if (tag === "yearly") {
      const data = oData?.yearly_sales;
      setData(data);
    }
  }

  return (
    <div style={{ width: "100%" }} className=" w-full">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {tag === "weeekly" ? (
            <XAxis dataKey="sale_date" />
          ) : tag === "monthly" ? (
            <XAxis 
            // dataKey='sale_date' 
            />
          ) : tag === "yearly" ? (
            <XAxis dataKey="month" />
          ) : null}
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleLineChart;
