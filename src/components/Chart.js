import { LineChart } from '@mui/x-charts';

function Chart(props) {
        console.log("chart data: ", props)
      if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
        return(<div>
          <p>Change parameters on the left to obtain graph</p>
        </div>)
      }
      else{
        return(
        <LineChart
          xAxis={[{ data: props.x }]}
          yAxis={[
            { id: 'y1', scaleType: 'linear' },
            { id: 'y2', scaleType: 'linear' },
          ]}
          series={[
            { yAxisKey: 'y1', data: props.y1, label: 'atmospheric temperature' },
            { yAxisKey: 'y2', data: props.y2, label: 'surface temperature' },
          ]}
          leftAxis="y1"
          rightAxis="y2"
          height={400}
        />
        )
      }
    }
    
    
    
export default Chart;