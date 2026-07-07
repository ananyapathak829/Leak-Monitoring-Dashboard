import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Graphs from "./pages/graphs";
import Nodedetails from "./pages/nodedetails";

function App(){
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/node/:node_id" element={<Nodedetails/>}/>
  </Routes>
  </BrowserRouter>);
  }
export default App;