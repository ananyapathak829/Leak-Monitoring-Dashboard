import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SensorTable({Sensor}) {
  const navigate=useNavigate();
    console.log(Sensor);
  return (
    <div className="table">
      <h2>Sensor Data</h2>
      <table>
        <thead>
          <tr  >
            <th>Node_id</th>
            <th>Recd_Time</th>
            <th>Leak</th>
            <th>Leak Status</th>
            
            </tr>
        </thead>

         <tbody>
        {Sensor.map((sensor) => (
          <tr key={sensor._id}
          onClick={()=>navigate(`/node/${sensor.node_id}`)}>
            <td><Link className="nodelink" to={`/node/${sensor.node_id}`}>
    {sensor.node_id}
  </Link></td>
            <td>{new Date(sensor.Recd_Time).toLocaleTimeString()}</td>
            <td>{sensor.leak}</td>
            <td>{sensor.leak_status}</td> 
          </tr>
))}
        </tbody>
        
            </table>
         </div>);
         }


export default SensorTable;