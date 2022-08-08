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
        data: {"result": {"minY": 1436.0, "minX": 0.0, "maxY": 2595.0, "series": [{"data": [[0.0, 1436.0], [0.1, 1436.0], [0.2, 1436.0], [0.3, 1436.0], [0.4, 1446.0], [0.5, 1446.0], [0.6, 1446.0], [0.7, 1451.0], [0.8, 1451.0], [0.9, 1451.0], [1.0, 1451.0], [1.1, 1451.0], [1.2, 1451.0], [1.3, 1451.0], [1.4, 1456.0], [1.5, 1456.0], [1.6, 1456.0], [1.7, 1457.0], [1.8, 1457.0], [1.9, 1457.0], [2.0, 1459.0], [2.1, 1459.0], [2.2, 1459.0], [2.3, 1459.0], [2.4, 1460.0], [2.5, 1460.0], [2.6, 1460.0], [2.7, 1471.0], [2.8, 1471.0], [2.9, 1471.0], [3.0, 1479.0], [3.1, 1479.0], [3.2, 1479.0], [3.3, 1479.0], [3.4, 1481.0], [3.5, 1481.0], [3.6, 1481.0], [3.7, 1495.0], [3.8, 1495.0], [3.9, 1495.0], [4.0, 1498.0], [4.1, 1498.0], [4.2, 1498.0], [4.3, 1498.0], [4.4, 1501.0], [4.5, 1501.0], [4.6, 1501.0], [4.7, 1513.0], [4.8, 1513.0], [4.9, 1513.0], [5.0, 1516.0], [5.1, 1516.0], [5.2, 1516.0], [5.3, 1516.0], [5.4, 1517.0], [5.5, 1517.0], [5.6, 1517.0], [5.7, 1518.0], [5.8, 1518.0], [5.9, 1518.0], [6.0, 1533.0], [6.1, 1533.0], [6.2, 1533.0], [6.3, 1533.0], [6.4, 1535.0], [6.5, 1535.0], [6.6, 1535.0], [6.7, 1537.0], [6.8, 1537.0], [6.9, 1537.0], [7.0, 1540.0], [7.1, 1540.0], [7.2, 1540.0], [7.3, 1540.0], [7.4, 1546.0], [7.5, 1546.0], [7.6, 1546.0], [7.7, 1550.0], [7.8, 1550.0], [7.9, 1550.0], [8.0, 1558.0], [8.1, 1558.0], [8.2, 1558.0], [8.3, 1558.0], [8.4, 1586.0], [8.5, 1586.0], [8.6, 1586.0], [8.7, 1592.0], [8.8, 1592.0], [8.9, 1592.0], [9.0, 1601.0], [9.1, 1601.0], [9.2, 1601.0], [9.3, 1601.0], [9.4, 1609.0], [9.5, 1609.0], [9.6, 1609.0], [9.7, 1612.0], [9.8, 1612.0], [9.9, 1612.0], [10.0, 1620.0], [10.1, 1620.0], [10.2, 1620.0], [10.3, 1620.0], [10.4, 1622.0], [10.5, 1622.0], [10.6, 1622.0], [10.7, 1633.0], [10.8, 1633.0], [10.9, 1633.0], [11.0, 1633.0], [11.1, 1642.0], [11.2, 1642.0], [11.3, 1642.0], [11.4, 1650.0], [11.5, 1650.0], [11.6, 1650.0], [11.7, 1652.0], [11.8, 1652.0], [11.9, 1652.0], [12.0, 1652.0], [12.1, 1652.0], [12.2, 1652.0], [12.3, 1652.0], [12.4, 1658.0], [12.5, 1658.0], [12.6, 1658.0], [12.7, 1659.0], [12.8, 1659.0], [12.9, 1659.0], [13.0, 1659.0], [13.1, 1660.0], [13.2, 1660.0], [13.3, 1660.0], [13.4, 1665.0], [13.5, 1665.0], [13.6, 1665.0], [13.7, 1665.0], [13.8, 1665.0], [13.9, 1665.0], [14.0, 1665.0], [14.1, 1667.0], [14.2, 1667.0], [14.3, 1667.0], [14.4, 1667.0], [14.5, 1667.0], [14.6, 1667.0], [14.7, 1669.0], [14.8, 1669.0], [14.9, 1669.0], [15.0, 1669.0], [15.1, 1671.0], [15.2, 1671.0], [15.3, 1671.0], [15.4, 1672.0], [15.5, 1672.0], [15.6, 1672.0], [15.7, 1678.0], [15.8, 1678.0], [15.9, 1678.0], [16.0, 1678.0], [16.1, 1681.0], [16.2, 1681.0], [16.3, 1681.0], [16.4, 1683.0], [16.5, 1683.0], [16.6, 1683.0], [16.7, 1685.0], [16.8, 1685.0], [16.9, 1685.0], [17.0, 1685.0], [17.1, 1685.0], [17.2, 1685.0], [17.3, 1685.0], [17.4, 1687.0], [17.5, 1687.0], [17.6, 1687.0], [17.7, 1688.0], [17.8, 1688.0], [17.9, 1688.0], [18.0, 1689.0], [18.1, 1689.0], [18.2, 1689.0], [18.3, 1689.0], [18.4, 1690.0], [18.5, 1690.0], [18.6, 1690.0], [18.7, 1691.0], [18.8, 1691.0], [18.9, 1691.0], [19.0, 1692.0], [19.1, 1692.0], [19.2, 1692.0], [19.3, 1692.0], [19.4, 1693.0], [19.5, 1693.0], [19.6, 1693.0], [19.7, 1694.0], [19.8, 1694.0], [19.9, 1694.0], [20.0, 1694.0], [20.1, 1694.0], [20.2, 1694.0], [20.3, 1694.0], [20.4, 1695.0], [20.5, 1695.0], [20.6, 1695.0], [20.7, 1697.0], [20.8, 1697.0], [20.9, 1697.0], [21.0, 1697.0], [21.1, 1697.0], [21.2, 1697.0], [21.3, 1697.0], [21.4, 1697.0], [21.5, 1697.0], [21.6, 1697.0], [21.7, 1697.0], [21.8, 1697.0], [21.9, 1697.0], [22.0, 1697.0], [22.1, 1697.0], [22.2, 1697.0], [22.3, 1697.0], [22.4, 1698.0], [22.5, 1698.0], [22.6, 1698.0], [22.7, 1700.0], [22.8, 1700.0], [22.9, 1700.0], [23.0, 1703.0], [23.1, 1703.0], [23.2, 1703.0], [23.3, 1703.0], [23.4, 1704.0], [23.5, 1704.0], [23.6, 1704.0], [23.7, 1704.0], [23.8, 1704.0], [23.9, 1704.0], [24.0, 1704.0], [24.1, 1704.0], [24.2, 1704.0], [24.3, 1704.0], [24.4, 1706.0], [24.5, 1706.0], [24.6, 1706.0], [24.7, 1708.0], [24.8, 1708.0], [24.9, 1708.0], [25.0, 1711.0], [25.1, 1711.0], [25.2, 1711.0], [25.3, 1711.0], [25.4, 1712.0], [25.5, 1712.0], [25.6, 1712.0], [25.7, 1718.0], [25.8, 1718.0], [25.9, 1718.0], [26.0, 1726.0], [26.1, 1726.0], [26.2, 1726.0], [26.3, 1726.0], [26.4, 1726.0], [26.5, 1726.0], [26.6, 1726.0], [26.7, 1733.0], [26.8, 1733.0], [26.9, 1733.0], [27.0, 1750.0], [27.1, 1750.0], [27.2, 1750.0], [27.3, 1750.0], [27.4, 1751.0], [27.5, 1751.0], [27.6, 1751.0], [27.7, 1770.0], [27.8, 1770.0], [27.9, 1770.0], [28.0, 1788.0], [28.1, 1788.0], [28.2, 1788.0], [28.3, 1788.0], [28.4, 1791.0], [28.5, 1791.0], [28.6, 1791.0], [28.7, 1792.0], [28.8, 1792.0], [28.9, 1792.0], [29.0, 1797.0], [29.1, 1797.0], [29.2, 1797.0], [29.3, 1797.0], [29.4, 1802.0], [29.5, 1802.0], [29.6, 1802.0], [29.7, 1804.0], [29.8, 1804.0], [29.9, 1804.0], [30.0, 1805.0], [30.1, 1805.0], [30.2, 1805.0], [30.3, 1805.0], [30.4, 1807.0], [30.5, 1807.0], [30.6, 1807.0], [30.7, 1808.0], [30.8, 1808.0], [30.9, 1808.0], [31.0, 1810.0], [31.1, 1810.0], [31.2, 1810.0], [31.3, 1810.0], [31.4, 1810.0], [31.5, 1810.0], [31.6, 1810.0], [31.7, 1815.0], [31.8, 1815.0], [31.9, 1815.0], [32.0, 1817.0], [32.1, 1817.0], [32.2, 1817.0], [32.3, 1817.0], [32.4, 1818.0], [32.5, 1818.0], [32.6, 1818.0], [32.7, 1819.0], [32.8, 1819.0], [32.9, 1819.0], [33.0, 1824.0], [33.1, 1824.0], [33.2, 1824.0], [33.3, 1824.0], [33.4, 1829.0], [33.5, 1829.0], [33.6, 1829.0], [33.7, 1836.0], [33.8, 1836.0], [33.9, 1836.0], [34.0, 1842.0], [34.1, 1842.0], [34.2, 1842.0], [34.3, 1842.0], [34.4, 1844.0], [34.5, 1844.0], [34.6, 1844.0], [34.7, 1846.0], [34.8, 1846.0], [34.9, 1846.0], [35.0, 1851.0], [35.1, 1851.0], [35.2, 1851.0], [35.3, 1851.0], [35.4, 1855.0], [35.5, 1855.0], [35.6, 1855.0], [35.7, 1855.0], [35.8, 1855.0], [35.9, 1855.0], [36.0, 1858.0], [36.1, 1858.0], [36.2, 1858.0], [36.3, 1858.0], [36.4, 1860.0], [36.5, 1860.0], [36.6, 1860.0], [36.7, 1861.0], [36.8, 1861.0], [36.9, 1861.0], [37.0, 1865.0], [37.1, 1865.0], [37.2, 1865.0], [37.3, 1865.0], [37.4, 1866.0], [37.5, 1866.0], [37.6, 1866.0], [37.7, 1897.0], [37.8, 1897.0], [37.9, 1897.0], [38.0, 1897.0], [38.1, 1899.0], [38.2, 1899.0], [38.3, 1899.0], [38.4, 1924.0], [38.5, 1924.0], [38.6, 1924.0], [38.7, 1929.0], [38.8, 1929.0], [38.9, 1929.0], [39.0, 1929.0], [39.1, 1931.0], [39.2, 1931.0], [39.3, 1931.0], [39.4, 1931.0], [39.5, 1931.0], [39.6, 1931.0], [39.7, 1950.0], [39.8, 1950.0], [39.9, 1950.0], [40.0, 1950.0], [40.1, 1954.0], [40.2, 1954.0], [40.3, 1954.0], [40.4, 1956.0], [40.5, 1956.0], [40.6, 1956.0], [40.7, 1960.0], [40.8, 1960.0], [40.9, 1960.0], [41.0, 1960.0], [41.1, 1977.0], [41.2, 1977.0], [41.3, 1977.0], [41.4, 1978.0], [41.5, 1978.0], [41.6, 1978.0], [41.7, 1980.0], [41.8, 1980.0], [41.9, 1980.0], [42.0, 1980.0], [42.1, 1983.0], [42.2, 1983.0], [42.3, 1983.0], [42.4, 1993.0], [42.5, 1993.0], [42.6, 1993.0], [42.7, 1995.0], [42.8, 1995.0], [42.9, 1995.0], [43.0, 1995.0], [43.1, 1998.0], [43.2, 1998.0], [43.3, 1998.0], [43.4, 2000.0], [43.5, 2000.0], [43.6, 2000.0], [43.7, 2001.0], [43.8, 2001.0], [43.9, 2001.0], [44.0, 2001.0], [44.1, 2003.0], [44.2, 2003.0], [44.3, 2003.0], [44.4, 2012.0], [44.5, 2012.0], [44.6, 2012.0], [44.7, 2012.0], [44.8, 2012.0], [44.9, 2012.0], [45.0, 2012.0], [45.1, 2013.0], [45.2, 2013.0], [45.3, 2013.0], [45.4, 2014.0], [45.5, 2014.0], [45.6, 2014.0], [45.7, 2016.0], [45.8, 2016.0], [45.9, 2016.0], [46.0, 2016.0], [46.1, 2016.0], [46.2, 2016.0], [46.3, 2016.0], [46.4, 2020.0], [46.5, 2020.0], [46.6, 2020.0], [46.7, 2021.0], [46.8, 2021.0], [46.9, 2021.0], [47.0, 2021.0], [47.1, 2021.0], [47.2, 2021.0], [47.3, 2021.0], [47.4, 2022.0], [47.5, 2022.0], [47.6, 2022.0], [47.7, 2026.0], [47.8, 2026.0], [47.9, 2026.0], [48.0, 2026.0], [48.1, 2027.0], [48.2, 2027.0], [48.3, 2027.0], [48.4, 2027.0], [48.5, 2027.0], [48.6, 2027.0], [48.7, 2030.0], [48.8, 2030.0], [48.9, 2030.0], [49.0, 2030.0], [49.1, 2033.0], [49.2, 2033.0], [49.3, 2033.0], [49.4, 2036.0], [49.5, 2036.0], [49.6, 2036.0], [49.7, 2043.0], [49.8, 2043.0], [49.9, 2043.0], [50.0, 2043.0], [50.1, 2054.0], [50.2, 2054.0], [50.3, 2054.0], [50.4, 2059.0], [50.5, 2059.0], [50.6, 2059.0], [50.7, 2064.0], [50.8, 2064.0], [50.9, 2064.0], [51.0, 2064.0], [51.1, 2068.0], [51.2, 2068.0], [51.3, 2068.0], [51.4, 2068.0], [51.5, 2068.0], [51.6, 2068.0], [51.7, 2069.0], [51.8, 2069.0], [51.9, 2069.0], [52.0, 2069.0], [52.1, 2075.0], [52.2, 2075.0], [52.3, 2075.0], [52.4, 2075.0], [52.5, 2075.0], [52.6, 2075.0], [52.7, 2077.0], [52.8, 2077.0], [52.9, 2077.0], [53.0, 2077.0], [53.1, 2083.0], [53.2, 2083.0], [53.3, 2083.0], [53.4, 2085.0], [53.5, 2085.0], [53.6, 2085.0], [53.7, 2089.0], [53.8, 2089.0], [53.9, 2089.0], [54.0, 2089.0], [54.1, 2090.0], [54.2, 2090.0], [54.3, 2090.0], [54.4, 2097.0], [54.5, 2097.0], [54.6, 2097.0], [54.7, 2098.0], [54.8, 2098.0], [54.9, 2098.0], [55.0, 2098.0], [55.1, 2099.0], [55.2, 2099.0], [55.3, 2099.0], [55.4, 2101.0], [55.5, 2101.0], [55.6, 2101.0], [55.7, 2105.0], [55.8, 2105.0], [55.9, 2105.0], [56.0, 2105.0], [56.1, 2106.0], [56.2, 2106.0], [56.3, 2106.0], [56.4, 2107.0], [56.5, 2107.0], [56.6, 2107.0], [56.7, 2113.0], [56.8, 2113.0], [56.9, 2113.0], [57.0, 2113.0], [57.1, 2115.0], [57.2, 2115.0], [57.3, 2115.0], [57.4, 2117.0], [57.5, 2117.0], [57.6, 2117.0], [57.7, 2120.0], [57.8, 2120.0], [57.9, 2120.0], [58.0, 2120.0], [58.1, 2120.0], [58.2, 2120.0], [58.3, 2120.0], [58.4, 2124.0], [58.5, 2124.0], [58.6, 2124.0], [58.7, 2129.0], [58.8, 2129.0], [58.9, 2129.0], [59.0, 2129.0], [59.1, 2130.0], [59.2, 2130.0], [59.3, 2130.0], [59.4, 2133.0], [59.5, 2133.0], [59.6, 2133.0], [59.7, 2135.0], [59.8, 2135.0], [59.9, 2135.0], [60.0, 2135.0], [60.1, 2138.0], [60.2, 2138.0], [60.3, 2138.0], [60.4, 2153.0], [60.5, 2153.0], [60.6, 2153.0], [60.7, 2157.0], [60.8, 2157.0], [60.9, 2157.0], [61.0, 2157.0], [61.1, 2159.0], [61.2, 2159.0], [61.3, 2159.0], [61.4, 2164.0], [61.5, 2164.0], [61.6, 2164.0], [61.7, 2165.0], [61.8, 2165.0], [61.9, 2165.0], [62.0, 2165.0], [62.1, 2165.0], [62.2, 2165.0], [62.3, 2165.0], [62.4, 2166.0], [62.5, 2166.0], [62.6, 2166.0], [62.7, 2174.0], [62.8, 2174.0], [62.9, 2174.0], [63.0, 2174.0], [63.1, 2179.0], [63.2, 2179.0], [63.3, 2179.0], [63.4, 2180.0], [63.5, 2180.0], [63.6, 2180.0], [63.7, 2181.0], [63.8, 2181.0], [63.9, 2181.0], [64.0, 2181.0], [64.1, 2186.0], [64.2, 2186.0], [64.3, 2186.0], [64.4, 2187.0], [64.5, 2187.0], [64.6, 2187.0], [64.7, 2189.0], [64.8, 2189.0], [64.9, 2189.0], [65.0, 2189.0], [65.1, 2189.0], [65.2, 2189.0], [65.3, 2189.0], [65.4, 2190.0], [65.5, 2190.0], [65.6, 2190.0], [65.7, 2191.0], [65.8, 2191.0], [65.9, 2191.0], [66.0, 2191.0], [66.1, 2192.0], [66.2, 2192.0], [66.3, 2192.0], [66.4, 2192.0], [66.5, 2192.0], [66.6, 2192.0], [66.7, 2192.0], [66.8, 2192.0], [66.9, 2192.0], [67.0, 2192.0], [67.1, 2204.0], [67.2, 2204.0], [67.3, 2204.0], [67.4, 2206.0], [67.5, 2206.0], [67.6, 2206.0], [67.7, 2217.0], [67.8, 2217.0], [67.9, 2217.0], [68.0, 2217.0], [68.1, 2218.0], [68.2, 2218.0], [68.3, 2218.0], [68.4, 2221.0], [68.5, 2221.0], [68.6, 2221.0], [68.7, 2221.0], [68.8, 2221.0], [68.9, 2221.0], [69.0, 2221.0], [69.1, 2222.0], [69.2, 2222.0], [69.3, 2222.0], [69.4, 2227.0], [69.5, 2227.0], [69.6, 2227.0], [69.7, 2230.0], [69.8, 2230.0], [69.9, 2230.0], [70.0, 2230.0], [70.1, 2231.0], [70.2, 2231.0], [70.3, 2231.0], [70.4, 2232.0], [70.5, 2232.0], [70.6, 2232.0], [70.7, 2234.0], [70.8, 2234.0], [70.9, 2234.0], [71.0, 2234.0], [71.1, 2235.0], [71.2, 2235.0], [71.3, 2235.0], [71.4, 2237.0], [71.5, 2237.0], [71.6, 2237.0], [71.7, 2238.0], [71.8, 2238.0], [71.9, 2238.0], [72.0, 2238.0], [72.1, 2250.0], [72.2, 2250.0], [72.3, 2250.0], [72.4, 2251.0], [72.5, 2251.0], [72.6, 2251.0], [72.7, 2257.0], [72.8, 2257.0], [72.9, 2257.0], [73.0, 2257.0], [73.1, 2261.0], [73.2, 2261.0], [73.3, 2261.0], [73.4, 2262.0], [73.5, 2262.0], [73.6, 2262.0], [73.7, 2266.0], [73.8, 2266.0], [73.9, 2266.0], [74.0, 2266.0], [74.1, 2269.0], [74.2, 2269.0], [74.3, 2269.0], [74.4, 2269.0], [74.5, 2269.0], [74.6, 2269.0], [74.7, 2274.0], [74.8, 2274.0], [74.9, 2274.0], [75.0, 2274.0], [75.1, 2275.0], [75.2, 2275.0], [75.3, 2275.0], [75.4, 2276.0], [75.5, 2276.0], [75.6, 2276.0], [75.7, 2282.0], [75.8, 2282.0], [75.9, 2282.0], [76.0, 2282.0], [76.1, 2284.0], [76.2, 2284.0], [76.3, 2284.0], [76.4, 2291.0], [76.5, 2291.0], [76.6, 2291.0], [76.7, 2296.0], [76.8, 2296.0], [76.9, 2296.0], [77.0, 2297.0], [77.1, 2297.0], [77.2, 2297.0], [77.3, 2297.0], [77.4, 2297.0], [77.5, 2297.0], [77.6, 2297.0], [77.7, 2298.0], [77.8, 2298.0], [77.9, 2298.0], [78.0, 2299.0], [78.1, 2299.0], [78.2, 2299.0], [78.3, 2299.0], [78.4, 2301.0], [78.5, 2301.0], [78.6, 2301.0], [78.7, 2302.0], [78.8, 2302.0], [78.9, 2302.0], [79.0, 2302.0], [79.1, 2302.0], [79.2, 2302.0], [79.3, 2302.0], [79.4, 2304.0], [79.5, 2304.0], [79.6, 2304.0], [79.7, 2306.0], [79.8, 2306.0], [79.9, 2306.0], [80.0, 2308.0], [80.1, 2308.0], [80.2, 2308.0], [80.3, 2308.0], [80.4, 2308.0], [80.5, 2308.0], [80.6, 2308.0], [80.7, 2310.0], [80.8, 2310.0], [80.9, 2310.0], [81.0, 2310.0], [81.1, 2310.0], [81.2, 2310.0], [81.3, 2310.0], [81.4, 2314.0], [81.5, 2314.0], [81.6, 2314.0], [81.7, 2316.0], [81.8, 2316.0], [81.9, 2316.0], [82.0, 2318.0], [82.1, 2318.0], [82.2, 2318.0], [82.3, 2318.0], [82.4, 2319.0], [82.5, 2319.0], [82.6, 2319.0], [82.7, 2320.0], [82.8, 2320.0], [82.9, 2320.0], [83.0, 2321.0], [83.1, 2321.0], [83.2, 2321.0], [83.3, 2321.0], [83.4, 2323.0], [83.5, 2323.0], [83.6, 2323.0], [83.7, 2323.0], [83.8, 2323.0], [83.9, 2323.0], [84.0, 2325.0], [84.1, 2325.0], [84.2, 2325.0], [84.3, 2325.0], [84.4, 2333.0], [84.5, 2333.0], [84.6, 2333.0], [84.7, 2336.0], [84.8, 2336.0], [84.9, 2336.0], [85.0, 2336.0], [85.1, 2336.0], [85.2, 2336.0], [85.3, 2336.0], [85.4, 2337.0], [85.5, 2337.0], [85.6, 2337.0], [85.7, 2342.0], [85.8, 2342.0], [85.9, 2342.0], [86.0, 2343.0], [86.1, 2343.0], [86.2, 2343.0], [86.3, 2343.0], [86.4, 2346.0], [86.5, 2346.0], [86.6, 2346.0], [86.7, 2347.0], [86.8, 2347.0], [86.9, 2347.0], [87.0, 2349.0], [87.1, 2349.0], [87.2, 2349.0], [87.3, 2349.0], [87.4, 2351.0], [87.5, 2351.0], [87.6, 2351.0], [87.7, 2351.0], [87.8, 2351.0], [87.9, 2351.0], [88.0, 2352.0], [88.1, 2352.0], [88.2, 2352.0], [88.3, 2352.0], [88.4, 2353.0], [88.5, 2353.0], [88.6, 2353.0], [88.7, 2353.0], [88.8, 2353.0], [88.9, 2353.0], [89.0, 2353.0], [89.1, 2353.0], [89.2, 2353.0], [89.3, 2353.0], [89.4, 2354.0], [89.5, 2354.0], [89.6, 2354.0], [89.7, 2358.0], [89.8, 2358.0], [89.9, 2358.0], [90.0, 2360.0], [90.1, 2360.0], [90.2, 2360.0], [90.3, 2360.0], [90.4, 2360.0], [90.5, 2360.0], [90.6, 2360.0], [90.7, 2363.0], [90.8, 2363.0], [90.9, 2363.0], [91.0, 2363.0], [91.1, 2363.0], [91.2, 2363.0], [91.3, 2363.0], [91.4, 2363.0], [91.5, 2363.0], [91.6, 2363.0], [91.7, 2368.0], [91.8, 2368.0], [91.9, 2368.0], [92.0, 2373.0], [92.1, 2373.0], [92.2, 2373.0], [92.3, 2373.0], [92.4, 2374.0], [92.5, 2374.0], [92.6, 2374.0], [92.7, 2374.0], [92.8, 2374.0], [92.9, 2374.0], [93.0, 2376.0], [93.1, 2376.0], [93.2, 2376.0], [93.3, 2376.0], [93.4, 2378.0], [93.5, 2378.0], [93.6, 2378.0], [93.7, 2378.0], [93.8, 2378.0], [93.9, 2378.0], [94.0, 2381.0], [94.1, 2381.0], [94.2, 2381.0], [94.3, 2381.0], [94.4, 2383.0], [94.5, 2383.0], [94.6, 2383.0], [94.7, 2383.0], [94.8, 2383.0], [94.9, 2383.0], [95.0, 2383.0], [95.1, 2383.0], [95.2, 2383.0], [95.3, 2383.0], [95.4, 2394.0], [95.5, 2394.0], [95.6, 2394.0], [95.7, 2401.0], [95.8, 2401.0], [95.9, 2401.0], [96.0, 2401.0], [96.1, 2401.0], [96.2, 2401.0], [96.3, 2401.0], [96.4, 2401.0], [96.5, 2401.0], [96.6, 2401.0], [96.7, 2403.0], [96.8, 2403.0], [96.9, 2403.0], [97.0, 2406.0], [97.1, 2406.0], [97.2, 2406.0], [97.3, 2406.0], [97.4, 2407.0], [97.5, 2407.0], [97.6, 2407.0], [97.7, 2408.0], [97.8, 2408.0], [97.9, 2408.0], [98.0, 2409.0], [98.1, 2409.0], [98.2, 2409.0], [98.3, 2409.0], [98.4, 2424.0], [98.5, 2424.0], [98.6, 2424.0], [98.7, 2507.0], [98.8, 2507.0], [98.9, 2507.0], [99.0, 2571.0], [99.1, 2571.0], [99.2, 2571.0], [99.3, 2571.0], [99.4, 2593.0], [99.5, 2593.0], [99.6, 2593.0], [99.7, 2595.0], [99.8, 2595.0], [99.9, 2595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 1400.0, "maxY": 52.0, "series": [{"data": [[2100.0, 35.0], [2200.0, 34.0], [2300.0, 52.0], [2400.0, 9.0], [2500.0, 4.0], [1400.0, 13.0], [1500.0, 14.0], [1600.0, 41.0], [1700.0, 20.0], [1800.0, 27.0], [1900.0, 15.0], [2000.0, 36.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 287.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 287.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 155.1766666666665, "minX": 1.65943878E12, "maxY": 155.1766666666665, "series": [{"data": [[1.65943878E12, 155.1766666666665]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943878E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1481.0, "minX": 1.0, "maxY": 2571.0, "series": [{"data": [[2.0, 1808.0], [3.0, 2014.0], [4.0, 1609.0], [5.0, 1660.0], [6.0, 1517.0], [8.0, 1568.0], [9.0, 1513.0], [10.0, 1691.0], [11.0, 1501.0], [12.0, 1558.0], [13.0, 2424.0], [15.0, 1601.0], [16.0, 1540.0], [18.0, 1641.5], [19.0, 1642.0], [20.0, 1695.0], [21.0, 1706.0], [22.0, 1620.0], [23.0, 1622.0], [24.0, 1658.0], [26.0, 2426.0], [27.0, 1659.0], [28.0, 2571.0], [29.0, 1665.0], [31.0, 2331.0], [33.0, 2507.0], [32.0, 2276.0], [35.0, 2099.0], [34.0, 1586.0], [36.0, 2320.0], [41.0, 2290.6666666666665], [40.0, 1787.5], [47.0, 2407.0], [48.0, 2333.0], [51.0, 2272.6666666666665], [55.0, 2401.0], [56.0, 2164.0], [59.0, 1942.25], [58.0, 2401.0], [61.0, 1933.0], [66.0, 2221.0], [65.0, 2004.5], [64.0, 2239.5], [71.0, 2363.0], [69.0, 1867.3333333333333], [73.0, 2297.0], [78.0, 2287.0], [77.0, 2101.0], [87.0, 1889.3333333333333], [90.0, 2383.0], [89.0, 2104.0], [95.0, 2376.0], [94.0, 2229.0], [93.0, 2299.0], [99.0, 2245.5], [97.0, 2373.0], [96.0, 2303.0], [101.0, 2368.0], [100.0, 1950.6666666666667], [107.0, 2226.0], [104.0, 1644.5], [115.0, 2164.285714285714], [119.0, 2027.0], [116.0, 2220.5], [123.0, 2260.0], [122.0, 2275.0], [121.0, 2187.0], [127.0, 2335.3333333333335], [124.0, 2154.5], [134.0, 2218.0], [131.0, 2295.0], [129.0, 2352.5], [140.0, 2090.0], [139.0, 2239.0], [137.0, 2269.3333333333335], [151.0, 1550.0], [149.0, 2159.833333333333], [148.0, 2083.0], [147.0, 2168.0], [158.0, 2106.0], [156.0, 1797.5], [154.0, 2128.0], [153.0, 1956.0], [164.0, 2149.3333333333335], [161.0, 2150.75], [171.0, 1781.25], [169.0, 2308.5], [168.0, 2325.0], [183.0, 1495.0], [182.0, 2059.3333333333335], [180.0, 2224.8], [190.0, 2166.3333333333335], [189.0, 1929.0], [188.0, 2310.0], [186.0, 1881.0], [184.0, 2089.0], [199.0, 2268.6666666666665], [192.0, 2269.0], [206.0, 1889.5], [205.0, 2065.5], [204.0, 1481.0], [201.0, 2107.0], [211.0, 2012.0], [209.0, 1993.5], [226.0, 1844.0], [239.0, 1913.3333333333333], [237.0, 1922.5], [236.0, 1794.7142857142858], [232.0, 1923.4], [247.0, 1678.0], [246.0, 1685.5], [243.0, 1820.4285714285716], [242.0, 1813.5714285714287], [255.0, 2000.0], [254.0, 1791.0], [250.0, 2269.0], [249.0, 1756.7142857142856], [271.0, 1694.0], [270.0, 1687.0], [268.0, 1697.0], [267.0, 1701.3333333333333], [265.0, 1855.0], [262.0, 1804.0], [261.0, 1788.0], [259.0, 2250.0], [258.0, 1998.0], [281.0, 1688.5], [279.0, 1846.6666666666667], [277.0, 1681.0], [275.0, 1776.1666666666667], [274.0, 1804.0], [300.0, 1956.4736842105262], [1.0, 2054.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[155.1766666666665, 2007.300000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1610.0, "minX": 1.65943878E12, "maxY": 2340.0, "series": [{"data": [[1.65943878E12, 2340.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65943878E12, 1610.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943878E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2007.300000000001, "minX": 1.65943878E12, "maxY": 2007.300000000001, "series": [{"data": [[1.65943878E12, 2007.300000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943878E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2006.756666666666, "minX": 1.65943878E12, "maxY": 2006.756666666666, "series": [{"data": [[1.65943878E12, 2006.756666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943878E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1871.843333333333, "minX": 1.65943878E12, "maxY": 1871.843333333333, "series": [{"data": [[1.65943878E12, 1871.843333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943878E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1436.0, "minX": 1.65943878E12, "maxY": 2595.0, "series": [{"data": [[1.65943878E12, 2595.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65943878E12, 2359.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65943878E12, 2570.3600000000006]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65943878E12, 2383.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65943878E12, 1436.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65943878E12, 2048.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943878E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1659.0, "minX": 31.0, "maxY": 2085.0, "series": [{"data": [[269.0, 2085.0], [31.0, 1659.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 269.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1659.0, "minX": 31.0, "maxY": 2085.0, "series": [{"data": [[269.0, 2085.0], [31.0, 1659.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 269.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.65943878E12, "maxY": 5.0, "series": [{"data": [[1.65943878E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943878E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.65943878E12, "maxY": 5.0, "series": [{"data": [[1.65943878E12, 5.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65943878E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.65943878E12, "maxY": 5.0, "series": [{"data": [[1.65943878E12, 5.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943878E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.65943878E12, "maxY": 5.0, "series": [{"data": [[1.65943878E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65943878E12, "title": "Total Transactions Per Second"}},
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

