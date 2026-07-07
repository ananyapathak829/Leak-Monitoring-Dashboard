const nodes=require("../data/node");

function updatesensor(){
    nodes.forEach((node)=>{
    let currentleak=parseFloat(node.leak);
    let change=(Math.random()-0.5)*0.05;
    currentleak+=change;
    currentleak=Math.max(0.1,currentleak);
    node.leak=currentleak.toFixed(2);

    node.Recd_Time=new Date().toISOString();
    if (currentleak < 0.8) {
    node.leak_status = "Leak";
} else {
    node.leak_status = "Healthy";
}
    


});

}
updatesensor();
setInterval(updatesensor,5000);
module.exports=nodes;