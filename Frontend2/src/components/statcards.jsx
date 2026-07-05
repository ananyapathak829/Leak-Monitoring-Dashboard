import Cards from "./cards.jsx";
function Statcards({ stats }) {
    return(
        <>
        <div className="statcards">
            <Cards
    title="Total Nodes"
    value={stats.nodecount}
/>



<Cards
    title="Average Temperature"
    value={stats.overallavgtemperature}
    color="#3"
/>



<Cards
    title="Average Leak"
    value={stats.overallavgleak}
/>  

<Cards title="Highest Temperature" 
           value={stats.highesttemperature} 
/>



<Cards title="Maximum Leak"
           value={stats.maxleak}
        />
        </div>
        </>
    );
}
export default Statcards;