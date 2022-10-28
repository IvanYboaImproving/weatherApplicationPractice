import React from 'react';
import PropTypes from 'prop-types';
import { LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer } from 'recharts';

const ForecastChart = ({data}) => {
  return (
    <ResponsiveContainer height={300} width="100%">
        <LineChart
            height={250}
            width={700}
            margin={{ top: 20, bottom: 20, left: 5, right: 25 }}
            data={data}>
            <XAxis dataKey={"dayHour"}></XAxis>
            <YAxis></YAxis>
            <CartesianGrid></CartesianGrid>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Line type={"monotone"} dataKey={"max"} stroke={"#FF0000"}></Line>
            <Line type={"monotone"} dataKey={"min"} stroke={"#0000FF"}></Line>
        </LineChart>
    </ResponsiveContainer>
  )
};

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }),
    ).isRequired
};

export default ForecastChart