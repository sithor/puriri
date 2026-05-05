var APP_DATA = {
  "scenes": [
    {
      "id": "0-downstairs",
      "name": "downstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 3.0981364288866455,
        "pitch": 0.03749488292846159,
        "fov": 1.5483180407588777
      },
      "linkHotspots": [
        {
          "yaw": -3.070636220937132,
          "pitch": -0.35948740135771473,
          "rotation": 0,
          "target": "1-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-upstairs",
      "name": "Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.018577340733056502,
        "pitch": 0.6502935771187346,
        "fov": 1.5483180407588777
      },
      "linkHotspots": [
        {
          "yaw": 0.19732307303264918,
          "pitch": 0.6275174027058714,
          "rotation": 0,
          "target": "0-downstairs"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Puriri stairs",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
