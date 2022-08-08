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
        data: {"result": {"minY": 410.0, "minX": 0.0, "maxY": 7179.0, "series": [{"data": [[0.0, 410.0], [0.1, 416.0], [0.2, 417.0], [0.3, 417.0], [0.4, 420.0], [0.5, 423.0], [0.6, 424.0], [0.7, 427.0], [0.8, 427.0], [0.9, 429.0], [1.0, 429.0], [1.1, 431.0], [1.2, 432.0], [1.3, 436.0], [1.4, 440.0], [1.5, 440.0], [1.6, 440.0], [1.7, 441.0], [1.8, 442.0], [1.9, 443.0], [2.0, 444.0], [2.1, 446.0], [2.2, 447.0], [2.3, 448.0], [2.4, 448.0], [2.5, 448.0], [2.6, 449.0], [2.7, 449.0], [2.8, 449.0], [2.9, 450.0], [3.0, 451.0], [3.1, 451.0], [3.2, 452.0], [3.3, 452.0], [3.4, 453.0], [3.5, 453.0], [3.6, 454.0], [3.7, 454.0], [3.8, 454.0], [3.9, 455.0], [4.0, 455.0], [4.1, 455.0], [4.2, 456.0], [4.3, 456.0], [4.4, 458.0], [4.5, 458.0], [4.6, 459.0], [4.7, 459.0], [4.8, 459.0], [4.9, 460.0], [5.0, 460.0], [5.1, 462.0], [5.2, 462.0], [5.3, 462.0], [5.4, 462.0], [5.5, 462.0], [5.6, 463.0], [5.7, 463.0], [5.8, 464.0], [5.9, 464.0], [6.0, 465.0], [6.1, 465.0], [6.2, 465.0], [6.3, 466.0], [6.4, 466.0], [6.5, 466.0], [6.6, 466.0], [6.7, 467.0], [6.8, 467.0], [6.9, 467.0], [7.0, 467.0], [7.1, 468.0], [7.2, 468.0], [7.3, 468.0], [7.4, 469.0], [7.5, 469.0], [7.6, 470.0], [7.7, 470.0], [7.8, 470.0], [7.9, 471.0], [8.0, 471.0], [8.1, 471.0], [8.2, 472.0], [8.3, 472.0], [8.4, 473.0], [8.5, 473.0], [8.6, 473.0], [8.7, 474.0], [8.8, 474.0], [8.9, 474.0], [9.0, 474.0], [9.1, 475.0], [9.2, 475.0], [9.3, 475.0], [9.4, 476.0], [9.5, 476.0], [9.6, 476.0], [9.7, 476.0], [9.8, 477.0], [9.9, 477.0], [10.0, 477.0], [10.1, 478.0], [10.2, 478.0], [10.3, 478.0], [10.4, 478.0], [10.5, 478.0], [10.6, 479.0], [10.7, 479.0], [10.8, 479.0], [10.9, 480.0], [11.0, 480.0], [11.1, 480.0], [11.2, 480.0], [11.3, 481.0], [11.4, 481.0], [11.5, 481.0], [11.6, 481.0], [11.7, 481.0], [11.8, 481.0], [11.9, 481.0], [12.0, 482.0], [12.1, 482.0], [12.2, 482.0], [12.3, 483.0], [12.4, 483.0], [12.5, 483.0], [12.6, 483.0], [12.7, 484.0], [12.8, 484.0], [12.9, 484.0], [13.0, 485.0], [13.1, 485.0], [13.2, 485.0], [13.3, 486.0], [13.4, 486.0], [13.5, 486.0], [13.6, 486.0], [13.7, 486.0], [13.8, 487.0], [13.9, 487.0], [14.0, 487.0], [14.1, 488.0], [14.2, 488.0], [14.3, 488.0], [14.4, 489.0], [14.5, 489.0], [14.6, 489.0], [14.7, 489.0], [14.8, 490.0], [14.9, 490.0], [15.0, 490.0], [15.1, 490.0], [15.2, 490.0], [15.3, 491.0], [15.4, 491.0], [15.5, 491.0], [15.6, 492.0], [15.7, 492.0], [15.8, 492.0], [15.9, 493.0], [16.0, 493.0], [16.1, 493.0], [16.2, 493.0], [16.3, 494.0], [16.4, 494.0], [16.5, 494.0], [16.6, 494.0], [16.7, 495.0], [16.8, 495.0], [16.9, 495.0], [17.0, 495.0], [17.1, 495.0], [17.2, 495.0], [17.3, 496.0], [17.4, 496.0], [17.5, 496.0], [17.6, 497.0], [17.7, 497.0], [17.8, 497.0], [17.9, 498.0], [18.0, 498.0], [18.1, 498.0], [18.2, 498.0], [18.3, 498.0], [18.4, 498.0], [18.5, 499.0], [18.6, 499.0], [18.7, 499.0], [18.8, 499.0], [18.9, 499.0], [19.0, 500.0], [19.1, 500.0], [19.2, 500.0], [19.3, 500.0], [19.4, 501.0], [19.5, 501.0], [19.6, 501.0], [19.7, 501.0], [19.8, 502.0], [19.9, 502.0], [20.0, 502.0], [20.1, 502.0], [20.2, 502.0], [20.3, 502.0], [20.4, 502.0], [20.5, 502.0], [20.6, 503.0], [20.7, 503.0], [20.8, 503.0], [20.9, 503.0], [21.0, 504.0], [21.1, 504.0], [21.2, 504.0], [21.3, 504.0], [21.4, 505.0], [21.5, 505.0], [21.6, 505.0], [21.7, 505.0], [21.8, 505.0], [21.9, 506.0], [22.0, 506.0], [22.1, 506.0], [22.2, 506.0], [22.3, 506.0], [22.4, 506.0], [22.5, 506.0], [22.6, 507.0], [22.7, 507.0], [22.8, 507.0], [22.9, 507.0], [23.0, 507.0], [23.1, 507.0], [23.2, 507.0], [23.3, 507.0], [23.4, 508.0], [23.5, 508.0], [23.6, 508.0], [23.7, 508.0], [23.8, 508.0], [23.9, 509.0], [24.0, 509.0], [24.1, 509.0], [24.2, 509.0], [24.3, 509.0], [24.4, 510.0], [24.5, 510.0], [24.6, 510.0], [24.7, 510.0], [24.8, 510.0], [24.9, 510.0], [25.0, 511.0], [25.1, 511.0], [25.2, 511.0], [25.3, 511.0], [25.4, 511.0], [25.5, 511.0], [25.6, 512.0], [25.7, 512.0], [25.8, 512.0], [25.9, 512.0], [26.0, 512.0], [26.1, 513.0], [26.2, 513.0], [26.3, 513.0], [26.4, 513.0], [26.5, 513.0], [26.6, 514.0], [26.7, 514.0], [26.8, 514.0], [26.9, 514.0], [27.0, 514.0], [27.1, 514.0], [27.2, 515.0], [27.3, 515.0], [27.4, 515.0], [27.5, 515.0], [27.6, 515.0], [27.7, 515.0], [27.8, 515.0], [27.9, 515.0], [28.0, 516.0], [28.1, 516.0], [28.2, 516.0], [28.3, 516.0], [28.4, 516.0], [28.5, 516.0], [28.6, 517.0], [28.7, 517.0], [28.8, 517.0], [28.9, 517.0], [29.0, 517.0], [29.1, 517.0], [29.2, 517.0], [29.3, 518.0], [29.4, 518.0], [29.5, 518.0], [29.6, 518.0], [29.7, 518.0], [29.8, 518.0], [29.9, 519.0], [30.0, 519.0], [30.1, 519.0], [30.2, 519.0], [30.3, 519.0], [30.4, 519.0], [30.5, 519.0], [30.6, 520.0], [30.7, 520.0], [30.8, 520.0], [30.9, 520.0], [31.0, 520.0], [31.1, 520.0], [31.2, 521.0], [31.3, 521.0], [31.4, 521.0], [31.5, 521.0], [31.6, 521.0], [31.7, 521.0], [31.8, 521.0], [31.9, 521.0], [32.0, 522.0], [32.1, 522.0], [32.2, 522.0], [32.3, 522.0], [32.4, 522.0], [32.5, 522.0], [32.6, 523.0], [32.7, 523.0], [32.8, 523.0], [32.9, 523.0], [33.0, 523.0], [33.1, 523.0], [33.2, 523.0], [33.3, 524.0], [33.4, 524.0], [33.5, 524.0], [33.6, 524.0], [33.7, 524.0], [33.8, 524.0], [33.9, 525.0], [34.0, 525.0], [34.1, 525.0], [34.2, 525.0], [34.3, 525.0], [34.4, 525.0], [34.5, 525.0], [34.6, 525.0], [34.7, 525.0], [34.8, 525.0], [34.9, 526.0], [35.0, 526.0], [35.1, 526.0], [35.2, 526.0], [35.3, 526.0], [35.4, 526.0], [35.5, 527.0], [35.6, 527.0], [35.7, 527.0], [35.8, 527.0], [35.9, 527.0], [36.0, 527.0], [36.1, 528.0], [36.2, 528.0], [36.3, 528.0], [36.4, 528.0], [36.5, 528.0], [36.6, 528.0], [36.7, 528.0], [36.8, 528.0], [36.9, 529.0], [37.0, 529.0], [37.1, 529.0], [37.2, 529.0], [37.3, 529.0], [37.4, 530.0], [37.5, 530.0], [37.6, 530.0], [37.7, 530.0], [37.8, 530.0], [37.9, 530.0], [38.0, 530.0], [38.1, 530.0], [38.2, 530.0], [38.3, 530.0], [38.4, 531.0], [38.5, 531.0], [38.6, 531.0], [38.7, 531.0], [38.8, 531.0], [38.9, 531.0], [39.0, 531.0], [39.1, 532.0], [39.2, 532.0], [39.3, 532.0], [39.4, 532.0], [39.5, 532.0], [39.6, 532.0], [39.7, 533.0], [39.8, 533.0], [39.9, 533.0], [40.0, 533.0], [40.1, 533.0], [40.2, 533.0], [40.3, 533.0], [40.4, 533.0], [40.5, 533.0], [40.6, 534.0], [40.7, 534.0], [40.8, 534.0], [40.9, 534.0], [41.0, 534.0], [41.1, 534.0], [41.2, 534.0], [41.3, 534.0], [41.4, 535.0], [41.5, 535.0], [41.6, 535.0], [41.7, 535.0], [41.8, 536.0], [41.9, 536.0], [42.0, 536.0], [42.1, 536.0], [42.2, 536.0], [42.3, 536.0], [42.4, 536.0], [42.5, 536.0], [42.6, 536.0], [42.7, 537.0], [42.8, 537.0], [42.9, 537.0], [43.0, 538.0], [43.1, 538.0], [43.2, 538.0], [43.3, 538.0], [43.4, 538.0], [43.5, 539.0], [43.6, 539.0], [43.7, 539.0], [43.8, 539.0], [43.9, 539.0], [44.0, 539.0], [44.1, 539.0], [44.2, 540.0], [44.3, 540.0], [44.4, 540.0], [44.5, 540.0], [44.6, 540.0], [44.7, 540.0], [44.8, 541.0], [44.9, 541.0], [45.0, 541.0], [45.1, 541.0], [45.2, 541.0], [45.3, 541.0], [45.4, 541.0], [45.5, 542.0], [45.6, 542.0], [45.7, 542.0], [45.8, 542.0], [45.9, 542.0], [46.0, 542.0], [46.1, 543.0], [46.2, 543.0], [46.3, 543.0], [46.4, 543.0], [46.5, 543.0], [46.6, 543.0], [46.7, 543.0], [46.8, 543.0], [46.9, 544.0], [47.0, 544.0], [47.1, 544.0], [47.2, 544.0], [47.3, 544.0], [47.4, 544.0], [47.5, 545.0], [47.6, 545.0], [47.7, 545.0], [47.8, 545.0], [47.9, 545.0], [48.0, 545.0], [48.1, 546.0], [48.2, 546.0], [48.3, 546.0], [48.4, 546.0], [48.5, 546.0], [48.6, 546.0], [48.7, 547.0], [48.8, 547.0], [48.9, 547.0], [49.0, 548.0], [49.1, 548.0], [49.2, 548.0], [49.3, 548.0], [49.4, 548.0], [49.5, 548.0], [49.6, 549.0], [49.7, 549.0], [49.8, 549.0], [49.9, 549.0], [50.0, 549.0], [50.1, 550.0], [50.2, 550.0], [50.3, 550.0], [50.4, 550.0], [50.5, 550.0], [50.6, 550.0], [50.7, 550.0], [50.8, 551.0], [50.9, 551.0], [51.0, 551.0], [51.1, 551.0], [51.2, 551.0], [51.3, 552.0], [51.4, 552.0], [51.5, 552.0], [51.6, 552.0], [51.7, 553.0], [51.8, 553.0], [51.9, 553.0], [52.0, 553.0], [52.1, 553.0], [52.2, 554.0], [52.3, 554.0], [52.4, 554.0], [52.5, 554.0], [52.6, 554.0], [52.7, 554.0], [52.8, 554.0], [52.9, 555.0], [53.0, 555.0], [53.1, 555.0], [53.2, 556.0], [53.3, 556.0], [53.4, 557.0], [53.5, 557.0], [53.6, 557.0], [53.7, 558.0], [53.8, 558.0], [53.9, 558.0], [54.0, 558.0], [54.1, 559.0], [54.2, 559.0], [54.3, 559.0], [54.4, 559.0], [54.5, 560.0], [54.6, 560.0], [54.7, 560.0], [54.8, 560.0], [54.9, 560.0], [55.0, 560.0], [55.1, 560.0], [55.2, 561.0], [55.3, 561.0], [55.4, 561.0], [55.5, 561.0], [55.6, 561.0], [55.7, 561.0], [55.8, 561.0], [55.9, 561.0], [56.0, 562.0], [56.1, 562.0], [56.2, 562.0], [56.3, 562.0], [56.4, 563.0], [56.5, 563.0], [56.6, 563.0], [56.7, 564.0], [56.8, 564.0], [56.9, 564.0], [57.0, 565.0], [57.1, 565.0], [57.2, 565.0], [57.3, 565.0], [57.4, 565.0], [57.5, 565.0], [57.6, 565.0], [57.7, 566.0], [57.8, 566.0], [57.9, 566.0], [58.0, 566.0], [58.1, 567.0], [58.2, 567.0], [58.3, 567.0], [58.4, 568.0], [58.5, 568.0], [58.6, 568.0], [58.7, 568.0], [58.8, 568.0], [58.9, 569.0], [59.0, 569.0], [59.1, 569.0], [59.2, 570.0], [59.3, 570.0], [59.4, 571.0], [59.5, 571.0], [59.6, 571.0], [59.7, 571.0], [59.8, 572.0], [59.9, 572.0], [60.0, 573.0], [60.1, 573.0], [60.2, 573.0], [60.3, 573.0], [60.4, 573.0], [60.5, 574.0], [60.6, 574.0], [60.7, 574.0], [60.8, 574.0], [60.9, 575.0], [61.0, 575.0], [61.1, 575.0], [61.2, 576.0], [61.3, 576.0], [61.4, 576.0], [61.5, 576.0], [61.6, 577.0], [61.7, 577.0], [61.8, 577.0], [61.9, 578.0], [62.0, 578.0], [62.1, 578.0], [62.2, 578.0], [62.3, 579.0], [62.4, 579.0], [62.5, 579.0], [62.6, 579.0], [62.7, 579.0], [62.8, 580.0], [62.9, 580.0], [63.0, 581.0], [63.1, 581.0], [63.2, 581.0], [63.3, 581.0], [63.4, 582.0], [63.5, 582.0], [63.6, 582.0], [63.7, 583.0], [63.8, 583.0], [63.9, 583.0], [64.0, 583.0], [64.1, 583.0], [64.2, 583.0], [64.3, 584.0], [64.4, 584.0], [64.5, 584.0], [64.6, 585.0], [64.7, 586.0], [64.8, 586.0], [64.9, 586.0], [65.0, 586.0], [65.1, 587.0], [65.2, 587.0], [65.3, 587.0], [65.4, 587.0], [65.5, 588.0], [65.6, 588.0], [65.7, 588.0], [65.8, 589.0], [65.9, 589.0], [66.0, 589.0], [66.1, 589.0], [66.2, 590.0], [66.3, 590.0], [66.4, 590.0], [66.5, 590.0], [66.6, 590.0], [66.7, 591.0], [66.8, 591.0], [66.9, 591.0], [67.0, 591.0], [67.1, 592.0], [67.2, 592.0], [67.3, 593.0], [67.4, 593.0], [67.5, 593.0], [67.6, 593.0], [67.7, 594.0], [67.8, 594.0], [67.9, 594.0], [68.0, 595.0], [68.1, 595.0], [68.2, 595.0], [68.3, 596.0], [68.4, 596.0], [68.5, 596.0], [68.6, 596.0], [68.7, 597.0], [68.8, 597.0], [68.9, 598.0], [69.0, 598.0], [69.1, 599.0], [69.2, 600.0], [69.3, 600.0], [69.4, 600.0], [69.5, 600.0], [69.6, 601.0], [69.7, 601.0], [69.8, 602.0], [69.9, 603.0], [70.0, 603.0], [70.1, 604.0], [70.2, 604.0], [70.3, 605.0], [70.4, 606.0], [70.5, 606.0], [70.6, 607.0], [70.7, 608.0], [70.8, 609.0], [70.9, 610.0], [71.0, 610.0], [71.1, 610.0], [71.2, 612.0], [71.3, 613.0], [71.4, 613.0], [71.5, 616.0], [71.6, 616.0], [71.7, 617.0], [71.8, 617.0], [71.9, 619.0], [72.0, 619.0], [72.1, 619.0], [72.2, 622.0], [72.3, 622.0], [72.4, 624.0], [72.5, 625.0], [72.6, 627.0], [72.7, 627.0], [72.8, 629.0], [72.9, 629.0], [73.0, 631.0], [73.1, 633.0], [73.2, 635.0], [73.3, 637.0], [73.4, 639.0], [73.5, 641.0], [73.6, 644.0], [73.7, 644.0], [73.8, 646.0], [73.9, 653.0], [74.0, 661.0], [74.1, 672.0], [74.2, 677.0], [74.3, 690.0], [74.4, 738.0], [74.5, 784.0], [74.6, 795.0], [74.7, 811.0], [74.8, 818.0], [74.9, 838.0], [75.0, 839.0], [75.1, 845.0], [75.2, 848.0], [75.3, 850.0], [75.4, 851.0], [75.5, 860.0], [75.6, 868.0], [75.7, 873.0], [75.8, 874.0], [75.9, 875.0], [76.0, 880.0], [76.1, 880.0], [76.2, 881.0], [76.3, 892.0], [76.4, 895.0], [76.5, 896.0], [76.6, 901.0], [76.7, 902.0], [76.8, 906.0], [76.9, 908.0], [77.0, 911.0], [77.1, 913.0], [77.2, 916.0], [77.3, 920.0], [77.4, 921.0], [77.5, 923.0], [77.6, 927.0], [77.7, 929.0], [77.8, 931.0], [77.9, 933.0], [78.0, 935.0], [78.1, 937.0], [78.2, 939.0], [78.3, 940.0], [78.4, 950.0], [78.5, 952.0], [78.6, 955.0], [78.7, 956.0], [78.8, 957.0], [78.9, 963.0], [79.0, 967.0], [79.1, 969.0], [79.2, 970.0], [79.3, 972.0], [79.4, 972.0], [79.5, 975.0], [79.6, 977.0], [79.7, 977.0], [79.8, 980.0], [79.9, 981.0], [80.0, 985.0], [80.1, 987.0], [80.2, 991.0], [80.3, 996.0], [80.4, 999.0], [80.5, 1008.0], [80.6, 1011.0], [80.7, 1014.0], [80.8, 1016.0], [80.9, 1020.0], [81.0, 1021.0], [81.1, 1024.0], [81.2, 1027.0], [81.3, 1027.0], [81.4, 1028.0], [81.5, 1033.0], [81.6, 1036.0], [81.7, 1042.0], [81.8, 1045.0], [81.9, 1048.0], [82.0, 1052.0], [82.1, 1058.0], [82.2, 1067.0], [82.3, 1067.0], [82.4, 1074.0], [82.5, 1079.0], [82.6, 1086.0], [82.7, 1087.0], [82.8, 1092.0], [82.9, 1097.0], [83.0, 1106.0], [83.1, 1108.0], [83.2, 1112.0], [83.3, 1116.0], [83.4, 1131.0], [83.5, 1141.0], [83.6, 1149.0], [83.7, 1159.0], [83.8, 1162.0], [83.9, 1170.0], [84.0, 1179.0], [84.1, 1191.0], [84.2, 1202.0], [84.3, 1205.0], [84.4, 1212.0], [84.5, 1222.0], [84.6, 1374.0], [84.7, 1404.0], [84.8, 1487.0], [84.9, 1530.0], [85.0, 1533.0], [85.1, 1564.0], [85.2, 1581.0], [85.3, 1594.0], [85.4, 1732.0], [85.5, 1760.0], [85.6, 1785.0], [85.7, 1799.0], [85.8, 1813.0], [85.9, 1824.0], [86.0, 1834.0], [86.1, 1838.0], [86.2, 1847.0], [86.3, 1892.0], [86.4, 1910.0], [86.5, 1942.0], [86.6, 1945.0], [86.7, 1951.0], [86.8, 1962.0], [86.9, 1977.0], [87.0, 1985.0], [87.1, 2000.0], [87.2, 2018.0], [87.3, 2022.0], [87.4, 2025.0], [87.5, 2042.0], [87.6, 2054.0], [87.7, 2055.0], [87.8, 2062.0], [87.9, 2066.0], [88.0, 2108.0], [88.1, 2109.0], [88.2, 2111.0], [88.3, 2118.0], [88.4, 2120.0], [88.5, 2124.0], [88.6, 2125.0], [88.7, 2128.0], [88.8, 2132.0], [88.9, 2143.0], [89.0, 2161.0], [89.1, 2176.0], [89.2, 2277.0], [89.3, 2305.0], [89.4, 2326.0], [89.5, 2363.0], [89.6, 2386.0], [89.7, 2406.0], [89.8, 2473.0], [89.9, 2527.0], [90.0, 2547.0], [90.1, 2575.0], [90.2, 2644.0], [90.3, 2657.0], [90.4, 2728.0], [90.5, 2775.0], [90.6, 2850.0], [90.7, 2965.0], [90.8, 3062.0], [90.9, 3111.0], [91.0, 3136.0], [91.1, 3203.0], [91.2, 3264.0], [91.3, 3292.0], [91.4, 3300.0], [91.5, 3320.0], [91.6, 3414.0], [91.7, 3460.0], [91.8, 3471.0], [91.9, 3496.0], [92.0, 3513.0], [92.1, 3521.0], [92.2, 3529.0], [92.3, 3532.0], [92.4, 3539.0], [92.5, 3553.0], [92.6, 3567.0], [92.7, 3586.0], [92.8, 3596.0], [92.9, 3604.0], [93.0, 3632.0], [93.1, 3659.0], [93.2, 3717.0], [93.3, 3764.0], [93.4, 3774.0], [93.5, 3800.0], [93.6, 3818.0], [93.7, 3872.0], [93.8, 3929.0], [93.9, 3990.0], [94.0, 4048.0], [94.1, 4079.0], [94.2, 4124.0], [94.3, 4167.0], [94.4, 4247.0], [94.5, 4256.0], [94.6, 4274.0], [94.7, 4325.0], [94.8, 4343.0], [94.9, 4359.0], [95.0, 4408.0], [95.1, 4442.0], [95.2, 4520.0], [95.3, 4608.0], [95.4, 4641.0], [95.5, 4699.0], [95.6, 4702.0], [95.7, 4744.0], [95.8, 4835.0], [95.9, 4866.0], [96.0, 4948.0], [96.1, 4965.0], [96.2, 4991.0], [96.3, 5019.0], [96.4, 5030.0], [96.5, 5072.0], [96.6, 5100.0], [96.7, 5194.0], [96.8, 5216.0], [96.9, 5256.0], [97.0, 5294.0], [97.1, 5300.0], [97.2, 5314.0], [97.3, 5405.0], [97.4, 5432.0], [97.5, 5455.0], [97.6, 5468.0], [97.7, 5521.0], [97.8, 5548.0], [97.9, 5710.0], [98.0, 5759.0], [98.1, 5829.0], [98.2, 5838.0], [98.3, 5899.0], [98.4, 5909.0], [98.5, 5927.0], [98.6, 5981.0], [98.7, 6124.0], [98.8, 6195.0], [98.9, 6202.0], [99.0, 6232.0], [99.1, 6249.0], [99.2, 6353.0], [99.3, 6401.0], [99.4, 6484.0], [99.5, 6524.0], [99.6, 6597.0], [99.7, 6704.0], [99.8, 6710.0], [99.9, 6860.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 1006.0, "series": [{"data": [[600.0, 103.0], [700.0, 6.0], [800.0, 38.0], [900.0, 78.0], [1000.0, 50.0], [1100.0, 25.0], [1200.0, 8.0], [1300.0, 2.0], [1400.0, 4.0], [1500.0, 9.0], [1600.0, 1.0], [1700.0, 7.0], [1800.0, 13.0], [1900.0, 14.0], [2000.0, 18.0], [2100.0, 23.0], [2200.0, 3.0], [2300.0, 8.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 5.0], [2800.0, 3.0], [2700.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 5.0], [3200.0, 6.0], [3300.0, 4.0], [3400.0, 7.0], [3500.0, 19.0], [3600.0, 5.0], [3700.0, 7.0], [3800.0, 6.0], [3900.0, 3.0], [4000.0, 5.0], [4200.0, 7.0], [4100.0, 3.0], [4300.0, 6.0], [4400.0, 4.0], [4500.0, 2.0], [4600.0, 5.0], [4700.0, 5.0], [4800.0, 4.0], [4900.0, 6.0], [5000.0, 6.0], [5100.0, 3.0], [5200.0, 7.0], [5300.0, 4.0], [5400.0, 8.0], [5600.0, 1.0], [5500.0, 3.0], [5700.0, 4.0], [5800.0, 5.0], [5900.0, 6.0], [6100.0, 5.0], [6200.0, 5.0], [6300.0, 3.0], [6400.0, 3.0], [6500.0, 4.0], [6600.0, 1.0], [6700.0, 3.0], [6800.0, 2.0], [7100.0, 1.0], [400.0, 378.0], [500.0, 1006.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 302.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1311.0, "series": [{"data": [[0.0, 387.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1311.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 302.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.09891808346212, "minX": 1.65943986E12, "maxY": 130.841163310962, "series": [{"data": [[1.65943998E12, 8.09891808346212], [1.65943992E12, 10.70529801324504], [1.65943986E12, 130.841163310962]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943998E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 432.0, "minX": 2.0, "maxY": 6783.0, "series": [{"data": [[2.0, 982.5], [3.0, 552.0], [4.0, 561.0], [5.0, 522.0], [6.0, 536.2096774193546], [7.0, 587.9329608938546], [8.0, 586.0383141762454], [9.0, 673.1071428571429], [10.0, 631.0536277602522], [11.0, 699.1276595744681], [12.0, 687.6555555555557], [13.0, 705.5813953488373], [14.0, 670.9264705882354], [15.0, 630.2195121951219], [16.0, 919.5999999999999], [17.0, 1794.2], [18.0, 6783.0], [19.0, 4379.0], [20.0, 561.0], [21.0, 530.5], [22.0, 6704.0], [23.0, 6471.0], [24.0, 1068.5], [25.0, 975.0], [26.0, 6597.0], [27.0, 5818.0], [28.0, 6374.0], [29.0, 474.0], [30.0, 6367.5], [31.0, 6484.0], [33.0, 549.0], [32.0, 3425.0], [35.0, 6353.0], [34.0, 3592.5], [37.0, 6288.5], [36.0, 6401.0], [39.0, 545.0], [38.0, 873.0], [41.0, 902.0], [40.0, 513.0], [43.0, 5405.0], [42.0, 5791.0], [45.0, 6072.5], [44.0, 3223.0], [47.0, 3670.0], [46.0, 498.0], [49.0, 3197.5], [48.0, 6161.0], [51.0, 3242.0], [53.0, 5927.0], [52.0, 1047.0], [55.0, 5905.0], [54.0, 495.0], [57.0, 4220.75], [56.0, 5844.5], [59.0, 5838.0], [58.0, 5521.0], [61.0, 5441.0], [60.0, 5839.0], [63.0, 5758.0], [62.0, 2965.5], [67.0, 5566.5], [65.0, 3032.5], [64.0, 516.0], [71.0, 3053.0], [69.0, 4048.0], [68.0, 3052.0], [75.0, 4442.0], [74.0, 5339.0], [73.0, 5391.0], [72.0, 5310.0], [79.0, 495.0], [78.0, 5209.0], [77.0, 3224.0], [76.0, 5281.0], [83.0, 502.0], [82.0, 470.0], [81.0, 5299.0], [80.0, 4884.666666666667], [87.0, 2894.0], [86.0, 3265.333333333333], [84.0, 964.0], [91.0, 4767.0], [90.0, 2891.0], [89.0, 5216.0], [95.0, 2870.5], [94.0, 5006.5], [92.0, 507.0], [99.0, 494.5], [98.0, 2930.5], [97.0, 2876.0], [96.0, 5019.0], [103.0, 5072.0], [102.0, 921.0], [101.0, 517.5], [100.0, 5100.0], [107.0, 2872.5], [106.0, 4877.0], [105.0, 4700.0], [104.0, 2798.0], [110.0, 4907.0], [108.0, 689.0], [114.0, 4792.0], [113.0, 2484.5], [112.0, 4364.75], [119.0, 3336.0], [118.0, 4393.0], [116.0, 3166.0], [123.0, 4642.0], [122.0, 4274.0], [121.0, 4321.0], [120.0, 4573.0], [127.0, 3140.3333333333335], [126.0, 574.0], [125.0, 2471.25], [124.0, 1982.0], [135.0, 2413.5], [134.0, 432.0], [133.0, 4288.0], [132.0, 4142.5], [131.0, 4328.0], [130.0, 4162.5], [129.0, 2533.25], [128.0, 583.0], [143.0, 2228.0], [142.0, 597.0], [141.0, 3774.0], [140.0, 3822.5], [139.0, 3818.0], [138.0, 3872.0], [137.0, 1608.0], [136.0, 2411.5], [150.0, 3591.0], [149.0, 446.0], [148.0, 3792.0], [147.0, 3632.0], [146.0, 1597.3333333333335], [145.0, 2034.5], [144.0, 3688.5], [159.0, 1945.0], [158.0, 588.0], [157.0, 530.0], [156.0, 3369.0], [155.0, 1527.6666666666665], [153.0, 2155.5], [152.0, 2266.25], [167.0, 526.0], [166.0, 3292.5], [165.0, 3203.0], [164.0, 1799.0], [163.0, 1846.0], [162.0, 571.0], [161.0, 3388.5], [160.0, 3414.0], [175.0, 2454.5], [174.0, 1885.5], [173.0, 3111.0], [172.0, 572.0], [171.0, 783.0], [170.0, 3301.0], [169.0, 494.0], [168.0, 3163.0], [183.0, 2896.5], [182.0, 499.0], [181.0, 2897.0], [180.0, 586.0], [179.0, 501.0], [178.0, 3036.0], [177.0, 487.0], [176.0, 888.0], [191.0, 499.0], [190.0, 1570.5], [189.0, 2474.5], [188.0, 1166.6666666666667], [187.0, 2690.0], [186.0, 2789.0], [185.0, 1725.0], [184.0, 2103.0], [199.0, 2272.0], [198.0, 1532.0], [197.0, 1500.75], [196.0, 2593.5], [195.0, 1155.6666666666667], [194.0, 1602.5], [193.0, 1879.0], [192.0, 2562.0], [207.0, 2047.0], [206.0, 819.0], [205.0, 1557.5], [203.0, 2396.0], [202.0, 1021.6666666666667], [201.0, 2473.0], [200.0, 532.0], [215.0, 2316.0], [214.0, 2334.0], [213.0, 1555.0], [212.0, 2365.5], [210.0, 1469.0], [208.0, 801.0], [222.0, 1234.5], [221.0, 1981.0], [220.0, 1191.0], [219.0, 2295.0], [218.0, 2054.0], [217.0, 713.0], [216.0, 1884.5], [231.0, 2161.0], [230.0, 1838.0], [229.0, 2175.0], [228.0, 2074.0], [227.0, 2042.0], [226.0, 1522.5], [225.0, 1989.0], [224.0, 1480.0], [237.0, 2125.0], [236.0, 2057.0], [234.0, 1954.0], [233.0, 2108.0], [232.0, 1067.0], [246.0, 2128.0], [245.0, 2020.0], [244.0, 1970.5], [242.0, 2132.0], [240.0, 2128.0], [255.0, 2108.5], [253.0, 2118.5], [251.0, 2123.0], [250.0, 1952.0], [271.0, 2000.5], [269.0, 1945.5], [267.0, 1813.5], [265.0, 1985.0], [264.0, 1837.0], [263.0, 1813.0], [262.0, 1732.0], [261.0, 1910.0], [260.0, 1839.0], [259.0, 2015.3333333333333], [256.0, 2109.5], [275.0, 1592.0], [274.0, 1998.5], [273.0, 2055.0], [288.0, 1826.923076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[36.71300000000007, 1056.9935000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 288.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2398.9, "minX": 1.65943986E12, "maxY": 7066.8, "series": [{"data": [[1.65943998E12, 5046.6], [1.65943992E12, 7066.8], [1.65943986E12, 3486.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65943998E12, 3472.233333333333], [1.65943992E12, 4862.2], [1.65943986E12, 2398.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943998E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 607.7867078825346, "minX": 1.65943986E12, "maxY": 2510.5838926174497, "series": [{"data": [[1.65943998E12, 607.7867078825346], [1.65943992E12, 660.6158940397339], [1.65943986E12, 2510.5838926174497]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943998E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 607.7712519319942, "minX": 1.65943986E12, "maxY": 2510.398210290829, "series": [{"data": [[1.65943998E12, 607.7712519319942], [1.65943992E12, 660.5883002207504], [1.65943986E12, 2510.398210290829]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943998E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 477.57496136012423, "minX": 1.65943986E12, "maxY": 2348.2035794183453, "series": [{"data": [[1.65943998E12, 477.57496136012423], [1.65943992E12, 516.2141280353208], [1.65943986E12, 2348.2035794183453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943998E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 410.0, "minX": 1.65943986E12, "maxY": 7179.0, "series": [{"data": [[1.65943998E12, 6512.0], [1.65943992E12, 4098.0], [1.65943986E12, 7179.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65943998E12, 900.2], [1.65943992E12, 956.3000000000001], [1.65943986E12, 5522.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65943998E12, 3506.1199999999994], [1.65943992E12, 3552.58], [1.65943986E12, 6708.08]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65943998E12, 999.6000000000005], [1.65943992E12, 1086.65], [1.65943986E12, 6196.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65943998E12, 410.0], [1.65943992E12, 427.0], [1.65943986E12, 432.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65943998E12, 516.0], [1.65943992E12, 551.5], [1.65943986E12, 2047.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943998E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 520.5, "minX": 8.0, "maxY": 5810.0, "series": [{"data": [[8.0, 528.0], [9.0, 575.0], [10.0, 544.5], [11.0, 529.5], [12.0, 522.5], [13.0, 530.0], [14.0, 528.0], [61.0, 3898.0], [15.0, 545.0], [62.0, 5810.0], [16.0, 565.0], [68.0, 2103.5], [17.0, 543.0], [18.0, 565.5], [79.0, 4847.0], [19.0, 538.0], [20.0, 520.5], [21.0, 548.0], [22.0, 539.0], [23.0, 532.0], [29.0, 562.0], [125.0, 2018.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 520.5, "minX": 8.0, "maxY": 5810.0, "series": [{"data": [[8.0, 528.0], [9.0, 575.0], [10.0, 544.5], [11.0, 529.5], [12.0, 522.5], [13.0, 530.0], [14.0, 528.0], [61.0, 3898.0], [15.0, 545.0], [62.0, 5810.0], [16.0, 565.0], [68.0, 2103.0], [17.0, 543.0], [18.0, 565.5], [79.0, 4847.0], [19.0, 538.0], [20.0, 520.5], [21.0, 548.0], [22.0, 538.5], [23.0, 532.0], [29.0, 562.0], [125.0, 2015.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.65, "minX": 1.65943986E12, "maxY": 15.016666666666667, "series": [{"data": [[1.65943998E12, 10.666666666666666], [1.65943992E12, 15.016666666666667], [1.65943986E12, 7.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943998E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.65943986E12, "maxY": 15.1, "series": [{"data": [[1.65943998E12, 10.783333333333333], [1.65943992E12, 15.1], [1.65943986E12, 7.45]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943998E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.65943986E12, "maxY": 15.1, "series": [{"data": [[1.65943998E12, 10.783333333333333], [1.65943992E12, 15.1], [1.65943986E12, 7.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943998E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.45, "minX": 1.65943986E12, "maxY": 15.1, "series": [{"data": [[1.65943998E12, 10.783333333333333], [1.65943992E12, 15.1], [1.65943986E12, 7.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943998E12, "title": "Total Transactions Per Second"}},
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

