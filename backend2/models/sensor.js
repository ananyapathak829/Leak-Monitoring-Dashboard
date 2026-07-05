const mongoose= require("mongoose");
const schema= new mongoose.Schema({
    node_id: String,

    Recd_time: Date,

    IP_address:[mongoose.Schema.Types.Mixed],

    leak1 : Number,
    leak2 : Number,
    leak3 : Number,
    leak4 : Number,

    temperature1: Number,
    temperature2: Number,
    temperature3: Number,
    temperature4: Number,
    temperature5: Number,
    temperature6: Number,
    temperature7: Number,
});
const sensor=mongoose.model("sensor",schema,"sensordata");
module.exports = sensor;