const express = require("express");
const router = express.Router();
const { areas } = require("../data/mockData");

const findAreaByName = (areaName) => {
  return areas.find((a) => a.areaName.toLowerCase() === areaName.toLowerCase());
};

const findClusterById = (area, clusterId) => {
  return area.clusters.find((c) => c.id === clusterId);
};

// Add new cluster to area
router.post("/:areaName/clusters", (req, res) => {
  const areaName = req.params.areaName;
  const area = findAreaByName(areaName);
  if (!area) return res.status(404).json({ message: "Area not found" });

  const { name, description, whatsappLinks, activeLinkIndex, buildings } =
    req.body;
  const newCluster = {
    id: `clusterId${area.clusters.length + 1}`,
    name,
    description,
    whatsappLinks,
    activeLinkIndex,
    buildings,
  };
  area.clusters.push(newCluster);
  res.status(201).json(newCluster);
});
// Add new area
router.post("/area", (req, res) => {
  const { areaName, clusterName, whatsappLinks, activeLinkIndex, buildings } =
    req.body;
  const newArea = {
    id: `areaId${areas.length + 1}`,
    areaName: areaName,
    clusters: [
      {
        id: `clusterId${areas.length + 1}`,
        name: clusterName,
        whatsappLinks: whatsappLinks,
        activeLinkIndex,
        buildings,
      },
    ],
  };
  areas.push(newArea);
  res.status(201).json(newArea);
  console.log(newArea);
});

// Get clusters by area name
router.get("/:areaName/clusters", (req, res) => {
  const areaName = req.params.areaName;
  const area = findAreaByName(areaName);
  if (!area) return res.status(404).json({ message: "Area not found" });

  res.json(area.clusters);
});
router.put("/:areaName/clusters/:clusterId", (req, res) => {
  const areaName = req.params.areaName.toLowerCase();
  const clusterId = req.params.clusterId;
  const area = areas.find((a) => a.areaName.toLowerCase() === areaName);
  if (!area) return res.status(404).json({ message: "Area not found" });

  const cluster = area.clusters.find((c) => c.id === clusterId);
  if (!cluster) return res.status(404).json({ message: "Cluster not found" });

  const { name, description, buildings, whatsappLink } = req.body;

  // Update cluster details
  if (name) cluster.name = name;
  if (description) cluster.description = description;
  if (buildings) cluster.buildings = buildings;
  if (whatsappLink) cluster.whatsappLinks.unshift(whatsappLink);

  res.json({ message: "Cluster updated successfully", cluster });
  console.log(cluster);
});

module.exports = router;
