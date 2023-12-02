// src/components/IntroPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './IntroPage.css'
const IntroPage = () => {
 
  return (
    <div>
        <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">Stock Predictor</h1>
        <p className="intro-description">
          Welcome to the Stock Predictor app. Predict stock prices using time series analysis.
        </p>
      <div className='get-started'>
<button>Get Started</button>
    </div>
      </div>
    </div>
    
    <div className='stock-info'>
    <div><img src="https://media2.giphy.com/media/Mc1yxvp8fIGuYXHJI0/giphy.gif?cid=ecf05e47x9xweugavuuj7tpb3h800klo6zq5jw1jgpsdn57d&ep=v1_gifs_related&rid=giphy.gif&ct=g" class="giphy" ></img></div>
    
    <div className="giphy-info">
      <ul>
        <li>  Data Collection and Cleaning:

Gather accurate and comprehensive historical stock price data.
Clean the data to remove outliers, missing values, and other anomalies that might affect the analysis.
   </li>
        <li>Choose the Right Time Frame:

Select an appropriate time frame for your analysis (daily, weekly, monthly) based on the investment horizon or trading strategy.
</li>
        <li>Stationarity Check:
Ensure that the time series data is stationary, meaning the statistical properties like mean and variance remain constant over time. If not, apply techniques like differencing.

        </li>
        <li>Trend Analysis:

Identify and analyze long-term trends in the stock prices using methods like moving averages or polynomial regression.</li>
        <li>
          
Seasonal Patterns:

Detect and account for any seasonal patterns or cycles that may influence stock prices, especially in industries with specific economic seasons.
        </li>
        <li>
          

Autocorrelation:

Examine autocorrelation to understand the relationship between a stock's past and present values. This helps in identifying patterns that can be exploited for predictions.
        </li>
      </ul>
   

    </div>
    
    </div>
  
     </div>
  );
};

export default IntroPage;
