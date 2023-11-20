import { LineChart } from '@mui/x-charts';

function Chart_m_5(props) {
    console.log("chart data: ", props)
  if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
    return(<div align="center">
      <p>Change parameters on the left to obtain graph</p>
    </div>)
  }
  else{
    return(
    <LineChart
      className="custom-line-chart"
      xAxis={[{ data: props.x , scaleType: 'band'}]}
      yAxis={[
        { id: 'y1', scaleType: 'linear', label: 'Internet User Percentage (IUP)' },
        { id: 'y2', scaleType: 'linear', label: 'Growth Rate' },
      ]}
      series={[
        { yAxisKey: 'y1', data: props.y1, label: 'Intenet User Percentage (IUP)' },
        { yAxisKey: 'y2', data: props.y2, label: 'Growth Rate' },
      ]}
      leftAxis="y1"
      rightAxis="y2"
      height={400}
    />
    )
  }
}

export default Chart_m_5;