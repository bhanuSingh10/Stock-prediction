# Time Series Forecasting

## Overview and Purpose
This project utilizes Pandas to analyze time series data, such as search traffic, stock prices, and daily revenue, to identify trends and make predictions with the goal of maximizing profitability.



---

## Finding Patterns in the Search Traffic

For this section: we were presented the following scenario:

>The data science manager asks if the Google search traffic for the company links to any financial events at the company. Or, does the search traffic data just present random noise? To answer this question, pick out any unusual patterns in the Google search data for the company, and connect them to the corporate financial events.

In May 2020, MercadoLibre released its quarterly financial results. We were asked if the Google search traffic increased during that month, possibly in response to this event. To answer this question, I plotted the search trends for May 2020, calculated the total monthly traffic for that month, and compared that month to the median monthly traffic of the other months in the dataset.

![Screenshot from 2023-12-02 11-56-09](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/c8bf2ea7-743f-4078-a642-acb26c96cd35)


This calculation showed that there was an 8% increase in search trends in May compared to the median, and also the search trends seem to spike on May 5th. However, I don't think we have enough information to determine whether or not the release of the quarterly financial results was the cause of these increases.

## Mining the Search Traffic Data for Seasonality
For this section, we addressed the following scenario:

>Marketing realizes that they can use the hourly search data, too. If they can track and predict interest in the company and its platform for any time of day, they can focus their marketing efforts around the times that have the most traffic. This will get a greater return on investment (ROI) from their marketing budget. To that end, you want to mine the search traffic data for predictable seasonal patterns of interest in the company.

To identify these patterns, I plotted the search traffic data according to day of the week, hour of the day, and week of the year.

# Group the hourly search data to plot (use hvPlot) the average traffic by the week of the year
df_mercado_trends.groupby(df_mercado_trends.index.weekofyear).mean().hvplot(
    title='MercadoLibre Google Search Trends by Week of Year',
    xlabel='Week of Year'
)


![Screenshot from 2023-12-02 11-56-37](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/6a7ed1d0-14b1-4aa0-92f8-afa4e2a5ea8e)


From these visualizations we can determine:

* The search trends seem to be higher during the week and taper off on the weekend.
* Across all of the days of the week, the search traffic appears to concentrate the most between 0:00 and 3:00, and 21:00 and 23:00.
* When asked if search traffic increased during the winter holiday period, we can see that although the search traffic decreased between week 40 and 42 (the first two weeks of October), for the rest of the winter holiday period it does tend to increase, and then decreases sharply between week 51 and 52 (after Christmas).

## Relating the Search Traffic to Stock Price Patterns

In this section, we explore the relationship between search data and company stock price.

>You mention your work on the search traffic data during a meeting with people in the finance group at the company. They want to know if any relationship between the search data and the company stock price exists, and they ask if you can investigate.

To do this, I first concatenated the stock price and search trend DataFrames into one. I then sliced the data to focus on the first 6 months of 2020, when the COVID-19 pandemic destabilized global financial markets. The goal was to determine if the trends in our data supported the narrative that, although the pandemic caused damage to the market initially, e-commerce platforms were able to recover fairly quickly due to the global demand for socially-distant shopping.

```
first_half_2020.hvplot(
    shared_axes=False,
    subplots=True).cols(1)
```

![Screenshot from 2023-12-02 12-10-22](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/52fdf37a-abe5-414f-a652-c2f049577d58)

![Screenshot from 2023-12-02 12-10-34](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/a3c50623-b117-45ce-8ea8-95112d1928af)


From these plots we can see that our data does seem consistent with the above narrative. Although the stock prices and search traffic dropped after March of 2020, the stock prices more so, both did eventually recover. Starting in May 2020, the stock price began to climb past pre-pandemic levels.

Finally, for this section we were asked to find the correlation between the search trends, stock volatility, and hourly stock return.


![Screenshot from 2023-12-02 11-56-22](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/2d6d2808-9f87-4e28-91fd-b8eb6809ceb9)


We can see that a 14% inverse relationship exists between the lagged search traffic and the stock volatility. A 1.8% positive correlation exists between the lagged search traffic and the stock price return.

## Creating a Time Series Model with Prophet

In this section, I used Prophet to forecast patterns in the search data. The forecast predicts 2000 hours, or 80 days, into the future, on an hourly basis.

![Screenshot from 2023-12-02 11-56-37](https://github.com/bhanuSingh10/Stock-prediction/assets/133089376/855c2c53-dfb0-49c9-b7ea-d29075313015)



## Forecasting Revenue Using Time-Series Models
We were given the option for this project to add an additional section to the notebook, considering this scenario:

>A few weeks after your initial analysis, the finance group follows up to find out if you can help them solve a different problem. Your fame as a growth analyst in the company continues to grow! Specifically, the finance group wants a forecast of the total sales for the next quarter. This will dramatically increase their ability to plan budgets and to help guide expectations for the company investors.

Based on the forecast information, the finance division can expect a most likely outcome of 969.56 million dollars of total sales for the next quarter, with a worst case scenario of 887.45 million dollars of total sales, and a best case scenario of 1.052 billion dollars of total sales.

---

## Technologies

* Python 3.9
* Jupyter Lab and Jupyter Notebooks
* Python libraries: Pandas, Numpy, Holoviews, Datetime, Pathlib, Prophet
* Frameworks: Flask, Django

---

## Contributors
Dhruv Bharuka
Bhanu Singh
Divyansh Gupta

---

## License
GNU General Public License v3.0
