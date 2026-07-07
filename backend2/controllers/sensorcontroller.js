const sensor = require("../services/simulator");

const getallnodes=async(req,res)=>{
    try{
    res.status(200).json(sensor);
}catch(error){
    console.log("FULL ERROR:", error);

    res.status(500).json({
        message: error.message,
        error: error
    });
}
};



const getnodes=async(req,res)=>{
    try{   
        const node= sensor.find(
            sensor=>sensor.node_id=== req.params.nodeid
        );
    if(!node){
        return res.status(404).json({
            message:"node not found"
        });
    }
    res.status(200).json(node)
    
}catch(error){
    res.status(500).json({
        message:error.message
    });
}};

const dashboard = async (req, res) => {
    try {

        const totalNodes = sensor.length;

        let healthyNodes = 0;
        let leakNodes = 0;

        sensor.forEach((node) => {

            if (node.leak_status === "Healthy") {
                healthyNodes++;
            }

            if (node.leak_status === "Leak") {
                leakNodes++;
            }

        });

        res.status(200).json({
            totalNodes,
            healthyNodes,
            leakNodes,
            
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getallnodes,
    getnodes,
    dashboard
};

