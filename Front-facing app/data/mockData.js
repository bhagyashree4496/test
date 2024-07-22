const areas = [
  {
    id: "areaId1",
    areaName: "Nallagunda",
    clusters: [
      {
        id: "clusterId1",
        name: "Aparna-Zenith",
        whatsappLinks: [
          "https://whatsapp-link1.com",
          "https://whatsapp-link2.com",
        ],
        activeLinkIndex: 0,
        buildings: [
          { id: "buildingId1", name: "A", numberOfFlats: 10 },
          { id: "buildingId2", name: "B", numberOfFlats: 8 },
        ],
      },
      {
        id: "clusterId2",
        name: "Ramkey",
        whatsappLinks: [
          "https://whatsapp-link1.com",
          "https://whatsapp-link2.com",
        ],
        activeLinkIndex: 0,
        buildings: [{ id: "buildingId3", name: "C", numberOfFlats: 12 }],
      },
    ],
  },
  {
    id: "areaId2",
    areaName: "Balnagar",
    clusters: [
      {
        id: "clusterId3",
        name: "A2A life spaces",

        whatsappLinks: [
          "https://whatsapp-link1.com",
          "https://whatsapp-link2.com",
        ],
        activeLinkIndex: 0,
        buildings: [
          {
            id: "buildingId5",
            name: "ganga",
            numberOfFlats: 3,
          },
          {
            id: "buildingId6",
            name: "yamuna",
            numberOfFlats: 3,
          },
        ],
      },
      {
        id: "clusterId4",
        name: "startlite pavillion",

        whatsappLinks: [
          "https://whatsapp-link1.com",
          "https://whatsapp-link2.com",
        ],
        activeLinkIndex: 0,
        buildings: [
          {
            id: "buildingId7",
            name: "starlite1",
            numberOfFlats: 3,
          },
        ],
      },
    ],
  },
];

const users = [
  {
    id: "userId1",
    username: "user1",
    phone: 1234567890,
    areaName: "Nallagunda",
    buildingName: "A",
  },
  {
    id: "userId2",
    username: "user2",
    phone: 9876543210,
    areaName: "Nallagunda",
    buildingName: "B",
  },
];

module.exports = { areas, users };
