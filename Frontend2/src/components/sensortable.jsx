function SensorTable({Sensor}) {
    console.log(Sensor);
  return (
    <div className="table">
      <h2>Sensor Data</h2>
      <table>
        <thead>
          <tr >
            <th>Node_id</th>
            <th>Recd_Time</th>
            <th>temperature1</th>
            <th>temperature2</th>
            <th>temperature3</th>
            <th>temperature4</th>
            <th>temperature5</th>
            <th>temperature6</th>
            <th>temperature7</th>
            <th>leak1</th>
            <th>leak2</th>
            <th>leak3</th>
            <th>leak4</th>
            </tr>
        </thead>

         <tbody>
        {Sensor.map((sensor) => (
          <tr key={sensor._id}>
            <td>{sensor.node_id}</td>
            <td>{sensor.Recd_time}</td>
            <td>{sensor.temperature1}</td>
            <td>{sensor.temperature2}</td>
            <td>{sensor.temperature3}</td>
            <td>{sensor.temperature4}</td>
            <td>{sensor.temperature5}</td>
            <td>{sensor.temperature6}</td>
            <td>{sensor.temperature7}</td>
            <td>{sensor.leak1}</td>
            <td>{sensor.leak2}</td>
            <td>{sensor.leak3}</td>
            <td>{sensor.leak4}</td> 
          </tr>
))}
        </tbody>
        
            </table>
         </div>);
         }


export default SensorTable;