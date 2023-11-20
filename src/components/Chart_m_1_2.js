import { LineChart } from '@mui/x-charts';
function Chart_m_1_2(props) {
  console.log("chart data: ", props)
if(props.data==null || JSON.stringify(props.data) === "{}"){
  return(<div align="center">
    <p>Change parameters on the left to obtain graph</p>
  </div>)
}
else{
  return(
  <LineChart
    // width={500}
    height={300}

    series={[
      { data: props.data.y1, label: 'Number of countries experiencing temperature shifts' }
    ]}

    xAxis={[{ data: props.data.x , scaleType: 'band'}]}
  />
  )
}
}

  export default Chart_m_1_2;