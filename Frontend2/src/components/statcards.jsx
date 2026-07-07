import Cards from "./cards.jsx";
function Statcards({ stats }) {
    return(
        <>
        <div className="statcards">
            <Cards
    title="Total Nodes"
    value={stats.totalNodes}
/>



<Cards
    title="Healthy Nodes"
    value={stats.healthyNodes}
    color="#3"
/>



<Cards
    title="Leak Nodes"
    value={stats.leakNodes}
/>  


        </div>
        </>
    );
}
export default Statcards;