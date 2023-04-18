import React from "react";
import {Link} from 'react-router-dom'

function Dashboard(props) {
  let stockData = props.stockData.map((data, index) => {
    return <Link key={index} to={`/stocks/${data.symbol}`}>
        <div className="stockName">{data.name}</div>
        <div className="stockPrice">{data.lastPrice}</div>
        <div className="=stockChange">{data.change}</div>
      </Link>
  });
  
  return <div className="stock">
          {stockData}
          </div>;
}

export default Dashboard;
