var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 450,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3698233942716556,
          "pitch": 0.07602520148842018,
          "rotation": 0,
          "target": "1-schlafen"
        },
        {
          "yaw": 0.11027022915757279,
          "pitch": 0.4257263258202393,
          "rotation": 0,
          "target": "2-wohnen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-schlafen",
      "name": "Schlafen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5312952572487397,
          "pitch": 0.49487814772697725,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wohnen",
      "name": "Wohnen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 450,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.649428508271164,
          "pitch": 0.4551680768116686,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
