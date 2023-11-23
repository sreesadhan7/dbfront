// Its quite similar to Chart_m_2_1
import { LineChart } from '@mui/x-charts';

function Chart_m_4_1(props) {
  console.log("chart data: ", props)
  if(props.data == null || JSON.stringify(props.data) === "{}"){
    return(<div align="center">
      <p>Change parameters on the left to obtain graph</p>
    </div>)
  }
  else{
    const countries = [];
    let allSeries = [];
    console.log(props.data.rank);
    for (const [key, value] of Object.entries(props.data.rank)) {
        countries.push(key);
      }
    console.log(props.data.rank[countries[0]]);
    countries.forEach(c =>{
        let seriesData = {
            yAxisKey: 'y1',
            data: props.data.rank[c].y,
            label: c,
            valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        }
        allSeries.push(seriesData);
    });
    console.log("tobeGraphed", allSeries);
    return(
    <LineChart
      xAxis={[{ data: props.data.x , scaleType: 'band'}]}
      yAxis={[
        { id: 'y1', scaleType: 'linear' }
      ]}
      series={allSeries}
      leftAxis="y1"
      height={500}
      margin={{ top: 100, bottom: 100, left: 100, right:100 }}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'top', horizontal: 'middle' },
          padding: 0,
        },
      }}
      sx={{
        '.MuiLineElement-root, .MuiMarkElement-root': {
          strokeWidth: 13,
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '4 4',
        },
        '.MuiLineElement-series-uvId': {
          strokeDasharray: '3 4 5 2',
        },
        '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
          fill: '#fff',
          strokeWidth: 1
          // markerwidth : 20
  
        },
        '& .MuiMarkElement-highlighted': {
          stroke: 'None',
        },
      }}
    />
    )
  }
  }

  export default Chart_m_4_1;

//   {
//     "data": {
//         "x": [
//             2001,
//             2002,
//             2003,
//             2004,
//             2005,
//             2006,
//             2007,
//             2008,
//             2009,
//             2010,
//             2011,
//             2012,
//             2013,
//             2014,
//             2008,
//             2009,
//             2010,
//             2011,
//             2012,
//             2013,
//             2014,
//             2001,
//             2002,
//             2003,
//             2004,
//             2005,
//             2006,
//             2007,
//             2001,
//             2002,
//             2003,
//             2004,
//             2005,
//             2006,
//             2007,
//             2008,
//             2009,
//             2010,
//             2011,
//             2012,
//             2013,
//             2014
//         ],
//         "y1": [
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "China",
//             "India",
//             "India",
//             "India",
//             "India",
//             "India",
//             "India",
//             "India",
//             "Japan",
//             "Japan",
//             "Japan",
//             "Japan",
//             "Japan",
//             "Japan",
//             "Japan",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States",
//             "United States"
//         ],
//         "y2": [
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             2,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             3,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1,
//             1
//         ]
//     },
//     "isError": false,
//     "message": "Success",
//     "statusCode": 200
// }