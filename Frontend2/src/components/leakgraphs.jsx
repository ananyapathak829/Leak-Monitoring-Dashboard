import { LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts";
function Leakgraph({history}){
    console.log(history);
    
return(
        <LineChart width={1500}
        height={800}
        data={history}>

        <CartesianGrid strokeDasharray="5 5"/>

        <XAxis dataKey="time"/>
        <YAxis/>
        <Line dataKey="leak"/>

        <Tooltip/>

    </LineChart>
);
}
export default Leakgraph;