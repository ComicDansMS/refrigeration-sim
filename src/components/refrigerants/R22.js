const R22 = {
  header: ['temperature', 'pressure', 'liquidDensity', 'vapourVolume', 'enthalpyLiquid', 'enthalpyVapour', 'entropyLiquid', 'entropyVapour'],
  temperature: [-100, -95, -90, -85, -80, -75, -70, -65, -60, -55, -50, -49, -48, -47, -46, -45, -44, -43, -42, -41, -40, -40, -40, -39, -38, -37, -36, -35, -34, -33, -32, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52.5, 55, 57.5, 60, 62.5, 65, 67.5, 70, 72.5, 75, 77.5, 80, 82.5, 85, 87.5, 90, 93, 96, 96.07, 96.14],
  pressure: [0.002, 0.0034, 0.0048, 0.007575, 0.01035, 0.015394999999999999, 0.02044, 0.028955, 0.03747, 0.050980000000000004, 0.06449, 0.067945, 0.0714, 0.07515, 0.0789, 0.08295, 0.087, 0.091375, 0.09575, 0.098535, 0.10132, 0.10325, 0.10518, 0.11025499999999999, 0.11533, 0.12078, 0.12623, 0.13208, 0.13793, 0.14418999999999998, 0.15045, 0.157145, 0.16384, 0.170995, 0.17815, 0.185775, 0.1934, 0.201525, 0.20965, 0.21828999999999998, 0.22693, 0.23611, 0.24529, 0.25503, 0.26477, 0.275095, 0.28542, 0.29635, 0.30728, 0.31884, 0.3304, 0.34261, 0.35482, 0.367705, 0.38059, 0.39417, 0.40775, 0.422055, 0.43636, 0.45141, 0.46646, 0.48228499999999996, 0.49811, 0.514725, 0.53134, 0.54878, 0.56622, 0.584505, 0.60279, 0.62194, 0.64109, 0.6611400000000001, 0.68119, 0.7021649999999999, 0.72314, 0.7450600000000001, 0.76698, 0.789875, 0.81277, 0.836665, 0.86056, 0.8854850000000001, 0.91041, 0.936385, 0.96236, 0.98943, 1.0165, 1.0446499999999999, 1.0728, 1.1021, 1.1314, 1.1619, 1.1924, 1.22405, 1.2557, 1.2886, 1.3215, 1.3556499999999998, 1.3898, 1.4251999999999998, 1.4606, 1.49735, 1.5341, 1.5722, 1.6103, 1.64975, 1.6892, 1.7300499999999999, 1.7709, 1.8132, 1.8555, 1.8993, 1.9431, 2.0592, 2.1753, 2.3013500000000002, 2.4274, 2.5641, 2.7008, 2.84875, 2.9967, 3.15675, 3.3168, 3.48975, 3.6627, 3.8497500000000002, 4.0368, 4.2392, 4.4416, 4.6617999999999995, 4.882, 4.936, 4.99],
  liquidDensity: [1571.7, 1558.4, 1545.1, 1531.6999999999998, 1518.3, 1504.6999999999998, 1491.1, 1477.35, 1463.6, 1449.55, 1435.5, 1432.65, 1429.8, 1426.9499999999998, 1424.1, 1421.25, 1418.4, 1415.5, 1412.6, 1410.85, 1409.1, 1407.9499999999998, 1406.8, 1403.9, 1401, 1398.05, 1395.1, 1392.15, 1389.2, 1386.25, 1383.3, 1380.3, 1377.3, 1374.3, 1371.3, 1368.25, 1365.2, 1362.15, 1359.1, 1356, 1352.9, 1349.85, 1346.8, 1343.65, 1340.5, 1337.35, 1334.2, 1331.0500000000002, 1327.9, 1324.7, 1321.5, 1318.25, 1315, 1311.75, 1308.5, 1305.2, 1301.9, 1298.6, 1295.3, 1291.9499999999998, 1288.6, 1285.1999999999998, 1281.8, 1278.4, 1275, 1271.55, 1268.1, 1264.6, 1261.1, 1257.55, 1254, 1250.45, 1246.9, 1243.3000000000002, 1239.7, 1236.0500000000002, 1232.4, 1228.7, 1225, 1221.3, 1217.6, 1213.8, 1210, 1206.2, 1202.4, 1198.5, 1194.6, 1190.6999999999998, 1186.8, 1182.8, 1178.8, 1174.75, 1170.7, 1166.6, 1162.5, 1158.35, 1154.2, 1149.95, 1145.7, 1141.4, 1137.1, 1132.75, 1128.4, 1123.95, 1119.5, 1114.95, 1110.4, 1105.8000000000002, 1101.2, 1096.5, 1091.8, 1086.9499999999998, 1082.1, 1069.6, 1057.1, 1043.8, 1030.5, 1016.15, 1001.8, 986.0999999999999, 970.4, 952.8499999999999, 935.3, 915.05, 894.8, 869.95, 845.1, 811.3, 777.5, 721.45, 665.4, 594.5999999999999, 523.8],
  vapourVolume: [8.298, 5.9764, 3.6548, 2.7182, 1.7816, 1.36318, 0.94476, 0.74105, 0.53734, 0.43069500000000005, 0.32405, 0.30937000000000003, 0.29469, 0.28159, 0.26849, 0.25678, 0.24507, 0.234585, 0.2241, 0.21833, 0.21256, 0.20890999999999998, 0.20526, 0.19679, 0.18832, 0.18069, 0.17306, 0.166165, 0.15927, 0.153035, 0.1468, 0.141155, 0.13551, 0.13038, 0.12525, 0.12059, 0.11593, 0.111685, 0.10744, 0.10357, 0.0997, 0.09616, 0.09262, 0.08938499999999999, 0.08615, 0.08319, 0.08023, 0.07751, 0.07479, 0.07229, 0.06979, 0.067495, 0.0652, 0.06308, 0.06096, 0.05901, 0.05706, 0.055255, 0.05345, 0.051785, 0.05012, 0.048575, 0.04703, 0.0456, 0.04417, 0.042845, 0.04152, 0.04029, 0.03906, 0.03791, 0.03676, 0.035695000000000005, 0.03463, 0.03364, 0.03265, 0.03172, 0.03079, 0.029925, 0.02906, 0.028249999999999997, 0.02744, 0.026685, 0.02593, 0.02522, 0.02451, 0.02385, 0.02319, 0.022565, 0.02194, 0.021355, 0.02077, 0.020225, 0.01968, 0.01916, 0.01864, 0.018155, 0.01767, 0.017210000000000003, 0.01675, 0.01632, 0.01589, 0.01548, 0.01507, 0.014685, 0.0143, 0.013935, 0.01357, 0.013225, 0.01288, 0.012555, 0.01223, 0.01192, 0.01161, 0.010905000000000001, 0.0102, 0.009575, 0.00895, 0.008395, 0.00784, 0.007339999999999999, 0.00684, 0.00639, 0.00594, 0.005525, 0.00511, 0.00472, 0.00433, 0.00394, 0.00355, 0.003095, 0.00264, 0.002275, 0.00191],
  enthalpyLiquid: [90.24, 95.595, 100.95, 106.305, 111.66, 117.00999999999999, 122.36, 127.73500000000001, 133.11, 138.51, 143.91, 144.995, 146.08, 147.16500000000002, 148.25, 149.34, 150.43, 151.52, 152.61, 153.27, 153.93, 154.365, 154.8, 155.895, 156.99, 158.09, 159.19, 160.29500000000002, 161.4, 162.505, 163.61, 164.715, 165.82, 166.93, 168.04, 169.155, 170.27, 171.39, 172.51, 173.63, 174.75, 175.875, 177, 178.13, 179.26, 180.39499999999998, 181.53, 182.67000000000002, 183.81, 184.95, 186.09, 187.235, 188.38, 189.535, 190.69, 191.845, 193, 194.16, 195.32, 196.49, 197.66, 198.82999999999998, 200, 201.175, 202.35, 203.535, 204.72, 205.91, 207.1, 208.29500000000002, 209.49, 210.69, 211.89, 213.1, 214.31, 215.525, 216.74, 217.96, 219.18, 220.405, 221.63, 222.865, 224.1, 225.345, 226.59, 227.84, 229.09, 230.345, 231.6, 232.87, 234.14, 235.415, 236.69, 237.97, 239.25, 240.54500000000002, 241.84, 243.14, 244.44, 245.75, 247.06, 248.385, 249.71, 251.04000000000002, 252.37, 253.715, 255.06, 256.41499999999996, 257.77, 259.14, 260.51, 261.89, 263.27, 266.78999999999996, 270.31, 273.935, 277.56, 281.31, 285.06, 288.98, 292.9, 297.03999999999996, 301.18, 305.64, 310.1, 315.07500000000005, 320.05, 326.015, 331.98, 340.42, 348.86, 357.725, 366.59],
  enthalpyVapour: [358.93, 361.375, 363.82, 366.28499999999997, 368.75, 371.21500000000003, 373.68, 376.13, 378.58, 380.985, 383.39, 383.87, 384.35, 384.82000000000005, 385.29, 385.76, 386.23, 386.70000000000005, 387.17, 387.44500000000005, 387.72, 387.905, 388.09, 388.54999999999995, 389.01, 389.47, 389.93, 390.385, 390.84, 391.28999999999996, 391.74, 392.185, 392.63, 393.075, 393.52, 393.955, 394.39, 394.825, 395.26, 395.69, 396.12, 396.395, 396.67, 397.24, 397.81, 398.225, 398.64, 399.04999999999995, 399.46, 399.865, 400.27, 400.66999999999996, 401.07, 401.46000000000004, 401.85, 402.24, 402.63, 403.01, 403.39, 403.765, 404.14, 404.505, 404.87, 405.23, 405.59, 405.945, 406.3, 406.645, 406.99, 407.33000000000004, 407.67, 408, 408.33, 408.65, 408.97, 409.285, 409.6, 409.905, 410.21, 410.505, 410.8, 411.09000000000003, 411.38, 411.655, 411.93, 412.195, 412.46, 412.72, 412.98, 413.22, 413.46, 413.695, 413.93, 414.15, 414.37, 414.58000000000004, 414.79, 414.985, 415.18, 415.36, 415.54, 415.70500000000004, 415.87, 416.02, 416.17, 416.305, 416.44, 416.56, 416.68, 416.775, 416.87, 416.95, 417.03, 417.135, 417.24, 417.19, 417.14, 416.895, 416.65, 416.16999999999996, 415.69, 414.89, 414.09, 412.845, 411.6, 409.66, 407.72, 404.525, 401.33, 394.395, 387.46, 377.025, 366.59],
  entropyLiquid: [0.5027, 0.5327999999999999, 0.5629, 0.5912999999999999, 0.6197, 0.6467499999999999, 0.6738, 0.6995499999999999, 0.7253, 0.75005, 0.7748, 0.7796000000000001, 0.7844, 0.7892, 0.794, 0.7987500000000001, 0.8035, 0.8082499999999999, 0.813, 0.8158, 0.8186, 0.8205, 0.8224, 0.8270500000000001, 0.8317, 0.8363499999999999, 0.841, 0.8455999999999999, 0.8502, 0.8548, 0.8594, 0.86395, 0.8685, 0.8730500000000001, 0.8776, 0.8821000000000001, 0.8866, 0.89105, 0.8955, 0.89995, 0.9044, 0.9088499999999999, 0.9133, 0.9177500000000001, 0.9222, 0.92655, 0.9309, 0.9353, 0.9397, 0.9440500000000001, 0.9484, 0.95275, 0.9571, 0.9614, 0.9657, 0.97, 0.9743, 0.9786, 0.9829, 0.9872000000000001, 0.9915, 0.99575, 1, 1.0042499999999999, 1.0085, 1.01275, 1.017, 1.0211999999999999, 1.0254, 1.0296, 1.0338, 1.038, 1.0422, 1.0464, 1.0506, 1.0548, 1.059, 1.0631499999999998, 1.0673, 1.07145, 1.0756, 1.0798, 1.084, 1.0881500000000002, 1.0923, 1.09645, 1.1006, 1.1047, 1.1088, 1.11295, 1.1171, 1.1212499999999999, 1.1254, 1.1295, 1.1336, 1.13775, 1.1419, 1.146, 1.1501, 1.15425, 1.1584, 1.16255, 1.1667, 1.1708, 1.1749, 1.1790500000000002, 1.1832, 1.18735, 1.1915, 1.19565, 1.1998, 1.2039499999999999, 1.2081, 1.2186, 1.2291, 1.2397, 1.2503, 1.26105, 1.2718, 1.2829000000000002, 1.294, 1.30545, 1.3169, 1.3291, 1.3413, 1.35465, 1.368, 1.3839000000000001, 1.3998, 1.422, 1.4442, 1.468, 1.4918],
  entropyVapour: [2.0545, 2.02635, 1.9982, 1.9745, 1.9508, 1.93085, 1.9109, 1.89395, 1.877, 1.8625, 1.848, 1.84535, 1.8427, 1.84015, 1.8376, 1.8351, 1.8326, 1.8301500000000002, 1.8277, 1.8263, 1.8249, 1.82395, 1.823, 1.8207, 1.8184, 1.8162, 1.814, 1.8118, 1.8096, 1.8075, 1.8054, 1.80335, 1.8013, 1.7993, 1.7973, 1.79535, 1.7934, 1.7915, 1.7896, 1.78775, 1.7859, 1.7840500000000001, 1.7822, 1.78045, 1.7787, 1.7769499999999998, 1.7752, 1.77355, 1.7719, 1.7702499999999999, 1.7686, 1.76695, 1.7653, 1.7637, 1.7621, 1.7605499999999998, 1.759, 1.7574999999999998, 1.756, 1.7545, 1.753, 1.7515, 1.75, 1.74855, 1.7471, 1.7457, 1.7443, 1.7429000000000001, 1.7415, 1.7401, 1.7387, 1.73735, 1.736, 1.73465, 1.7333, 1.7319499999999999, 1.7306, 1.7292999999999998, 1.728, 1.7267000000000001, 1.7254, 1.7241, 1.7228, 1.7215, 1.7202, 1.71895, 1.7177, 1.7164000000000001, 1.7151, 1.7138499999999999, 1.7126, 1.71135, 1.7101, 1.7088, 1.7075, 1.70625, 1.705, 1.7037, 1.7024, 1.70115, 1.6999, 1.6985999999999999, 1.6973, 1.6960000000000002, 1.6947, 1.6934, 1.6921, 1.69075, 1.6894, 1.68805, 1.6867, 1.6853500000000001, 1.684, 1.6804000000000001, 1.6768, 1.673, 1.6692, 1.6651, 1.661, 1.6564, 1.6518, 1.64655, 1.6413, 1.635, 1.6287, 1.6207500000000001, 1.6128, 1.60175, 1.5907, 1.5699, 1.5491, 1.5204499999999999, 1.4918],
};

export { R22 }