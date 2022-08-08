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
        data: {"result": {"minY": 394.0, "minX": 0.0, "maxY": 3540.0, "series": [{"data": [[0.0, 394.0], [0.1, 394.0], [0.2, 394.0], [0.3, 395.0], [0.4, 395.0], [0.5, 395.0], [0.6, 395.0], [0.7, 395.0], [0.8, 396.0], [0.9, 396.0], [1.0, 396.0], [1.1, 396.0], [1.2, 396.0], [1.3, 396.0], [1.4, 396.0], [1.5, 397.0], [1.6, 397.0], [1.7, 397.0], [1.8, 397.0], [1.9, 397.0], [2.0, 397.0], [2.1, 397.0], [2.2, 397.0], [2.3, 397.0], [2.4, 397.0], [2.5, 397.0], [2.6, 397.0], [2.7, 397.0], [2.8, 397.0], [2.9, 397.0], [3.0, 397.0], [3.1, 397.0], [3.2, 397.0], [3.3, 397.0], [3.4, 397.0], [3.5, 397.0], [3.6, 397.0], [3.7, 397.0], [3.8, 398.0], [3.9, 398.0], [4.0, 398.0], [4.1, 398.0], [4.2, 398.0], [4.3, 401.0], [4.4, 401.0], [4.5, 401.0], [4.6, 401.0], [4.7, 401.0], [4.8, 401.0], [4.9, 401.0], [5.0, 401.0], [5.1, 401.0], [5.2, 401.0], [5.3, 401.0], [5.4, 401.0], [5.5, 401.0], [5.6, 401.0], [5.7, 401.0], [5.8, 401.0], [5.9, 401.0], [6.0, 401.0], [6.1, 401.0], [6.2, 401.0], [6.3, 402.0], [6.4, 402.0], [6.5, 402.0], [6.6, 402.0], [6.7, 402.0], [6.8, 403.0], [6.9, 403.0], [7.0, 403.0], [7.1, 403.0], [7.2, 403.0], [7.3, 403.0], [7.4, 403.0], [7.5, 404.0], [7.6, 404.0], [7.7, 404.0], [7.8, 404.0], [7.9, 404.0], [8.0, 404.0], [8.1, 404.0], [8.2, 404.0], [8.3, 404.0], [8.4, 404.0], [8.5, 405.0], [8.6, 405.0], [8.7, 405.0], [8.8, 405.0], [8.9, 405.0], [9.0, 406.0], [9.1, 406.0], [9.2, 406.0], [9.3, 406.0], [9.4, 406.0], [9.5, 407.0], [9.6, 407.0], [9.7, 407.0], [9.8, 408.0], [9.9, 408.0], [10.0, 408.0], [10.1, 408.0], [10.2, 408.0], [10.3, 408.0], [10.4, 408.0], [10.5, 408.0], [10.6, 408.0], [10.7, 408.0], [10.8, 409.0], [10.9, 409.0], [11.0, 409.0], [11.1, 409.0], [11.2, 409.0], [11.3, 410.0], [11.4, 410.0], [11.5, 410.0], [11.6, 410.0], [11.7, 410.0], [11.8, 412.0], [11.9, 412.0], [12.0, 413.0], [12.1, 413.0], [12.2, 413.0], [12.3, 415.0], [12.4, 415.0], [12.5, 416.0], [12.6, 416.0], [12.7, 416.0], [12.8, 417.0], [12.9, 417.0], [13.0, 417.0], [13.1, 417.0], [13.2, 417.0], [13.3, 418.0], [13.4, 418.0], [13.5, 418.0], [13.6, 418.0], [13.7, 418.0], [13.8, 418.0], [13.9, 418.0], [14.0, 418.0], [14.1, 418.0], [14.2, 418.0], [14.3, 419.0], [14.4, 419.0], [14.5, 419.0], [14.6, 419.0], [14.7, 419.0], [14.8, 420.0], [14.9, 420.0], [15.0, 420.0], [15.1, 420.0], [15.2, 420.0], [15.3, 420.0], [15.4, 420.0], [15.5, 420.0], [15.6, 420.0], [15.7, 420.0], [15.8, 420.0], [15.9, 420.0], [16.0, 420.0], [16.1, 420.0], [16.2, 420.0], [16.3, 420.0], [16.4, 420.0], [16.5, 421.0], [16.6, 421.0], [16.7, 421.0], [16.8, 421.0], [16.9, 421.0], [17.0, 421.0], [17.1, 421.0], [17.2, 421.0], [17.3, 421.0], [17.4, 421.0], [17.5, 421.0], [17.6, 421.0], [17.7, 421.0], [17.8, 421.0], [17.9, 421.0], [18.0, 421.0], [18.1, 421.0], [18.2, 421.0], [18.3, 422.0], [18.4, 422.0], [18.5, 422.0], [18.6, 422.0], [18.7, 422.0], [18.8, 422.0], [18.9, 422.0], [19.0, 423.0], [19.1, 423.0], [19.2, 423.0], [19.3, 423.0], [19.4, 423.0], [19.5, 423.0], [19.6, 423.0], [19.7, 423.0], [19.8, 424.0], [19.9, 424.0], [20.0, 424.0], [20.1, 424.0], [20.2, 424.0], [20.3, 424.0], [20.4, 424.0], [20.5, 424.0], [20.6, 424.0], [20.7, 424.0], [20.8, 424.0], [20.9, 424.0], [21.0, 424.0], [21.1, 424.0], [21.2, 424.0], [21.3, 425.0], [21.4, 425.0], [21.5, 425.0], [21.6, 425.0], [21.7, 425.0], [21.8, 425.0], [21.9, 425.0], [22.0, 425.0], [22.1, 425.0], [22.2, 425.0], [22.3, 426.0], [22.4, 426.0], [22.5, 426.0], [22.6, 426.0], [22.7, 426.0], [22.8, 426.0], [22.9, 426.0], [23.0, 426.0], [23.1, 426.0], [23.2, 426.0], [23.3, 427.0], [23.4, 427.0], [23.5, 427.0], [23.6, 427.0], [23.7, 427.0], [23.8, 427.0], [23.9, 427.0], [24.0, 428.0], [24.1, 428.0], [24.2, 428.0], [24.3, 429.0], [24.4, 429.0], [24.5, 429.0], [24.6, 429.0], [24.7, 429.0], [24.8, 430.0], [24.9, 430.0], [25.0, 430.0], [25.1, 430.0], [25.2, 430.0], [25.3, 431.0], [25.4, 431.0], [25.5, 431.0], [25.6, 431.0], [25.7, 431.0], [25.8, 432.0], [25.9, 432.0], [26.0, 433.0], [26.1, 433.0], [26.2, 433.0], [26.3, 434.0], [26.4, 434.0], [26.5, 434.0], [26.6, 434.0], [26.7, 434.0], [26.8, 435.0], [26.9, 435.0], [27.0, 435.0], [27.1, 435.0], [27.2, 435.0], [27.3, 435.0], [27.4, 435.0], [27.5, 437.0], [27.6, 437.0], [27.7, 437.0], [27.8, 437.0], [27.9, 437.0], [28.0, 440.0], [28.1, 440.0], [28.2, 440.0], [28.3, 441.0], [28.4, 441.0], [28.5, 445.0], [28.6, 445.0], [28.7, 445.0], [28.8, 464.0], [28.9, 464.0], [29.0, 475.0], [29.1, 475.0], [29.2, 475.0], [29.3, 497.0], [29.4, 497.0], [29.5, 544.0], [29.6, 544.0], [29.7, 544.0], [29.8, 588.0], [29.9, 588.0], [30.0, 657.0], [30.1, 657.0], [30.2, 657.0], [30.3, 704.0], [30.4, 704.0], [30.5, 705.0], [30.6, 705.0], [30.7, 705.0], [30.8, 708.0], [30.9, 708.0], [31.0, 710.0], [31.1, 710.0], [31.2, 710.0], [31.3, 711.0], [31.4, 711.0], [31.5, 720.0], [31.6, 720.0], [31.7, 720.0], [31.8, 729.0], [31.9, 729.0], [32.0, 736.0], [32.1, 736.0], [32.2, 736.0], [32.3, 824.0], [32.4, 824.0], [32.5, 825.0], [32.6, 825.0], [32.7, 825.0], [32.8, 833.0], [32.9, 833.0], [33.0, 909.0], [33.1, 909.0], [33.2, 909.0], [33.3, 1017.0], [33.4, 1017.0], [33.5, 1039.0], [33.6, 1039.0], [33.7, 1039.0], [33.8, 1114.0], [33.9, 1114.0], [34.0, 1137.0], [34.1, 1137.0], [34.2, 1137.0], [34.3, 1157.0], [34.4, 1157.0], [34.5, 1164.0], [34.6, 1164.0], [34.7, 1164.0], [34.8, 1189.0], [34.9, 1189.0], [35.0, 1189.0], [35.1, 1189.0], [35.2, 1189.0], [35.3, 1192.0], [35.4, 1192.0], [35.5, 1196.0], [35.6, 1196.0], [35.7, 1196.0], [35.8, 1237.0], [35.9, 1237.0], [36.0, 1243.0], [36.1, 1243.0], [36.2, 1243.0], [36.3, 1244.0], [36.4, 1244.0], [36.5, 1244.0], [36.6, 1244.0], [36.7, 1244.0], [36.8, 1249.0], [36.9, 1249.0], [37.0, 1256.0], [37.1, 1256.0], [37.2, 1256.0], [37.3, 1278.0], [37.4, 1278.0], [37.5, 1345.0], [37.6, 1345.0], [37.7, 1345.0], [37.8, 1396.0], [37.9, 1396.0], [38.0, 1472.0], [38.1, 1472.0], [38.2, 1472.0], [38.3, 1543.0], [38.4, 1543.0], [38.5, 1604.0], [38.6, 1604.0], [38.7, 1604.0], [38.8, 1618.0], [38.9, 1618.0], [39.0, 1626.0], [39.1, 1626.0], [39.2, 1626.0], [39.3, 1641.0], [39.4, 1641.0], [39.5, 1642.0], [39.6, 1642.0], [39.7, 1642.0], [39.8, 1644.0], [39.9, 1644.0], [40.0, 1653.0], [40.1, 1653.0], [40.2, 1653.0], [40.3, 1659.0], [40.4, 1659.0], [40.5, 1685.0], [40.6, 1685.0], [40.7, 1685.0], [40.8, 1686.0], [40.9, 1686.0], [41.0, 1688.0], [41.1, 1688.0], [41.2, 1688.0], [41.3, 1688.0], [41.4, 1688.0], [41.5, 1689.0], [41.6, 1689.0], [41.7, 1689.0], [41.8, 1691.0], [41.9, 1691.0], [42.0, 1693.0], [42.1, 1693.0], [42.2, 1693.0], [42.3, 1700.0], [42.4, 1700.0], [42.5, 1701.0], [42.6, 1701.0], [42.7, 1701.0], [42.8, 1705.0], [42.9, 1705.0], [43.0, 1713.0], [43.1, 1713.0], [43.2, 1713.0], [43.3, 1718.0], [43.4, 1718.0], [43.5, 1720.0], [43.6, 1720.0], [43.7, 1720.0], [43.8, 1722.0], [43.9, 1722.0], [44.0, 1725.0], [44.1, 1725.0], [44.2, 1725.0], [44.3, 1729.0], [44.4, 1729.0], [44.5, 1732.0], [44.6, 1732.0], [44.7, 1732.0], [44.8, 1733.0], [44.9, 1733.0], [45.0, 1741.0], [45.1, 1741.0], [45.2, 1741.0], [45.3, 1745.0], [45.4, 1745.0], [45.5, 1745.0], [45.6, 1745.0], [45.7, 1745.0], [45.8, 1747.0], [45.9, 1747.0], [46.0, 1747.0], [46.1, 1747.0], [46.2, 1747.0], [46.3, 1768.0], [46.4, 1768.0], [46.5, 1772.0], [46.6, 1772.0], [46.7, 1772.0], [46.8, 1773.0], [46.9, 1773.0], [47.0, 1780.0], [47.1, 1780.0], [47.2, 1780.0], [47.3, 1780.0], [47.4, 1780.0], [47.5, 1781.0], [47.6, 1781.0], [47.7, 1781.0], [47.8, 1784.0], [47.9, 1784.0], [48.0, 1796.0], [48.1, 1796.0], [48.2, 1796.0], [48.3, 1799.0], [48.4, 1799.0], [48.5, 1799.0], [48.6, 1799.0], [48.7, 1799.0], [48.8, 1813.0], [48.9, 1813.0], [49.0, 1813.0], [49.1, 1813.0], [49.2, 1813.0], [49.3, 1816.0], [49.4, 1816.0], [49.5, 1825.0], [49.6, 1825.0], [49.7, 1825.0], [49.8, 1829.0], [49.9, 1829.0], [50.0, 1834.0], [50.1, 1834.0], [50.2, 1834.0], [50.3, 1835.0], [50.4, 1835.0], [50.5, 1839.0], [50.6, 1839.0], [50.7, 1839.0], [50.8, 1839.0], [50.9, 1839.0], [51.0, 1843.0], [51.1, 1843.0], [51.2, 1843.0], [51.3, 1851.0], [51.4, 1851.0], [51.5, 1851.0], [51.6, 1851.0], [51.7, 1851.0], [51.8, 1855.0], [51.9, 1855.0], [52.0, 1855.0], [52.1, 1855.0], [52.2, 1855.0], [52.3, 1859.0], [52.4, 1859.0], [52.5, 1859.0], [52.6, 1859.0], [52.7, 1859.0], [52.8, 1866.0], [52.9, 1866.0], [53.0, 1867.0], [53.1, 1867.0], [53.2, 1867.0], [53.3, 1867.0], [53.4, 1867.0], [53.5, 1878.0], [53.6, 1878.0], [53.7, 1878.0], [53.8, 1888.0], [53.9, 1888.0], [54.0, 1893.0], [54.1, 1893.0], [54.2, 1893.0], [54.3, 1903.0], [54.4, 1903.0], [54.5, 1904.0], [54.6, 1904.0], [54.7, 1904.0], [54.8, 1913.0], [54.9, 1913.0], [55.0, 1915.0], [55.1, 1915.0], [55.2, 1915.0], [55.3, 1917.0], [55.4, 1917.0], [55.5, 1918.0], [55.6, 1918.0], [55.7, 1918.0], [55.8, 1918.0], [55.9, 1918.0], [56.0, 1918.0], [56.1, 1918.0], [56.2, 1918.0], [56.3, 1920.0], [56.4, 1920.0], [56.5, 1922.0], [56.6, 1922.0], [56.7, 1922.0], [56.8, 1923.0], [56.9, 1923.0], [57.0, 1927.0], [57.1, 1927.0], [57.2, 1927.0], [57.3, 1931.0], [57.4, 1931.0], [57.5, 1936.0], [57.6, 1936.0], [57.7, 1936.0], [57.8, 1941.0], [57.9, 1941.0], [58.0, 1942.0], [58.1, 1942.0], [58.2, 1942.0], [58.3, 1946.0], [58.4, 1946.0], [58.5, 1946.0], [58.6, 1946.0], [58.7, 1946.0], [58.8, 1950.0], [58.9, 1950.0], [59.0, 1950.0], [59.1, 1950.0], [59.2, 1950.0], [59.3, 1956.0], [59.4, 1956.0], [59.5, 1957.0], [59.6, 1957.0], [59.7, 1957.0], [59.8, 1962.0], [59.9, 1962.0], [60.0, 1962.0], [60.1, 1962.0], [60.2, 1962.0], [60.3, 1966.0], [60.4, 1966.0], [60.5, 1968.0], [60.6, 1968.0], [60.7, 1968.0], [60.8, 1981.0], [60.9, 1981.0], [61.0, 1981.0], [61.1, 1981.0], [61.2, 1981.0], [61.3, 1981.0], [61.4, 1981.0], [61.5, 1986.0], [61.6, 1986.0], [61.7, 1986.0], [61.8, 1989.0], [61.9, 1989.0], [62.0, 1991.0], [62.1, 1991.0], [62.2, 1991.0], [62.3, 1991.0], [62.4, 1991.0], [62.5, 1992.0], [62.6, 1992.0], [62.7, 1992.0], [62.8, 2000.0], [62.9, 2000.0], [63.0, 2002.0], [63.1, 2002.0], [63.2, 2002.0], [63.3, 2003.0], [63.4, 2003.0], [63.5, 2005.0], [63.6, 2005.0], [63.7, 2005.0], [63.8, 2008.0], [63.9, 2008.0], [64.0, 2010.0], [64.1, 2010.0], [64.2, 2010.0], [64.3, 2011.0], [64.4, 2011.0], [64.5, 2013.0], [64.6, 2013.0], [64.7, 2013.0], [64.8, 2018.0], [64.9, 2018.0], [65.0, 2019.0], [65.1, 2019.0], [65.2, 2019.0], [65.3, 2020.0], [65.4, 2020.0], [65.5, 2024.0], [65.6, 2024.0], [65.7, 2024.0], [65.8, 2024.0], [65.9, 2024.0], [66.0, 2026.0], [66.1, 2026.0], [66.2, 2026.0], [66.3, 2033.0], [66.4, 2033.0], [66.5, 2053.0], [66.6, 2053.0], [66.7, 2053.0], [66.8, 2056.0], [66.9, 2056.0], [67.0, 2057.0], [67.1, 2057.0], [67.2, 2057.0], [67.3, 2059.0], [67.4, 2059.0], [67.5, 2064.0], [67.6, 2064.0], [67.7, 2064.0], [67.8, 2065.0], [67.9, 2065.0], [68.0, 2070.0], [68.1, 2070.0], [68.2, 2070.0], [68.3, 2071.0], [68.4, 2071.0], [68.5, 2074.0], [68.6, 2074.0], [68.7, 2074.0], [68.8, 2076.0], [68.9, 2076.0], [69.0, 2077.0], [69.1, 2077.0], [69.2, 2077.0], [69.3, 2084.0], [69.4, 2084.0], [69.5, 2084.0], [69.6, 2084.0], [69.7, 2084.0], [69.8, 2085.0], [69.9, 2085.0], [70.0, 2088.0], [70.1, 2088.0], [70.2, 2088.0], [70.3, 2094.0], [70.4, 2094.0], [70.5, 2095.0], [70.6, 2095.0], [70.7, 2095.0], [70.8, 2095.0], [70.9, 2095.0], [71.0, 2096.0], [71.1, 2096.0], [71.2, 2096.0], [71.3, 2102.0], [71.4, 2102.0], [71.5, 2103.0], [71.6, 2103.0], [71.7, 2103.0], [71.8, 2104.0], [71.9, 2104.0], [72.0, 2104.0], [72.1, 2104.0], [72.2, 2104.0], [72.3, 2104.0], [72.4, 2104.0], [72.5, 2106.0], [72.6, 2106.0], [72.7, 2106.0], [72.8, 2107.0], [72.9, 2107.0], [73.0, 2113.0], [73.1, 2113.0], [73.2, 2113.0], [73.3, 2113.0], [73.4, 2113.0], [73.5, 2114.0], [73.6, 2114.0], [73.7, 2114.0], [73.8, 2117.0], [73.9, 2117.0], [74.0, 2120.0], [74.1, 2120.0], [74.2, 2120.0], [74.3, 2122.0], [74.4, 2122.0], [74.5, 2133.0], [74.6, 2133.0], [74.7, 2133.0], [74.8, 2133.0], [74.9, 2133.0], [75.0, 2135.0], [75.1, 2135.0], [75.2, 2135.0], [75.3, 2135.0], [75.4, 2135.0], [75.5, 2142.0], [75.6, 2142.0], [75.7, 2142.0], [75.8, 2146.0], [75.9, 2146.0], [76.0, 2148.0], [76.1, 2148.0], [76.2, 2148.0], [76.3, 2148.0], [76.4, 2148.0], [76.5, 2148.0], [76.6, 2148.0], [76.7, 2148.0], [76.8, 2160.0], [76.9, 2160.0], [77.0, 2168.0], [77.1, 2168.0], [77.2, 2168.0], [77.3, 2170.0], [77.4, 2170.0], [77.5, 2172.0], [77.6, 2172.0], [77.7, 2172.0], [77.8, 2184.0], [77.9, 2184.0], [78.0, 2185.0], [78.1, 2185.0], [78.2, 2185.0], [78.3, 2188.0], [78.4, 2188.0], [78.5, 2192.0], [78.6, 2192.0], [78.7, 2192.0], [78.8, 2192.0], [78.9, 2192.0], [79.0, 2194.0], [79.1, 2194.0], [79.2, 2194.0], [79.3, 2194.0], [79.4, 2194.0], [79.5, 2202.0], [79.6, 2202.0], [79.7, 2202.0], [79.8, 2202.0], [79.9, 2202.0], [80.0, 2202.0], [80.1, 2202.0], [80.2, 2202.0], [80.3, 2203.0], [80.4, 2203.0], [80.5, 2203.0], [80.6, 2203.0], [80.7, 2203.0], [80.8, 2204.0], [80.9, 2204.0], [81.0, 2205.0], [81.1, 2205.0], [81.2, 2205.0], [81.3, 2208.0], [81.4, 2208.0], [81.5, 2208.0], [81.6, 2208.0], [81.7, 2208.0], [81.8, 2209.0], [81.9, 2209.0], [82.0, 2209.0], [82.1, 2209.0], [82.2, 2209.0], [82.3, 2211.0], [82.4, 2211.0], [82.5, 2213.0], [82.6, 2213.0], [82.7, 2213.0], [82.8, 2214.0], [82.9, 2214.0], [83.0, 2214.0], [83.1, 2214.0], [83.2, 2214.0], [83.3, 2216.0], [83.4, 2216.0], [83.5, 2217.0], [83.6, 2217.0], [83.7, 2217.0], [83.8, 2219.0], [83.9, 2219.0], [84.0, 2219.0], [84.1, 2219.0], [84.2, 2219.0], [84.3, 2220.0], [84.4, 2220.0], [84.5, 2221.0], [84.6, 2221.0], [84.7, 2221.0], [84.8, 2226.0], [84.9, 2226.0], [85.0, 2226.0], [85.1, 2226.0], [85.2, 2226.0], [85.3, 2226.0], [85.4, 2226.0], [85.5, 2228.0], [85.6, 2228.0], [85.7, 2228.0], [85.8, 2229.0], [85.9, 2229.0], [86.0, 2229.0], [86.1, 2229.0], [86.2, 2229.0], [86.3, 2230.0], [86.4, 2230.0], [86.5, 2230.0], [86.6, 2230.0], [86.7, 2230.0], [86.8, 2231.0], [86.9, 2231.0], [87.0, 2231.0], [87.1, 2231.0], [87.2, 2231.0], [87.3, 2231.0], [87.4, 2231.0], [87.5, 2232.0], [87.6, 2232.0], [87.7, 2232.0], [87.8, 2233.0], [87.9, 2233.0], [88.0, 2235.0], [88.1, 2235.0], [88.2, 2235.0], [88.3, 2237.0], [88.4, 2237.0], [88.5, 2237.0], [88.6, 2237.0], [88.7, 2237.0], [88.8, 2238.0], [88.9, 2238.0], [89.0, 2245.0], [89.1, 2245.0], [89.2, 2245.0], [89.3, 2251.0], [89.4, 2251.0], [89.5, 2255.0], [89.6, 2255.0], [89.7, 2255.0], [89.8, 2258.0], [89.9, 2258.0], [90.0, 2259.0], [90.1, 2259.0], [90.2, 2259.0], [90.3, 2262.0], [90.4, 2262.0], [90.5, 2262.0], [90.6, 2262.0], [90.7, 2262.0], [90.8, 2265.0], [90.9, 2265.0], [91.0, 2265.0], [91.1, 2265.0], [91.2, 2265.0], [91.3, 2268.0], [91.4, 2268.0], [91.5, 2275.0], [91.6, 2275.0], [91.7, 2275.0], [91.8, 2275.0], [91.9, 2275.0], [92.0, 2276.0], [92.1, 2276.0], [92.2, 2276.0], [92.3, 2282.0], [92.4, 2282.0], [92.5, 2287.0], [92.6, 2287.0], [92.7, 2287.0], [92.8, 2287.0], [92.9, 2287.0], [93.0, 2288.0], [93.1, 2288.0], [93.2, 2288.0], [93.3, 2294.0], [93.4, 2294.0], [93.5, 2295.0], [93.6, 2295.0], [93.7, 2295.0], [93.8, 2303.0], [93.9, 2303.0], [94.0, 2305.0], [94.1, 2305.0], [94.2, 2305.0], [94.3, 2306.0], [94.4, 2306.0], [94.5, 2306.0], [94.6, 2306.0], [94.7, 2306.0], [94.8, 2307.0], [94.9, 2307.0], [95.0, 2311.0], [95.1, 2311.0], [95.2, 2311.0], [95.3, 2318.0], [95.4, 2318.0], [95.5, 2318.0], [95.6, 2318.0], [95.7, 2318.0], [95.8, 2318.0], [95.9, 2318.0], [96.0, 2322.0], [96.1, 2322.0], [96.2, 2322.0], [96.3, 2322.0], [96.4, 2322.0], [96.5, 2324.0], [96.6, 2324.0], [96.7, 2324.0], [96.8, 2326.0], [96.9, 2326.0], [97.0, 2331.0], [97.1, 2331.0], [97.2, 2331.0], [97.3, 2342.0], [97.4, 2342.0], [97.5, 2342.0], [97.6, 2342.0], [97.7, 2342.0], [97.8, 2355.0], [97.9, 2355.0], [98.0, 2618.0], [98.1, 2618.0], [98.2, 2618.0], [98.3, 2639.0], [98.4, 2639.0], [98.5, 3399.0], [98.6, 3399.0], [98.7, 3399.0], [98.8, 3423.0], [98.9, 3423.0], [99.0, 3425.0], [99.1, 3425.0], [99.2, 3425.0], [99.3, 3435.0], [99.4, 3435.0], [99.5, 3494.0], [99.6, 3494.0], [99.7, 3494.0], [99.8, 3540.0], [99.9, 3540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 101.0, "series": [{"data": [[600.0, 1.0], [700.0, 8.0], [800.0, 3.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 8.0], [1200.0, 7.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 15.0], [1700.0, 26.0], [1800.0, 22.0], [1900.0, 34.0], [2000.0, 34.0], [2100.0, 33.0], [2200.0, 57.0], [2300.0, 17.0], [2600.0, 2.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 1.0], [300.0, 17.0], [400.0, 101.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 247.0, "series": [{"data": [[0.0, 118.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 247.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 148.06499999999986, "minX": 1.65943896E12, "maxY": 148.06499999999986, "series": [{"data": [[1.65943896E12, 148.06499999999986]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943896E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 397.0, "minX": 1.0, "maxY": 2306.0, "series": [{"data": [[2.0, 401.0], [3.0, 401.0], [4.0, 413.0], [5.0, 397.0], [6.0, 397.0], [7.0, 720.0], [8.0, 419.0], [9.0, 423.0], [10.0, 423.0], [11.0, 564.0], [12.0, 861.1428571428571], [13.0, 420.15384615384613], [14.0, 423.7435897435898], [15.0, 870.6249999999999], [16.0, 1541.0], [17.0, 1053.3333333333335], [18.0, 1089.1666666666665], [19.0, 473.69230769230774], [20.0, 424.0], [22.0, 544.0], [43.0, 2117.5], [52.0, 1849.4999999999998], [59.0, 1549.6], [63.0, 1523.0], [70.0, 736.0], [79.0, 2081.5], [78.0, 1859.0], [77.0, 1834.5], [83.0, 1824.0], [85.0, 2104.0], [84.0, 588.0], [89.0, 2190.25], [88.0, 2196.3333333333335], [98.0, 2287.0], [97.0, 1693.25], [96.0, 1830.0], [102.0, 2221.5], [101.0, 1960.0], [105.0, 1821.2], [104.0, 1785.5], [109.0, 1973.3125000000002], [108.0, 1933.0], [115.0, 2263.3333333333335], [114.0, 2074.0], [119.0, 2180.0], [116.0, 1896.8], [122.0, 2067.833333333333], [127.0, 1946.0], [133.0, 2306.0], [129.0, 2106.0], [141.0, 2144.0], [140.0, 1402.3333333333333], [139.0, 1992.0], [138.0, 2008.0], [137.0, 1243.0], [136.0, 2305.0], [159.0, 2053.0], [158.0, 2120.0], [156.0, 2087.0], [153.0, 2149.0], [166.0, 1888.0], [165.0, 2070.0], [169.0, 2107.0], [168.0, 2102.466666666667], [183.0, 2209.0], [179.0, 1920.8], [188.0, 2104.0], [187.0, 2229.0], [199.0, 1808.2857142857142], [198.0, 1813.0], [194.0, 1981.0], [193.0, 1773.0], [192.0, 2101.0], [205.0, 1969.0], [202.0, 2166.0], [212.0, 1962.8181818181818], [213.0, 2203.0], [211.0, 2019.0], [209.0, 1827.5], [218.0, 1939.0], [216.0, 2002.5], [230.0, 2268.0], [226.0, 1567.5], [239.0, 1885.0], [238.0, 1685.0], [236.0, 2022.6666666666667], [235.0, 2113.3333333333335], [234.0, 1189.0], [233.0, 1825.0], [232.0, 1575.5], [245.0, 1796.0], [244.0, 2246.0], [240.0, 2013.0], [255.0, 2063.125], [253.0, 1863.5], [251.0, 2208.0], [250.0, 1644.0], [271.0, 2205.0], [270.0, 1618.0], [266.0, 1960.0], [264.0, 1995.0], [262.0, 1738.6666666666667], [261.0, 2146.0], [260.0, 2023.0], [258.0, 2036.0], [257.0, 2235.0], [276.0, 2111.4], [275.0, 1839.0], [273.0, 2011.0], [272.0, 825.0], [1.0, 402.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[111.32499999999993, 1491.3375000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 276.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2146.6666666666665, "minX": 1.65943896E12, "maxY": 3120.0, "series": [{"data": [[1.65943896E12, 3120.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65943896E12, 2146.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943896E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1491.3375000000003, "minX": 1.65943896E12, "maxY": 1491.3375000000003, "series": [{"data": [[1.65943896E12, 1491.3375000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943896E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1485.5424999999996, "minX": 1.65943896E12, "maxY": 1485.5424999999996, "series": [{"data": [[1.65943896E12, 1485.5424999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943896E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1306.469999999999, "minX": 1.65943896E12, "maxY": 1306.469999999999, "series": [{"data": [[1.65943896E12, 1306.469999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943896E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 394.0, "minX": 1.65943896E12, "maxY": 3540.0, "series": [{"data": [[1.65943896E12, 3540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65943896E12, 2258.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65943896E12, 3424.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65943896E12, 2310.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65943896E12, 394.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65943896E12, 1831.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943896E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 417.0, "minX": 15.0, "maxY": 2011.0, "series": [{"data": [[273.0, 2011.0], [27.0, 418.0], [15.0, 417.0], [31.0, 426.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 273.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 417.0, "minX": 15.0, "maxY": 2008.0, "series": [{"data": [[273.0, 2008.0], [27.0, 418.0], [15.0, 417.0], [31.0, 426.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 273.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5833333333333335, "minX": 1.6594389E12, "maxY": 4.083333333333333, "series": [{"data": [[1.65943896E12, 2.5833333333333335], [1.6594389E12, 4.083333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943896E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.65943896E12, "maxY": 6.666666666666667, "series": [{"data": [[1.65943896E12, 6.666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943896E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.65943896E12, "maxY": 6.666666666666667, "series": [{"data": [[1.65943896E12, 6.666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943896E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.65943896E12, "maxY": 6.666666666666667, "series": [{"data": [[1.65943896E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943896E12, "title": "Total Transactions Per Second"}},
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

