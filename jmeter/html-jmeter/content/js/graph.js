/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 95.0, "minX": 0.0, "maxY": 6314.0, "series": [{"data": [[0.0, 95.0], [0.1, 104.0], [0.2, 106.0], [0.3, 107.0], [0.4, 109.0], [0.5, 111.0], [0.6, 112.0], [0.7, 113.0], [0.8, 115.0], [0.9, 116.0], [1.0, 117.0], [1.1, 119.0], [1.2, 121.0], [1.3, 123.0], [1.4, 124.0], [1.5, 126.0], [1.6, 129.0], [1.7, 131.0], [1.8, 136.0], [1.9, 145.0], [2.0, 166.0], [2.1, 169.0], [2.2, 172.0], [2.3, 174.0], [2.4, 176.0], [2.5, 179.0], [2.6, 180.0], [2.7, 181.0], [2.8, 183.0], [2.9, 184.0], [3.0, 185.0], [3.1, 187.0], [3.2, 187.0], [3.3, 188.0], [3.4, 189.0], [3.5, 190.0], [3.6, 191.0], [3.7, 192.0], [3.8, 193.0], [3.9, 194.0], [4.0, 195.0], [4.1, 196.0], [4.2, 197.0], [4.3, 198.0], [4.4, 198.0], [4.5, 199.0], [4.6, 200.0], [4.7, 201.0], [4.8, 202.0], [4.9, 203.0], [5.0, 204.0], [5.1, 205.0], [5.2, 206.0], [5.3, 207.0], [5.4, 208.0], [5.5, 209.0], [5.6, 210.0], [5.7, 211.0], [5.8, 212.0], [5.9, 213.0], [6.0, 215.0], [6.1, 217.0], [6.2, 218.0], [6.3, 219.0], [6.4, 221.0], [6.5, 222.0], [6.6, 224.0], [6.7, 227.0], [6.8, 229.0], [6.9, 234.0], [7.0, 239.0], [7.1, 248.0], [7.2, 258.0], [7.3, 264.0], [7.4, 268.0], [7.5, 271.0], [7.6, 273.0], [7.7, 275.0], [7.8, 276.0], [7.9, 278.0], [8.0, 280.0], [8.1, 281.0], [8.2, 282.0], [8.3, 284.0], [8.4, 285.0], [8.5, 286.0], [8.6, 287.0], [8.7, 288.0], [8.8, 289.0], [8.9, 290.0], [9.0, 291.0], [9.1, 292.0], [9.2, 293.0], [9.3, 294.0], [9.4, 295.0], [9.5, 295.0], [9.6, 297.0], [9.7, 298.0], [9.8, 299.0], [9.9, 300.0], [10.0, 302.0], [10.1, 303.0], [10.2, 304.0], [10.3, 305.0], [10.4, 306.0], [10.5, 307.0], [10.6, 309.0], [10.7, 310.0], [10.8, 311.0], [10.9, 313.0], [11.0, 314.0], [11.1, 316.0], [11.2, 318.0], [11.3, 319.0], [11.4, 321.0], [11.5, 323.0], [11.6, 325.0], [11.7, 328.0], [11.8, 333.0], [11.9, 340.0], [12.0, 353.0], [12.1, 361.0], [12.2, 365.0], [12.3, 368.0], [12.4, 371.0], [12.5, 373.0], [12.6, 375.0], [12.7, 376.0], [12.8, 378.0], [12.9, 380.0], [13.0, 382.0], [13.1, 383.0], [13.2, 384.0], [13.3, 385.0], [13.4, 386.0], [13.5, 388.0], [13.6, 389.0], [13.7, 391.0], [13.8, 392.0], [13.9, 393.0], [14.0, 394.0], [14.1, 395.0], [14.2, 396.0], [14.3, 397.0], [14.4, 399.0], [14.5, 400.0], [14.6, 401.0], [14.7, 402.0], [14.8, 403.0], [14.9, 404.0], [15.0, 405.0], [15.1, 406.0], [15.2, 406.0], [15.3, 408.0], [15.4, 409.0], [15.5, 410.0], [15.6, 411.0], [15.7, 413.0], [15.8, 415.0], [15.9, 416.0], [16.0, 418.0], [16.1, 419.0], [16.2, 422.0], [16.3, 424.0], [16.4, 428.0], [16.5, 431.0], [16.6, 437.0], [16.7, 448.0], [16.8, 458.0], [16.9, 463.0], [17.0, 468.0], [17.1, 473.0], [17.2, 474.0], [17.3, 476.0], [17.4, 479.0], [17.5, 481.0], [17.6, 483.0], [17.7, 485.0], [17.8, 486.0], [17.9, 488.0], [18.0, 490.0], [18.1, 491.0], [18.2, 492.0], [18.3, 494.0], [18.4, 495.0], [18.5, 496.0], [18.6, 497.0], [18.7, 498.0], [18.8, 499.0], [18.9, 500.0], [19.0, 501.0], [19.1, 502.0], [19.2, 503.0], [19.3, 504.0], [19.4, 505.0], [19.5, 506.0], [19.6, 507.0], [19.7, 508.0], [19.8, 509.0], [19.9, 511.0], [20.0, 512.0], [20.1, 513.0], [20.2, 514.0], [20.3, 516.0], [20.4, 516.0], [20.5, 518.0], [20.6, 519.0], [20.7, 521.0], [20.8, 523.0], [20.9, 525.0], [21.0, 527.0], [21.1, 530.0], [21.2, 533.0], [21.3, 538.0], [21.4, 545.0], [21.5, 558.0], [21.6, 565.0], [21.7, 567.0], [21.8, 570.0], [21.9, 572.0], [22.0, 575.0], [22.1, 576.0], [22.2, 578.0], [22.3, 579.0], [22.4, 580.0], [22.5, 582.0], [22.6, 583.0], [22.7, 584.0], [22.8, 585.0], [22.9, 586.0], [23.0, 588.0], [23.1, 588.0], [23.2, 589.0], [23.3, 590.0], [23.4, 591.0], [23.5, 592.0], [23.6, 593.0], [23.7, 594.0], [23.8, 595.0], [23.9, 596.0], [24.0, 597.0], [24.1, 598.0], [24.2, 599.0], [24.3, 600.0], [24.4, 600.0], [24.5, 601.0], [24.6, 602.0], [24.7, 603.0], [24.8, 604.0], [24.9, 605.0], [25.0, 606.0], [25.1, 606.0], [25.2, 607.0], [25.3, 608.0], [25.4, 609.0], [25.5, 609.0], [25.6, 611.0], [25.7, 612.0], [25.8, 613.0], [25.9, 613.0], [26.0, 614.0], [26.1, 616.0], [26.2, 617.0], [26.3, 618.0], [26.4, 619.0], [26.5, 620.0], [26.6, 622.0], [26.7, 624.0], [26.8, 625.0], [26.9, 627.0], [27.0, 630.0], [27.1, 634.0], [27.2, 637.0], [27.3, 643.0], [27.4, 655.0], [27.5, 662.0], [27.6, 666.0], [27.7, 668.0], [27.8, 670.0], [27.9, 672.0], [28.0, 674.0], [28.1, 676.0], [28.2, 678.0], [28.3, 679.0], [28.4, 680.0], [28.5, 681.0], [28.6, 682.0], [28.7, 683.0], [28.8, 684.0], [28.9, 685.0], [29.0, 686.0], [29.1, 687.0], [29.2, 688.0], [29.3, 689.0], [29.4, 690.0], [29.5, 690.0], [29.6, 691.0], [29.7, 692.0], [29.8, 693.0], [29.9, 694.0], [30.0, 694.0], [30.1, 695.0], [30.2, 695.0], [30.3, 696.0], [30.4, 697.0], [30.5, 697.0], [30.6, 698.0], [30.7, 699.0], [30.8, 700.0], [30.9, 700.0], [31.0, 701.0], [31.1, 701.0], [31.2, 702.0], [31.3, 702.0], [31.4, 703.0], [31.5, 704.0], [31.6, 705.0], [31.7, 706.0], [31.8, 706.0], [31.9, 707.0], [32.0, 708.0], [32.1, 709.0], [32.2, 710.0], [32.3, 710.0], [32.4, 711.0], [32.5, 712.0], [32.6, 713.0], [32.7, 714.0], [32.8, 715.0], [32.9, 716.0], [33.0, 717.0], [33.1, 718.0], [33.2, 719.0], [33.3, 720.0], [33.4, 721.0], [33.5, 722.0], [33.6, 724.0], [33.7, 725.0], [33.8, 726.0], [33.9, 729.0], [34.0, 732.0], [34.1, 735.0], [34.2, 738.0], [34.3, 743.0], [34.4, 755.0], [34.5, 760.0], [34.6, 764.0], [34.7, 767.0], [34.8, 768.0], [34.9, 769.0], [35.0, 771.0], [35.1, 772.0], [35.2, 774.0], [35.3, 776.0], [35.4, 777.0], [35.5, 778.0], [35.6, 779.0], [35.7, 781.0], [35.8, 781.0], [35.9, 782.0], [36.0, 783.0], [36.1, 784.0], [36.2, 785.0], [36.3, 787.0], [36.4, 788.0], [36.5, 788.0], [36.6, 789.0], [36.7, 789.0], [36.8, 790.0], [36.9, 791.0], [37.0, 792.0], [37.1, 792.0], [37.2, 793.0], [37.3, 794.0], [37.4, 794.0], [37.5, 795.0], [37.6, 796.0], [37.7, 796.0], [37.8, 797.0], [37.9, 798.0], [38.0, 798.0], [38.1, 799.0], [38.2, 799.0], [38.3, 800.0], [38.4, 800.0], [38.5, 800.0], [38.6, 801.0], [38.7, 802.0], [38.8, 802.0], [38.9, 803.0], [39.0, 804.0], [39.1, 804.0], [39.2, 805.0], [39.3, 805.0], [39.4, 806.0], [39.5, 807.0], [39.6, 808.0], [39.7, 808.0], [39.8, 809.0], [39.9, 810.0], [40.0, 811.0], [40.1, 812.0], [40.2, 812.0], [40.3, 813.0], [40.4, 814.0], [40.5, 815.0], [40.6, 815.0], [40.7, 816.0], [40.8, 817.0], [40.9, 818.0], [41.0, 819.0], [41.1, 820.0], [41.2, 821.0], [41.3, 822.0], [41.4, 824.0], [41.5, 825.0], [41.6, 826.0], [41.7, 828.0], [41.8, 830.0], [41.9, 832.0], [42.0, 834.0], [42.1, 838.0], [42.2, 842.0], [42.3, 847.0], [42.4, 854.0], [42.5, 860.0], [42.6, 863.0], [42.7, 865.0], [42.8, 868.0], [42.9, 869.0], [43.0, 871.0], [43.1, 872.0], [43.2, 874.0], [43.3, 875.0], [43.4, 876.0], [43.5, 877.0], [43.6, 878.0], [43.7, 879.0], [43.8, 880.0], [43.9, 881.0], [44.0, 882.0], [44.1, 883.0], [44.2, 884.0], [44.3, 885.0], [44.4, 886.0], [44.5, 886.0], [44.6, 887.0], [44.7, 888.0], [44.8, 888.0], [44.9, 889.0], [45.0, 889.0], [45.1, 890.0], [45.2, 891.0], [45.3, 891.0], [45.4, 892.0], [45.5, 892.0], [45.6, 893.0], [45.7, 893.0], [45.8, 894.0], [45.9, 895.0], [46.0, 895.0], [46.1, 896.0], [46.2, 897.0], [46.3, 897.0], [46.4, 898.0], [46.5, 899.0], [46.6, 899.0], [46.7, 900.0], [46.8, 901.0], [46.9, 901.0], [47.0, 902.0], [47.1, 903.0], [47.2, 903.0], [47.3, 904.0], [47.4, 905.0], [47.5, 905.0], [47.6, 906.0], [47.7, 906.0], [47.8, 907.0], [47.9, 908.0], [48.0, 909.0], [48.1, 910.0], [48.2, 911.0], [48.3, 912.0], [48.4, 913.0], [48.5, 914.0], [48.6, 915.0], [48.7, 916.0], [48.8, 917.0], [48.9, 917.0], [49.0, 918.0], [49.1, 919.0], [49.2, 921.0], [49.3, 922.0], [49.4, 923.0], [49.5, 924.0], [49.6, 925.0], [49.7, 928.0], [49.8, 930.0], [49.9, 932.0], [50.0, 935.0], [50.1, 939.0], [50.2, 945.0], [50.3, 954.0], [50.4, 959.0], [50.5, 963.0], [50.6, 966.0], [50.7, 968.0], [50.8, 970.0], [50.9, 971.0], [51.0, 973.0], [51.1, 974.0], [51.2, 975.0], [51.3, 977.0], [51.4, 978.0], [51.5, 979.0], [51.6, 980.0], [51.7, 981.0], [51.8, 981.0], [51.9, 983.0], [52.0, 984.0], [52.1, 985.0], [52.2, 985.0], [52.3, 986.0], [52.4, 987.0], [52.5, 988.0], [52.6, 988.0], [52.7, 989.0], [52.8, 990.0], [52.9, 990.0], [53.0, 991.0], [53.1, 992.0], [53.2, 992.0], [53.3, 993.0], [53.4, 994.0], [53.5, 994.0], [53.6, 995.0], [53.7, 995.0], [53.8, 996.0], [53.9, 997.0], [54.0, 998.0], [54.1, 998.0], [54.2, 999.0], [54.3, 999.0], [54.4, 1000.0], [54.5, 1001.0], [54.6, 1001.0], [54.7, 1002.0], [54.8, 1003.0], [54.9, 1003.0], [55.0, 1004.0], [55.1, 1005.0], [55.2, 1005.0], [55.3, 1006.0], [55.4, 1007.0], [55.5, 1007.0], [55.6, 1007.0], [55.7, 1008.0], [55.8, 1009.0], [55.9, 1009.0], [56.0, 1010.0], [56.1, 1011.0], [56.2, 1012.0], [56.3, 1013.0], [56.4, 1013.0], [56.5, 1014.0], [56.6, 1015.0], [56.7, 1016.0], [56.8, 1017.0], [56.9, 1018.0], [57.0, 1019.0], [57.1, 1020.0], [57.2, 1021.0], [57.3, 1023.0], [57.4, 1024.0], [57.5, 1027.0], [57.6, 1030.0], [57.7, 1034.0], [57.8, 1039.0], [57.9, 1046.0], [58.0, 1053.0], [58.1, 1061.0], [58.2, 1064.0], [58.3, 1066.0], [58.4, 1067.0], [58.5, 1069.0], [58.6, 1071.0], [58.7, 1072.0], [58.8, 1074.0], [58.9, 1075.0], [59.0, 1077.0], [59.1, 1078.0], [59.2, 1079.0], [59.3, 1080.0], [59.4, 1081.0], [59.5, 1082.0], [59.6, 1083.0], [59.7, 1084.0], [59.8, 1085.0], [59.9, 1086.0], [60.0, 1087.0], [60.1, 1088.0], [60.2, 1089.0], [60.3, 1090.0], [60.4, 1091.0], [60.5, 1092.0], [60.6, 1092.0], [60.7, 1093.0], [60.8, 1094.0], [60.9, 1095.0], [61.0, 1096.0], [61.1, 1096.0], [61.2, 1097.0], [61.3, 1098.0], [61.4, 1098.0], [61.5, 1099.0], [61.6, 1100.0], [61.7, 1101.0], [61.8, 1101.0], [61.9, 1102.0], [62.0, 1102.0], [62.1, 1103.0], [62.2, 1104.0], [62.3, 1105.0], [62.4, 1106.0], [62.5, 1107.0], [62.6, 1108.0], [62.7, 1108.0], [62.8, 1109.0], [62.9, 1110.0], [63.0, 1111.0], [63.1, 1112.0], [63.2, 1114.0], [63.3, 1114.0], [63.4, 1116.0], [63.5, 1117.0], [63.6, 1118.0], [63.7, 1119.0], [63.8, 1121.0], [63.9, 1123.0], [64.0, 1125.0], [64.1, 1127.0], [64.2, 1129.0], [64.3, 1132.0], [64.4, 1136.0], [64.5, 1141.0], [64.6, 1147.0], [64.7, 1154.0], [64.8, 1161.0], [64.9, 1164.0], [65.0, 1167.0], [65.1, 1169.0], [65.2, 1171.0], [65.3, 1173.0], [65.4, 1175.0], [65.5, 1177.0], [65.6, 1178.0], [65.7, 1180.0], [65.8, 1181.0], [65.9, 1182.0], [66.0, 1183.0], [66.1, 1184.0], [66.2, 1185.0], [66.3, 1186.0], [66.4, 1188.0], [66.5, 1189.0], [66.6, 1190.0], [66.7, 1191.0], [66.8, 1192.0], [66.9, 1194.0], [67.0, 1195.0], [67.1, 1195.0], [67.2, 1196.0], [67.3, 1197.0], [67.4, 1198.0], [67.5, 1199.0], [67.6, 1200.0], [67.7, 1201.0], [67.8, 1202.0], [67.9, 1203.0], [68.0, 1203.0], [68.1, 1204.0], [68.2, 1206.0], [68.3, 1207.0], [68.4, 1208.0], [68.5, 1209.0], [68.6, 1210.0], [68.7, 1211.0], [68.8, 1212.0], [68.9, 1213.0], [69.0, 1215.0], [69.1, 1217.0], [69.2, 1218.0], [69.3, 1219.0], [69.4, 1221.0], [69.5, 1222.0], [69.6, 1224.0], [69.7, 1226.0], [69.8, 1228.0], [69.9, 1230.0], [70.0, 1234.0], [70.1, 1237.0], [70.2, 1243.0], [70.3, 1250.0], [70.4, 1257.0], [70.5, 1262.0], [70.6, 1266.0], [70.7, 1269.0], [70.8, 1272.0], [70.9, 1274.0], [71.0, 1277.0], [71.1, 1279.0], [71.2, 1280.0], [71.3, 1282.0], [71.4, 1283.0], [71.5, 1285.0], [71.6, 1286.0], [71.7, 1287.0], [71.8, 1289.0], [71.9, 1290.0], [72.0, 1291.0], [72.1, 1292.0], [72.2, 1293.0], [72.3, 1295.0], [72.4, 1296.0], [72.5, 1297.0], [72.6, 1298.0], [72.7, 1298.0], [72.8, 1299.0], [72.9, 1300.0], [73.0, 1301.0], [73.1, 1302.0], [73.2, 1303.0], [73.3, 1304.0], [73.4, 1306.0], [73.5, 1307.0], [73.6, 1308.0], [73.7, 1310.0], [73.8, 1311.0], [73.9, 1313.0], [74.0, 1314.0], [74.1, 1315.0], [74.2, 1317.0], [74.3, 1318.0], [74.4, 1319.0], [74.5, 1321.0], [74.6, 1322.0], [74.7, 1324.0], [74.8, 1325.0], [74.9, 1327.0], [75.0, 1330.0], [75.1, 1333.0], [75.2, 1336.0], [75.3, 1338.0], [75.4, 1341.0], [75.5, 1345.0], [75.6, 1351.0], [75.7, 1356.0], [75.8, 1363.0], [75.9, 1368.0], [76.0, 1372.0], [76.1, 1375.0], [76.2, 1376.0], [76.3, 1378.0], [76.4, 1381.0], [76.5, 1382.0], [76.6, 1384.0], [76.7, 1386.0], [76.8, 1387.0], [76.9, 1388.0], [77.0, 1390.0], [77.1, 1391.0], [77.2, 1392.0], [77.3, 1394.0], [77.4, 1395.0], [77.5, 1396.0], [77.6, 1398.0], [77.7, 1399.0], [77.8, 1400.0], [77.9, 1401.0], [78.0, 1402.0], [78.1, 1403.0], [78.2, 1405.0], [78.3, 1406.0], [78.4, 1407.0], [78.5, 1409.0], [78.6, 1410.0], [78.7, 1411.0], [78.8, 1412.0], [78.9, 1413.0], [79.0, 1415.0], [79.1, 1416.0], [79.2, 1418.0], [79.3, 1420.0], [79.4, 1421.0], [79.5, 1424.0], [79.6, 1426.0], [79.7, 1428.0], [79.8, 1430.0], [79.9, 1433.0], [80.0, 1436.0], [80.1, 1440.0], [80.2, 1445.0], [80.3, 1448.0], [80.4, 1454.0], [80.5, 1460.0], [80.6, 1466.0], [80.7, 1469.0], [80.8, 1473.0], [80.9, 1475.0], [81.0, 1478.0], [81.1, 1480.0], [81.2, 1483.0], [81.3, 1485.0], [81.4, 1487.0], [81.5, 1489.0], [81.6, 1491.0], [81.7, 1492.0], [81.8, 1494.0], [81.9, 1495.0], [82.0, 1497.0], [82.1, 1498.0], [82.2, 1500.0], [82.3, 1501.0], [82.4, 1502.0], [82.5, 1504.0], [82.6, 1505.0], [82.7, 1506.0], [82.8, 1508.0], [82.9, 1510.0], [83.0, 1511.0], [83.1, 1513.0], [83.2, 1515.0], [83.3, 1516.0], [83.4, 1518.0], [83.5, 1520.0], [83.6, 1522.0], [83.7, 1525.0], [83.8, 1527.0], [83.9, 1531.0], [84.0, 1537.0], [84.1, 1541.0], [84.2, 1547.0], [84.3, 1555.0], [84.4, 1562.0], [84.5, 1569.0], [84.6, 1573.0], [84.7, 1576.0], [84.8, 1581.0], [84.9, 1585.0], [85.0, 1587.0], [85.1, 1589.0], [85.2, 1591.0], [85.3, 1593.0], [85.4, 1595.0], [85.5, 1597.0], [85.6, 1599.0], [85.7, 1601.0], [85.8, 1603.0], [85.9, 1605.0], [86.0, 1606.0], [86.1, 1608.0], [86.2, 1610.0], [86.3, 1611.0], [86.4, 1613.0], [86.5, 1615.0], [86.6, 1616.0], [86.7, 1619.0], [86.8, 1623.0], [86.9, 1626.0], [87.0, 1629.0], [87.1, 1631.0], [87.2, 1635.0], [87.3, 1637.0], [87.4, 1642.0], [87.5, 1647.0], [87.6, 1654.0], [87.7, 1664.0], [87.8, 1671.0], [87.9, 1676.0], [88.0, 1679.0], [88.1, 1683.0], [88.2, 1686.0], [88.3, 1689.0], [88.4, 1691.0], [88.5, 1694.0], [88.6, 1696.0], [88.7, 1697.0], [88.8, 1699.0], [88.9, 1700.0], [89.0, 1703.0], [89.1, 1704.0], [89.2, 1707.0], [89.3, 1709.0], [89.4, 1711.0], [89.5, 1713.0], [89.6, 1716.0], [89.7, 1720.0], [89.8, 1724.0], [89.9, 1728.0], [90.0, 1731.0], [90.1, 1737.0], [90.2, 1742.0], [90.3, 1750.0], [90.4, 1761.0], [90.5, 1769.0], [90.6, 1775.0], [90.7, 1779.0], [90.8, 1783.0], [90.9, 1787.0], [91.0, 1790.0], [91.1, 1794.0], [91.2, 1797.0], [91.3, 1801.0], [91.4, 1804.0], [91.5, 1807.0], [91.6, 1810.0], [91.7, 1812.0], [91.8, 1815.0], [91.9, 1819.0], [92.0, 1822.0], [92.1, 1826.0], [92.2, 1830.0], [92.3, 1835.0], [92.4, 1842.0], [92.5, 1856.0], [92.6, 1870.0], [92.7, 1877.0], [92.8, 1881.0], [92.9, 1886.0], [93.0, 1890.0], [93.1, 1893.0], [93.2, 1896.0], [93.3, 1899.0], [93.4, 1904.0], [93.5, 1907.0], [93.6, 1909.0], [93.7, 1912.0], [93.8, 1916.0], [93.9, 1922.0], [94.0, 1928.0], [94.1, 1935.0], [94.2, 1948.0], [94.3, 1970.0], [94.4, 1977.0], [94.5, 1985.0], [94.6, 1990.0], [94.7, 1995.0], [94.8, 1999.0], [94.9, 2006.0], [95.0, 2010.0], [95.1, 2016.0], [95.2, 2024.0], [95.3, 2035.0], [95.4, 2058.0], [95.5, 2075.0], [95.6, 2085.0], [95.7, 2093.0], [95.8, 2101.0], [95.9, 2108.0], [96.0, 2112.0], [96.1, 2123.0], [96.2, 2141.0], [96.3, 2174.0], [96.4, 2187.0], [96.5, 2197.0], [96.6, 2206.0], [96.7, 2213.0], [96.8, 2228.0], [96.9, 2253.0], [97.0, 2283.0], [97.1, 2298.0], [97.2, 2309.0], [97.3, 2322.0], [97.4, 2358.0], [97.5, 2381.0], [97.6, 2396.0], [97.7, 2410.0], [97.8, 2433.0], [97.9, 2476.0], [98.0, 2496.0], [98.1, 2519.0], [98.2, 2562.0], [98.3, 2600.0], [98.4, 2649.0], [98.5, 2703.0], [98.6, 2734.0], [98.7, 2798.0], [98.8, 2834.0], [98.9, 2899.0], [99.0, 2971.0], [99.1, 3032.0], [99.2, 3141.0], [99.3, 3208.0], [99.4, 3258.0], [99.5, 3340.0], [99.6, 3418.0], [99.7, 3541.0], [99.8, 3670.0], [99.9, 3899.0]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1990.0, "series": [{"data": [[0.0, 2.0], [600.0, 1541.0], [700.0, 1775.0], [800.0, 1990.0], [900.0, 1810.0], [1000.0, 1713.0], [1100.0, 1415.0], [1200.0, 1253.0], [1300.0, 1173.0], [1400.0, 1048.0], [1500.0, 811.0], [1600.0, 766.0], [1700.0, 572.0], [1800.0, 482.0], [1900.0, 355.0], [2000.0, 229.0], [2100.0, 179.0], [2300.0, 126.0], [2200.0, 138.0], [2400.0, 90.0], [2500.0, 66.0], [2600.0, 44.0], [2700.0, 55.0], [2800.0, 45.0], [2900.0, 34.0], [3000.0, 26.0], [3100.0, 31.0], [3200.0, 35.0], [3300.0, 34.0], [3400.0, 21.0], [3500.0, 17.0], [3600.0, 20.0], [3700.0, 12.0], [3800.0, 6.0], [3900.0, 4.0], [4000.0, 5.0], [4200.0, 3.0], [4100.0, 2.0], [4300.0, 4.0], [4400.0, 1.0], [4900.0, 1.0], [5300.0, 1.0], [5400.0, 1.0], [6300.0, 1.0], [100.0, 1072.0], [200.0, 1256.0], [300.0, 1102.0], [400.0, 1031.0], [500.0, 1283.0]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4202.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 14992.0, "series": [{"data": [[0.0, 4487.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14992.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4202.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 190.3707423580786, "minX": 1.63900572E12, "maxY": 200.0, "series": [{"data": [[1.63900578E12, 200.0], [1.63900584E12, 190.3707423580786], [1.63900572E12, 199.47695416087916]], "isOverall": false, "label": "Grupo de Hilos (100)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63900584E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 174.0, "minX": 1.0, "maxY": 1908.0, "series": [{"data": [[2.0, 732.0], [3.0, 1518.0], [4.0, 1528.0], [5.0, 895.0], [8.0, 741.6666666666666], [14.0, 693.1666666666666], [15.0, 719.0], [19.0, 579.5], [20.0, 617.0], [22.0, 700.0], [23.0, 1109.0], [24.0, 601.0], [26.0, 545.0], [27.0, 505.0], [31.0, 968.25], [32.0, 580.0], [34.0, 546.5], [37.0, 321.0], [36.0, 815.5], [39.0, 775.0], [40.0, 801.0], [43.0, 978.0], [44.0, 593.0], [47.0, 998.0], [46.0, 607.0], [49.0, 1087.0], [48.0, 1099.0], [50.0, 1106.0], [53.0, 262.0], [52.0, 194.5], [54.0, 780.6666666666666], [55.0, 174.0], [56.0, 1008.0], [59.0, 1113.6666666666667], [60.0, 285.5], [61.0, 465.6666666666667], [62.0, 597.0], [66.0, 839.25], [69.0, 518.0], [68.0, 762.0], [75.0, 712.5], [74.0, 888.0], [73.0, 593.0], [72.0, 901.6666666666666], [76.0, 397.25], [79.0, 204.0], [78.0, 1052.0], [82.0, 351.0], [83.0, 997.75], [86.0, 844.0], [87.0, 903.0], [84.0, 1250.0], [88.0, 469.6666666666667], [89.0, 471.3333333333333], [90.0, 762.5], [95.0, 1430.0], [94.0, 607.0], [93.0, 1373.0], [92.0, 728.0], [99.0, 1475.6666666666667], [97.0, 1908.0], [96.0, 1529.0], [100.0, 823.5], [101.0, 478.0], [103.0, 1010.5], [106.0, 495.0], [105.0, 1013.5], [111.0, 918.8], [108.0, 881.0], [112.0, 918.0], [115.0, 1103.6666666666667], [119.0, 1021.3333333333334], [118.0, 1313.0], [117.0, 1405.0], [123.0, 591.7142857142858], [121.0, 1009.0], [120.0, 702.0], [127.0, 883.0], [126.0, 890.0], [125.0, 1478.0], [124.0, 903.0], [131.0, 531.0], [134.0, 826.0], [133.0, 1305.0], [132.0, 1306.0], [130.0, 1411.0], [129.0, 521.0], [128.0, 1333.0], [139.0, 222.0], [143.0, 523.0], [142.0, 1246.5], [140.0, 621.25], [138.0, 708.0], [137.0, 823.0], [136.0, 812.0], [144.0, 692.3333333333334], [147.0, 353.0], [151.0, 1495.0], [150.0, 983.3333333333334], [149.0, 605.0], [148.0, 895.0], [146.0, 1062.0], [145.0, 592.0], [159.0, 865.5], [158.0, 1417.0], [157.0, 1620.0], [156.0, 1162.0], [155.0, 583.5], [154.0, 878.0], [153.0, 590.0], [152.0, 1096.0], [167.0, 282.5], [166.0, 1197.0], [165.0, 938.5], [164.0, 823.5], [163.0, 878.4285714285714], [162.0, 865.5], [161.0, 951.0], [160.0, 928.0], [175.0, 874.0], [174.0, 737.0], [173.0, 741.6666666666666], [172.0, 808.3333333333334], [171.0, 766.0], [170.0, 487.0], [169.0, 1116.0], [168.0, 559.1666666666667], [179.0, 553.0], [181.0, 760.25], [182.0, 862.8571428571429], [183.0, 400.0], [180.0, 1188.6666666666667], [178.0, 1147.8], [176.0, 1452.5], [184.0, 619.0], [185.0, 923.5], [188.0, 761.2], [191.0, 1301.0], [190.0, 896.0], [189.0, 991.5714285714286], [187.0, 813.25], [199.0, 917.5], [198.0, 770.6666666666666], [197.0, 677.0], [196.0, 713.625], [195.0, 941.5555555555555], [194.0, 1111.5], [193.0, 944.5], [192.0, 754.0], [200.0, 1019.4251425142547], [1.0, 1114.0]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}, {"data": [[198.8939233985035, 1016.6337570203935]], "isOverall": false, "label": "Petici\u00F3n HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.63900572E12, "maxY": 68482.66666666667, "series": [{"data": [[1.63900578E12, 68482.66666666667], [1.63900584E12, 11640.833333333334], [1.63900572E12, 40254.916666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63900578E12, 0.0], [1.63900584E12, 0.0], [1.63900572E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63900584E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 859.8192139737994, "minX": 1.63900572E12, "maxY": 1274.8631140295477, "series": [{"data": [[1.63900578E12, 891.4991834916875], [1.63900584E12, 859.8192139737994], [1.63900572E12, 1274.8631140295477]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63900584E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 855.8144104803492, "minX": 1.63900572E12, "maxY": 1258.101401692132, "series": [{"data": [[1.63900578E12, 884.0489904988066], [1.63900584E12, 855.8144104803492], [1.63900572E12, 1258.101401692132]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63900584E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.63900572E12, "maxY": 4.9E-324, "series": [{"data": [[1.63900578E12, 0.0], [1.63900584E12, 0.0], [1.63900572E12, 0.0]], "isOverall": false, "label": "Petici\u00F3n HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63900584E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 95.0, "minX": 1.63900572E12, "maxY": 6314.0, "series": [{"data": [[1.63900578E12, 3401.0], [1.63900584E12, 2208.0], [1.63900572E12, 6314.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63900578E12, 114.0], [1.63900584E12, 109.61899945378303], [1.63900572E12, 140.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63900578E12, 115.0], [1.63900584E12, 110.68090021848678], [1.63900572E12, 160.8160015106201]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63900578E12, 114.0], [1.63900584E12, 110.0], [1.63900572E12, 154.23999905586243]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63900578E12, 95.0], [1.63900584E12, 100.0], [1.63900572E12, 101.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63900578E12, 874.0], [1.63900584E12, 807.0], [1.63900572E12, 1197.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63900584E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 352.0, "minX": 32.0, "maxY": 2360.0, "series": [{"data": [[32.0, 352.0], [40.0, 2360.0], [50.0, 709.0], [60.0, 1516.0], [103.0, 1187.0], [124.0, 1454.0], [132.0, 2107.0], [133.0, 1159.0], [142.0, 1175.5], [136.0, 1321.5], [140.0, 1203.0], [146.0, 1202.5], [149.0, 1448.0], [145.0, 1164.0], [148.0, 1118.0], [147.0, 1300.0], [158.0, 1310.5], [157.0, 1410.0], [155.0, 1196.0], [167.0, 1227.0], [163.0, 1226.0], [166.0, 1041.0], [162.0, 1203.0], [161.0, 1082.5], [172.0, 1070.0], [169.0, 1042.0], [173.0, 1155.5], [171.0, 1071.0], [174.0, 996.0], [168.0, 817.0], [182.0, 984.0], [178.0, 1205.0], [177.0, 1190.0], [183.0, 1153.0], [181.0, 973.0], [184.0, 1109.5], [191.0, 1133.0], [188.0, 923.5], [187.0, 1162.0], [189.0, 1127.0], [185.0, 991.0], [194.0, 1210.5], [199.0, 877.0], [195.0, 1093.0], [198.0, 819.0], [196.0, 1008.5], [200.0, 949.5], [204.0, 798.5], [202.0, 796.0], [210.0, 1002.0], [215.0, 905.0], [214.0, 924.0], [211.0, 824.0], [209.0, 875.0], [220.0, 996.5], [223.0, 884.5], [222.0, 865.5], [216.0, 804.5], [217.0, 779.0], [221.0, 797.0], [218.0, 800.5], [226.0, 997.5], [227.0, 811.5], [225.0, 892.0], [228.0, 785.5], [229.0, 903.0], [230.0, 833.0], [231.0, 969.0], [234.0, 873.0], [235.0, 806.0], [237.0, 726.5], [238.0, 684.5], [244.0, 819.0], [247.0, 893.5], [248.0, 899.5], [252.0, 867.5], [250.0, 789.5], [259.0, 817.0], [257.0, 785.0], [256.0, 972.5], [260.0, 911.5], [271.0, 789.0], [261.0, 785.0], [258.0, 720.0], [275.0, 700.0], [285.0, 705.0], [290.0, 692.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 290.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 350.0, "minX": 32.0, "maxY": 2360.0, "series": [{"data": [[32.0, 350.0], [40.0, 2360.0], [50.0, 709.0], [60.0, 1510.0], [103.0, 1149.0], [124.0, 1449.0], [132.0, 2078.0], [133.0, 1159.0], [142.0, 1140.5], [136.0, 1307.0], [140.0, 1194.0], [146.0, 1197.5], [149.0, 1423.0], [145.0, 1106.0], [148.0, 1112.5], [147.0, 1282.0], [158.0, 1299.0], [157.0, 1410.0], [155.0, 1196.0], [167.0, 1201.0], [163.0, 1222.0], [166.0, 1016.5], [162.0, 1189.5], [161.0, 1018.0], [172.0, 1067.0], [169.0, 1017.0], [173.0, 1114.5], [171.0, 1067.0], [174.0, 988.0], [168.0, 810.0], [182.0, 982.5], [178.0, 1189.5], [177.0, 1190.0], [183.0, 1153.0], [181.0, 973.0], [184.0, 1109.5], [191.0, 1118.0], [188.0, 920.5], [187.0, 1161.0], [189.0, 1127.0], [185.0, 983.0], [194.0, 1199.0], [199.0, 874.0], [195.0, 1086.0], [198.0, 819.0], [196.0, 1005.5], [200.0, 924.5], [204.0, 795.5], [202.0, 795.0], [210.0, 984.5], [215.0, 904.5], [214.0, 922.0], [211.0, 817.0], [209.0, 874.0], [220.0, 992.5], [223.0, 861.5], [222.0, 865.5], [216.0, 803.5], [217.0, 777.0], [221.0, 790.0], [218.0, 799.5], [226.0, 992.5], [227.0, 803.5], [225.0, 891.0], [228.0, 774.0], [229.0, 895.0], [230.0, 825.5], [231.0, 969.0], [234.0, 867.5], [235.0, 802.0], [237.0, 720.5], [238.0, 684.0], [244.0, 813.5], [247.0, 890.5], [248.0, 898.0], [252.0, 867.5], [250.0, 788.0], [259.0, 817.0], [257.0, 773.0], [256.0, 970.5], [260.0, 907.5], [271.0, 789.0], [261.0, 780.0], [258.0, 717.5], [275.0, 697.0], [285.0, 704.0], [290.0, 688.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 290.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 34.833333333333336, "minX": 1.63900572E12, "maxY": 224.53333333333333, "series": [{"data": [[1.63900578E12, 224.53333333333333], [1.63900584E12, 34.833333333333336], [1.63900572E12, 135.31666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63900584E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 38.166666666666664, "minX": 1.63900572E12, "maxY": 224.53333333333333, "series": [{"data": [[1.63900578E12, 224.53333333333333], [1.63900584E12, 38.166666666666664], [1.63900572E12, 131.98333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63900584E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 38.166666666666664, "minX": 1.63900572E12, "maxY": 224.53333333333333, "series": [{"data": [[1.63900578E12, 224.53333333333333], [1.63900584E12, 38.166666666666664], [1.63900572E12, 131.98333333333332]], "isOverall": false, "label": "Petici\u00F3n HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63900584E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 38.166666666666664, "minX": 1.63900572E12, "maxY": 224.53333333333333, "series": [{"data": [[1.63900578E12, 224.53333333333333], [1.63900584E12, 38.166666666666664], [1.63900572E12, 131.98333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63900584E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

