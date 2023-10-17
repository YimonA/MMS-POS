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
import { useContextCustom } from "../../context/stateContext";

const SaleLineChart = ({ oData }) => {
  SaleLineChart.propTypes = {
    oData: PropTypes.object,
    // tag: PropTypes.string,
  };
  const [data, setData] = useState(oData?.monthly_sales);
  const {tagValue}=useContextCustom();
// const [tagValue,setTagValue]=useState(tag)

// useEffect(()=>{
// setTagValue(tag)
// },[tag])
  useEffect(() => {
    graphHandler();
  }, [tagValue]);

  function graphHandler() {
    if (tagValue === "weekly") {
      const data = oData?.weekely_sales;
      setData(data);
    }
    if (tagValue === "monthly") {
      const data = oData?.monthly_sales;
      setData(data);
    }
    if (tagValue === "yearly") {
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
          {tagValue === "monthly" ? <XAxis /> : null}
          {tagValue === "weeekly" ? <XAxis dataKey="sale_date" /> : null}
          {tagValue === "yearly" ? <XAxis dataKey="month" /> : null}
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
