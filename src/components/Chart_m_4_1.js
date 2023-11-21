// Its quite similar to Chart_m_2_1
import { LineChart } from '@mui/x-charts';

function Chart_m_4_1(props) {
  console.log("chart data: ", props)
  if(props.data == null || JSON.stringify(props.data) === "{}"){
    return(<div>
      <p>Change parameters on the left to obtain graph</p>
    </div>)
  }
  else{
    const countries = [];
    let allSeries = [];
    console.log(props.data);
    for (const [key, value] of Object.entries(props.data)) {
        countries.push(key);
      }
    console.log(props.data[countries[0]]);
    countries.forEach(c =>{
        let seriesData = {
            yAxisKey: 'y1',
            data: props.data[c].y,
            label: c
        }
        allSeries.push(seriesData);
    });
    console.log("tobeGraphed", allSeries);
    return(
    <LineChart
      xAxis={[{ data: props.data[countries.at(0)].x , scaleType: 'band'}]}
      yAxis={[
        { id: 'y1', scaleType: 'linear' }
      ]}
      series={allSeries}
      leftAxis="y1"
      height={400}
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