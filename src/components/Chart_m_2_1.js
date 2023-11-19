import { LineChart } from '@mui/x-charts';

function Chart_m_2_1(props) {
  console.log("chart data: ", props)
  if(props.data == null){
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

  export default Chart_m_2_1;