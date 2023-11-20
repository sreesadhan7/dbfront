import { LineChart } from '@mui/x-charts';
function Chart_m_2_4(props) {
  console.log("chart data: ", props)
if(props.x.length <=0 || props.y1.length <=0 ){
  return(<div>
    <p>Change parameters on the left to obtain graph</p>
  </div>)
}
else{
  return(
  <LineChart
    // width={500}
    height={300}

    series={[
      { data: props.y1, label: 'Non-Eco Friendly countries' }
    ]}

    xAxis={[{ data: props.x , scaleType: 'band'}]}
  />
  )
}
}

  export default Chart_m_2_4;