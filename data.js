var APP_DATA = {
  "scenes": [
    {
      "id": "0-pooja-unit",
      "name": "POOJA UNIT",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4362168125200565,
          "pitch": 0.08696262567697843,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.141409627118879,
          "pitch": 0.030409294139705167,
          "rotation": 0,
          "target": "0-pooja-unit"
        },
        {
          "yaw": 1.1754218625492072,
          "pitch": 0.05108806431613111,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4910103709330613,
          "pitch": 0.1597936738282737,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.05007403197726035,
          "pitch": 0.13464731801762753,
          "rotation": 0,
          "target": "3-wash-unit"
        },
        {
          "yaw": 1.4833298861376472,
          "pitch": 0.0924407167333996,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -0.07815382012775984,
          "pitch": -0.244746263430347,
          "rotation": 0.7853981633974483,
          "target": "9-upper-living"
        },
        {
          "yaw": 0.5621488071252756,
          "pitch": 0.12187582060354174,
          "rotation": 1.5707963267948966,
          "target": "7-gf-bedroom-2"
        },
        {
          "yaw": -0.6022293686368343,
          "pitch": 0.1280641113751102,
          "rotation": 4.71238898038469,
          "target": "6-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-unit",
      "name": "WASH UNIT",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.573277237184918,
          "pitch": 0.037884424970886954,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.002678885820525,
          "pitch": 0.0938595838548899,
          "rotation": 7.853981633974483,
          "target": "1-living-room"
        },
        {
          "yaw": 0.9833102162605201,
          "pitch": 0.03994761669783742,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.0504841221419525,
          "pitch": -0.15753986607258952,
          "rotation": 0.7853981633974483,
          "target": "9-upper-living"
        },
        {
          "yaw": 2.65216444660142,
          "pitch": 0.1670166422311805,
          "rotation": 0,
          "target": "6-gf-bedroom-1"
        },
        {
          "yaw": 0.5383957948318532,
          "pitch": 0.14781688936404436,
          "rotation": 5.497787143782138,
          "target": "7-gf-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7165727043930303,
          "pitch": 0.07923803952979291,
          "rotation": 0,
          "target": "5-workarea"
        },
        {
          "yaw": 1.6992555638177853,
          "pitch": 0.06072913499968102,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.087638095633105,
          "pitch": 0.04547186952129678,
          "rotation": 0,
          "target": "6-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-workarea",
      "name": "WORKAREA",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7912859680481503,
          "pitch": 0.10363127178646181,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9400293470916061,
          "pitch": 0.09720705329474555,
          "title": "EXIT DOOR",
          "text": "PEEK"
        }
      ]
    },
    {
      "id": "6-gf-bedroom-1",
      "name": "GF BEDROOM 1",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6683167222172273,
          "pitch": 0.05111935808211854,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-2",
      "name": "GF BEDROOM 2",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6797002999559485,
          "pitch": 0.04908840173996509,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bedroom-1-",
      "name": "FF BEDROOM 1 ",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8276103106763202,
          "pitch": 0.10310691500602331,
          "rotation": 0,
          "target": "9-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upper-living",
      "name": "UPPER LIVING",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23718721239282914,
          "pitch": 0.13262160041742632,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -0.5926105503209111,
          "pitch": 0.23913831364337312,
          "rotation": 0,
          "target": "8-ff-bedroom-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6659994726746579,
          "pitch": 0.22308791439250797,
          "title": "EXIT DOOR",
          "text": "TO OPEN TERRACE"
        }
      ]
    }
  ],
  "name": "ABHIRAJ RESIDENCE ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
