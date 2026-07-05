let nodes = [
  {
    _id: "1",
    node_id: "F050",
    Location: "I-Floor",
    Description: "LD-4011-4014",
    Recd_time: new Date().toISOString(),
    leak_status: "Healthy",
    leak: "1.28",
  },
  {
    _id: "2",
    node_id: "F051",
    Location: "I-Floor",
    Description: "LD-4021-4024",
    Recd_time: new Date().toISOString(),
    leak_status: "Healthy",
    leak: "1.28",
  },
  {
    _id: "3",
    node_id: "F052",
    Location: "I-Floor",
    Description: "LD-4031-4034",
    Recd_time: new Date().toISOString(),
    leak_status: "Healthy",
    leak: "1.26",
  },
  {
    _id: "4",
    node_id: "F053",
    Location: "I-Floor",
    Description: "LD-4041-4044",
    Recd_time: new Date().toISOString(),
    leak_status: "Healthy",
    leak: "1.27",
  },
  {
    _id: "5",
    node_id: "F060",
    Location: "III-Floor",
    Description: "LD-4111-4114",
    Recd_time: new Date().toISOString(),
    leak_status: "Leak",
    leak: "0.31",
  }
];

module.exports = nodes;