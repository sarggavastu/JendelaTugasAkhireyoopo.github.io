(function(){
    var script = {
 "start": "this.playAudioList([this.audio_12295070_00D0_956B_415D_7362AA237420]); this.init()",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "downloadEnabled": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "verticalAlign": "top",
 "layout": "absolute",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_164DC423_0057_9CED_4133_BCB4AFE28D64_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_164DC423_0057_9CED_4133_BCB4AFE28D64_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_164DC423_0057_9CED_4133_BCB4AFE28D64_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_164DC423_0057_9CED_4133_BCB4AFE28D64_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_12305875_00F0_9555_4162_456C09268740"
},
{
 "rotationY": 0,
 "yaw": 161.79,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -10.71,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.36
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_16460349_00F1_94BD_415C_1220B1C4B740_0_0.jpg",
   "width": 1908,
   "class": "ImageResourceLevel",
   "height": 2698
  },
  {
   "url": "media/popup_16460349_00F1_94BD_415C_1220B1C4B740_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_16460349_00F1_94BD_415C_1220B1C4B740_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_16460349_00F1_94BD_415C_1220B1C4B740_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120968A9_00F0_95FC_414F_D0AC27149C03"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_12950509_00B7_9CBD_413F_308AB4596406_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_12950509_00B7_9CBD_413F_308AB4596406_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_12950509_00B7_9CBD_413F_308AB4596406_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_12950509_00B7_9CBD_413F_308AB4596406_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120D9883_00F0_95AC_415D_5D5C584DAB04"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 92.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_1397887E_00D7_B555_4155_DC89B334AC35",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 92.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13A80836_00D7_B4D4_4166_E72DE6A5A86F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_141D4174_00B0_976B_4119_1F5EB6213C00_0_0.jpg",
   "width": 1788,
   "class": "ImageResourceLevel",
   "height": 2528
  },
  {
   "url": "media/popup_141D4174_00B0_976B_4119_1F5EB6213C00_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_141D4174_00B0_976B_4119_1F5EB6213C00_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_141D4174_00B0_976B_4119_1F5EB6213C00_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120C1882_00F0_95AC_414C_D7E093A47F8A"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_0.jpg",
   "width": 2981,
   "class": "ImageResourceLevel",
   "height": 4214
  },
  {
   "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_1.jpg",
   "width": 2897,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_2.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_3.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_4.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_12302873_00F0_956D_4146_2956A22046B1"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0E85662F_0050_9CF5_414B_BD62718E1019",
  "this.overlay_0E571ED6_0051_8D57_4154_6EF26EF0AD2C",
  "this.overlay_1357F592_0050_BFAF_4142_E1AE83293C86",
  "this.popup_11E5AB1D_0050_94D4_415A_D7646DE07256",
  "this.overlay_120521FD_0053_9755_4155_32B066B7512C",
  "this.popup_16635732_0050_FCEF_4146_030048D7BE58",
  "this.overlay_1663997A_0051_B75C_415E_7BA3035D2803",
  "this.popup_1553FA94_0051_75D4_4152_F222D6AA982A",
  "this.overlay_149B57E8_0057_9B7C_415C_108F4CB47E0C",
  "this.popup_164DC423_0057_9CED_4133_BCB4AFE28D64",
  "this.overlay_1271B1AB_0050_97FD_4135_980BE872FDA2",
  "this.popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426",
  "this.overlay_12638521_0051_BCED_4144_B0BBA2E19C4A",
  "this.popup_14BB762B_0050_FCFD_4141_05B681552BDF",
  "this.overlay_14E28011_0053_94AD_412C_07FA17C24180",
  "this.popup_130AB1A4_0050_97EB_414D_59F848CA9D94",
  "this.overlay_14885810_0050_B4AB_4150_44A13A3EF1B0",
  "this.popup_119854F4_0051_BD6B_4158_E122E208D13E",
  "this.overlay_14BC4F00_0050_8CAC_414D_58E3BB317E00",
  "this.overlay_13E7F332_00B1_B4EF_415C_60F5A185206F",
  "this.overlay_1152F6B5_00B3_9DD5_4154_8EF1EA9BABC8",
  "this.overlay_11642598_00B1_9FDB_4152_8F2C91C0C790"
 ],
 "hfovMin": "150%",
 "label": "fix-3",
 "hfovMax": 130,
 "id": "panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.99,
   "class": "AdjacentPanorama",
   "yaw": -86.7,
   "panorama": "this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0",
   "distance": 1
  },
  {
   "backwardYaw": -80.94,
   "class": "AdjacentPanorama",
   "yaw": 82.22,
   "panorama": "this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -89.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_1389C895_00D7_B5D4_415A_F000AD5135AA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -90.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13F118C2_00D7_B5AF_4157_2372B6A8A315",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 93.3,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13FDA8AC_00D7_B5F4_4151_183B000E1C9E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "yaw": -17.83,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_14BB762B_0050_FCFD_4141_05B681552BDF",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_14BB762B_0050_FCFD_4141_05B681552BDF_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 0.78,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.91
},
{
 "rotationY": 0,
 "yaw": 22.73,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_164DC423_0057_9CED_4133_BCB4AFE28D64",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_164DC423_0057_9CED_4133_BCB4AFE28D64_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -5.38,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.71
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_112A7645_0071_BCB4_414F_29C94308CB4E",
  "this.overlay_10140E31_0071_8CEC_414A_19683676CB31",
  "this.overlay_10E71B48_0071_B4BC_414F_42EF1C773E28",
  "this.overlay_123DE633_00F0_9CED_4163_0FA796499AD6",
  "this.popup_16460349_00F1_94BD_415C_1220B1C4B740",
  "this.overlay_159FC921_00F0_94EC_4136_2D241E9BAA14",
  "this.popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F",
  "this.overlay_1290C698_00F1_9DDB_415F_BFA8C0DD6694"
 ],
 "hfovMin": "150%",
 "label": "fix-7",
 "hfovMax": 130,
 "id": "panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.67,
   "class": "AdjacentPanorama",
   "yaw": 90.93,
   "panorama": "this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_11E5AB1D_0050_94D4_415A_D7646DE07256_0_0.jpg",
   "width": 1490,
   "class": "ImageResourceLevel",
   "height": 2106
  },
  {
   "url": "media/popup_11E5AB1D_0050_94D4_415A_D7646DE07256_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_11E5AB1D_0050_94D4_415A_D7646DE07256_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_11E5AB1D_0050_94D4_415A_D7646DE07256_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1239186A_00F0_957F_415C_2C860B0721F1"
},
{
 "rotationY": 0,
 "yaw": -27.91,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_126C605A_00D0_B55F_4136_DE7EA906DD98",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_126C605A_00D0_B55F_4136_DE7EA906DD98_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 11.94,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.99
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1504ED14_00AF_8CD4_4132_4148BC451C98_0_0.jpg",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 1062
  },
  {
   "url": "media/popup_1504ED14_00AF_8CD4_4132_4148BC451C98_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_1504ED14_00AF_8CD4_4132_4148BC451C98_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ],
 "id": "ImageResource_120DE88B_00F0_95BC_4163_946A66D1E4C6"
},
{
 "rotationY": 0,
 "yaw": 166.37,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_13C43089_00B1_95BC_4152_0796DBF60AB4",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_13C43089_00B1_95BC_4152_0796DBF60AB4_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -12.16,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.03
},
{
 "rotationY": 0,
 "yaw": -142.76,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_165E3310_00F3_94AC_4146_C64948F28A20",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_165E3310_00F3_94AC_4146_C64948F28A20_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -9.4,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.03
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0F09AAFF_0051_F555_40AD_776F25B2EC00",
  "this.overlay_0F16ED7D_0050_8F54_4152_A0FC2966863A",
  "this.overlay_1625AF14_00F1_8CD4_412B_A5B3D291D7F0",
  "this.popup_12773255_00F1_9554_414E_B3D325AE69BD",
  "this.overlay_14DAFBE6_00F0_8B74_4154_99B2DA67AA4F",
  "this.popup_165E3310_00F3_94AC_4146_C64948F28A20",
  "this.overlay_12754443_00F3_7CAD_4150_C60AB58245B6",
  "this.overlay_144970C3_00F1_95AC_414A_D21A997053E3",
  "this.overlay_14EB428A_00F7_95BC_414C_D4F0F6A1B79A",
  "this.popup_140283EA_00F0_9B7F_415D_78D0FC537C24",
  "this.overlay_15418EC3_00F1_8DAD_414B_0EAA85523974",
  "this.overlay_12D81555_00F1_7F55_4156_BCE9776B0FC0",
  "this.overlay_12880F95_00F3_8BD5_4140_E24A19AEE6B9",
  "this.popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2",
  "this.popup_1650729D_00DF_95D5_4165_8EE8DA416B67"
 ],
 "hfovMin": "150%",
 "label": "fix-6",
 "hfovMax": 130,
 "id": "panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.78,
   "class": "AdjacentPanorama",
   "yaw": 90.45,
   "panorama": "this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0",
   "distance": 1
  },
  {
   "backwardYaw": 90.93,
   "class": "AdjacentPanorama",
   "yaw": -83.67,
   "panorama": "this.panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_164A6260_00D0_956B_4157_54C092A1F890_0_0.jpg",
   "width": 1242,
   "class": "ImageResourceLevel",
   "height": 1756
  },
  {
   "url": "media/popup_164A6260_00D0_956B_4157_54C092A1F890_0_1.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_164A6260_00D0_956B_4157_54C092A1F890_0_2.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1208989A_00F0_95DC_4145_1000633937D8"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 99.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13DF48EF_00D7_B575_4148_3E316D79CCCD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "yaw": -144.64,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_12950509_00B7_9CBD_413F_308AB4596406",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_12950509_00B7_9CBD_413F_308AB4596406_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -10.28,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.54
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_139145AA_00D0_9FFF_413E_D6913B8F64C8_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_139145AA_00D0_9FFF_413E_D6913B8F64C8_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_139145AA_00D0_9FFF_413E_D6913B8F64C8_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_139145AA_00D0_9FFF_413E_D6913B8F64C8_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120A7892_00F0_95AC_4158_7CE0D0E65E38"
},
{
 "rotationY": 0,
 "yaw": -140.35,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_141D4174_00B0_976B_4119_1F5EB6213C00",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_141D4174_00B0_976B_4119_1F5EB6213C00_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.33,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.09
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_119854F4_0051_BD6B_4158_E122E208D13E_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_119854F4_0051_BD6B_4158_E122E208D13E_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_119854F4_0051_BD6B_4158_E122E208D13E_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_119854F4_0051_BD6B_4158_E122E208D13E_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1231B879_00F0_955C_4147_108D4EBB5D7D"
},
{
 "rotationY": 0,
 "yaw": -155.07,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_119854F4_0051_BD6B_4158_E122E208D13E",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_119854F4_0051_BD6B_4158_E122E208D13E_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -11.59,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.15
},
{
 "rotationY": 0,
 "yaw": 3.26,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_120F99D3_00B1_B7AD_4149_8811B165C366",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_120F99D3_00B1_B7AD_4149_8811B165C366_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -4.12,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.43
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_14BB762B_0050_FCFD_4141_05B681552BDF_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_14BB762B_0050_FCFD_4141_05B681552BDF_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_14BB762B_0050_FCFD_4141_05B681552BDF_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_14BB762B_0050_FCFD_4141_05B681552BDF_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_12316876_00F0_9554_4161_844654F26005"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_13C43089_00B1_95BC_4152_0796DBF60AB4_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_13C43089_00B1_95BC_4152_0796DBF60AB4_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_13C43089_00B1_95BC_4152_0796DBF60AB4_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_13C43089_00B1_95BC_4152_0796DBF60AB4_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120FF87E_00F0_9554_4140_3CE1E33F8BE4"
},
{
 "rotationY": 0,
 "yaw": -1.26,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_140283EA_00F0_9B7F_415D_78D0FC537C24",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_140283EA_00F0_9B7F_415D_78D0FC537C24_0_1.jpg",
    "width": 722,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 2.89,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 24.77
},
{
 "shadowBlurRadius": 6,
 "id": "window_16E9AF8D_0050_8BB5_415C_5D7C272C8650",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "titleFontSize": "2vmin",
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "title": "Kopi Mas.",
 "shadow": true,
 "height": 600,
 "closeButtonIconHeight": 12,
 "minHeight": 20,
 "gap": 10,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_16EA5F8E_0050_8BB7_4158_4DC93D7AB2F3"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontWeight": "bold",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "class": "Window",
 "horizontalAlign": "center",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Berlin Sans FB",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window20472"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "rotationY": 0,
 "yaw": 8.28,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1504ED14_00AF_8CD4_4132_4148BC451C98",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1504ED14_00AF_8CD4_4132_4148BC451C98_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "pitch": 13.59,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 8.34
},
{
 "rotationY": 0,
 "yaw": -136.63,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.96,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.09
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0D41E71E_0051_7CD4_4147_39ADB874D4D2",
  "this.overlay_10196042_0073_94AF_4155_9C9146D4EA4A",
  "this.overlay_10CF212E_0070_F4F7_413E_FDE961F65558"
 ],
 "hfovMin": "150%",
 "label": "fix-1",
 "hfovMax": 130,
 "id": "panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 8.92,
   "class": "AdjacentPanorama",
   "yaw": -107.03,
   "panorama": "this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_t.jpg"
},
{
 "rotationY": 0,
 "yaw": 38.86,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_16875672_00B0_FD6C_4151_28D09CF5714C",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_16875672_00B0_FD6C_4151_28D09CF5714C_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 14.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.91
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -97.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13D1E906_00D7_B4B7_4164_8D10AC4A17F4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_120F99D3_00B1_B7AD_4149_8811B165C366_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_120F99D3_00B1_B7AD_4149_8811B165C366_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_120F99D3_00B1_B7AD_4149_8811B165C366_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_120F99D3_00B1_B7AD_4149_8811B165C366_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120EE87C_00F0_9554_4124_4D2EF3E353D0"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_16635732_0050_FCEF_4146_030048D7BE58_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_16635732_0050_FCEF_4146_030048D7BE58_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_16635732_0050_FCEF_4146_030048D7BE58_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_16635732_0050_FCEF_4146_030048D7BE58_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1230F872_00F0_956F_415A_5AD0F4000713"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426_0_0.jpg",
   "width": 1490,
   "class": "ImageResourceLevel",
   "height": 2106
  },
  {
   "url": "media/popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1231C875_00F0_9554_4158_57105F1D8A80"
},
{
 "shadowBlurRadius": 6,
 "id": "window_13EDC564_0070_BF6B_412B_9490E665BF70",
 "width": 400,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderSize": 0,
 "bodyPaddingLeft": 5,
 "verticalAlign": "middle",
 "modal": true,
 "headerBackgroundOpacity": 1,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "titleFontSize": "2vmin",
 "paddingRight": 0,
 "bodyPaddingBottom": 5,
 "title": "Selamat Datang!",
 "shadow": true,
 "height": 600,
 "closeButtonIconHeight": 12,
 "minHeight": 20,
 "gap": 10,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_13EA1564_0070_BF6B_4142_1B7234F3FD24"
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "shadowColor": "#000000",
 "shadowHorizontalLength": 3,
 "titleFontWeight": "bold",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "class": "Window",
 "horizontalAlign": "center",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "paddingLeft": 0,
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Berlin Sans FB",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window19482"
 },
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_camera",
   "media": "this.panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_camera",
   "media": "this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_camera",
   "media": "this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_camera",
   "media": "this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_camera",
   "media": "this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_camera",
   "media": "this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_camera",
   "media": "this.panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120998A7_00F0_95F4_4165_C884C3560C1D"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60_0_0.jpg",
   "width": 1682,
   "class": "ImageResourceLevel",
   "height": 2378
  },
  {
   "url": "media/popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120BF895_00F0_95D4_410B_7DFBBFDDF910"
},
{
 "rotationY": 0,
 "yaw": -139.73,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1571AA07_00D1_94B5_415B_8B6117849BAB",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1571AA07_00D1_94B5_415B_8B6117849BAB_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -9.16,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.03
},
{
 "audio": {
  "mp3Url": "media/audio_12295070_00D0_956B_415D_7362AA237420.mp3",
  "oggUrl": "media/audio_12295070_00D0_956B_415D_7362AA237420.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_12295070_00D0_956B_415D_7362AA237420",
 "autoplay": true,
 "data": {
  "label": "backsound pameran"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 72.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13C5791D_00D7_B4D4_4164_81ECA9AE8CB9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1361A944_00B1_94AB_415E_368D00CFC492_0_0.jpg",
   "width": 1738,
   "class": "ImageResourceLevel",
   "height": 2457
  },
  {
   "url": "media/popup_1361A944_00B1_94AB_415E_368D00CFC492_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1361A944_00B1_94AB_415E_368D00CFC492_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1361A944_00B1_94AB_415E_368D00CFC492_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120E687D_00F0_9554_4147_21E6F86E6DAB"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_130AB1A4_0050_97EB_414D_59F848CA9D94_0_0.jpg",
   "width": 1989,
   "class": "ImageResourceLevel",
   "height": 2809
  },
  {
   "url": "media/popup_130AB1A4_0050_97EB_414D_59F848CA9D94_0_1.jpg",
   "width": 1450,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_130AB1A4_0050_97EB_414D_59F848CA9D94_0_2.jpg",
   "width": 725,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_130AB1A4_0050_97EB_414D_59F848CA9D94_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_12301877_00F0_9554_4163_7839886735BF"
},
{
 "rotationY": 0,
 "yaw": 175.53,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -12.16,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.69
},
{
 "rotationY": 0,
 "yaw": 178.39,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1650729D_00DF_95D5_4165_8EE8DA416B67",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1650729D_00DF_95D5_4165_8EE8DA416B67_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 8.27,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0ECA4687_0053_BDB4_4139_CDDC45052026",
  "this.overlay_0F7D871B_0050_BCDC_4141_53508C25FE2E",
  "this.overlay_12D5AEC6_00B0_8DB7_415A_2286F07F6FE9",
  "this.popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC",
  "this.overlay_13C21398_00B1_9BDB_414D_80B916ABB0C0",
  "this.popup_120F99D3_00B1_B7AD_4149_8811B165C366",
  "this.overlay_146F8DE5_00B0_8F75_413E_A55B9BA9C0BC",
  "this.overlay_149A1EFE_00B0_8D57_4159_F09351C39939",
  "this.overlay_1512120A_00B1_74BF_4149_1B6A82D38D74",
  "this.popup_13C43089_00B1_95BC_4152_0796DBF60AB4",
  "this.popup_1361A944_00B1_94AB_415E_368D00CFC492",
  "this.overlay_1593137C_00B0_9B54_4155_EC82AACEFEC0",
  "this.overlay_1431F169_00B0_B77C_4156_C9CE5164225F",
  "this.popup_16C02541_00B1_9CAD_413E_0CCE722A99D0",
  "this.overlay_142508DA_00B0_955F_4161_0E3BDD0DAD1A",
  "this.popup_1281ACF3_00B0_8D6D_4145_50E839DE6534",
  "this.overlay_14036066_00B3_F577_415C_379B5C7A45CE",
  "this.overlay_14025501_00B1_BCAD_415E_F2F7FB55A4AC",
  "this.popup_141D4174_00B0_976B_4119_1F5EB6213C00",
  "this.overlay_1170FCB3_00B0_8DED_415A_4170316D1D96",
  "this.popup_12950509_00B7_9CBD_413F_308AB4596406",
  "this.overlay_128E7DA5_00B0_8FF5_412B_BB645E73F790"
 ],
 "hfovMin": "150%",
 "label": "fix-4",
 "hfovMax": 130,
 "id": "panorama_0E29462C_0050_9CF4_413C_E75803D63BF0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.7,
   "class": "AdjacentPanorama",
   "yaw": 90.99,
   "panorama": "this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B",
   "distance": 1
  },
  {
   "backwardYaw": 89.16,
   "class": "AdjacentPanorama",
   "yaw": -87.99,
   "panorama": "this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_t.jpg"
},
{
 "rotationY": 0,
 "yaw": 8.67,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 11.53,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 96.33,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13397934_00D7_B4D4_415D_A458CCE73C2C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "yaw": -176.73,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_164A6260_00D0_956B_4157_54C092A1F890",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_164A6260_00D0_956B_4157_54C092A1F890_0_1.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.04,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.08
},
{
 "rotationY": 0,
 "yaw": 152.38,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_16635732_0050_FCEF_4146_030048D7BE58",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_16635732_0050_FCEF_4146_030048D7BE58_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -11.22,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.9
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120688AA_00F0_95FC_415A_7AB3CF1440F0"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1281ACF3_00B0_8D6D_4145_50E839DE6534_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_1281ACF3_00B0_8D6D_4145_50E839DE6534_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1281ACF3_00B0_8D6D_4145_50E839DE6534_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1281ACF3_00B0_8D6D_4145_50E839DE6534_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120CA881_00F0_95AC_4158_5B786C69910C"
},
{
 "rotationY": 0,
 "yaw": 158.17,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_11E5AB1D_0050_94D4_415A_D7646DE07256",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_11E5AB1D_0050_94D4_415A_D7646DE07256_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.24,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.09
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_126C605A_00D0_B55F_4136_DE7EA906DD98_0_0.jpg",
   "width": 1490,
   "class": "ImageResourceLevel",
   "height": 2106
  },
  {
   "url": "media/popup_126C605A_00D0_B55F_4136_DE7EA906DD98_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_126C605A_00D0_B55F_4136_DE7EA906DD98_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_126C605A_00D0_B55F_4136_DE7EA906DD98_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120A8890_00F0_95AC_414D_96B8D96D7BF0"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_16C02541_00B1_9CAD_413E_0CCE722A99D0_0_0.jpg",
   "width": 1987,
   "class": "ImageResourceLevel",
   "height": 2809
  },
  {
   "url": "media/popup_16C02541_00B1_9CAD_413E_0CCE722A99D0_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_16C02541_00B1_9CAD_413E_0CCE722A99D0_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_16C02541_00B1_9CAD_413E_0CCE722A99D0_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120F7880_00F0_95AC_4160_15D1DD30DF60"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC_0_0.jpg",
   "width": 1987,
   "class": "ImageResourceLevel",
   "height": 2809
  },
  {
   "url": "media/popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1231687A_00F0_955C_4157_B1FD77CAA614"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_16875672_00B0_FD6C_4151_28D09CF5714C_0_0.jpg",
   "width": 1490,
   "class": "ImageResourceLevel",
   "height": 2106
  },
  {
   "url": "media/popup_16875672_00B0_FD6C_4151_28D09CF5714C_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_16875672_00B0_FD6C_4151_28D09CF5714C_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_16875672_00B0_FD6C_4151_28D09CF5714C_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120D0886_00F0_95B4_4133_C48E1780B894"
},
{
 "rotationY": 0,
 "yaw": -149.95,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_130AB1A4_0050_97EB_414D_59F848CA9D94",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_130AB1A4_0050_97EB_414D_59F848CA9D94_0_2.jpg",
    "width": 725,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.95,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.1
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1208089C_00F0_95D4_415E_752F76EA1306"
},
{
 "rotationY": 0,
 "yaw": -139.25,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_12773255_00F1_9554_414E_B3D325AE69BD",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_12773255_00F1_9554_414E_B3D325AE69BD_0_2.jpg",
    "width": 718,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.64,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.05
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120D188D_00F0_95B4_4162_91FBF658D0A2"
},
{
 "rotationY": 0,
 "yaw": -13.57,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.79,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.89
},
{
 "rotationY": 0,
 "yaw": 35.78,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.92,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.72
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1650729D_00DF_95D5_4165_8EE8DA416B67_0_0.jpg",
   "width": 2235,
   "class": "ImageResourceLevel",
   "height": 3160
  },
  {
   "url": "media/popup_1650729D_00DF_95D5_4165_8EE8DA416B67_0_1.jpg",
   "width": 1448,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1650729D_00DF_95D5_4165_8EE8DA416B67_0_2.jpg",
   "width": 724,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1650729D_00DF_95D5_4165_8EE8DA416B67_0_3.jpg",
   "width": 362,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_16A78B76_00D0_8B57_4151_69DEE7589DED"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120C7888_00F0_95BC_4155_46D9CFDAC428"
},
{
 "rotationY": 0,
 "yaw": 173.34,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1361A944_00B1_94AB_415E_368D00CFC492",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1361A944_00B1_94AB_415E_368D00CFC492_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.56,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.08
},
{
 "rotationY": 0,
 "yaw": -31.64,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_139145AA_00D0_9FFF_413E_D6913B8F64C8",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_139145AA_00D0_9FFF_413E_D6913B8F64C8_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -2.74,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.9
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_12773255_00F1_9554_414E_B3D325AE69BD_0_0.jpg",
   "width": 1679,
   "class": "ImageResourceLevel",
   "height": 2394
  },
  {
   "url": "media/popup_12773255_00F1_9554_414E_B3D325AE69BD_0_1.jpg",
   "width": 1436,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_12773255_00F1_9554_414E_B3D325AE69BD_0_2.jpg",
   "width": 718,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_12773255_00F1_9554_414E_B3D325AE69BD_0_3.jpg",
   "width": 359,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_1209F89F_00F0_95D4_4140_346FD00E97EB"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_165E3310_00F3_94AC_4146_C64948F28A20_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_165E3310_00F3_94AC_4146_C64948F28A20_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_165E3310_00F3_94AC_4146_C64948F28A20_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_165E3310_00F3_94AC_4146_C64948F28A20_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120898A2_00F0_95EC_4134_7DAED2F1CBE8"
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -89.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13EBA8D8_00D7_B55B_4152_577230F420E4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "yaw": -33.79,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_16C02541_00B1_9CAD_413E_0CCE722A99D0",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_16C02541_00B1_9CAD_413E_0CCE722A99D0_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 11.46,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "yaw": 3.14,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -2.61,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.44
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0EDB9D35_0050_8CD4_4154_0512DF8D8A01",
  "this.overlay_0E090132_0053_94EC_414F_E9D1BA774640"
 ],
 "hfovMin": "150%",
 "label": "fix-2",
 "hfovMax": 130,
 "id": "panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.22,
   "class": "AdjacentPanorama",
   "yaw": -80.94,
   "panorama": "this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B",
   "distance": 1
  },
  {
   "backwardYaw": -107.03,
   "class": "AdjacentPanorama",
   "yaw": 8.92,
   "panorama": "this.panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_t.jpg"
},
{
 "rotationY": 0,
 "yaw": 172.77,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -11.41,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.7
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 36,
      "width": 18432,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 24,
      "width": 12288,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 12,
      "width": 6144,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_t.jpg"
  }
 ],
 "overlays": [
  "this.overlay_0ECA217B_0050_975D_4145_F999D3B9C0C9",
  "this.overlay_0F5003B1_0050_9BED_413D_1F4B0ECF2D6C",
  "this.overlay_131600F2_00B0_B56C_414E_CDA03FBF2A3E",
  "this.popup_16875672_00B0_FD6C_4151_28D09CF5714C",
  "this.overlay_128FEAAA_00B3_F5FF_415E_31E25CFCCFA5",
  "this.popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8",
  "this.overlay_13C2EFB9_00B1_8BDD_4158_A002F0F16553",
  "this.overlay_146B772D_00AF_7CF5_4145_28BDE5B030E5",
  "this.popup_1504ED14_00AF_8CD4_4132_4148BC451C98",
  "this.overlay_116DDDE0_00AF_8F6C_415D_B1F5C0CCA370",
  "this.popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A",
  "this.overlay_147D744B_00D0_9CBC_4129_079BFCDFC770",
  "this.overlay_1569A2A6_00D0_F5F7_4139_6ED7D2862C98",
  "this.popup_126C605A_00D0_B55F_4136_DE7EA906DD98",
  "this.overlay_13B82BC0_00D3_8BAB_4159_23353B99C260",
  "this.popup_139145AA_00D0_9FFF_413E_D6913B8F64C8",
  "this.overlay_162C728B_00D1_95BC_415E_C8DB96BD3518",
  "this.overlay_15CF3F74_00D7_8B6B_414B_EFCF9AA869BC",
  "this.popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60",
  "this.overlay_1286A638_00D1_9CDB_4142_D78A40BD6698",
  "this.popup_1571AA07_00D1_94B5_415B_8B6117849BAB",
  "this.overlay_14754B31_00D0_F4ED_4140_57EC8251CD54",
  "this.overlay_12B710A2_00D1_75EF_4156_AA6E3E4A2241",
  "this.overlay_131472BB_00D0_95DC_4160_4D51EE40BFC1",
  "this.popup_164A6260_00D0_956B_4157_54C092A1F890",
  "this.overlay_169B13DF_00D0_FB54_4161_436CE0510EFC",
  "this.overlay_12863F38_00D1_8CDC_4133_0A5C9EFDA230",
  "this.popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A"
 ],
 "hfovMin": "150%",
 "label": "fix-5",
 "hfovMax": 130,
 "id": "panorama_0F05EB98_0051_8BDB_413D_98187FC880C0",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.99,
   "class": "AdjacentPanorama",
   "yaw": 89.16,
   "panorama": "this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0",
   "distance": 1
  },
  {
   "backwardYaw": 90.45,
   "class": "AdjacentPanorama",
   "yaw": -87.78,
   "panorama": "this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "flipImageHorizontally": true,
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_t.jpg"
},
{
 "rotationY": 0,
 "yaw": -37.42,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1281ACF3_00B0_8D6D_4145_50E839DE6534",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1281ACF3_00B0_8D6D_4145_50E839DE6534_0_2.jpg",
    "width": 723,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -1.99,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.55
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -89.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_13A6B84D_00D7_B4B4_414C_D0A7954CEF17",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_1571AA07_00D1_94B5_415B_8B6117849BAB_0_0.jpg",
   "width": 1587,
   "class": "ImageResourceLevel",
   "height": 2245
  },
  {
   "url": "media/popup_1571AA07_00D1_94B5_415B_8B6117849BAB_0_1.jpg",
   "width": 1447,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_1571AA07_00D1_94B5_415B_8B6117849BAB_0_2.jpg",
   "width": 723,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_1571AA07_00D1_94B5_415B_8B6117849BAB_0_3.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120B2898_00F0_95DC_4165_ACA419252B30"
},
{
 "rotationY": 0,
 "yaw": 167.55,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_16460349_00F1_94BD_415C_1220B1C4B740",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_16460349_00F1_94BD_415C_1220B1C4B740_0_2.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.02,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.07
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_140283EA_00F0_9B7F_415D_78D0FC537C24_0_0.jpg",
   "width": 1236,
   "class": "ImageResourceLevel",
   "height": 1752
  },
  {
   "url": "media/popup_140283EA_00F0_9B7F_415D_78D0FC537C24_0_1.jpg",
   "width": 722,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_140283EA_00F0_9B7F_415D_78D0FC537C24_0_2.jpg",
   "width": 361,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_120808A5_00F0_95F4_4161_DF5337A7FAB4"
},
{
 "rotationY": 0,
 "yaw": 27.11,
 "showDuration": 500,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "id": "popup_1553FA94_0051_75D4_4152_F222D6AA982A",
 "rotationX": 0,
 "popupDistance": 100,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_1553FA94_0051_75D4_4152_F222D6AA982A_0_3.jpg",
    "width": 724,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.25,
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.04
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": -171.08,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_139D2864_00D7_B574_415A_3B798308EA3C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 90,
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "shadow": false,
 "paddingRight": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "transitionMode": "blending",
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "paddingLeft": 0,
 "progressBackgroundOpacity": 1,
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "UIComponent",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "bottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent50780"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "class": "ZoomImage",
 "backgroundColor": [],
 "minWidth": 0,
 "bottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage50781"
 },
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton50782"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "iconHeight": 20,
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "right": 10,
 "borderRadius": 0,
 "borderSize": 0,
 "iconColor": "#000000",
 "layout": "horizontal",
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "pressedIconColor": "#888888",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "minHeight": 0,
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "iconBeforeLabel": true,
 "visible": false,
 "iconLineWidth": 5,
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0, this.camera_13DF48EF_00D7_B575_4148_3E316D79CCCD); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1108A515_0070_FCD5_4152_D1ED9F93952E",
   "yaw": 82.22,
   "pitch": -20.92,
   "distance": 100,
   "hfov": 8.01
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.22,
   "hfov": 8.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.92
  }
 ],
 "id": "overlay_0E85662F_0050_9CF5_414B_BD62718E1019",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0, this.camera_13EBA8D8_00D7_B55B_4152_577230F420E4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_11087515_0070_FCD5_4150_10FCD7904888",
   "yaw": -86.7,
   "pitch": -35.43,
   "distance": 100,
   "hfov": 15.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.7,
   "hfov": 15.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.43
  }
 ],
 "id": "overlay_0E571ED6_0051_8D57_4154_6EF26EF0AD2C",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_11E5AB1D_0050_94D4_415A_D7646DE07256, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1239186A_00F0_957F_415C_2C860B0721F1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 158.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_2_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 6.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.17,
   "hfov": 8.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.24
  }
 ],
 "id": "overlay_1357F592_0050_BFAF_4142_E1AE83293C86",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16635732_0050_FCEF_4146_030048D7BE58, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1230F872_00F0_956F_415A_5AD0F4000713, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 152.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_3_0.png",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 108
     }
    ]
   },
   "pitch": -11.22,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.38,
   "hfov": 7.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_3_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": -11.22
  }
 ],
 "id": "overlay_120521FD_0053_9755_4155_32B066B7512C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1553FA94_0051_75D4_4152_F222D6AA982A, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_12302873_00F0_956D_4146_2956A22046B1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 27.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_4_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 9.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.11,
   "hfov": 8.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.25
  }
 ],
 "id": "overlay_1663997A_0051_B75C_415E_7BA3035D2803",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_164DC423_0057_9CED_4133_BCB4AFE28D64, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_12305875_00F0_9555_4162_456C09268740, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 22.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_5_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -5.38,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.73,
   "hfov": 6.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_5_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": -5.38
  }
 ],
 "id": "overlay_149B57E8_0057_9B7C_415C_108F4CB47E0C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1444B3BB_0050_9BDD_4152_3A8E9EFCE426, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1231C875_00F0_9554_4158_57105F1D8A80, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -13.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_6_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 15.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.26
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.57,
   "hfov": 8.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.79
  }
 ],
 "id": "overlay_1271B1AB_0050_97FD_4135_980BE872FDA2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14BB762B_0050_FCFD_4141_05B681552BDF, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_12316876_00F0_9554_4161_844654F26005, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -17.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_7_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": 0.78,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.64
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.83,
   "hfov": 7.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_7_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": 0.78
  }
 ],
 "id": "overlay_12638521_0051_BCED_4144_B0BBA2E19C4A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_130AB1A4_0050_97EB_414D_59F848CA9D94, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_12301877_00F0_9554_4163_7839886735BF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -149.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_8_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 5.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.95,
   "hfov": 8.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.95
  }
 ],
 "id": "overlay_14E28011_0053_94AD_412C_07FA17C24180",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_119854F4_0051_BD6B_4158_E122E208D13E, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1231B879_00F0_955C_4147_108D4EBB5D7D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -155.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_9_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -11.59,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.07,
   "hfov": 7.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_9_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -11.59
  }
 ],
 "id": "overlay_14885810_0050_B4AB_4150_44A13A3EF1B0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=ReTOH6f9PcA', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 164.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_10_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -12.14,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.01,
   "hfov": 7.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_10_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -12.14
  }
 ],
 "id": "overlay_14BC4F00_0050_8CAC_414D_58E3BB317E00",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=FLiT1r8lx6g&t=4s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 30.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_11_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -5.13,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.12
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.89,
   "hfov": 5.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_11_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "pitch": -5.13
  }
 ],
 "id": "overlay_13E7F332_00B1_B4EF_415C_60F5A185206F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=XL5zTh5JGAo&t=4s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -8.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_12_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": 1.03,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.47
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.16,
   "hfov": 6.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_12_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": 1.03
  }
 ],
 "id": "overlay_1152F6B5_00B3_9DD5_4154_8EF1EA9BABC8",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=qOpDegDwBow', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -145.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_13_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": -10.45,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.75
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.23,
   "hfov": 5.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_0_HS_13_1_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ]
   },
   "pitch": -10.45
  }
 ],
 "id": "overlay_11642598_00B1_9FDB_4152_8F2C91C0C790",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5, this.camera_13397934_00D7_B4D4_415D_A458CCE73C2C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1220C7FD_00F0_9B55_415B_D727A426794E",
   "yaw": 90.93,
   "pitch": -30.96,
   "distance": 100,
   "hfov": 16.64
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.93,
   "hfov": 16.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.96
  }
 ],
 "id": "overlay_112A7645_0071_BCB4_414F_29C94308CB4E",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_16E9AF8D_0050_8BB5_415C_5D7C272C8650, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_122017FE_00F0_9B57_4165_2AFF447D4BDC",
   "yaw": -65.66,
   "pitch": -0.9,
   "distance": 100,
   "hfov": 8.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.66,
   "hfov": 8.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.9
  }
 ],
 "id": "overlay_10140E31_0071_8CEC_414A_19683676CB31",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://forms.gle/DNQ31C7wJ6nWms1E9', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -65.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_2_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ]
   },
   "pitch": -23.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.22
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.31,
   "hfov": 8.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41
  }
 ],
 "id": "overlay_10E71B48_0071_B4BC_414F_42EF1C773E28",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16460349_00F1_94BD_415C_1220B1C4B740, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120968A9_00F0_95FC_414F_D0AC27149C03, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 167.55,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_3_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 7.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.55,
   "hfov": 8.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.02
  }
 ],
 "id": "overlay_123DE633_00F0_9CED_4163_0FA796499AD6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_15B6D60E_00FF_7CB4_4151_B3BB3945334F, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120688AA_00F0_95FC_415A_7AB3CF1440F0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 161.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_4_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": -10.71,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.79,
   "hfov": 6.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_4_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": -10.71
  }
 ],
 "id": "overlay_159FC921_00F0_94EC_4136_2D241E9BAA14",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=gsmxm74vf-U&t=3s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 172.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_5_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -11.05,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.01
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.96,
   "hfov": 7.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_5_1_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -11.05
  }
 ],
 "id": "overlay_1290C698_00F1_9DDB_415F_BFA8C0DD6694",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0, this.camera_1397887E_00D7_B555_4155_DC89B334AC35); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110EF524_0070_FCF4_4155_6985074A47D4",
   "yaw": 90.45,
   "pitch": -28.8,
   "distance": 100,
   "hfov": 17
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.45,
   "hfov": 17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.8
  }
 ],
 "id": "overlay_0F09AAFF_0051_F555_40AD_776F25B2EC00",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4, this.camera_1389C895_00D7_B5D4_415A_F000AD5135AA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110E4524_0070_FCF4_4151_D83EDE8B3472",
   "yaw": -83.67,
   "pitch": -34.05,
   "distance": 100,
   "hfov": 16.07
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -83.67,
   "hfov": 16.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.05
  }
 ],
 "id": "overlay_0F16ED7D_0050_8F54_4152_A0FC2966863A",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_12773255_00F1_9554_414E_B3D325AE69BD, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1209F89F_00F0_95D4_4140_346FD00E97EB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -139.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.55
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.25,
   "hfov": 8.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.64
  }
 ],
 "id": "overlay_1625AF14_00F1_8CD4_412B_A5B3D291D7F0",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_165E3310_00F3_94AC_4146_C64948F28A20, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120898A2_00F0_95EC_4134_7DAED2F1CBE8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -142.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_3_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -9.4,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.61
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.76,
   "hfov": 5.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_3_1_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": -9.4
  }
 ],
 "id": "overlay_14DAFBE6_00F0_8B74_4154_99B2DA67AA4F",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=TtstA6rpz4g&t=65s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -135.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_4_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -8.27,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.85,
   "hfov": 4.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_4_1_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "pitch": -8.27
  }
 ],
 "id": "overlay_12754443_00F3_7CAD_4150_C60AB58245B6",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=CpRBOogIQHk&t=2s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -175.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_5_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -11.41,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.44
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.53,
   "hfov": 7.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_5_1_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -11.41
  }
 ],
 "id": "overlay_144970C3_00F1_95AC_414A_D21A997053E3",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_140283EA_00F0_9B7F_415D_78D0FC537C24, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120808A5_00F0_95F4_4161_DF5337A7FAB4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -1.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_6_0.png",
      "width": 316,
      "class": "ImageResourceLevel",
      "height": 505
     }
    ]
   },
   "pitch": 2.89,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.3
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.26,
   "hfov": 23.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_6_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.89
  }
 ],
 "id": "overlay_14EB428A_00F7_95BC_414C_D4F0F6A1B79A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://bit.ly/3sO5X4O', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 33.27,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_7_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 455
     }
    ]
   },
   "pitch": 2.66,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.27,
   "hfov": 16.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_7_1_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 2.66
  }
 ],
 "id": "overlay_15418EC3_00F1_8DAD_414B_0EAA85523974",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1650729D_00DF_95D5_4165_8EE8DA416B67, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_16A78B76_00D0_8B57_4151_69DEE7589DED, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 178.39,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_8_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ]
   },
   "pitch": 8.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.49
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.39,
   "hfov": 8.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.27
  }
 ],
 "id": "overlay_12D81555_00F1_7F55_4156_BCE9776B0FC0",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14E436FA_00F3_FD5C_414D_B61AD6F913B2, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120998A7_00F0_95F4_4165_C884C3560C1D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 172.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_9_0.png",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": -11.41,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.1
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.77,
   "hfov": 8.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_0_HS_9_1_0_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -11.41
  }
 ],
 "id": "overlay_12880F95_00F3_8BD5_4140_E24A19AEE6B9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_16EA5F8E_0050_8BB7_4158_4DC93D7AB2F3",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Silahkan tinggalkan pesan, boleh untuk siapa saja.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Untuk gebetan, mantan atau calon mertua.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Jangan lupa Kritik yang membangun, tapi jangan pakai batu bata!</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Terima Kasih, tunggu karya kami selanjutnya. :)</SPAN></DIV></div>",
 "paddingTop": 10,
 "height": "100%",
 "data": {
  "name": "HTMLText20473"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0, this.camera_139D2864_00D7_B574_415A_3B798308EA3C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110AE515_0070_FCD5_413A_36ABA6833FA4",
   "yaw": -107.03,
   "pitch": -16.3,
   "distance": 100,
   "hfov": 8.24
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.03,
   "hfov": 8.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.3
  }
 ],
 "id": "overlay_0D41E71E_0051_7CD4_4147_39ADB874D4D2",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_13EDC564_0070_BF6B_412B_9490E665BF70, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_122A9780_00F0_9BAC_4153_9DF4FD87C280",
   "yaw": -155.45,
   "pitch": 1.19,
   "distance": 100,
   "hfov": 8.58
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.45,
   "hfov": 8.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.19
  }
 ],
 "id": "overlay_10196042_0073_94AF_4155_9C9146D4EA4A",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://forms.gle/KDRSP6K11K8Rxb3t8', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -160.01,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0_HS_2_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ]
   },
   "pitch": -21.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.33
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.01,
   "hfov": 8.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.44
  }
 ],
 "id": "overlay_10CF212E_0070_F4F7_413E_FDE961F65558",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "id": "htmlText_13EA1564_0070_BF6B_4142_1B7234F3FD24",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "propagateClick": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "minHeight": 0,
 "paddingLeft": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Terima kasih telah mengunjungi pameran Tugas Akhir virtual kami.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Kami harap anda mengisi buku pengunjung dibawah ini.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Terima kasih, have a nice day!</SPAN></DIV></div>",
 "paddingTop": 10,
 "height": "100%",
 "data": {
  "name": "HTMLText19483"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B, this.camera_13FDA8AC_00D7_B5F4_4151_183B000E1C9E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110FC515_0070_FCD5_4150_33084E686939",
   "yaw": 90.99,
   "pitch": -39.86,
   "distance": 100,
   "hfov": 14.89
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.99,
   "hfov": 14.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.86
  }
 ],
 "id": "overlay_0ECA4687_0053_BDB4_4139_CDDC45052026",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0F05EB98_0051_8BDB_413D_98187FC880C0, this.camera_13F118C2_00D7_B5AF_4157_2372B6A8A315); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110F8515_0070_FCD5_413C_7B3E11A86F88",
   "yaw": -87.99,
   "pitch": -33.61,
   "distance": 100,
   "hfov": 16.16
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.99,
   "hfov": 16.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.61
  }
 ],
 "id": "overlay_0F7D871B_0050_BCDC_4141_53508C25FE2E",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_13DB36C2_00B0_BDAC_415A_5FAA69418AFC, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1231687A_00F0_955C_4157_B1FD77CAA614, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.67,
   "hfov": 8.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.53
  }
 ],
 "id": "overlay_12D5AEC6_00B0_8DB7_415A_2286F07F6FE9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_120F99D3_00B1_B7AD_4149_8811B165C366, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120EE87C_00F0_9554_4124_4D2EF3E353D0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_3_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": -4.12,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.57
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.26,
   "hfov": 7.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_3_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": -4.12
  }
 ],
 "id": "overlay_13C21398_00B1_9BDB_414D_80B916ABB0C0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=fU_zb0w2IWc&t=4s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_4_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ]
   },
   "pitch": -4,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.5
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.18,
   "hfov": 6.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_4_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ]
   },
   "pitch": -4
  }
 ],
 "id": "overlay_146F8DE5_00B0_8F75_413E_A55B9BA9C0BC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1361A944_00B1_94AB_415E_368D00CFC492, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120E687D_00F0_9554_4147_21E6F86E6DAB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 173.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_5_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 6.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.34,
   "hfov": 8.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.56
  }
 ],
 "id": "overlay_149A1EFE_00B0_8D57_4159_F09351C39939",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_13C43089_00B1_95BC_4152_0796DBF60AB4, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120FF87E_00F0_9554_4140_3CE1E33F8BE4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 166.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_6_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": -12.16,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.37,
   "hfov": 7.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_6_1_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -12.16
  }
 ],
 "id": "overlay_1512120A_00B1_74BF_4149_1B6A82D38D74",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=BAbzlRUxPZU', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 177.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_7_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   },
   "pitch": -12.16,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.14
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.67,
   "hfov": 5.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_7_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": -12.16
  }
 ],
 "id": "overlay_1593137C_00B0_9B54_4155_EC82AACEFEC0",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16C02541_00B1_9CAD_413E_0CCE722A99D0, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120F7880_00F0_95AC_4160_15D1DD30DF60, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -33.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_8_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 11.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.41
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.79,
   "hfov": 8.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.46
  }
 ],
 "id": "overlay_1431F169_00B0_B77C_4156_C9CE5164225F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1281ACF3_00B0_8D6D_4145_50E839DE6534, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120CA881_00F0_95AC_4158_5B786C69910C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -37.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_9_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": -1.99,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.2
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.42,
   "hfov": 5.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_9_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 39
     }
    ]
   },
   "pitch": -1.99
  }
 ],
 "id": "overlay_142508DA_00B0_955F_4161_0E3BDD0DAD1A",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=oZvQAhzRuhk&t=5s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -29.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_10_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": -1.99,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.42
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.76,
   "hfov": 5.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_10_1_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": -1.99
  }
 ],
 "id": "overlay_14036066_00B3_F577_415C_379B5C7A45CE",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_141D4174_00B0_976B_4119_1F5EB6213C00, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120C1882_00F0_95AC_414C_D7E093A47F8A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -140.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_11_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 5.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.54
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.35,
   "hfov": 8.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.33
  }
 ],
 "id": "overlay_14025501_00B1_BCAD_415E_F2F7FB55A4AC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_12950509_00B7_9CBD_413F_308AB4596406, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120D9883_00F0_95AC_415D_5D5C584DAB04, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -144.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_12_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ]
   },
   "pitch": -10.28,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.64,
   "hfov": 6.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_12_1_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 48
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "id": "overlay_1170FCB3_00B0_8DED_415A_4170316D1D96",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=FjAVcL9uZyQ&t=2s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -136.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_13_0.png",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": -9.02,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.76
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.98,
   "hfov": 4.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_0_HS_13_1_0_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 45
     }
    ]
   },
   "pitch": -9.02
  }
 ],
 "id": "overlay_128E7DA5_00B0_8FF5_412B_BB645E73F790",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0, this.camera_13C5791D_00D7_B4D4_4164_81ECA9AE8CB9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_11091515_0070_FCD5_4149_45416D1BCAC7",
   "yaw": 8.92,
   "pitch": -23.31,
   "distance": 100,
   "hfov": 7.88
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.92,
   "hfov": 7.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.31
  }
 ],
 "id": "overlay_0EDB9D35_0050_8CD4_4154_0512DF8D8A01",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B, this.camera_13D1E906_00D7_B4B7_4164_8D10AC4A17F4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1108D515_0070_FCD5_4148_55E1C189B239",
   "yaw": -80.94,
   "pitch": -17.62,
   "distance": 100,
   "hfov": 8.18
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.94,
   "hfov": 8.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.62
  }
 ],
 "id": "overlay_0E090132_0053_94EC_414F_E9D1BA774640",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0E29462C_0050_9CF4_413C_E75803D63BF0, this.camera_13A80836_00D7_B4D4_4166_E72DE6A5A86F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110F5515_0070_FCD5_4120_88A1A278B64C",
   "yaw": 89.16,
   "pitch": -30.84,
   "distance": 100,
   "hfov": 16.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.16,
   "hfov": 16.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.84
  }
 ],
 "id": "overlay_0ECA217B_0050_975D_4145_F999D3B9C0C9",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5, this.camera_13A6B84D_00D7_B4B4_414C_D0A7954CEF17); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_110F2515_0070_FCC5_4140_30BAF365F562",
   "yaw": -87.78,
   "pitch": -30.62,
   "distance": 100,
   "hfov": 16.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.78,
   "hfov": 16.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.62
  }
 ],
 "id": "overlay_0F5003B1_0050_9BED_413D_1F4B0ECF2D6C",
 "data": {
  "label": "Arrow 07a"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_16875672_00B0_FD6C_4151_28D09CF5714C, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120D0886_00F0_95B4_4133_C48E1780B894, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 38.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 14.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.29
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.86,
   "hfov": 8.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.99
  }
 ],
 "id": "overlay_131600F2_00B0_B56C_414E_CDA03FBF2A3E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_15E6AA52_00B0_B4AF_415E_C6BD9D1FB6B8, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120C7888_00F0_95BC_4155_46D9CFDAC428, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 35.78,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_3_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   },
   "pitch": 3.92,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.37
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.78,
   "hfov": 5.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_3_1_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 42
     }
    ]
   },
   "pitch": 3.92
  }
 ],
 "id": "overlay_128FEAAA_00B3_F5FF_415E_31E25CFCCFA5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=Lh5i7hltfjc', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 42.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_4_0.png",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "pitch": 3.67,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.87
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.19,
   "hfov": 4.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_4_1_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 38
     }
    ]
   },
   "pitch": 3.67
  }
 ],
 "id": "overlay_13C2EFB9_00B1_8BDD_4158_A002F0F16553",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1504ED14_00AF_8CD4_4132_4148BC451C98, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120DE88B_00F0_95BC_4163_946A66D1E4C6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 8.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_5_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.34
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.28,
   "hfov": 8.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.59
  }
 ],
 "id": "overlay_146B772D_00AF_7CF5_4145_28BDE5B030E5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_14B58DD3_00D0_8FAD_413C_B4B7FE577C7A, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120D188D_00F0_95B4_4162_91FBF658D0A2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 3.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_6_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -2.61,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.14,
   "hfov": 6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_6_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 49
     }
    ]
   },
   "pitch": -2.61
  }
 ],
 "id": "overlay_116DDDE0_00AF_8F6C_415D_B1F5C0CCA370",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=1oH8fBzJFjU&t=1s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 13.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_7_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": -2.11,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.67
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.31,
   "hfov": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_7_1_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 48
     }
    ]
   },
   "pitch": -2.11
  }
 ],
 "id": "overlay_147D744B_00D0_9CBC_4129_079BFCDFC770",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_126C605A_00D0_B55F_4136_DE7EA906DD98, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120A8890_00F0_95AC_414D_96B8D96D7BF0, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -27.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_8_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 11.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.39
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.91,
   "hfov": 8.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.94
  }
 ],
 "id": "overlay_1569A2A6_00D0_F5F7_4139_6ED7D2862C98",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_139145AA_00D0_9FFF_413E_D6913B8F64C8, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120A7892_00F0_95AC_4158_7CE0D0E65E38, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -31.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_9_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": -2.74,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.15
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.64,
   "hfov": 5.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_9_1_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 42
     }
    ]
   },
   "pitch": -2.74
  }
 ],
 "id": "overlay_13B82BC0_00D3_8BAB_4159_23353B99C260",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=zx32xRECuQY&t=3s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -22.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_10_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": -2.74,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.13
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.85,
   "hfov": 6.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_10_1_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": -2.74
  }
 ],
 "id": "overlay_162C728B_00D1_95BC_415E_C8DB96BD3518",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_15FEB7AD_00D0_9BF4_4122_4E86267EEF60, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120BF895_00F0_95D4_410B_7DFBBFDDF910, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -136.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_11_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 5.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -136.63,
   "hfov": 8.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.96
  }
 ],
 "id": "overlay_15CF3F74_00D7_8B6B_414B_EFCF9AA869BC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_1571AA07_00D1_94B5_415B_8B6117849BAB, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_120B2898_00F0_95DC_4165_ACA419252B30, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -139.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_12_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -9.16,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.93
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.73,
   "hfov": 4.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_12_1_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 43
     }
    ]
   },
   "pitch": -9.16
  }
 ],
 "id": "overlay_1286A638_00D1_9CDB_4142_D78A40BD6698",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.youtube.com/watch?v=RGW82Qp3hr8&t=3s', '_blank')",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -133.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_13_0.png",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -8.19,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.97
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.3,
   "hfov": 3.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_13_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "pitch": -8.19
  }
 ],
 "id": "overlay_14754B31_00D0_F4ED_4140_57EC8251CD54",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -171.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_14_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -11.8,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.59
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.99,
   "hfov": 7.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_14_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ]
   },
   "pitch": -11.8
  }
 ],
 "id": "overlay_12B710A2_00D1_75EF_4156_AA6E3E4A2241",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_164A6260_00D0_956B_4157_54C092A1F890, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1208989A_00F0_95DC_4145_1000633937D8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -176.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_15_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 7.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.52
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.73,
   "hfov": 8.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.04
  }
 ],
 "id": "overlay_131472BB_00D0_95DC_4160_4D51EE40BFC1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -171.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_16_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   },
   "pitch": -11.79,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.81
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.89,
   "hfov": 7.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_16_1_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": -11.79
  }
 ],
 "id": "overlay_169B13DF_00D0_FB54_4161_436CE0510EFC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_12EAF71F_00EF_9CD4_415F_A9493FA6086A, {'pressedIconColor':'#888888','paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingTop':5,'paddingBottom':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingLeft':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_1208089C_00F0_95D4_415E_752F76EA1306, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 175.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_17_0.png",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": -12.16,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.02
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.53,
   "hfov": 8.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_0_HS_17_1_0_map.gif",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ]
   },
   "pitch": -12.16
  }
 ],
 "id": "overlay_12863F38_00D1_8CDC_4133_0A5C9EFDA230",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1108A515_0070_FCD5_4152_D1ED9F93952E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_11087515_0070_FCD5_4150_10FCD7904888",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0EAB2DD6_0050_8F54_4151_4C8AEA30D67B_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1220C7FD_00F0_9B55_415B_D727A426794E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_122017FE_00F0_9B57_4165_2AFF447D4BDC",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0F81E53E_006F_9CD7_4150_95C080CF05D4_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110EF524_0070_FCF4_4155_6985074A47D4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_1_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110E4524_0070_FCF4_4151_D83EDE8B3472",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0FF0D11D_0053_B4D4_414D_F9B3DC9CC5A5_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110AE515_0070_FCD5_413A_36ABA6833FA4",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 22,
 "id": "AnimatedImageResource_122A9780_00F0_9BAC_4153_9DF4FD87C280",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0BEA8094_0051_75AB_4121_7F4D4A8990F0_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110FC515_0070_FCD5_4150_33084E686939",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_1_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110F8515_0070_FCD5_413C_7B3E11A86F88",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0E29462C_0050_9CF4_413C_E75803D63BF0_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_11091515_0070_FCD5_4149_45416D1BCAC7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_1108D515_0070_FCD5_4148_55E1C189B239",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0EBE3210_0050_B4AB_4150_9EA55F0E93A0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110F5515_0070_FCD5_4120_88A1A278B64C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_1_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_110F2515_0070_FCC5_4140_30BAF365F562",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_0F05EB98_0051_8BDB_413D_98187FC880C0_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "rowCount": 6
}],
 "class": "Player",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 20,
 "paddingLeft": 0,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player508"
 },
 "vrPolyfillScale": 0.5,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
