const sensor=  require("../models/sensor")
const {avgtemp,avgleak,maxtemp,
    maxleak}=require("../utils")

const getallnodes=async(req,res)=>{
    try{
   const sensors= await sensor.find();
    res.status(200).json(sensors);
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
        const node=await sensor.findOne({
            node_id:req.params.nodeid
        });
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


const getstats=async(req,res)=>{
    try{
        const avgtempresult=await avgtemp();
        const avgleakresult=await avgleak();
        return res.status(200).json({
            overallavgtemp:avgtempresult[0].overallavgtemp,
            overallavgleak:avgleakresult[0].overallavgleak,
        });
        }catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
}

const dashboard=async(req,res)=>{
    const nodecount=await sensor.countDocuments();
    const avgtempresult=await avgtemp();
    const avgleakresult=await avgleak();
    const highesttempnode=await maxtemp();
    const maxleaknode=await maxleak();
    res.status(200).json({
        nodecount:nodecount,
        overallavgtemperature:avgtempresult[0].overallavgtemp,
        overallavgleak:avgleakresult[0].overallavgleak,
        highesttemperature:highesttempnode[0].max_temp,
        maxleak:maxleaknode[0].maxleak
    });
    
}

module.exports = {
    getallnodes,
    getnodes,
    getstats,
    dashboard
};
