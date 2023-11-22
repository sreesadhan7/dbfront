import { LineChart } from '@mui/x-charts';
//its a dual axis chart
function Chart_m_3_2(props) {
        console.log("chart data: ", props)
      if(props.data == null || JSON.stringify(props.data) === "{}"){
        return(<div align="center">
          <p>Change parameters on the left to obtain graph</p>
        </div>)
      }
      else{
        return(
        <LineChart
          xAxis={[{ data: props.data.x , scaleType: 'band'}]}
          yAxis={[
            { id: 'y1', scaleType: 'linear' },
            { id: 'y2', scaleType: 'linear' },
          ]}
          series={[
            { yAxisKey: 'y1', data: props.data.y1, label: 'Electricity consumption' },
            { yAxisKey: 'y2', data: props.data.y2, label: 'Toatl co2 emissions' },
          ]}
          leftAxis="y1"
          rightAxis="y2"
          height={400}
        />
        )
      }
    }

export default Chart_m_3_2;

// {
//   "data": {
//       "x": [
//           2001,
//           2002,
//           2003,
//           2004,
//           2005,
//           2006,
//           2007,
//           2008,
//           2009,
//           2010,
//           2011,
//           2012,
//           2013,
//           2014
//       ],
//       "y1": [
//           392,
//           421,
//           442,
//           471,
//           497,
//           548,
//           580,
//           629,
//           680,
//           728,
//           842,
//           892,
//           946,
//           1042
//       ],
//       "y2": [
//           992,
//           1022,
//           1059,
//           1125,
//           1185,
//           1259,
//           1357,
//           1462,
//           1611,
//           1676,
//           1778,
//           1963,
//           2037,
//           2187
//       ]
//   },
//   "isError": false,
//   "message": "Success",
//   "statusCode": 200
// }