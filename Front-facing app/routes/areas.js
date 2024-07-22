const express = require('express');
const router = express.Router();
const { areas } = require('../data/mockData');


const findAreaByName = (areaName) => {
  return areas.find(a => a.areaName.toLowerCase() === areaName.toLowerCase());
};

// Get all areas
router.get('/', (req, res) => {
  res.json(areas.map(area => ({ areaName: area.areaName })));
});

// Get buildings by area name
router.get('/:areaName/buildings', (req, res) => {
  const areaName = req.params.areaName;
  const area = findAreaByName(areaName);
  if (!area) return res.status(404).json({ message: 'Area not found' });

  const buildings = area.clusters.reduce((acc, cluster) => {
    acc.push(...cluster.buildings.map(b => ({ id: b.id, name: b.name })));
    return acc;
  }, []);

  res.json(buildings);
});

// Get WhatsApp group link by area and building name
router.get('/:areaName/buildings/:buildingName/whatsapp-link', (req, res) => {
  const areaName = req.params.areaName;
  const buildingName = req.params.buildingName;

  const area = findAreaByName(areaName);
  if (!area) return res.status(404).json({ message: 'Area not found' });

  let foundCluster = null;
  let foundBuilding = null;

  area.clusters.forEach(cluster => {
    const building = cluster.buildings.find(b => b.name.toLowerCase() === buildingName.toLowerCase());
    if (building) {
      foundCluster = cluster;
      foundBuilding = building;
    }
  });

  if (!foundCluster || !foundBuilding) return res.status(404).json({ message: 'Building not found in the specified area' });

  const activeLink = foundCluster.whatsappLinks[foundCluster.activeLinkIndex];
  res.json({ whatsappLink: activeLink });
});

module.exports = router;
