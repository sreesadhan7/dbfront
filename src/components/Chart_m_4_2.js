// Its quite similar to Chart_m_2_1
import { LineChart } from '@mui/x-charts';

function Chart_m_4_2(props) {
  console.log("chart data: ", props)
  if(props.data == null || JSON.stringify(props.data) === "{}"){
    return(<div align="center">
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
      height={500}
      margin={{ top: 100, bottom: 100, left: 100, right:100 }}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'top', horizontal: 'middle' },
          padding: 0,
        },
      }}
    />
    )
  }
  }

  export default Chart_m_4_2;


//   {
//     "data": {
//         "Kuwait": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 37.2,
//                 39.9,
//                 48.8,
//                 55.9,
//                 63,
//                 68.5,
//                 73.1,
//                 75.1,
//                 70.1,
//                 68.9,
//                 77.1,
//                 78.8,
//                 75.3,
//                 72.5
//             ]
//         },
//         "Norway": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 56.6,
//                 58.8,
//                 60.9,
//                 64.8,
//                 68.1,
//                 71.3,
//                 74.9,
//                 76.5,
//                 76.6,
//                 78.5,
//                 80.6,
//                 81.8,
//                 81.6,
//                 82.2
//             ]
//         },
//         "Qatar": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 50.5,
//                 57.5,
//                 62.2,
//                 74.4,
//                 76.8,
//                 90.1,
//                 97.9,
//                 107.4,
//                 115.3,
//                 134.8,
//                 155.5,
//                 153.9,
//                 154.2,
//                 155.1
//             ]
//         },
//         "Switzerland": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 44.4,
//                 44.9,
//                 45.4,
//                 47.3,
//                 49.3,
//                 51.9,
//                 54.5,
//                 56.1,
//                 55.2,
//                 57.2,
//                 58.7,
//                 58.7,
//                 59,
//                 59.5
//             ]
//         },
//         "United Arab Emirates": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 51.3,
//                 54.1,
//                 59.8,
//                 64.9,
//                 65.6,
//                 67.8,
//                 65.4,
//                 63.9,
//                 58.9,
//                 60.1,
//                 65.3,
//                 68.3,
//                 70.8,
//                 72.6
//             ]
//         },
//         "rest_of_countries": {
//             "x": [
//                 2001,
//                 2002,
//                 2003,
//                 2004,
//                 2005,
//                 2006,
//                 2007,
//                 2008,
//                 2009,
//                 2010,
//                 2011,
//                 2012,
//                 2013,
//                 2014
//             ],
//             "y": [
//                 11.1,
//                 11.4,
//                 11.7,
//                 12.2,
//                 12.7,
//                 13.3,
//                 13.9,
//                 14.3,
//                 14.1,
//                 14.5,
//                 14.7,
//                 15,
//                 15.1,
//                 15.2
//             ]
//         }
//     },
//     "isError": false,
//     "message": "Success",
//     "statusCode": 200
// }