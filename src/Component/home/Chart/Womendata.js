import React from "react";
import Chart from "react-google-charts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function Womendata() {
  return (
    <div className="background-css">
      <div className="container mb-5">
          <h3 class="d-flex justify-content-start title align-right ">
            <b className="mb-3">Data Representation</b>
          </h3>
          <div className="row">
              <div className="col-md-6">
                <Chart
                  width={'100%'}
                  height={'300px'}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                
                  data={[
                    ['Year', 'Registered'],
                    ['Province 1', 381],
                    ['Province 2', 84],
                    ['Bagmati', 953],
                    ['Gandaki', 378],
                    ['Lumbini', 303],
                    ['Karnali', 56],
                    ['Sudurpaschim', 129],
                  ]}
                   options={{
                    // Material design optionshjgjhgjhgj';';';';'';
                    chart: {
                      title: 'Number of Registered Women in Aamakomaya Content',
                      subtitle: 'Number of Self-registered women 2020-2021',
                    },
                    colors: ['#227893', '#B61B1B', '#822659', '#f3b49f', '#f6c7b6']

                  }}
                  // For tests
                  rootProps={{ 'data-testid': '2' }}
                />
              </div>
              <div className="col-md-6">
              <Chart
                  width={'600px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Task', 'Hours per Day'],
                    ['Less than 20',133],
                    ['Between 20-30', 1873],
                    ['More than 30', 420]
                  ]}
                  options={{
                    title: 'Age Group',
                    // Just add this option
                    pieHole: 0.4,
                  }}
                  rootProps={{ 'data-testid': '3' }}
                />
              </div>
              <div className="col-md-12">
              {/* <Chart
                width={'300px'}
                height={'300px'}
                chartType="GeoChart"
                data={[
                  ['latitude', 'longitude'],
                  ['27.7172', '85.3240'],
                ]}
                options={{
                  region: 'NP', 
                  colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
                  datalessRegionColor: '#f8bbd0',
                }}
                mapsApiKey="YOUR_KEY_HERE"
                rootProps={{ 'data-testid': '4' }}
              /> */}
              </div>
          </div>
      </div>
      </div>

    
  );
}
