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
        data: {"result": {"minY": 440.0, "minX": 0.0, "maxY": 21007.0, "series": [{"data": [[0.0, 440.0], [0.1, 443.0], [0.2, 444.0], [0.3, 452.0], [0.4, 456.0], [0.5, 457.0], [0.6, 458.0], [0.7, 461.0], [0.8, 463.0], [0.9, 463.0], [1.0, 465.0], [1.1, 465.0], [1.2, 469.0], [1.3, 469.0], [1.4, 472.0], [1.5, 472.0], [1.6, 473.0], [1.7, 474.0], [1.8, 475.0], [1.9, 475.0], [2.0, 477.0], [2.1, 477.0], [2.2, 479.0], [2.3, 479.0], [2.4, 480.0], [2.5, 480.0], [2.6, 481.0], [2.7, 482.0], [2.8, 483.0], [2.9, 483.0], [3.0, 485.0], [3.1, 487.0], [3.2, 487.0], [3.3, 489.0], [3.4, 490.0], [3.5, 490.0], [3.6, 491.0], [3.7, 493.0], [3.8, 494.0], [3.9, 495.0], [4.0, 495.0], [4.1, 495.0], [4.2, 496.0], [4.3, 497.0], [4.4, 497.0], [4.5, 497.0], [4.6, 498.0], [4.7, 498.0], [4.8, 499.0], [4.9, 499.0], [5.0, 499.0], [5.1, 501.0], [5.2, 501.0], [5.3, 502.0], [5.4, 502.0], [5.5, 502.0], [5.6, 503.0], [5.7, 504.0], [5.8, 504.0], [5.9, 505.0], [6.0, 505.0], [6.1, 505.0], [6.2, 505.0], [6.3, 505.0], [6.4, 506.0], [6.5, 506.0], [6.6, 507.0], [6.7, 507.0], [6.8, 508.0], [6.9, 509.0], [7.0, 509.0], [7.1, 509.0], [7.2, 509.0], [7.3, 510.0], [7.4, 511.0], [7.5, 512.0], [7.6, 512.0], [7.7, 513.0], [7.8, 513.0], [7.9, 513.0], [8.0, 514.0], [8.1, 514.0], [8.2, 514.0], [8.3, 514.0], [8.4, 515.0], [8.5, 515.0], [8.6, 515.0], [8.7, 515.0], [8.8, 516.0], [8.9, 517.0], [9.0, 517.0], [9.1, 517.0], [9.2, 518.0], [9.3, 518.0], [9.4, 518.0], [9.5, 519.0], [9.6, 519.0], [9.7, 519.0], [9.8, 520.0], [9.9, 520.0], [10.0, 520.0], [10.1, 521.0], [10.2, 521.0], [10.3, 521.0], [10.4, 522.0], [10.5, 522.0], [10.6, 522.0], [10.7, 523.0], [10.8, 523.0], [10.9, 523.0], [11.0, 523.0], [11.1, 524.0], [11.2, 524.0], [11.3, 525.0], [11.4, 525.0], [11.5, 525.0], [11.6, 525.0], [11.7, 526.0], [11.8, 526.0], [11.9, 526.0], [12.0, 526.0], [12.1, 526.0], [12.2, 527.0], [12.3, 527.0], [12.4, 527.0], [12.5, 527.0], [12.6, 527.0], [12.7, 527.0], [12.8, 527.0], [12.9, 528.0], [13.0, 528.0], [13.1, 528.0], [13.2, 528.0], [13.3, 528.0], [13.4, 529.0], [13.5, 529.0], [13.6, 530.0], [13.7, 530.0], [13.8, 531.0], [13.9, 531.0], [14.0, 531.0], [14.1, 532.0], [14.2, 532.0], [14.3, 532.0], [14.4, 532.0], [14.5, 533.0], [14.6, 533.0], [14.7, 534.0], [14.8, 534.0], [14.9, 535.0], [15.0, 535.0], [15.1, 536.0], [15.2, 536.0], [15.3, 536.0], [15.4, 536.0], [15.5, 537.0], [15.6, 537.0], [15.7, 537.0], [15.8, 538.0], [15.9, 538.0], [16.0, 538.0], [16.1, 538.0], [16.2, 538.0], [16.3, 539.0], [16.4, 539.0], [16.5, 539.0], [16.6, 539.0], [16.7, 540.0], [16.8, 540.0], [16.9, 540.0], [17.0, 541.0], [17.1, 541.0], [17.2, 541.0], [17.3, 542.0], [17.4, 542.0], [17.5, 542.0], [17.6, 542.0], [17.7, 542.0], [17.8, 542.0], [17.9, 543.0], [18.0, 543.0], [18.1, 543.0], [18.2, 544.0], [18.3, 544.0], [18.4, 545.0], [18.5, 545.0], [18.6, 546.0], [18.7, 546.0], [18.8, 546.0], [18.9, 547.0], [19.0, 547.0], [19.1, 547.0], [19.2, 548.0], [19.3, 548.0], [19.4, 548.0], [19.5, 548.0], [19.6, 549.0], [19.7, 549.0], [19.8, 549.0], [19.9, 549.0], [20.0, 549.0], [20.1, 549.0], [20.2, 550.0], [20.3, 550.0], [20.4, 550.0], [20.5, 550.0], [20.6, 551.0], [20.7, 551.0], [20.8, 551.0], [20.9, 551.0], [21.0, 551.0], [21.1, 552.0], [21.2, 552.0], [21.3, 552.0], [21.4, 552.0], [21.5, 552.0], [21.6, 553.0], [21.7, 553.0], [21.8, 553.0], [21.9, 553.0], [22.0, 554.0], [22.1, 554.0], [22.2, 554.0], [22.3, 554.0], [22.4, 554.0], [22.5, 554.0], [22.6, 555.0], [22.7, 555.0], [22.8, 555.0], [22.9, 555.0], [23.0, 556.0], [23.1, 556.0], [23.2, 556.0], [23.3, 557.0], [23.4, 557.0], [23.5, 557.0], [23.6, 557.0], [23.7, 557.0], [23.8, 557.0], [23.9, 558.0], [24.0, 558.0], [24.1, 558.0], [24.2, 558.0], [24.3, 559.0], [24.4, 559.0], [24.5, 559.0], [24.6, 559.0], [24.7, 559.0], [24.8, 560.0], [24.9, 560.0], [25.0, 560.0], [25.1, 560.0], [25.2, 561.0], [25.3, 561.0], [25.4, 561.0], [25.5, 561.0], [25.6, 561.0], [25.7, 562.0], [25.8, 562.0], [25.9, 562.0], [26.0, 562.0], [26.1, 563.0], [26.2, 563.0], [26.3, 563.0], [26.4, 563.0], [26.5, 563.0], [26.6, 564.0], [26.7, 564.0], [26.8, 564.0], [26.9, 564.0], [27.0, 564.0], [27.1, 564.0], [27.2, 565.0], [27.3, 565.0], [27.4, 565.0], [27.5, 565.0], [27.6, 566.0], [27.7, 566.0], [27.8, 566.0], [27.9, 566.0], [28.0, 567.0], [28.1, 567.0], [28.2, 567.0], [28.3, 568.0], [28.4, 568.0], [28.5, 568.0], [28.6, 568.0], [28.7, 568.0], [28.8, 569.0], [28.9, 569.0], [29.0, 569.0], [29.1, 569.0], [29.2, 569.0], [29.3, 569.0], [29.4, 570.0], [29.5, 570.0], [29.6, 570.0], [29.7, 570.0], [29.8, 570.0], [29.9, 570.0], [30.0, 571.0], [30.1, 571.0], [30.2, 571.0], [30.3, 571.0], [30.4, 572.0], [30.5, 572.0], [30.6, 572.0], [30.7, 572.0], [30.8, 572.0], [30.9, 572.0], [31.0, 572.0], [31.1, 573.0], [31.2, 573.0], [31.3, 573.0], [31.4, 573.0], [31.5, 573.0], [31.6, 574.0], [31.7, 574.0], [31.8, 574.0], [31.9, 574.0], [32.0, 574.0], [32.1, 574.0], [32.2, 574.0], [32.3, 574.0], [32.4, 575.0], [32.5, 575.0], [32.6, 576.0], [32.7, 576.0], [32.8, 576.0], [32.9, 576.0], [33.0, 576.0], [33.1, 576.0], [33.2, 577.0], [33.3, 577.0], [33.4, 577.0], [33.5, 577.0], [33.6, 577.0], [33.7, 577.0], [33.8, 577.0], [33.9, 578.0], [34.0, 578.0], [34.1, 578.0], [34.2, 578.0], [34.3, 578.0], [34.4, 579.0], [34.5, 579.0], [34.6, 579.0], [34.7, 579.0], [34.8, 579.0], [34.9, 580.0], [35.0, 580.0], [35.1, 580.0], [35.2, 580.0], [35.3, 580.0], [35.4, 581.0], [35.5, 581.0], [35.6, 581.0], [35.7, 581.0], [35.8, 582.0], [35.9, 582.0], [36.0, 582.0], [36.1, 582.0], [36.2, 582.0], [36.3, 582.0], [36.4, 583.0], [36.5, 583.0], [36.6, 583.0], [36.7, 583.0], [36.8, 584.0], [36.9, 584.0], [37.0, 584.0], [37.1, 584.0], [37.2, 585.0], [37.3, 585.0], [37.4, 585.0], [37.5, 585.0], [37.6, 585.0], [37.7, 585.0], [37.8, 586.0], [37.9, 586.0], [38.0, 586.0], [38.1, 586.0], [38.2, 586.0], [38.3, 586.0], [38.4, 587.0], [38.5, 587.0], [38.6, 587.0], [38.7, 587.0], [38.8, 588.0], [38.9, 588.0], [39.0, 588.0], [39.1, 588.0], [39.2, 588.0], [39.3, 589.0], [39.4, 589.0], [39.5, 589.0], [39.6, 589.0], [39.7, 589.0], [39.8, 590.0], [39.9, 590.0], [40.0, 590.0], [40.1, 590.0], [40.2, 590.0], [40.3, 590.0], [40.4, 591.0], [40.5, 591.0], [40.6, 591.0], [40.7, 591.0], [40.8, 591.0], [40.9, 591.0], [41.0, 592.0], [41.1, 592.0], [41.2, 592.0], [41.3, 592.0], [41.4, 592.0], [41.5, 592.0], [41.6, 592.0], [41.7, 592.0], [41.8, 593.0], [41.9, 593.0], [42.0, 594.0], [42.1, 594.0], [42.2, 594.0], [42.3, 594.0], [42.4, 594.0], [42.5, 595.0], [42.6, 595.0], [42.7, 595.0], [42.8, 595.0], [42.9, 596.0], [43.0, 596.0], [43.1, 596.0], [43.2, 596.0], [43.3, 596.0], [43.4, 596.0], [43.5, 596.0], [43.6, 597.0], [43.7, 597.0], [43.8, 597.0], [43.9, 597.0], [44.0, 597.0], [44.1, 598.0], [44.2, 598.0], [44.3, 598.0], [44.4, 598.0], [44.5, 598.0], [44.6, 599.0], [44.7, 599.0], [44.8, 599.0], [44.9, 599.0], [45.0, 599.0], [45.1, 600.0], [45.2, 600.0], [45.3, 600.0], [45.4, 600.0], [45.5, 600.0], [45.6, 600.0], [45.7, 600.0], [45.8, 600.0], [45.9, 601.0], [46.0, 601.0], [46.1, 601.0], [46.2, 601.0], [46.3, 601.0], [46.4, 601.0], [46.5, 601.0], [46.6, 601.0], [46.7, 602.0], [46.8, 602.0], [46.9, 602.0], [47.0, 603.0], [47.1, 603.0], [47.2, 603.0], [47.3, 603.0], [47.4, 603.0], [47.5, 604.0], [47.6, 604.0], [47.7, 604.0], [47.8, 604.0], [47.9, 605.0], [48.0, 605.0], [48.1, 606.0], [48.2, 606.0], [48.3, 606.0], [48.4, 606.0], [48.5, 608.0], [48.6, 608.0], [48.7, 608.0], [48.8, 608.0], [48.9, 608.0], [49.0, 608.0], [49.1, 608.0], [49.2, 608.0], [49.3, 609.0], [49.4, 609.0], [49.5, 609.0], [49.6, 610.0], [49.7, 610.0], [49.8, 610.0], [49.9, 610.0], [50.0, 610.0], [50.1, 610.0], [50.2, 611.0], [50.3, 611.0], [50.4, 611.0], [50.5, 611.0], [50.6, 612.0], [50.7, 612.0], [50.8, 612.0], [50.9, 613.0], [51.0, 613.0], [51.1, 613.0], [51.2, 613.0], [51.3, 614.0], [51.4, 614.0], [51.5, 614.0], [51.6, 614.0], [51.7, 614.0], [51.8, 614.0], [51.9, 615.0], [52.0, 615.0], [52.1, 615.0], [52.2, 615.0], [52.3, 615.0], [52.4, 616.0], [52.5, 616.0], [52.6, 616.0], [52.7, 616.0], [52.8, 616.0], [52.9, 617.0], [53.0, 617.0], [53.1, 617.0], [53.2, 618.0], [53.3, 618.0], [53.4, 618.0], [53.5, 620.0], [53.6, 620.0], [53.7, 621.0], [53.8, 621.0], [53.9, 622.0], [54.0, 622.0], [54.1, 622.0], [54.2, 622.0], [54.3, 622.0], [54.4, 623.0], [54.5, 623.0], [54.6, 623.0], [54.7, 624.0], [54.8, 624.0], [54.9, 624.0], [55.0, 624.0], [55.1, 625.0], [55.2, 625.0], [55.3, 627.0], [55.4, 627.0], [55.5, 628.0], [55.6, 628.0], [55.7, 628.0], [55.8, 629.0], [55.9, 629.0], [56.0, 629.0], [56.1, 629.0], [56.2, 629.0], [56.3, 630.0], [56.4, 630.0], [56.5, 631.0], [56.6, 631.0], [56.7, 633.0], [56.8, 633.0], [56.9, 635.0], [57.0, 635.0], [57.1, 637.0], [57.2, 637.0], [57.3, 638.0], [57.4, 638.0], [57.5, 638.0], [57.6, 638.0], [57.7, 639.0], [57.8, 639.0], [57.9, 640.0], [58.0, 640.0], [58.1, 641.0], [58.2, 641.0], [58.3, 642.0], [58.4, 642.0], [58.5, 642.0], [58.6, 643.0], [58.7, 643.0], [58.8, 644.0], [58.9, 645.0], [59.0, 646.0], [59.1, 646.0], [59.2, 647.0], [59.3, 648.0], [59.4, 648.0], [59.5, 649.0], [59.6, 650.0], [59.7, 650.0], [59.8, 652.0], [59.9, 653.0], [60.0, 653.0], [60.1, 655.0], [60.2, 655.0], [60.3, 659.0], [60.4, 659.0], [60.5, 661.0], [60.6, 662.0], [60.7, 663.0], [60.8, 663.0], [60.9, 664.0], [61.0, 665.0], [61.1, 666.0], [61.2, 666.0], [61.3, 666.0], [61.4, 666.0], [61.5, 667.0], [61.6, 668.0], [61.7, 669.0], [61.8, 672.0], [61.9, 675.0], [62.0, 675.0], [62.1, 679.0], [62.2, 679.0], [62.3, 683.0], [62.4, 683.0], [62.5, 685.0], [62.6, 685.0], [62.7, 686.0], [62.8, 688.0], [62.9, 689.0], [63.0, 690.0], [63.1, 692.0], [63.2, 693.0], [63.3, 695.0], [63.4, 695.0], [63.5, 698.0], [63.6, 701.0], [63.7, 711.0], [63.8, 711.0], [63.9, 746.0], [64.0, 747.0], [64.1, 761.0], [64.2, 766.0], [64.3, 790.0], [64.4, 796.0], [64.5, 804.0], [64.6, 826.0], [64.7, 831.0], [64.8, 834.0], [64.9, 840.0], [65.0, 843.0], [65.1, 852.0], [65.2, 855.0], [65.3, 879.0], [65.4, 884.0], [65.5, 889.0], [65.6, 892.0], [65.7, 894.0], [65.8, 894.0], [65.9, 898.0], [66.0, 903.0], [66.1, 909.0], [66.2, 913.0], [66.3, 914.0], [66.4, 916.0], [66.5, 921.0], [66.6, 924.0], [66.7, 930.0], [66.8, 932.0], [66.9, 934.0], [67.0, 939.0], [67.1, 944.0], [67.2, 946.0], [67.3, 955.0], [67.4, 955.0], [67.5, 971.0], [67.6, 971.0], [67.7, 981.0], [67.8, 981.0], [67.9, 983.0], [68.0, 984.0], [68.1, 986.0], [68.2, 990.0], [68.3, 994.0], [68.4, 996.0], [68.5, 1005.0], [68.6, 1006.0], [68.7, 1007.0], [68.8, 1008.0], [68.9, 1010.0], [69.0, 1011.0], [69.1, 1013.0], [69.2, 1018.0], [69.3, 1019.0], [69.4, 1022.0], [69.5, 1025.0], [69.6, 1029.0], [69.7, 1032.0], [69.8, 1035.0], [69.9, 1036.0], [70.0, 1040.0], [70.1, 1041.0], [70.2, 1046.0], [70.3, 1050.0], [70.4, 1053.0], [70.5, 1053.0], [70.6, 1057.0], [70.7, 1058.0], [70.8, 1066.0], [70.9, 1067.0], [71.0, 1070.0], [71.1, 1070.0], [71.2, 1072.0], [71.3, 1072.0], [71.4, 1074.0], [71.5, 1079.0], [71.6, 1083.0], [71.7, 1083.0], [71.8, 1089.0], [71.9, 1091.0], [72.0, 1098.0], [72.1, 1100.0], [72.2, 1108.0], [72.3, 1114.0], [72.4, 1116.0], [72.5, 1117.0], [72.6, 1119.0], [72.7, 1121.0], [72.8, 1129.0], [72.9, 1131.0], [73.0, 1142.0], [73.1, 1143.0], [73.2, 1150.0], [73.3, 1150.0], [73.4, 1162.0], [73.5, 1163.0], [73.6, 1167.0], [73.7, 1168.0], [73.8, 1177.0], [73.9, 1178.0], [74.0, 1181.0], [74.1, 1182.0], [74.2, 1194.0], [74.3, 1203.0], [74.4, 1209.0], [74.5, 1213.0], [74.6, 1219.0], [74.7, 1220.0], [74.8, 1234.0], [74.9, 1234.0], [75.0, 1239.0], [75.1, 1267.0], [75.2, 1279.0], [75.3, 1288.0], [75.4, 1298.0], [75.5, 1298.0], [75.6, 1304.0], [75.7, 1313.0], [75.8, 1346.0], [75.9, 1348.0], [76.0, 1353.0], [76.1, 1364.0], [76.2, 1369.0], [76.3, 1373.0], [76.4, 1388.0], [76.5, 1407.0], [76.6, 1415.0], [76.7, 1417.0], [76.8, 1422.0], [76.9, 1426.0], [77.0, 1445.0], [77.1, 1447.0], [77.2, 1453.0], [77.3, 1460.0], [77.4, 1471.0], [77.5, 1472.0], [77.6, 1480.0], [77.7, 1480.0], [77.8, 1516.0], [77.9, 1517.0], [78.0, 1526.0], [78.1, 1526.0], [78.2, 1531.0], [78.3, 1532.0], [78.4, 1540.0], [78.5, 1541.0], [78.6, 1546.0], [78.7, 1546.0], [78.8, 1554.0], [78.9, 1558.0], [79.0, 1565.0], [79.1, 1567.0], [79.2, 1577.0], [79.3, 1579.0], [79.4, 1589.0], [79.5, 1593.0], [79.6, 1601.0], [79.7, 1605.0], [79.8, 1612.0], [79.9, 1625.0], [80.0, 1650.0], [80.1, 1655.0], [80.2, 1664.0], [80.3, 1667.0], [80.4, 1674.0], [80.5, 1675.0], [80.6, 1678.0], [80.7, 1679.0], [80.8, 1686.0], [80.9, 1688.0], [81.0, 1693.0], [81.1, 1694.0], [81.2, 1705.0], [81.3, 1711.0], [81.4, 1724.0], [81.5, 1727.0], [81.6, 1728.0], [81.7, 1730.0], [81.8, 1737.0], [81.9, 1741.0], [82.0, 1750.0], [82.1, 1751.0], [82.2, 1759.0], [82.3, 1778.0], [82.4, 1784.0], [82.5, 1786.0], [82.6, 1797.0], [82.7, 1801.0], [82.8, 1807.0], [82.9, 1812.0], [83.0, 1819.0], [83.1, 1827.0], [83.2, 1832.0], [83.3, 1837.0], [83.4, 1847.0], [83.5, 1853.0], [83.6, 1869.0], [83.7, 1869.0], [83.8, 1872.0], [83.9, 1876.0], [84.0, 1885.0], [84.1, 1887.0], [84.2, 1905.0], [84.3, 1906.0], [84.4, 1917.0], [84.5, 1920.0], [84.6, 1923.0], [84.7, 1924.0], [84.8, 1925.0], [84.9, 1927.0], [85.0, 1929.0], [85.1, 1930.0], [85.2, 1938.0], [85.3, 1949.0], [85.4, 1955.0], [85.5, 1962.0], [85.6, 1965.0], [85.7, 1973.0], [85.8, 1975.0], [85.9, 1978.0], [86.0, 1983.0], [86.1, 1986.0], [86.2, 1988.0], [86.3, 1988.0], [86.4, 1993.0], [86.5, 2000.0], [86.6, 2015.0], [86.7, 2038.0], [86.8, 2058.0], [86.9, 2063.0], [87.0, 2078.0], [87.1, 2079.0], [87.2, 2107.0], [87.3, 2109.0], [87.4, 2116.0], [87.5, 2117.0], [87.6, 2124.0], [87.7, 2126.0], [87.8, 2132.0], [87.9, 2134.0], [88.0, 2134.0], [88.1, 2135.0], [88.2, 2155.0], [88.3, 2158.0], [88.4, 2168.0], [88.5, 2170.0], [88.6, 2187.0], [88.7, 2195.0], [88.8, 2208.0], [88.9, 2212.0], [89.0, 2218.0], [89.1, 2219.0], [89.2, 2222.0], [89.3, 2223.0], [89.4, 2228.0], [89.5, 2234.0], [89.6, 2237.0], [89.7, 2245.0], [89.8, 2252.0], [89.9, 2259.0], [90.0, 2267.0], [90.1, 2279.0], [90.2, 2289.0], [90.3, 2294.0], [90.4, 2318.0], [90.5, 2321.0], [90.6, 2339.0], [90.7, 2339.0], [90.8, 2347.0], [90.9, 2368.0], [91.0, 2377.0], [91.1, 2377.0], [91.2, 2387.0], [91.3, 2392.0], [91.4, 2402.0], [91.5, 2403.0], [91.6, 2408.0], [91.7, 2409.0], [91.8, 2423.0], [91.9, 2425.0], [92.0, 2430.0], [92.1, 2439.0], [92.2, 2440.0], [92.3, 2452.0], [92.4, 2455.0], [92.5, 2461.0], [92.6, 2476.0], [92.7, 2476.0], [92.8, 2499.0], [92.9, 2507.0], [93.0, 2566.0], [93.1, 2572.0], [93.2, 2577.0], [93.3, 2591.0], [93.4, 2610.0], [93.5, 2622.0], [93.6, 2640.0], [93.7, 2658.0], [93.8, 2711.0], [93.9, 2732.0], [94.0, 2752.0], [94.1, 2755.0], [94.2, 2777.0], [94.3, 2788.0], [94.4, 2800.0], [94.5, 2827.0], [94.6, 2893.0], [94.7, 2911.0], [94.8, 2925.0], [94.9, 2982.0], [95.0, 2989.0], [95.1, 3020.0], [95.2, 3022.0], [95.3, 3023.0], [95.4, 3050.0], [95.5, 3057.0], [95.6, 3124.0], [95.7, 3131.0], [95.8, 3173.0], [95.9, 3204.0], [96.0, 3359.0], [96.1, 3376.0], [96.2, 3421.0], [96.3, 3439.0], [96.4, 3454.0], [96.5, 3494.0], [96.6, 3520.0], [96.7, 3522.0], [96.8, 3534.0], [96.9, 3535.0], [97.0, 3538.0], [97.1, 3539.0], [97.2, 3551.0], [97.3, 3554.0], [97.4, 3562.0], [97.5, 3571.0], [97.6, 3579.0], [97.7, 3583.0], [97.8, 3589.0], [97.9, 3593.0], [98.0, 3594.0], [98.1, 3600.0], [98.2, 3607.0], [98.3, 3608.0], [98.4, 3615.0], [98.5, 3626.0], [98.6, 3637.0], [98.7, 3662.0], [98.8, 3680.0], [98.9, 3684.0], [99.0, 3777.0], [99.1, 3827.0], [99.2, 3968.0], [99.3, 3994.0], [99.4, 4104.0], [99.5, 4751.0], [99.6, 6603.0], [99.7, 6653.0], [99.8, 8167.0], [99.9, 21004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 601.0, "series": [{"data": [[600.0, 277.0], [700.0, 14.0], [800.0, 22.0], [900.0, 37.0], [1000.0, 55.0], [1100.0, 33.0], [1200.0, 19.0], [1300.0, 14.0], [21000.0, 2.0], [1400.0, 20.0], [1500.0, 27.0], [1600.0, 23.0], [1700.0, 23.0], [1800.0, 23.0], [1900.0, 34.0], [2000.0, 11.0], [2100.0, 23.0], [2200.0, 25.0], [2300.0, 15.0], [2400.0, 22.0], [2500.0, 7.0], [2600.0, 7.0], [2700.0, 9.0], [2800.0, 4.0], [2900.0, 6.0], [3000.0, 8.0], [3100.0, 4.0], [3200.0, 2.0], [3300.0, 3.0], [3400.0, 5.0], [3500.0, 23.0], [3600.0, 14.0], [3700.0, 1.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4700.0, 1.0], [400.0, 75.0], [6500.0, 1.0], [6600.0, 2.0], [6700.0, 1.0], [500.0, 601.0], [8100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1091.0, "series": [{"data": [[0.0, 76.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1091.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 330.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.220338983050848, "minX": 1.65943968E12, "maxY": 198.66563467492261, "series": [{"data": [[1.6594398E12, 9.220338983050848], [1.65943974E12, 16.79338103756706], [1.65943968E12, 198.66563467492261]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594398E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 509.0, "minX": 1.0, "maxY": 3777.0, "series": [{"data": [[2.0, 1004.0], [3.0, 585.0], [4.0, 587.0], [5.0, 1098.0], [6.0, 509.0], [7.0, 1366.0], [8.0, 578.5600000000001], [9.0, 684.6714285714287], [10.0, 679.3663366336635], [11.0, 770.9639639639639], [12.0, 765.3300000000003], [13.0, 708.4875], [14.0, 1305.8208955223881], [15.0, 680.7260273972603], [16.0, 717.289855072464], [17.0, 671.9848484848484], [18.0, 841.3913043478262], [19.0, 940.115384615385], [20.0, 870.8135593220338], [21.0, 734.0851063829788], [22.0, 686.0588235294118], [23.0, 1089.2857142857142], [24.0, 985.0], [25.0, 1041.0], [26.0, 928.25], [27.0, 1509.857142857143], [28.0, 785.0], [29.0, 3777.0], [30.0, 3571.0], [31.0, 2122.5], [33.0, 3539.0], [32.0, 2438.5], [35.0, 3684.0], [34.0, 573.0], [36.0, 2505.0], [38.0, 2516.3333333333335], [40.0, 2266.0], [43.0, 3615.0], [42.0, 2065.0], [45.0, 581.0], [44.0, 3496.5], [47.0, 3516.0], [46.0, 1757.0], [49.0, 608.0], [48.0, 3442.5], [51.0, 3408.0], [50.0, 2310.5], [53.0, 1828.0], [52.0, 3359.0], [55.0, 596.3333333333334], [54.0, 3209.0], [57.0, 3173.0], [56.0, 2989.0], [59.0, 551.0], [58.0, 546.0], [61.0, 592.0], [60.0, 3064.0], [63.0, 2227.6666666666665], [62.0, 2985.0], [67.0, 611.0], [66.0, 3124.0], [65.0, 3131.0], [64.0, 608.0], [71.0, 955.0], [69.0, 1727.0], [68.0, 613.0], [75.0, 3020.0], [74.0, 3023.0], [73.0, 3048.0], [72.0, 3020.0], [79.0, 2802.0], [78.0, 2982.0], [77.0, 535.5], [76.0, 3022.0], [83.0, 591.0], [82.0, 2795.0], [81.0, 568.0], [80.0, 2767.0], [87.0, 549.0], [86.0, 2911.0], [85.0, 2661.0], [84.0, 1746.5], [90.0, 2889.0], [89.0, 520.0], [88.0, 2752.0], [95.0, 2658.0], [94.0, 2622.0], [93.0, 2679.5], [92.0, 2573.5], [99.0, 2800.0], [98.0, 2788.0], [97.0, 1456.6666666666667], [103.0, 2290.6666666666665], [102.0, 2586.3333333333335], [101.0, 2562.0], [100.0, 2566.0], [107.0, 2371.0], [106.0, 2409.0], [105.0, 1961.0], [104.0, 1493.5], [111.0, 1746.4], [110.0, 559.0], [109.0, 2591.0], [108.0, 1659.5], [115.0, 2160.0], [114.0, 2267.0], [113.0, 2481.0], [112.0, 1347.6666666666665], [118.0, 1980.25], [123.0, 2453.0], [122.0, 2453.5], [120.0, 1213.0], [127.0, 2134.0], [126.0, 1444.5], [124.0, 2439.0], [132.0, 2358.0], [130.0, 2402.0], [129.0, 2440.0], [128.0, 660.0], [142.0, 596.0], [141.0, 2158.0], [140.0, 1432.3333333333333], [139.0, 1799.6666666666667], [136.0, 1941.5], [150.0, 2392.0], [149.0, 2403.0], [148.0, 917.0], [147.0, 1050.0], [145.0, 753.0], [144.0, 1575.0], [158.0, 2195.0], [157.0, 2225.0], [156.0, 747.0], [155.0, 1931.0], [153.0, 1942.0], [167.0, 1978.1666666666665], [161.0, 2381.0], [160.0, 1577.0], [175.0, 2260.0], [174.0, 2339.0], [173.0, 1981.75], [171.0, 1563.5], [170.0, 1694.0], [169.0, 1058.0], [168.0, 2372.5], [183.0, 2107.0], [182.0, 2134.5], [181.0, 2296.0], [180.0, 1712.5], [178.0, 2117.0], [177.0, 1371.6666666666667], [191.0, 2218.0], [190.0, 2245.0], [189.0, 2101.75], [185.0, 1781.0], [184.0, 2279.0], [198.0, 2058.0], [197.0, 1546.0], [196.0, 2234.0], [195.0, 1731.0], [194.0, 2237.0], [193.0, 2082.0], [192.0, 2246.0], [207.0, 2128.0], [204.0, 2025.5], [200.0, 1709.0], [214.0, 1711.0], [213.0, 1646.0], [211.0, 2223.0], [210.0, 2165.5], [209.0, 2026.2], [222.0, 2205.0], [220.0, 1892.6666666666667], [217.0, 1905.3333333333333], [228.0, 2170.0], [227.0, 1829.0], [226.0, 1535.0], [225.0, 2116.0], [224.0, 1531.0], [239.0, 1636.6666666666667], [237.0, 1655.0], [236.0, 1833.0], [235.0, 1812.0], [233.0, 1752.5], [232.0, 1846.0], [246.0, 1704.3333333333333], [244.0, 1869.0], [242.0, 1676.0], [241.0, 1925.0], [240.0, 1983.0], [255.0, 1674.0], [254.0, 1978.0], [253.0, 1686.0], [249.0, 1885.0], [248.0, 1605.0], [271.0, 2126.0], [270.0, 1667.5], [268.0, 1945.0], [266.0, 2023.0], [265.0, 1698.5], [261.0, 1636.0], [259.0, 1783.3333333333335], [257.0, 1480.0], [286.0, 1667.0], [287.0, 1663.5], [284.0, 1905.0], [275.0, 1675.0], [274.0, 1660.0], [273.0, 1794.5], [283.0, 1846.5], [281.0, 1714.0], [280.0, 1847.0], [279.0, 1574.0], [278.0, 1847.0], [277.0, 1704.0], [276.0, 1407.0], [300.0, 1927.0], [299.0, 1650.25], [298.0, 1426.0], [288.0, 2079.0], [317.0, 1546.0], [315.0, 1877.75], [314.0, 1917.0], [313.0, 1975.0], [312.0, 1825.5], [310.0, 1923.0], [306.0, 1715.8], [305.0, 1807.0], [334.0, 1668.4], [331.0, 1813.0], [330.0, 1593.0], [328.0, 1420.0], [327.0, 1872.0], [325.0, 1554.0], [323.0, 1622.8571428571427], [348.0, 1759.1111111111109], [344.0, 1866.5], [342.0, 1365.6666666666667], [341.0, 1983.0], [339.0, 1987.5], [337.0, 1622.0], [1.0, 3536.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[55.658666666666676, 1083.661333333334]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 348.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 316.6333333333333, "minX": 1.65943968E12, "maxY": 8841.116666666667, "series": [{"data": [[1.6594398E12, 460.2], [1.65943974E12, 8841.116666666667], [1.65943968E12, 2519.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6594398E12, 316.6333333333333], [1.65943974E12, 5983.833333333333], [1.65943968E12, 1733.4333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594398E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 823.3389830508474, "minX": 1.65943968E12, "maxY": 1852.5789473684208, "series": [{"data": [[1.6594398E12, 823.3389830508474], [1.65943974E12, 875.2522361359585], [1.65943968E12, 1852.5789473684208]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594398E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 823.3389830508474, "minX": 1.65943968E12, "maxY": 1850.3777089783282, "series": [{"data": [[1.6594398E12, 823.3389830508474], [1.65943974E12, 833.9874776386396], [1.65943968E12, 1850.3777089783282]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594398E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 669.8983050847456, "minX": 1.65943968E12, "maxY": 1652.9752321981416, "series": [{"data": [[1.6594398E12, 669.8983050847456], [1.65943974E12, 713.4516994633274], [1.65943968E12, 1652.9752321981416]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594398E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 440.0, "minX": 1.65943968E12, "maxY": 8167.0, "series": [{"data": [[1.6594398E12, 6653.0], [1.65943974E12, 8167.0], [1.65943968E12, 3124.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6594398E12, 1053.0], [1.65943974E12, 1164.6], [1.65943968E12, 2573.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6594398E12, 6653.0], [1.65943974E12, 3763.719999999993], [1.65943968E12, 3035.16]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6594398E12, 3536.0], [1.65943974E12, 3216.400000000003], [1.65943968E12, 2785.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6594398E12, 463.0], [1.65943974E12, 440.0], [1.65943968E12, 520.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6594398E12, 553.0], [1.65943974E12, 591.0], [1.65943968E12, 1917.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 509.0, "minX": 1.0, "maxY": 21005.5, "series": [{"data": [[2.0, 794.5], [9.0, 685.0], [12.0, 562.5], [13.0, 563.0], [14.0, 586.5], [244.0, 2060.5], [15.0, 604.0], [16.0, 601.0], [1.0, 3536.0], [70.0, 3019.5], [17.0, 610.0], [18.0, 587.5], [79.0, 1741.0], [19.0, 580.5], [20.0, 572.0], [21.0, 560.0], [22.0, 583.5], [23.0, 608.0], [24.0, 558.0], [28.0, 509.0], [29.0, 523.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 21005.5], [21.0, 4104.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 244.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3536.0, "series": [{"data": [[2.0, 794.5], [9.0, 685.0], [12.0, 562.5], [13.0, 563.0], [14.0, 586.5], [244.0, 2060.5], [15.0, 604.0], [16.0, 601.0], [1.0, 3536.0], [70.0, 3019.5], [17.0, 610.0], [18.0, 587.5], [79.0, 1719.0], [19.0, 580.5], [20.0, 572.0], [21.0, 560.0], [22.0, 583.5], [23.0, 608.0], [24.0, 558.0], [28.0, 509.0], [29.0, 523.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 0.0], [21.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 244.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.65943968E12, "maxY": 17.75, "series": [{"data": [[1.6594398E12, 0.7833333333333333], [1.65943974E12, 17.75], [1.65943968E12, 6.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594398E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.65943968E12, "maxY": 18.583333333333332, "series": [{"data": [[1.6594398E12, 0.9833333333333333], [1.65943974E12, 18.583333333333332], [1.65943968E12, 5.383333333333334]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.65943974E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.65943974E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6594398E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.65943968E12, "maxY": 18.583333333333332, "series": [{"data": [[1.6594398E12, 0.9833333333333333], [1.65943974E12, 18.583333333333332], [1.65943968E12, 5.383333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65943974E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594398E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.65943968E12, "maxY": 18.583333333333332, "series": [{"data": [[1.6594398E12, 0.9833333333333333], [1.65943974E12, 18.583333333333332], [1.65943968E12, 5.383333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65943974E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6594398E12, "title": "Total Transactions Per Second"}},
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

