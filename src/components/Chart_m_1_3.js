import { LineChart } from '@mui/x-charts';
function Chart_m_1_3(props) {
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
      { data: props.data.y1, label: 'Avergae Temperature' },
      { data: props.data.y2, label: 'STD Temperature' },
      { data: props.data.y3, label: 'Min Temperature' },
      { data: props.data.y4, label: 'Max Temperature' }
    ]}

    xAxis={[{ data: props.data.x , scaleType: 'band'}]}
    sx={{
      '.MuiLineElement-root, .MuiMarkElement-root': {
        strokeWidth: 2,
      },
      '.MuiLineElement-series-pvId': {
        strokeDasharray: '4 4',
      },
      '.MuiLineElement-series-uvId': {
        strokeDasharray: '3 4 5 2',
      },
      '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
        fill: '#fff',
        strokeWidth: 1,
        markerwidth : 20

      },
      '& .MuiMarkElement-highlighted': {
        stroke: 'None',
      },
    }}
  />
  )
}
}

export default Chart_m_1_3;