import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import Leakgraph from "../components/leakgraphs";

function Nodedetails()
{
    const navigate=useNavigate();
    const {node_id}=useParams();
    const[sensor,setsensor]=useState(null)
    const[history,sethistory]=useState([]);

    useEffect(() => {
    
        const fetchdata = async () => {
        console.log("node_id =", node_id);
        const res = await fetch(`http://localhost:5000/api/sensors/${node_id}`);
        console.log(res.status);
        const data = await res.json();
        setsensor(data);
        sethistory((history)=>{
            console.log(history);
         return   [
                ...history,{
                    time:data.Recd_Time,
                    leak:Number(data.leak)

                }]
            
         
            
           }   )
        }
        fetchdata();
        const interval = setInterval(fetchdata, 5000);

    return () => clearInterval(interval);

    },[node_id]);


        if (!sensor) {
       return <h2>Loading...</h2>;
}
    return(
        <div className="page">

        
         <div className="details">
            <button className="button" onClick={()=>navigate(`/`)}><CgArrowLongLeft/>
        <span> Back to Dashboard</span>
        </button>
            
    <h1>Node Details</h1>
    <p>Node_id:{sensor.node_id}</p>
    <p>Location:{sensor.Location}</p>
    <p>Description:{sensor.Description}</p>
    <p>Recd_Time:{sensor.Recd_Time}</p>
    <p>Leak_Status:{sensor.leak_status}</p>
    <p >Leak-value:{sensor.leak}</p>
    </div >
     <Leakgraph history={history}/>
    </div>);
}
export default Nodedetails;