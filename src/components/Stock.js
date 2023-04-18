import React from 'react'
import {useParams} from "react-router-dom"

function Stocks (props) {
    // Grabbing the stock symbol from the URL Params
    const params = useParams()
    const stockSymbol = params.symbol
    const stock = props.stockData.find(({symbol})=>symbol === stockSymbol)
  
   return (
     <div>
       <h3>Name: {stock.name}</h3>
       <h3 className="price">Price: {stock.lastPrice}</h3>
     </div>
   )
  
}


export default Stocks