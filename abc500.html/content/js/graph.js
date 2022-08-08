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
        data: {"result": {"minY": 403.0, "minX": 0.0, "maxY": 3994.0, "series": [{"data": [[0.0, 403.0], [0.1, 403.0], [0.2, 410.0], [0.3, 410.0], [0.4, 415.0], [0.5, 415.0], [0.6, 415.0], [0.7, 417.0], [0.8, 419.0], [0.9, 419.0], [1.0, 425.0], [1.1, 425.0], [1.2, 426.0], [1.3, 426.0], [1.4, 429.0], [1.5, 429.0], [1.6, 430.0], [1.7, 430.0], [1.8, 430.0], [1.9, 430.0], [2.0, 431.0], [2.1, 431.0], [2.2, 431.0], [2.3, 431.0], [2.4, 433.0], [2.5, 433.0], [2.6, 434.0], [2.7, 434.0], [2.8, 434.0], [2.9, 437.0], [3.0, 437.0], [3.1, 439.0], [3.2, 439.0], [3.3, 439.0], [3.4, 439.0], [3.5, 440.0], [3.6, 440.0], [3.7, 441.0], [3.8, 441.0], [3.9, 444.0], [4.0, 444.0], [4.1, 444.0], [4.2, 444.0], [4.3, 445.0], [4.4, 445.0], [4.5, 445.0], [4.6, 445.0], [4.7, 446.0], [4.8, 446.0], [4.9, 447.0], [5.0, 447.0], [5.1, 447.0], [5.2, 447.0], [5.3, 449.0], [5.4, 449.0], [5.5, 449.0], [5.6, 449.0], [5.7, 450.0], [5.8, 450.0], [5.9, 451.0], [6.0, 451.0], [6.1, 452.0], [6.2, 452.0], [6.3, 452.0], [6.4, 452.0], [6.5, 454.0], [6.6, 454.0], [6.7, 454.0], [6.8, 454.0], [6.9, 455.0], [7.0, 455.0], [7.1, 455.0], [7.2, 455.0], [7.3, 456.0], [7.4, 456.0], [7.5, 457.0], [7.6, 457.0], [7.7, 458.0], [7.8, 458.0], [7.9, 460.0], [8.0, 460.0], [8.1, 462.0], [8.2, 462.0], [8.3, 463.0], [8.4, 463.0], [8.5, 463.0], [8.6, 463.0], [8.7, 463.0], [8.8, 463.0], [8.9, 463.0], [9.0, 463.0], [9.1, 464.0], [9.2, 464.0], [9.3, 464.0], [9.4, 464.0], [9.5, 465.0], [9.6, 465.0], [9.7, 465.0], [9.8, 465.0], [9.9, 466.0], [10.0, 466.0], [10.1, 467.0], [10.2, 467.0], [10.3, 469.0], [10.4, 469.0], [10.5, 469.0], [10.6, 469.0], [10.7, 470.0], [10.8, 470.0], [10.9, 470.0], [11.0, 470.0], [11.1, 471.0], [11.2, 471.0], [11.3, 473.0], [11.4, 473.0], [11.5, 473.0], [11.6, 473.0], [11.7, 474.0], [11.8, 474.0], [11.9, 475.0], [12.0, 475.0], [12.1, 476.0], [12.2, 476.0], [12.3, 477.0], [12.4, 479.0], [12.5, 479.0], [12.6, 481.0], [12.7, 481.0], [12.8, 481.0], [12.9, 481.0], [13.0, 484.0], [13.1, 484.0], [13.2, 485.0], [13.3, 485.0], [13.4, 485.0], [13.5, 485.0], [13.6, 489.0], [13.7, 489.0], [13.8, 489.0], [13.9, 489.0], [14.0, 490.0], [14.1, 490.0], [14.2, 491.0], [14.3, 491.0], [14.4, 492.0], [14.5, 492.0], [14.6, 496.0], [14.7, 496.0], [14.8, 497.0], [14.9, 497.0], [15.0, 498.0], [15.1, 498.0], [15.2, 498.0], [15.3, 498.0], [15.4, 499.0], [15.5, 499.0], [15.6, 500.0], [15.7, 500.0], [15.8, 500.0], [15.9, 500.0], [16.0, 501.0], [16.1, 501.0], [16.2, 501.0], [16.3, 501.0], [16.4, 502.0], [16.5, 502.0], [16.6, 503.0], [16.7, 503.0], [16.8, 504.0], [16.9, 504.0], [17.0, 505.0], [17.1, 505.0], [17.2, 507.0], [17.3, 507.0], [17.4, 509.0], [17.5, 509.0], [17.6, 510.0], [17.7, 510.0], [17.8, 519.0], [17.9, 519.0], [18.0, 520.0], [18.1, 520.0], [18.2, 524.0], [18.3, 524.0], [18.4, 525.0], [18.5, 525.0], [18.6, 525.0], [18.7, 525.0], [18.8, 525.0], [18.9, 525.0], [19.0, 526.0], [19.1, 526.0], [19.2, 527.0], [19.3, 527.0], [19.4, 528.0], [19.5, 528.0], [19.6, 529.0], [19.7, 529.0], [19.8, 529.0], [19.9, 529.0], [20.0, 530.0], [20.1, 530.0], [20.2, 530.0], [20.3, 530.0], [20.4, 533.0], [20.5, 533.0], [20.6, 535.0], [20.7, 535.0], [20.8, 536.0], [20.9, 536.0], [21.0, 537.0], [21.1, 537.0], [21.2, 541.0], [21.3, 541.0], [21.4, 541.0], [21.5, 541.0], [21.6, 541.0], [21.7, 541.0], [21.8, 546.0], [21.9, 546.0], [22.0, 549.0], [22.1, 549.0], [22.2, 550.0], [22.3, 550.0], [22.4, 550.0], [22.5, 550.0], [22.6, 552.0], [22.7, 552.0], [22.8, 558.0], [22.9, 558.0], [23.0, 559.0], [23.1, 559.0], [23.2, 560.0], [23.3, 560.0], [23.4, 564.0], [23.5, 564.0], [23.6, 566.0], [23.7, 566.0], [23.8, 566.0], [23.9, 566.0], [24.0, 567.0], [24.1, 567.0], [24.2, 569.0], [24.3, 569.0], [24.4, 573.0], [24.5, 573.0], [24.6, 575.0], [24.7, 575.0], [24.8, 577.0], [24.9, 577.0], [25.0, 578.0], [25.1, 578.0], [25.2, 580.0], [25.3, 580.0], [25.4, 585.0], [25.5, 585.0], [25.6, 589.0], [25.7, 589.0], [25.8, 592.0], [25.9, 592.0], [26.0, 592.0], [26.1, 592.0], [26.2, 593.0], [26.3, 593.0], [26.4, 595.0], [26.5, 595.0], [26.6, 595.0], [26.7, 595.0], [26.8, 598.0], [26.9, 598.0], [27.0, 600.0], [27.1, 600.0], [27.2, 602.0], [27.3, 602.0], [27.4, 603.0], [27.5, 603.0], [27.6, 604.0], [27.7, 604.0], [27.8, 604.0], [27.9, 604.0], [28.0, 605.0], [28.1, 605.0], [28.2, 605.0], [28.3, 605.0], [28.4, 606.0], [28.5, 606.0], [28.6, 606.0], [28.7, 606.0], [28.8, 606.0], [28.9, 606.0], [29.0, 608.0], [29.1, 608.0], [29.2, 609.0], [29.3, 609.0], [29.4, 610.0], [29.5, 610.0], [29.6, 612.0], [29.7, 612.0], [29.8, 613.0], [29.9, 613.0], [30.0, 613.0], [30.1, 613.0], [30.2, 615.0], [30.3, 615.0], [30.4, 620.0], [30.5, 620.0], [30.6, 622.0], [30.7, 622.0], [30.8, 623.0], [30.9, 623.0], [31.0, 623.0], [31.1, 623.0], [31.2, 634.0], [31.3, 634.0], [31.4, 634.0], [31.5, 634.0], [31.6, 639.0], [31.7, 639.0], [31.8, 646.0], [31.9, 646.0], [32.0, 646.0], [32.1, 646.0], [32.2, 646.0], [32.3, 646.0], [32.4, 647.0], [32.5, 647.0], [32.6, 648.0], [32.7, 648.0], [32.8, 649.0], [32.9, 649.0], [33.0, 652.0], [33.1, 652.0], [33.2, 653.0], [33.3, 653.0], [33.4, 655.0], [33.5, 655.0], [33.6, 656.0], [33.7, 656.0], [33.8, 657.0], [33.9, 657.0], [34.0, 657.0], [34.1, 657.0], [34.2, 659.0], [34.3, 659.0], [34.4, 661.0], [34.5, 661.0], [34.6, 666.0], [34.7, 666.0], [34.8, 671.0], [34.9, 671.0], [35.0, 672.0], [35.1, 672.0], [35.2, 675.0], [35.3, 675.0], [35.4, 675.0], [35.5, 675.0], [35.6, 676.0], [35.7, 676.0], [35.8, 679.0], [35.9, 679.0], [36.0, 682.0], [36.1, 682.0], [36.2, 682.0], [36.3, 682.0], [36.4, 689.0], [36.5, 689.0], [36.6, 691.0], [36.7, 691.0], [36.8, 694.0], [36.9, 694.0], [37.0, 696.0], [37.1, 696.0], [37.2, 737.0], [37.3, 737.0], [37.4, 754.0], [37.5, 754.0], [37.6, 810.0], [37.7, 810.0], [37.8, 810.0], [37.9, 819.0], [38.0, 819.0], [38.1, 827.0], [38.2, 827.0], [38.3, 836.0], [38.4, 836.0], [38.5, 851.0], [38.6, 851.0], [38.7, 887.0], [38.8, 887.0], [38.9, 894.0], [39.0, 894.0], [39.1, 901.0], [39.2, 901.0], [39.3, 907.0], [39.4, 907.0], [39.5, 909.0], [39.6, 909.0], [39.7, 910.0], [39.8, 910.0], [39.9, 930.0], [40.0, 930.0], [40.1, 936.0], [40.2, 936.0], [40.3, 940.0], [40.4, 940.0], [40.5, 952.0], [40.6, 952.0], [40.7, 961.0], [40.8, 961.0], [40.9, 1002.0], [41.0, 1002.0], [41.1, 1005.0], [41.2, 1005.0], [41.3, 1007.0], [41.4, 1007.0], [41.5, 1054.0], [41.6, 1054.0], [41.7, 1059.0], [41.8, 1059.0], [41.9, 1063.0], [42.0, 1063.0], [42.1, 1086.0], [42.2, 1086.0], [42.3, 1095.0], [42.4, 1095.0], [42.5, 1103.0], [42.6, 1103.0], [42.7, 1105.0], [42.8, 1105.0], [42.9, 1122.0], [43.0, 1122.0], [43.1, 1151.0], [43.2, 1151.0], [43.3, 1181.0], [43.4, 1181.0], [43.5, 1191.0], [43.6, 1191.0], [43.7, 1203.0], [43.8, 1203.0], [43.9, 1214.0], [44.0, 1214.0], [44.1, 1227.0], [44.2, 1227.0], [44.3, 1232.0], [44.4, 1232.0], [44.5, 1246.0], [44.6, 1246.0], [44.7, 1302.0], [44.8, 1302.0], [44.9, 1307.0], [45.0, 1307.0], [45.1, 1340.0], [45.2, 1340.0], [45.3, 1342.0], [45.4, 1342.0], [45.5, 1353.0], [45.6, 1353.0], [45.7, 1386.0], [45.8, 1386.0], [45.9, 1407.0], [46.0, 1407.0], [46.1, 1414.0], [46.2, 1414.0], [46.3, 1417.0], [46.4, 1417.0], [46.5, 1446.0], [46.6, 1446.0], [46.7, 1457.0], [46.8, 1457.0], [46.9, 1483.0], [47.0, 1483.0], [47.1, 1484.0], [47.2, 1484.0], [47.3, 1492.0], [47.4, 1492.0], [47.5, 1505.0], [47.6, 1505.0], [47.7, 1531.0], [47.8, 1531.0], [47.9, 1537.0], [48.0, 1537.0], [48.1, 1556.0], [48.2, 1556.0], [48.3, 1578.0], [48.4, 1578.0], [48.5, 1583.0], [48.6, 1583.0], [48.7, 1596.0], [48.8, 1596.0], [48.9, 1622.0], [49.0, 1622.0], [49.1, 1711.0], [49.2, 1711.0], [49.3, 1729.0], [49.4, 1729.0], [49.5, 1745.0], [49.6, 1745.0], [49.7, 1786.0], [49.8, 1786.0], [49.9, 1796.0], [50.0, 1796.0], [50.1, 1809.0], [50.2, 1809.0], [50.3, 1809.0], [50.4, 1809.0], [50.5, 1811.0], [50.6, 1811.0], [50.7, 1839.0], [50.8, 1839.0], [50.9, 1853.0], [51.0, 1853.0], [51.1, 1874.0], [51.2, 1874.0], [51.3, 1891.0], [51.4, 1891.0], [51.5, 1904.0], [51.6, 1904.0], [51.7, 1907.0], [51.8, 1907.0], [51.9, 1920.0], [52.0, 1920.0], [52.1, 1934.0], [52.2, 1934.0], [52.3, 2023.0], [52.4, 2023.0], [52.5, 2045.0], [52.6, 2045.0], [52.7, 2054.0], [52.8, 2054.0], [52.9, 2071.0], [53.0, 2071.0], [53.1, 2074.0], [53.2, 2074.0], [53.3, 2096.0], [53.4, 2096.0], [53.5, 2120.0], [53.6, 2120.0], [53.7, 2136.0], [53.8, 2136.0], [53.9, 2137.0], [54.0, 2137.0], [54.1, 2157.0], [54.2, 2157.0], [54.3, 2188.0], [54.4, 2188.0], [54.5, 2197.0], [54.6, 2197.0], [54.7, 2240.0], [54.8, 2240.0], [54.9, 2240.0], [55.0, 2240.0], [55.1, 2242.0], [55.2, 2242.0], [55.3, 2244.0], [55.4, 2244.0], [55.5, 2247.0], [55.6, 2247.0], [55.7, 2248.0], [55.8, 2248.0], [55.9, 2250.0], [56.0, 2250.0], [56.1, 2250.0], [56.2, 2250.0], [56.3, 2253.0], [56.4, 2253.0], [56.5, 2268.0], [56.6, 2268.0], [56.7, 2278.0], [56.8, 2278.0], [56.9, 2298.0], [57.0, 2298.0], [57.1, 2305.0], [57.2, 2305.0], [57.3, 2329.0], [57.4, 2329.0], [57.5, 2332.0], [57.6, 2332.0], [57.7, 2348.0], [57.8, 2348.0], [57.9, 2352.0], [58.0, 2352.0], [58.1, 2363.0], [58.2, 2363.0], [58.3, 2377.0], [58.4, 2377.0], [58.5, 2387.0], [58.6, 2387.0], [58.7, 2400.0], [58.8, 2400.0], [58.9, 2400.0], [59.0, 2400.0], [59.1, 2407.0], [59.2, 2407.0], [59.3, 2407.0], [59.4, 2407.0], [59.5, 2413.0], [59.6, 2413.0], [59.7, 2416.0], [59.8, 2416.0], [59.9, 2418.0], [60.0, 2418.0], [60.1, 2424.0], [60.2, 2424.0], [60.3, 2454.0], [60.4, 2454.0], [60.5, 2468.0], [60.6, 2468.0], [60.7, 2474.0], [60.8, 2474.0], [60.9, 2478.0], [61.0, 2478.0], [61.1, 2478.0], [61.2, 2478.0], [61.3, 2480.0], [61.4, 2480.0], [61.5, 2481.0], [61.6, 2481.0], [61.7, 2491.0], [61.8, 2491.0], [61.9, 2493.0], [62.0, 2493.0], [62.1, 2510.0], [62.2, 2510.0], [62.3, 2519.0], [62.4, 2519.0], [62.5, 2527.0], [62.6, 2527.0], [62.7, 2529.0], [62.8, 2529.0], [62.9, 2534.0], [63.0, 2534.0], [63.1, 2544.0], [63.2, 2544.0], [63.3, 2551.0], [63.4, 2551.0], [63.5, 2552.0], [63.6, 2552.0], [63.7, 2557.0], [63.8, 2557.0], [63.9, 2559.0], [64.0, 2559.0], [64.1, 2561.0], [64.2, 2561.0], [64.3, 2564.0], [64.4, 2564.0], [64.5, 2573.0], [64.6, 2573.0], [64.7, 2573.0], [64.8, 2573.0], [64.9, 2576.0], [65.0, 2576.0], [65.1, 2576.0], [65.2, 2576.0], [65.3, 2577.0], [65.4, 2577.0], [65.5, 2577.0], [65.6, 2577.0], [65.7, 2578.0], [65.8, 2578.0], [65.9, 2593.0], [66.0, 2593.0], [66.1, 2593.0], [66.2, 2593.0], [66.3, 2597.0], [66.4, 2597.0], [66.5, 2598.0], [66.6, 2598.0], [66.7, 2600.0], [66.8, 2600.0], [66.9, 2611.0], [67.0, 2611.0], [67.1, 2612.0], [67.2, 2612.0], [67.3, 2616.0], [67.4, 2616.0], [67.5, 2618.0], [67.6, 2618.0], [67.7, 2619.0], [67.8, 2619.0], [67.9, 2619.0], [68.0, 2619.0], [68.1, 2648.0], [68.2, 2648.0], [68.3, 2650.0], [68.4, 2650.0], [68.5, 2656.0], [68.6, 2656.0], [68.7, 2659.0], [68.8, 2659.0], [68.9, 2675.0], [69.0, 2675.0], [69.1, 2685.0], [69.2, 2685.0], [69.3, 2685.0], [69.4, 2685.0], [69.5, 2689.0], [69.6, 2689.0], [69.7, 2693.0], [69.8, 2693.0], [69.9, 2695.0], [70.0, 2695.0], [70.1, 2703.0], [70.2, 2703.0], [70.3, 2707.0], [70.4, 2707.0], [70.5, 2710.0], [70.6, 2710.0], [70.7, 2711.0], [70.8, 2711.0], [70.9, 2714.0], [71.0, 2714.0], [71.1, 2732.0], [71.2, 2732.0], [71.3, 2736.0], [71.4, 2736.0], [71.5, 2741.0], [71.6, 2741.0], [71.7, 2742.0], [71.8, 2742.0], [71.9, 2755.0], [72.0, 2755.0], [72.1, 2758.0], [72.2, 2758.0], [72.3, 2772.0], [72.4, 2772.0], [72.5, 2775.0], [72.6, 2775.0], [72.7, 2778.0], [72.8, 2778.0], [72.9, 2780.0], [73.0, 2780.0], [73.1, 2781.0], [73.2, 2781.0], [73.3, 2784.0], [73.4, 2784.0], [73.5, 2794.0], [73.6, 2794.0], [73.7, 2794.0], [73.8, 2794.0], [73.9, 2794.0], [74.0, 2794.0], [74.1, 2796.0], [74.2, 2796.0], [74.3, 2797.0], [74.4, 2797.0], [74.5, 2804.0], [74.6, 2804.0], [74.7, 2804.0], [74.8, 2804.0], [74.9, 2807.0], [75.0, 2807.0], [75.1, 2807.0], [75.2, 2807.0], [75.3, 2807.0], [75.4, 2807.0], [75.5, 2809.0], [75.6, 2809.0], [75.7, 2812.0], [75.8, 2812.0], [75.9, 2819.0], [76.0, 2819.0], [76.1, 2820.0], [76.2, 2820.0], [76.3, 2830.0], [76.4, 2830.0], [76.5, 2839.0], [76.6, 2839.0], [76.7, 2839.0], [76.8, 2839.0], [76.9, 2845.0], [77.0, 2845.0], [77.1, 2854.0], [77.2, 2854.0], [77.3, 2860.0], [77.4, 2860.0], [77.5, 2864.0], [77.6, 2864.0], [77.7, 2868.0], [77.8, 2868.0], [77.9, 2869.0], [78.0, 2869.0], [78.1, 2881.0], [78.2, 2881.0], [78.3, 2888.0], [78.4, 2888.0], [78.5, 2889.0], [78.6, 2889.0], [78.7, 2894.0], [78.8, 2894.0], [78.9, 2896.0], [79.0, 2896.0], [79.1, 2908.0], [79.2, 2908.0], [79.3, 2912.0], [79.4, 2912.0], [79.5, 2915.0], [79.6, 2915.0], [79.7, 2916.0], [79.8, 2916.0], [79.9, 2923.0], [80.0, 2923.0], [80.1, 2928.0], [80.2, 2928.0], [80.3, 2932.0], [80.4, 2932.0], [80.5, 2948.0], [80.6, 2948.0], [80.7, 2952.0], [80.8, 2952.0], [80.9, 2953.0], [81.0, 2953.0], [81.1, 2957.0], [81.2, 2957.0], [81.3, 2962.0], [81.4, 2962.0], [81.5, 2964.0], [81.6, 2964.0], [81.7, 2969.0], [81.8, 2969.0], [81.9, 2973.0], [82.0, 2973.0], [82.1, 2983.0], [82.2, 2983.0], [82.3, 2985.0], [82.4, 2985.0], [82.5, 2990.0], [82.6, 2990.0], [82.7, 2994.0], [82.8, 2994.0], [82.9, 2997.0], [83.0, 2997.0], [83.1, 3016.0], [83.2, 3016.0], [83.3, 3035.0], [83.4, 3035.0], [83.5, 3043.0], [83.6, 3043.0], [83.7, 3044.0], [83.8, 3044.0], [83.9, 3050.0], [84.0, 3050.0], [84.1, 3064.0], [84.2, 3064.0], [84.3, 3072.0], [84.4, 3072.0], [84.5, 3089.0], [84.6, 3089.0], [84.7, 3121.0], [84.8, 3121.0], [84.9, 3139.0], [85.0, 3139.0], [85.1, 3157.0], [85.2, 3157.0], [85.3, 3193.0], [85.4, 3193.0], [85.5, 3225.0], [85.6, 3225.0], [85.7, 3230.0], [85.8, 3230.0], [85.9, 3249.0], [86.0, 3249.0], [86.1, 3250.0], [86.2, 3250.0], [86.3, 3254.0], [86.4, 3254.0], [86.5, 3279.0], [86.6, 3279.0], [86.7, 3285.0], [86.8, 3285.0], [86.9, 3289.0], [87.0, 3289.0], [87.1, 3291.0], [87.2, 3291.0], [87.3, 3327.0], [87.4, 3327.0], [87.5, 3334.0], [87.6, 3334.0], [87.7, 3352.0], [87.8, 3352.0], [87.9, 3360.0], [88.0, 3360.0], [88.1, 3413.0], [88.2, 3413.0], [88.3, 3417.0], [88.4, 3417.0], [88.5, 3423.0], [88.6, 3423.0], [88.7, 3428.0], [88.8, 3428.0], [88.9, 3431.0], [89.0, 3431.0], [89.1, 3436.0], [89.2, 3436.0], [89.3, 3454.0], [89.4, 3454.0], [89.5, 3456.0], [89.6, 3456.0], [89.7, 3457.0], [89.8, 3457.0], [89.9, 3460.0], [90.0, 3460.0], [90.1, 3475.0], [90.2, 3475.0], [90.3, 3481.0], [90.4, 3481.0], [90.5, 3484.0], [90.6, 3484.0], [90.7, 3484.0], [90.8, 3484.0], [90.9, 3527.0], [91.0, 3527.0], [91.1, 3563.0], [91.2, 3563.0], [91.3, 3567.0], [91.4, 3567.0], [91.5, 3571.0], [91.6, 3571.0], [91.7, 3589.0], [91.8, 3589.0], [91.9, 3598.0], [92.0, 3598.0], [92.1, 3601.0], [92.2, 3601.0], [92.3, 3631.0], [92.4, 3631.0], [92.5, 3698.0], [92.6, 3698.0], [92.7, 3701.0], [92.8, 3701.0], [92.9, 3709.0], [93.0, 3709.0], [93.1, 3723.0], [93.2, 3723.0], [93.3, 3725.0], [93.4, 3725.0], [93.5, 3734.0], [93.6, 3734.0], [93.7, 3735.0], [93.8, 3735.0], [93.9, 3739.0], [94.0, 3739.0], [94.1, 3742.0], [94.2, 3742.0], [94.3, 3743.0], [94.4, 3743.0], [94.5, 3745.0], [94.6, 3745.0], [94.7, 3761.0], [94.8, 3761.0], [94.9, 3813.0], [95.0, 3813.0], [95.1, 3816.0], [95.2, 3816.0], [95.3, 3829.0], [95.4, 3829.0], [95.5, 3830.0], [95.6, 3830.0], [95.7, 3835.0], [95.8, 3835.0], [95.9, 3835.0], [96.0, 3835.0], [96.1, 3840.0], [96.2, 3840.0], [96.3, 3842.0], [96.4, 3842.0], [96.5, 3843.0], [96.6, 3843.0], [96.7, 3846.0], [96.8, 3846.0], [96.9, 3847.0], [97.0, 3847.0], [97.1, 3849.0], [97.2, 3849.0], [97.3, 3854.0], [97.4, 3854.0], [97.5, 3857.0], [97.6, 3857.0], [97.7, 3864.0], [97.8, 3864.0], [97.9, 3864.0], [98.0, 3864.0], [98.1, 3868.0], [98.2, 3868.0], [98.3, 3868.0], [98.4, 3868.0], [98.5, 3872.0], [98.6, 3872.0], [98.7, 3872.0], [98.8, 3872.0], [98.9, 3880.0], [99.0, 3880.0], [99.1, 3930.0], [99.2, 3930.0], [99.3, 3977.0], [99.4, 3977.0], [99.5, 3984.0], [99.6, 3984.0], [99.7, 3988.0], [99.8, 3988.0], [99.9, 3994.0], [100.0, 3994.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 78.0, "series": [{"data": [[600.0, 51.0], [700.0, 2.0], [800.0, 7.0], [900.0, 9.0], [1000.0, 8.0], [1100.0, 6.0], [1200.0, 5.0], [1300.0, 6.0], [1400.0, 8.0], [1500.0, 7.0], [1600.0, 1.0], [1700.0, 5.0], [1800.0, 7.0], [1900.0, 4.0], [2000.0, 6.0], [2100.0, 6.0], [2200.0, 12.0], [2300.0, 8.0], [2400.0, 17.0], [2500.0, 23.0], [2600.0, 17.0], [2700.0, 22.0], [2800.0, 23.0], [2900.0, 20.0], [3000.0, 8.0], [3100.0, 4.0], [3300.0, 4.0], [3200.0, 9.0], [3400.0, 14.0], [3500.0, 6.0], [3700.0, 11.0], [3600.0, 3.0], [3800.0, 21.0], [3900.0, 5.0], [400.0, 78.0], [500.0, 57.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 80.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 263.0, "series": [{"data": [[0.0, 80.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 157.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 263.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 139.06999999999988, "minX": 1.6594392E12, "maxY": 139.06999999999988, "series": [{"data": [[1.6594392E12, 139.06999999999988]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594392E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 410.0, "minX": 1.0, "maxY": 3994.0, "series": [{"data": [[2.0, 836.0], [3.0, 585.0], [5.0, 563.0], [6.0, 567.0], [8.0, 509.5], [10.0, 507.0], [12.0, 502.3333333333333], [13.0, 471.0], [16.0, 460.6666666666667], [17.0, 464.0], [18.0, 446.0], [19.0, 827.0], [21.0, 630.0], [22.0, 457.0], [23.0, 445.0], [25.0, 702.5], [26.0, 431.0], [27.0, 430.0], [28.0, 936.0], [29.0, 639.0], [30.0, 909.0], [31.0, 455.0], [32.0, 623.0], [34.0, 665.5], [40.0, 613.1666666666667], [45.0, 475.0], [44.0, 573.25], [46.0, 675.0], [49.0, 694.0], [48.0, 573.5], [52.0, 657.0], [57.0, 527.0], [56.0, 596.3333333333334], [59.0, 826.0], [58.0, 3994.0], [60.0, 547.0], [61.0, 470.0], [63.0, 1169.0], [62.0, 3915.0], [67.0, 1456.5], [65.0, 1700.3333333333333], [64.0, 546.6], [71.0, 2180.875], [70.0, 2985.5], [69.0, 1199.6], [68.0, 2695.333333333333], [75.0, 469.0], [74.0, 454.0], [73.0, 465.5], [79.0, 716.0], [78.0, 514.6666666666666], [77.0, 535.3333333333334], [83.0, 479.3333333333333], [82.0, 539.0], [81.0, 505.6666666666667], [80.0, 551.0], [87.0, 550.6666666666666], [86.0, 2839.571428571429], [85.0, 2445.4], [84.0, 474.0], [91.0, 887.2857142857142], [89.0, 613.3333333333334], [88.0, 747.0], [90.0, 2006.5], [95.0, 2129.4285714285716], [94.0, 2697.571428571429], [92.0, 1434.142857142857], [93.0, 2618.0], [99.0, 2242.3333333333335], [98.0, 2114.5714285714284], [97.0, 2804.8], [96.0, 1778.4], [103.0, 2465.571428571429], [101.0, 3207.4], [100.0, 2124.5], [102.0, 2354.8], [106.0, 2557.75], [105.0, 2552.5714285714284], [104.0, 2905.1428571428573], [107.0, 3171.6666666666665], [110.0, 2805.0], [109.0, 2316.5], [108.0, 2770.3333333333335], [111.0, 3089.0], [115.0, 2559.0], [114.0, 2985.0], [113.0, 2359.25], [112.0, 2338.6666666666665], [119.0, 2800.5], [117.0, 2906.5], [116.0, 2600.0], [123.0, 2728.5], [122.0, 2710.0], [121.0, 2685.0], [120.0, 2973.0], [127.0, 2619.5], [125.0, 2751.0], [135.0, 2574.0], [133.0, 2650.0], [132.0, 2481.0], [131.0, 2948.0], [130.0, 2847.0], [129.0, 2957.0], [128.0, 2962.0], [143.0, 2577.0], [142.0, 2758.0], [141.0, 2915.5], [140.0, 2675.0], [139.0, 2912.0], [138.0, 2604.5], [136.0, 2923.0], [151.0, 2268.0], [150.0, 2775.0], [149.0, 2418.0], [148.0, 2894.0], [147.0, 2889.0], [146.0, 2577.0], [145.0, 2736.0], [144.0, 2794.0], [158.0, 2434.0], [157.0, 2868.0], [156.0, 2443.0], [154.0, 2593.0], [153.0, 2772.0], [166.0, 2854.0], [165.0, 2842.0], [163.0, 2695.4], [175.0, 2807.0], [174.0, 2305.0], [173.0, 2815.5], [171.0, 2411.0], [170.0, 2839.0], [169.0, 2424.0], [168.0, 1730.0], [183.0, 2797.0], [182.0, 2794.0], [181.0, 2794.0], [180.0, 2804.0], [179.0, 2804.0], [178.0, 2808.0], [176.0, 2387.0], [188.0, 2778.0], [187.0, 481.0], [186.0, 1633.0], [184.0, 2407.0], [199.0, 2454.0], [195.0, 2685.0], [194.0, 2578.0], [193.0, 2772.0], [192.0, 2501.75], [206.0, 2703.0], [205.0, 1578.0], [204.0, 2136.0], [202.0, 2197.0], [201.0, 2133.2], [215.0, 419.0], [214.0, 1537.0], [213.0, 2478.0], [212.0, 2711.0], [211.0, 1583.0], [210.0, 1446.0], [209.0, 2329.0], [208.0, 1702.5], [223.0, 1386.0], [221.0, 1395.3333333333333], [220.0, 1556.0], [217.0, 1407.0], [216.0, 1484.0], [231.0, 1307.0], [230.0, 1181.0], [229.0, 1214.0], [228.0, 1457.0], [227.0, 449.0], [226.0, 1340.0], [225.0, 1343.0], [224.0, 1417.0], [235.0, 1191.0], [234.0, 953.5], [232.0, 469.0], [246.0, 1166.0], [244.0, 1059.0], [243.0, 1005.0], [242.0, 1054.0], [241.0, 2659.0], [240.0, 1277.0], [255.0, 887.0], [254.0, 821.75], [252.0, 851.0], [249.0, 1103.0], [248.0, 1074.5], [269.0, 2597.0], [271.0, 2593.0], [268.0, 2074.0], [259.0, 952.0], [258.0, 1007.0], [257.0, 917.0], [267.0, 655.0], [266.0, 2618.0], [265.0, 2581.5], [263.0, 2612.0], [262.0, 2619.0], [261.0, 434.5], [275.0, 529.0], [287.0, 2564.0], [286.0, 1882.0], [283.0, 480.5], [281.0, 1563.0], [279.0, 1322.0], [277.0, 2576.0], [276.0, 604.0], [274.0, 410.0], [273.0, 439.0], [272.0, 2326.0], [303.0, 2023.0], [300.0, 2363.0], [299.0, 1495.5], [297.0, 2413.0], [296.0, 1743.25], [292.0, 434.0], [291.0, 2557.0], [290.0, 2468.0], [289.0, 2298.0], [288.0, 2332.0], [319.0, 1711.0], [318.0, 2245.6666666666665], [314.0, 2137.0], [321.0, 1979.857142857143], [1.0, 1095.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[139.06999999999988, 1803.920000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 321.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2683.3333333333335, "minX": 1.6594392E12, "maxY": 3900.0, "series": [{"data": [[1.6594392E12, 3900.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6594392E12, 2683.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594392E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 1803.920000000001, "minX": 1.6594392E12, "maxY": 1803.920000000001, "series": [{"data": [[1.6594392E12, 1803.920000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594392E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 1803.572000000001, "minX": 1.6594392E12, "maxY": 1803.572000000001, "series": [{"data": [[1.6594392E12, 1803.572000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594392E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 1674.6240000000005, "minX": 1.6594392E12, "maxY": 1674.6240000000005, "series": [{"data": [[1.6594392E12, 1674.6240000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594392E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 403.0, "minX": 1.6594392E12, "maxY": 3994.0, "series": [{"data": [[1.6594392E12, 3994.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6594392E12, 3473.5000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6594392E12, 3929.5000000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6594392E12, 3815.85]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6594392E12, 403.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6594392E12, 1802.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594392E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
    data: {"result": {"minY": 566.5, "minX": 27.0, "maxY": 2527.0, "series": [{"data": [[148.0, 1532.0], [96.0, 566.5], [27.0, 2023.0], [229.0, 2527.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 229.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 566.5, "minX": 27.0, "maxY": 2527.0, "series": [{"data": [[148.0, 1532.0], [96.0, 566.5], [27.0, 2021.0], [229.0, 2527.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 229.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6594392E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6594392E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594392E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6594392E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6594392E12, 8.333333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594392E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6594392E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6594392E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594392E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6594392E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6594392E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594392E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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

