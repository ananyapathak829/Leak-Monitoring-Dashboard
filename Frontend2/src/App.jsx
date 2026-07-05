import Sidebar from "./components/sidebar.jsx";
import Statcards from "./components/statcards.jsx";
import Navbar from "./components/navbar.jsx";
import SensorTable from "./components/sensortable.jsx";
import{useEffect,useState} from "react";
import './App.css';


function App() {
  const [Sensor, setSensorData] = useState([]);
  const[stats,setstats]=useState({});

  useEffect(() => {
    
    const fetchdata = async () => {
      const res = await fetch('http://localhost:5000/api/sensors');
      const data = await res.json();
      setSensorData(data);
      console.log(data);
    };
    
    const fetchstats = async () => {
      const res = await fetch('http://localhost:5000/api/sensors/dashboard');
      const data = await res.json();
      setstats(data);
    };

    fetchdata();
    fetchstats();
  }, []);

  
  return (
    <div className="dashboard">

      <aside className="sidebar">
      <Sidebar />
      </aside>

      <div className="main-content">
        <Navbar/>
        <Statcards stats={stats} />
        <SensorTable Sensor={Sensor} />

      </div>

    </div>
  );
}
export default App;