const nodes=require("../data/node");
function updatesensor(){
    nodes.forEach(node)=>{
    let currentleak=parseFloat(node.leak);
    let change=Math.random()*0.05;
    currentleak+=change;
    currentleak=Math.max(0.1,currentleak);

}
};