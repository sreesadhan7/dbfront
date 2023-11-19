function Chart_m_1_3(props) {
    console.log("chart data: ", props)
  if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0){
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
        { data: props.y1, label: 'Avergae Temperature' },
        { data: props.y2, label: 'STD Temperature' },
        { data: props.y3, label: 'Min Temperature' },
        { data: props.y4, label: 'Max Temperature' }
      ]}
  
      xAxis={[{ data: props.x , scaleType: 'band'}]}
    />
    )
  }
  }

  export default Chart_m_1_3;