/**
 * Created by xiaobxia on 2018/6/20.
 */
function makePath(path) {
  var mockPath = '/mock'
  return mockPath + path
}
module.exports = [
  {
    path: makePath('/getWebStockdaybarAll'),
    controller: function (req, res) {
      res.json(
        {"code":200,"success":true,"message":"success","data":{"list":[{"date":"20180822","kline":{"close":2208.23,"high":2240.48,"low":2199.16,"netChangeRatio":-1.62,"open":2240.48,"preClose":2244.66}},{"date":"20180821","kline":{"close":2244.66,"high":2250.2,"low":2204.14,"netChangeRatio":1.18,"open":2219.84,"preClose":2218.47}},{"date":"20180820","kline":{"close":2218.47,"high":2230.76,"low":2167.5,"netChangeRatio":1.04,"open":2201.6,"preClose":2195.71}},{"date":"20180817","kline":{"close":2195.71,"high":2270.53,"low":2189.51,"netChangeRatio":-1.56,"open":2257.97,"preClose":2230.43}},{"date":"20180816","kline":{"close":2230.43,"high":2273.54,"low":2193.75,"netChangeRatio":-0.49,"open":2210.88,"preClose":2241.41}},{"date":"20180815","kline":{"close":2241.41,"high":2302.55,"low":2230.7,"netChangeRatio":-2.53,"open":2301.6,"preClose":2299.52}},{"date":"20180814","kline":{"close":2299.52,"high":2323.87,"low":2289.47,"netChangeRatio":-1.43,"open":2323.87,"preClose":2332.77}},{"date":"20180813","kline":{"close":2332.77,"high":2333.2,"low":2269,"netChangeRatio":1.18,"open":2278.84,"preClose":2305.66}},{"date":"20180810","kline":{"close":2305.66,"high":2308.6,"low":2281.62,"netChangeRatio":0.5,"open":2292.27,"preClose":2294.09}},{"date":"20180809","kline":{"close":2294.09,"high":2307.75,"low":2179.11,"netChangeRatio":4.89,"open":2183.62,"preClose":2187.09}},{"date":"20180808","kline":{"close":2187.09,"high":2247.44,"low":2186.32,"netChangeRatio":-2.85,"open":2245.21,"preClose":2251.18}},{"date":"20180807","kline":{"close":2251.18,"high":2251.75,"low":2167.65,"netChangeRatio":2.88,"open":2197.04,"preClose":2188.18}},{"date":"20180806","kline":{"close":2188.18,"high":2238.34,"low":2174.08,"netChangeRatio":-1.73,"open":2218.99,"preClose":2226.61}},{"date":"20180803","kline":{"close":2226.61,"high":2300.32,"low":2222.03,"netChangeRatio":-2.92,"open":2287.9,"preClose":2293.51}},{"date":"20180802","kline":{"close":2293.51,"high":2337.8,"low":2243.33,"netChangeRatio":-2.59,"open":2333.44,"preClose":2354.52}},{"date":"20180801","kline":{"close":2354.52,"high":2432.29,"low":2352.46,"netChangeRatio":-1.99,"open":2418.99,"preClose":2402.36}},{"date":"20180731","kline":{"close":2402.36,"high":2424.56,"low":2384.63,"netChangeRatio":-0.23,"open":2405.26,"preClose":2407.83}},{"date":"20180730","kline":{"close":2407.83,"high":2459.52,"low":2394.02,"netChangeRatio":-1.71,"open":2447.47,"preClose":2449.67}},{"date":"20180727","kline":{"close":2449.67,"high":2468.41,"low":2437.45,"netChangeRatio":-0.68,"open":2459.56,"preClose":2466.53}},{"date":"20180726","kline":{"close":2466.53,"high":2528.21,"low":2457.94,"netChangeRatio":-2.19,"open":2525.32,"preClose":2521.85}},{"date":"20180725","kline":{"close":2521.85,"high":2552.27,"low":2513.1,"netChangeRatio":-0.36,"open":2536.59,"preClose":2531.01}},{"date":"20180724","kline":{"close":2531.01,"high":2542.91,"low":2497.57,"netChangeRatio":0.87,"open":2512.87,"preClose":2509.15}},{"date":"20180723","kline":{"close":2509.15,"high":2519.77,"low":2456.47,"netChangeRatio":1.55,"open":2462.43,"preClose":2470.87}},{"date":"20180720","kline":{"close":2470.87,"high":2477.06,"low":2421.91,"netChangeRatio":1.12,"open":2439.43,"preClose":2443.44}},{"date":"20180719","kline":{"close":2443.44,"high":2475.33,"low":2431.71,"netChangeRatio":-0.34,"open":2456.61,"preClose":2451.87}},{"date":"20180718","kline":{"close":2451.87,"high":2506.19,"low":2451.81,"netChangeRatio":-1.09,"open":2489.53,"preClose":2478.96}},{"date":"20180717","kline":{"close":2478.96,"high":2479.04,"low":2438.65,"netChangeRatio":0.16,"open":2471.21,"preClose":2475.02}},{"date":"20180716","kline":{"close":2475.02,"high":2490,"low":2462.84,"netChangeRatio":0.3,"open":2471.6,"preClose":2467.51}},{"date":"20180713","kline":{"close":2467.51,"high":2474.51,"low":2447.14,"netChangeRatio":0.66,"open":2450.94,"preClose":2451.23}},{"date":"20180712","kline":{"close":2451.23,"high":2465.69,"low":2349.24,"netChangeRatio":4.46,"open":2349.24,"preClose":2346.64}},{"date":"20180711","kline":{"close":2346.64,"high":2368.63,"low":2316.07,"netChangeRatio":-2.28,"open":2343.33,"preClose":2401.39}},{"date":"20180710","kline":{"close":2401.39,"high":2401.53,"low":2370.54,"netChangeRatio":1.29,"open":2380.06,"preClose":2370.78}},{"date":"20180709","kline":{"close":2370.78,"high":2370.94,"low":2297.08,"netChangeRatio":4.05,"open":2297.08,"preClose":2278.57}},{"date":"20180706","kline":{"close":2278.57,"high":2334.32,"low":2234.02,"netChangeRatio":0.06,"open":2283.19,"preClose":2277.15}},{"date":"20180705","kline":{"close":2277.15,"high":2345.34,"low":2270.01,"netChangeRatio":-2.3,"open":2325.84,"preClose":2330.79}},{"date":"20180704","kline":{"close":2330.79,"high":2385.86,"low":2321.26,"netChangeRatio":-2.86,"open":2385.86,"preClose":2399.32}},{"date":"20180703","kline":{"close":2399.32,"high":2403.49,"low":2313.48,"netChangeRatio":1.19,"open":2374.17,"preClose":2371}},{"date":"20180702","kline":{"close":2371,"high":2422.56,"low":2348.91,"netChangeRatio":-1.79,"open":2411.33,"preClose":2414.17}},{"date":"20180629","kline":{"close":2414.17,"high":2415.54,"low":2312.58,"netChangeRatio":4.68,"open":2313.82,"preClose":2306.28}},{"date":"20180628","kline":{"close":2306.28,"high":2354.2,"low":2304.21,"netChangeRatio":-0.47,"open":2311.95,"preClose":2317.11}},{"date":"20180627","kline":{"close":2317.11,"high":2371.92,"low":2309.69,"netChangeRatio":-1.48,"open":2355.92,"preClose":2351.99}},{"date":"20180626","kline":{"close":2351.99,"high":2356.47,"low":2266.82,"netChangeRatio":1.57,"open":2279.78,"preClose":2315.55}},{"date":"20180625","kline":{"close":2315.55,"high":2373.94,"low":2314.29,"netChangeRatio":-1.35,"open":2367.53,"preClose":2347.13}},{"date":"20180622","kline":{"close":2347.13,"high":2356.81,"low":2259.4,"netChangeRatio":1.27,"open":2297.93,"preClose":2317.71}},{"date":"20180621","kline":{"close":2317.71,"high":2422.14,"low":2315.07,"netChangeRatio":-4.04,"open":2412.12,"preClose":2415.36}},{"date":"20180620","kline":{"close":2415.36,"high":2431.4,"low":2356.83,"netChangeRatio":0.8,"open":2383.37,"preClose":2396.17}},{"date":"20180619","kline":{"close":2396.17,"high":2506.96,"low":2371.69,"netChangeRatio":-5.9,"open":2481.29,"preClose":2546.45}},{"date":"20180615","kline":{"close":2546.45,"high":2602.22,"low":2535.84,"netChangeRatio":-1.71,"open":2594.33,"preClose":2590.65}},{"date":"20180614","kline":{"close":2590.65,"high":2620.32,"low":2586.38,"netChangeRatio":-0.65,"open":2592.61,"preClose":2607.62}},{"date":"20180613","kline":{"close":2607.62,"high":2650.1,"low":2607.08,"netChangeRatio":-1.69,"open":2646.71,"preClose":2652.44}},{"date":"20180612","kline":{"close":2652.44,"high":2654.13,"low":2607.48,"netChangeRatio":0.48,"open":2640.19,"preClose":2639.8}},{"date":"20180611","kline":{"close":2639.8,"high":2659.71,"low":2629.4,"netChangeRatio":-0.53,"open":2643.64,"preClose":2653.9}},{"date":"20180608","kline":{"close":2653.9,"high":2665.2,"low":2635.03,"netChangeRatio":-0.45,"open":2663.04,"preClose":2666.03}},{"date":"20180607","kline":{"close":2666.03,"high":2695.59,"low":2663.07,"netChangeRatio":-0.38,"open":2691.42,"preClose":2676.09}},{"date":"20180606","kline":{"close":2676.09,"high":2694.29,"low":2670,"netChangeRatio":-0.19,"open":2677.83,"preClose":2681.29}},{"date":"20180605","kline":{"close":2681.29,"high":2681.67,"low":2590.72,"netChangeRatio":3.78,"open":2590.72,"preClose":2583.69}},{"date":"20180604","kline":{"close":2583.69,"high":2598.02,"low":2563.2,"netChangeRatio":0.29,"open":2588.78,"preClose":2576.23}},{"date":"20180601","kline":{"close":2576.23,"high":2616.21,"low":2560.41,"netChangeRatio":-2.05,"open":2616.21,"preClose":2630.19}},{"date":"20180531","kline":{"close":2630.19,"high":2633.95,"low":2576.25,"netChangeRatio":1.47,"open":2614.22,"preClose":2592.07}},{"date":"20180530","kline":{"close":2592.07,"high":2638.04,"low":2588.77,"netChangeRatio":-3.23,"open":2630.18,"preClose":2678.52}},{"date":"20180529","kline":{"close":2678.52,"high":2707.18,"low":2677.18,"netChangeRatio":-0.09,"open":2679.94,"preClose":2681.03}},{"date":"20180528","kline":{"close":2681.03,"high":2710.28,"low":2656.36,"netChangeRatio":-0.07,"open":2666.22,"preClose":2682.83}},{"date":"20180525","kline":{"close":2682.83,"high":2742,"low":2677.95,"netChangeRatio":-2.4,"open":2741.39,"preClose":2748.86}},{"date":"20180524","kline":{"close":2748.86,"high":2794.94,"low":2744.5,"netChangeRatio":-1.46,"open":2787.7,"preClose":2789.66}},{"date":"20180523","kline":{"close":2789.66,"high":2823.19,"low":2789.18,"netChangeRatio":-1.27,"open":2822.43,"preClose":2825.66}},{"date":"20180522","kline":{"close":2825.66,"high":2826.8,"low":2800.51,"netChangeRatio":0.15,"open":2816.95,"preClose":2821.34}},{"date":"20180521","kline":{"close":2821.34,"high":2830.97,"low":2776.24,"netChangeRatio":2.67,"open":2776.24,"preClose":2747.97}},{"date":"20180518","kline":{"close":2747.97,"high":2755.87,"low":2715.35,"netChangeRatio":-0.24,"open":2750.06,"preClose":2754.57}},{"date":"20180517","kline":{"close":2754.57,"high":2783.48,"low":2745.8,"netChangeRatio":-0.82,"open":2776.5,"preClose":2777.34}},{"date":"20180516","kline":{"close":2777.34,"high":2804.61,"low":2772.34,"netChangeRatio":-0.6,"open":2777.56,"preClose":2794.14}},{"date":"20180515","kline":{"close":2794.14,"high":2794.33,"low":2759.47,"netChangeRatio":0.54,"open":2788.16,"preClose":2779.25}},{"date":"20180514","kline":{"close":2779.25,"high":2799.73,"low":2753.31,"netChangeRatio":1.49,"open":2753.31,"preClose":2738.56}},{"date":"20180511","kline":{"close":2738.56,"high":2777.83,"low":2737.81,"netChangeRatio":-1.14,"open":2775.97,"preClose":2770.08}},{"date":"20180510","kline":{"close":2770.08,"high":2781.13,"low":2744.07,"netChangeRatio":0.02,"open":2773.02,"preClose":2769.55}},{"date":"20180509","kline":{"close":2769.55,"high":2779.58,"low":2755.7,"netChangeRatio":-0.09,"open":2766.58,"preClose":2771.91}},{"date":"20180508","kline":{"close":2771.91,"high":2777.2,"low":2743.81,"netChangeRatio":0.85,"open":2749.81,"preClose":2748.53}},{"date":"20180507","kline":{"close":2748.53,"high":2753.37,"low":2716.29,"netChangeRatio":1.34,"open":2718.23,"preClose":2712.16}},{"date":"20180504","kline":{"close":2712.16,"high":2735.53,"low":2709.95,"netChangeRatio":-0.68,"open":2718.39,"preClose":2730.69}},{"date":"20180503","kline":{"close":2730.69,"high":2731.82,"low":2652.45,"netChangeRatio":2.27,"open":2669.55,"preClose":2670.18}},{"date":"20180502","kline":{"close":2670.18,"high":2699.52,"low":2647.08,"netChangeRatio":0.01,"open":2690.34,"preClose":2669.95}},{"date":"20180427","kline":{"close":2669.95,"high":2695.47,"low":2639.67,"netChangeRatio":-0.01,"open":2686.23,"preClose":2670.3}},{"date":"20180426","kline":{"close":2670.3,"high":2743.8,"low":2667.28,"netChangeRatio":-3.23,"open":2743.41,"preClose":2759.37}},{"date":"20180425","kline":{"close":2759.37,"high":2780.39,"low":2747.73,"netChangeRatio":-0.64,"open":2752.85,"preClose":2777.15}},{"date":"20180424","kline":{"close":2777.15,"high":2777.9,"low":2695.85,"netChangeRatio":2.13,"open":2704.15,"preClose":2719.32}},{"date":"20180423","kline":{"close":2719.32,"high":2773.81,"low":2682.02,"netChangeRatio":-1.59,"open":2770.21,"preClose":2763.17}},{"date":"20180420","kline":{"close":2763.17,"high":2830.29,"low":2754.35,"netChangeRatio":-2.25,"open":2818.7,"preClose":2826.88}},{"date":"20180419","kline":{"close":2826.88,"high":2852.45,"low":2807.62,"netChangeRatio":0.71,"open":2814.14,"preClose":2806.99}},{"date":"20180418","kline":{"close":2806.99,"high":2816.19,"low":2721.97,"netChangeRatio":0.96,"open":2804.53,"preClose":2780.42}},{"date":"20180417","kline":{"close":2780.42,"high":2891.05,"low":2776.36,"netChangeRatio":-3.29,"open":2875.26,"preClose":2875.05}},{"date":"20180416","kline":{"close":2875.05,"high":2897.09,"low":2851.34,"netChangeRatio":-0.3,"open":2869.52,"preClose":2883.73}},{"date":"20180413","kline":{"close":2883.73,"high":2909.53,"low":2872.45,"netChangeRatio":0.02,"open":2899.66,"preClose":2883.08}},{"date":"20180412","kline":{"close":2883.08,"high":2909.17,"low":2878.28,"netChangeRatio":-0.56,"open":2897.49,"preClose":2899.35}},{"date":"20180411","kline":{"close":2899.35,"high":2926.5,"low":2893.4,"netChangeRatio":0.47,"open":2900.96,"preClose":2885.86}},{"date":"20180410","kline":{"close":2885.86,"high":2886,"low":2835.28,"netChangeRatio":1.15,"open":2854.9,"preClose":2853.16}},{"date":"20180409","kline":{"close":2853.16,"high":2880.77,"low":2823.21,"netChangeRatio":-0.53,"open":2855.7,"preClose":2868.23}},{"date":"20180404","kline":{"close":2868.23,"high":2932.18,"low":2867.24,"netChangeRatio":-1.68,"open":2923.13,"preClose":2917.27}},{"date":"20180403","kline":{"close":2917.27,"high":2927.35,"low":2880.14,"netChangeRatio":-1.14,"open":2910.72,"preClose":2950.93}},{"date":"20180402","kline":{"close":2950.93,"high":2979.97,"low":2938.6,"netChangeRatio":0.37,"open":2947.64,"preClose":2940.03}},{"date":"20180330","kline":{"close":2940.03,"high":2940.13,"low":2892.49,"netChangeRatio":1.74,"open":2896.57,"preClose":2889.8}},{"date":"20180329","kline":{"close":2889.8,"high":2928.37,"low":2854.02,"netChangeRatio":-0.51,"open":2917.26,"preClose":2904.63}},{"date":"20180328","kline":{"close":2904.63,"high":2952.94,"low":2901.18,"netChangeRatio":-1.81,"open":2909.74,"preClose":2958.12}},{"date":"20180327","kline":{"close":2958.12,"high":2965.6,"low":2916.37,"netChangeRatio":2.68,"open":2922.12,"preClose":2880.9}},{"date":"20180326","kline":{"close":2880.9,"high":2880.9,"low":2757.94,"netChangeRatio":1.86,"open":2782.22,"preClose":2828.34}},{"date":"20180323","kline":{"close":2828.34,"high":2896.69,"low":2770.46,"netChangeRatio":-5.13,"open":2843.85,"preClose":2981.17}},{"date":"20180322","kline":{"close":2981.17,"high":3037.71,"low":2976.52,"netChangeRatio":-1.17,"open":3020.38,"preClose":3016.42}},{"date":"20180321","kline":{"close":3016.42,"high":3075.29,"low":3011.74,"netChangeRatio":-0.41,"open":3041.83,"preClose":3028.72}},{"date":"20180320","kline":{"close":3028.72,"high":3029.46,"low":2986.65,"netChangeRatio":0.17,"open":2995.83,"preClose":3023.66}},{"date":"20180319","kline":{"close":3023.66,"high":3050.27,"low":2996.44,"netChangeRatio":0.62,"open":3000.09,"preClose":3005.02}},{"date":"20180316","kline":{"close":3005.02,"high":3076.17,"low":3004.93,"netChangeRatio":-2.1,"open":3066.83,"preClose":3069.58}},{"date":"20180315","kline":{"close":3069.58,"high":3085.23,"low":3026.63,"netChangeRatio":0.08,"open":3051.01,"preClose":3067.18}},{"date":"20180314","kline":{"close":3067.18,"high":3115.54,"low":3067.18,"netChangeRatio":-1.36,"open":3091.8,"preClose":3109.62}},{"date":"20180313","kline":{"close":3109.62,"high":3141.57,"low":3104.47,"netChangeRatio":-1.16,"open":3141.57,"preClose":3146.26}},{"date":"20180312","kline":{"close":3146.26,"high":3162.19,"low":3120.97,"netChangeRatio":1.58,"open":3121.18,"preClose":3097.47}},{"date":"20180309","kline":{"close":3097.47,"high":3101.97,"low":3011.12,"netChangeRatio":3.13,"open":3016.92,"preClose":3003.48}},{"date":"20180308","kline":{"close":3003.48,"high":3003.49,"low":2976.4,"netChangeRatio":0.27,"open":2990.72,"preClose":2995.33}},{"date":"20180307","kline":{"close":2995.33,"high":3035.92,"low":2993.9,"netChangeRatio":-1.42,"open":3035.92,"preClose":3038.51}},{"date":"20180306","kline":{"close":3038.51,"high":3052.97,"low":3008.13,"netChangeRatio":1.33,"open":3008.46,"preClose":2998.58}},{"date":"20180305","kline":{"close":2998.58,"high":2998.61,"low":2965.52,"netChangeRatio":1.13,"open":2980.01,"preClose":2965.21}},{"date":"20180302","kline":{"close":2965.21,"high":3027.67,"low":2963.54,"netChangeRatio":-2.11,"open":3003.1,"preClose":3029}},{"date":"20180301","kline":{"close":3029,"high":3029.77,"low":2940.95,"netChangeRatio":1.99,"open":2947.66,"preClose":2970.02}},{"date":"20180228","kline":{"close":2970.02,"high":2997.89,"low":2915.8,"netChangeRatio":0.5,"open":2926.15,"preClose":2955.12}},{"date":"20180227","kline":{"close":2955.12,"high":2993.15,"low":2943.23,"netChangeRatio":0.27,"open":2959.99,"preClose":2947.12}},{"date":"20180226","kline":{"close":2947.12,"high":2962.13,"low":2826.73,"netChangeRatio":4.96,"open":2828.56,"preClose":2807.86}},{"date":"20180223","kline":{"close":2807.86,"high":2821.92,"low":2781.09,"netChangeRatio":-0.22,"open":2812.26,"preClose":2814.03}},{"date":"20180222","kline":{"close":2814.03,"high":2814.03,"low":2763.84,"netChangeRatio":2.37,"open":2778.23,"preClose":2748.93}},{"date":"20180214","kline":{"close":2748.93,"high":2754.14,"low":2727.16,"netChangeRatio":0.1,"open":2752.26,"preClose":2746.18}},{"date":"20180213","kline":{"close":2746.18,"high":2776.04,"low":2740.37,"netChangeRatio":0.45,"open":2756.28,"preClose":2734.01}},{"date":"20180212","kline":{"close":2734.01,"high":2742.58,"low":2653.88,"netChangeRatio":3.98,"open":2657.89,"preClose":2629.44}},{"date":"20180209","kline":{"close":2629.44,"high":2677.32,"low":2594.98,"netChangeRatio":-2.62,"open":2623.51,"preClose":2700.1}},{"date":"20180208","kline":{"close":2700.1,"high":2700.35,"low":2601.92,"netChangeRatio":3.41,"open":2602.91,"preClose":2611.03}},{"date":"20180207","kline":{"close":2611.03,"high":2677.64,"low":2559.56,"netChangeRatio":0.2,"open":2668.2,"preClose":2605.91}},{"date":"20180206","kline":{"close":2605.91,"high":2707.02,"low":2601.86,"netChangeRatio":-5.22,"open":2685.27,"preClose":2749.51}},{"date":"20180205","kline":{"close":2749.51,"high":2772.8,"low":2734.75,"netChangeRatio":-1.27,"open":2743.78,"preClose":2784.99}},{"date":"20180202","kline":{"close":2784.99,"high":2802.01,"low":2713.22,"netChangeRatio":1.46,"open":2740.32,"preClose":2744.8}},{"date":"20180201","kline":{"close":2744.8,"high":2843.64,"low":2735.94,"netChangeRatio":-2.93,"open":2825.76,"preClose":2827.58}},{"date":"20180131","kline":{"close":2827.58,"high":2869.01,"low":2816.96,"netChangeRatio":-1.68,"open":2857.81,"preClose":2875.95}},{"date":"20180130","kline":{"close":2875.95,"high":2893.85,"low":2864.87,"netChangeRatio":-0.06,"open":2869.47,"preClose":2877.63}},{"date":"20180129","kline":{"close":2877.63,"high":2958.74,"low":2870.01,"netChangeRatio":-3.08,"open":2955.97,"preClose":2968.96}},{"date":"20180126","kline":{"close":2968.96,"high":2999.52,"low":2966.26,"netChangeRatio":-0.79,"open":2982.21,"preClose":2992.71}},{"date":"20180125","kline":{"close":2992.71,"high":3027.58,"low":2991.5,"netChangeRatio":-0.67,"open":3006.08,"preClose":3012.99}},{"date":"20180124","kline":{"close":3012.99,"high":3015.48,"low":2949.87,"netChangeRatio":0.42,"open":2999.27,"preClose":3000.31}},{"date":"20180123","kline":{"close":3000.31,"high":3034.13,"low":2993.02,"netChangeRatio":-0.41,"open":3013.5,"preClose":3012.53}},{"date":"20180122","kline":{"close":3012.53,"high":3017.56,"low":2943.89,"netChangeRatio":1.48,"open":2960.29,"preClose":2968.71}},{"date":"20180119","kline":{"close":2968.71,"high":2986.41,"low":2941.94,"netChangeRatio":0.48,"open":2951.5,"preClose":2954.63}},{"date":"20180118","kline":{"close":2954.63,"high":2989.53,"low":2949.96,"netChangeRatio":-0.52,"open":2962.6,"preClose":2970.05}},{"date":"20180117","kline":{"close":2970.05,"high":2985.05,"low":2869.96,"netChangeRatio":0.23,"open":2965.77,"preClose":2963.35}},{"date":"20180116","kline":{"close":2963.35,"high":3005.19,"low":2942.89,"netChangeRatio":-0.92,"open":2986.96,"preClose":2990.89}},{"date":"20180115","kline":{"close":2990.89,"high":3068.02,"low":2984.13,"netChangeRatio":-2.58,"open":3067.38,"preClose":3070.11}},{"date":"20180112","kline":{"close":3070.11,"high":3095.44,"low":3064.78,"netChangeRatio":-0.9,"open":3095.44,"preClose":3098.02}},{"date":"20180111","kline":{"close":3098.02,"high":3100.97,"low":3047.11,"netChangeRatio":0.5,"open":3073.09,"preClose":3082.75}},{"date":"20180110","kline":{"close":3082.75,"high":3103.49,"low":3054.01,"netChangeRatio":-0.66,"open":3101.75,"preClose":3103.38}},{"date":"20180109","kline":{"close":3103.38,"high":3103.48,"low":3054.77,"netChangeRatio":1.17,"open":3068.1,"preClose":3067.51}},{"date":"20180108","kline":{"close":3067.51,"high":3081.13,"low":3035.55,"netChangeRatio":-0.72,"open":3080.64,"preClose":3089.65}},{"date":"20180105","kline":{"close":3089.65,"high":3126.13,"low":3086.95,"netChangeRatio":-1.24,"open":3126.13,"preClose":3128.5}},{"date":"20180104","kline":{"close":3128.5,"high":3138.48,"low":3106.66,"netChangeRatio":0.47,"open":3109.32,"preClose":3113.97}},{"date":"20180103","kline":{"close":3113.97,"high":3129.06,"low":3059.43,"netChangeRatio":1.72,"open":3062.09,"preClose":3061.32}},{"date":"20180102","kline":{"close":3061.32,"high":3069.13,"low":3023.28,"netChangeRatio":0.31,"open":3064.96,"preClose":3051.87}},{"date":"20171229","kline":{"close":3051.87,"high":3053.05,"low":3009.52,"netChangeRatio":1.38,"open":3009.52,"preClose":3010.43}},{"date":"20171228","kline":{"close":3010.43,"high":3029.1,"low":2993.26,"netChangeRatio":0.32,"open":2993.26,"preClose":3000.92}},{"date":"20171227","kline":{"close":3000.92,"high":3064.24,"low":3000.17,"netChangeRatio":-2.07,"open":3055.03,"preClose":3064.3}},{"date":"20171226","kline":{"close":3064.3,"high":3069.1,"low":3015.53,"netChangeRatio":0.24,"open":3054.47,"preClose":3056.92}},{"date":"20171225","kline":{"close":3056.92,"high":3124.58,"low":3042.8,"netChangeRatio":-2.2,"open":3124.3,"preClose":3125.71}},{"date":"20171222","kline":{"close":3125.71,"high":3159.95,"low":3118.37,"netChangeRatio":-0.58,"open":3142.89,"preClose":3143.97}},{"date":"20171221","kline":{"close":3143.97,"high":3160.13,"low":3051.58,"netChangeRatio":2.41,"open":3064,"preClose":3070.12}},{"date":"20171220","kline":{"close":3070.12,"high":3108.8,"low":3060.54,"netChangeRatio":-1.27,"open":3104.66,"preClose":3109.69}},{"date":"20171219","kline":{"close":3109.69,"high":3117.32,"low":3081.24,"netChangeRatio":1.1,"open":3081.29,"preClose":3075.82}},{"date":"20171218","kline":{"close":3075.82,"high":3103.82,"low":3065.37,"netChangeRatio":-0.85,"open":3097.5,"preClose":3102.17}},{"date":"20171215","kline":{"close":3102.17,"high":3162.31,"low":3089.56,"netChangeRatio":-1.89,"open":3151.43,"preClose":3161.81}},{"date":"20171214","kline":{"close":3161.81,"high":3193.65,"low":3134.87,"netChangeRatio":-1.05,"open":3191.82,"preClose":3195.25}},{"date":"20171213","kline":{"close":3195.25,"high":3195.28,"low":3152.74,"netChangeRatio":0.64,"open":3167.48,"preClose":3175.05}},{"date":"20171212","kline":{"close":3175.05,"high":3221.86,"low":3174.75,"netChangeRatio":-1.07,"open":3204.07,"preClose":3209.38}},{"date":"20171211","kline":{"close":3209.38,"high":3209.64,"low":3146.35,"netChangeRatio":1.89,"open":3151.06,"preClose":3149.87}},{"date":"20171208","kline":{"close":3149.87,"high":3163.55,"low":3082.1,"netChangeRatio":1.82,"open":3083.26,"preClose":3093.61}},{"date":"20171207","kline":{"close":3093.61,"high":3130.39,"low":3091.98,"netChangeRatio":-1.18,"open":3122.97,"preClose":3130.56}},{"date":"20171206","kline":{"close":3130.56,"high":3130.67,"low":3036.62,"netChangeRatio":1.78,"open":3077.38,"preClose":3075.72}},{"date":"20171205","kline":{"close":3075.72,"high":3161.93,"low":3045.82,"netChangeRatio":-2.33,"open":3138.23,"preClose":3148.96}},{"date":"20171204","kline":{"close":3148.96,"high":3176.02,"low":3121.02,"netChangeRatio":0.5,"open":3134.07,"preClose":3133.4}},{"date":"20171201","kline":{"close":3133.4,"high":3146.82,"low":3072.21,"netChangeRatio":1.99,"open":3072.48,"preClose":3072.29}},{"date":"20171130","kline":{"close":3072.29,"high":3129.99,"low":3060.33,"netChangeRatio":-1.29,"open":3090.49,"preClose":3112.35}},{"date":"20171129","kline":{"close":3112.35,"high":3147.92,"low":3077.91,"netChangeRatio":-0.88,"open":3140.68,"preClose":3139.86}},{"date":"20171128","kline":{"close":3139.86,"high":3140.1,"low":3062.52,"netChangeRatio":2.65,"open":3062.61,"preClose":3058.83}},{"date":"20171127","kline":{"close":3058.83,"high":3129.34,"low":3052.21,"netChangeRatio":-3.11,"open":3129.21,"preClose":3156.87}},{"date":"20171124","kline":{"close":3156.87,"high":3234.58,"low":3156.38,"netChangeRatio":-1.85,"open":3196.56,"preClose":3216.23}},{"date":"20171123","kline":{"close":3216.23,"high":3343.55,"low":3214.76,"netChangeRatio":-4.33,"open":3343.55,"preClose":3361.87}},{"date":"20171122","kline":{"close":3361.87,"high":3422.87,"low":3311.39,"netChangeRatio":-0.77,"open":3375.3,"preClose":3388.02}},{"date":"20171121","kline":{"close":3388.02,"high":3388.19,"low":3311.16,"netChangeRatio":1.72,"open":3320.33,"preClose":3330.84}},{"date":"20171120","kline":{"close":3330.84,"high":3331.64,"low":3177.79,"netChangeRatio":2.45,"open":3219.76,"preClose":3251.14}},{"date":"20171117","kline":{"close":3251.14,"high":3379.96,"low":3250.96,"netChangeRatio":-3.65,"open":3366.03,"preClose":3374.27}},{"date":"20171116","kline":{"close":3374.27,"high":3379.63,"low":3307.07,"netChangeRatio":0.68,"open":3341.1,"preClose":3351.58}},{"date":"20171115","kline":{"close":3351.58,"high":3410.89,"low":3308.18,"netChangeRatio":-1.34,"open":3385.14,"preClose":3396.93}},{"date":"20171114","kline":{"close":3396.93,"high":3483.94,"low":3376.33,"netChangeRatio":-2.19,"open":3463.13,"preClose":3472.91}},{"date":"20171113","kline":{"close":3472.91,"high":3479.72,"low":3416.42,"netChangeRatio":1.17,"open":3433.93,"preClose":3432.63}},{"date":"20171110","kline":{"close":3432.63,"high":3440.41,"low":3365.31,"netChangeRatio":1.52,"open":3370.3,"preClose":3381.37}},{"date":"20171109","kline":{"close":3381.37,"high":3382.06,"low":3286.64,"netChangeRatio":2.13,"open":3302.89,"preClose":3310.97}},{"date":"20171108","kline":{"close":3310.97,"high":3353.28,"low":3309.94,"netChangeRatio":-0.67,"open":3323.25,"preClose":3333.31}},{"date":"20171107","kline":{"close":3333.31,"high":3333.63,"low":3290.78,"netChangeRatio":0.56,"open":3308.42,"preClose":3314.68}},{"date":"20171106","kline":{"close":3314.68,"high":3314.94,"low":3225.8,"netChangeRatio":2.95,"open":3226.86,"preClose":3219.68}},{"date":"20171103","kline":{"close":3219.68,"high":3250.13,"low":3191.48,"netChangeRatio":0.88,"open":3193.92,"preClose":3191.71}},{"date":"20171102","kline":{"close":3191.71,"high":3231.19,"low":3184.64,"netChangeRatio":-1.54,"open":3231.16,"preClose":3241.63}},{"date":"20171101","kline":{"close":3241.63,"high":3271.13,"low":3240.62,"netChangeRatio":-0.71,"open":3257.98,"preClose":3257.98}}]}}
      )
    }
  }
]
