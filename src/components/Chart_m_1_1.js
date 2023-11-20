import { LineChart } from '@mui/x-charts';

function Chart_m_1_1(props) {
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
            { yAxisKey: 'y1', data: props.data.y1, label: 'atmospheric temperature' },
            { yAxisKey: 'y2', data: props.data.y2, label: 'surface temperature' },
          ]}
          leftAxis="y1"
          rightAxis="y2"
          height={400}
        />
        )
      }
    }

export default Chart_m_1_1;