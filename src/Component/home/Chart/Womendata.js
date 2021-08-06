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
    <div className="container mb-5">
        <h3 class="d-flex justify-content-start title align-right ">
          <b className="mb-3">Our achievement</b>
        </h3>
        <div className="row">
            <div className="col-md-8">
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
              
                data={[
                  ['Year', 'Total Calls Received From Pregant women', 'Total Followup Calls', 'Registered Women'],
                  ['Province 1', 1000, 400, 200],
                  ['Province 2', 1170, 460, 250],
                  ['Bagmati', 660, 1120, 300],
                  ['Gandaki', 1030, 540, 350],
                  ['Lumbini', 1030, 540, 350],
                  ['Karnali', 1030, 540, 350],
                  ['Sudurpaschim', 1030, 540, 350],
                ]}
                options={{
                  // Material design optionshjgjhgjhgj';';';';'';
                  chart: {
                    title: 'Pregnant women followup',
                    subtitle: 'Register, Followup, and Call Recieve: 2020-2021',
                  },
                  colors: ['#227893', '#B61B1B', '#822659', '#f3b49f', '#f6c7b6']

                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
              />
            </div>
            <div className="col-md-4">
            <Chart
              width={'100%'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
              ]}
              options={{
                title: 'My Daily Activities',
                // Just add this option
                is3D: true,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
              }}
              rootProps={{ 'data-testid': '2' }}
            />
            </div>
            <div className="col-md-12">
            <Chart
              width={'500px'}
              height={'300px'}
              chartType="GeoChart"
              data={[
                ['latitude', 'longitude'],
                ['27.7172', '85.3240'],
              ]}
              options={{
                region: 'NP', // Africa
                colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
                // backgroundColor: '#81d4fa',
                datalessRegionColor: '#f8bbd0',
                // defaultColor: '#f5f5f5',
              }}
              // Note: you will need to get a mapsApiKey for your project.
              // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
              mapsApiKey="YOUR_KEY_HERE"
              rootProps={{ 'data-testid': '4' }}
            />
            </div>
        </div>
    </div>
    
  );
}
