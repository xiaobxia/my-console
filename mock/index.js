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
        {"code":200,"success":true,"message":"success","data":{"list":[{"date":"20180925","kline":{"close":3368.72,"high":3394.38,"low":3367.03,"netChangeRatio":-1.22,"open":3375.97,"preClose":3410.49}},{"date":"20180921","kline":{"close":3410.49,"high":3410.49,"low":3307.77,"netChangeRatio":3.03,"open":3320.7,"preClose":3310.13}},{"date":"20180920","kline":{"close":3310.13,"high":3332.31,"low":3303.07,"netChangeRatio":-0.07,"open":3314.88,"preClose":3312.48}},{"date":"20180919","kline":{"close":3312.48,"high":3335.99,"low":3258.31,"netChangeRatio":1.32,"open":3262,"preClose":3269.43}},{"date":"20180918","kline":{"close":3269.43,"high":3270.11,"low":3193.64,"netChangeRatio":2.01,"open":3193.64,"preClose":3204.92}},{"date":"20180917","kline":{"close":3204.92,"high":3230.79,"low":3200.51,"netChangeRatio":-1.15,"open":3224.93,"preClose":3242.09}},{"date":"20180914","kline":{"close":3242.09,"high":3254.1,"low":3227.94,"netChangeRatio":0.17,"open":3242.83,"preClose":3236.57}},{"date":"20180913","kline":{"close":3236.57,"high":3249.59,"low":3191.4,"netChangeRatio":1.08,"open":3239.69,"preClose":3202.02}},{"date":"20180912","kline":{"close":3202.02,"high":3225.6,"low":3194.98,"netChangeRatio":-0.69,"open":3216.99,"preClose":3224.21}},{"date":"20180911","kline":{"close":3224.21,"high":3245.62,"low":3209.11,"netChangeRatio":-0.18,"open":3229.71,"preClose":3230.07}},{"date":"20180910","kline":{"close":3230.07,"high":3277.88,"low":3227.85,"netChangeRatio":-1.45,"open":3271.38,"preClose":3277.64}},{"date":"20180907","kline":{"close":3277.64,"high":3316.61,"low":3253.73,"netChangeRatio":0.45,"open":3273.89,"preClose":3262.88}},{"date":"20180906","kline":{"close":3262.88,"high":3311.5,"low":3253.76,"netChangeRatio":-1.07,"open":3286.66,"preClose":3298.14}},{"date":"20180905","kline":{"close":3298.14,"high":3354.2,"low":3298.14,"netChangeRatio":-1.95,"open":3349.7,"preClose":3363.9}},{"date":"20180904","kline":{"close":3363.9,"high":3370.96,"low":3307.96,"netChangeRatio":1.27,"open":3324.19,"preClose":3321.82}},{"date":"20180903","kline":{"close":3321.82,"high":3325.61,"low":3291.78,"netChangeRatio":-0.38,"open":3320.69,"preClose":3334.5}},{"date":"20180831","kline":{"close":3334.5,"high":3356.58,"low":3310.87,"netChangeRatio":-0.5,"open":3333.38,"preClose":3351.09}},{"date":"20180830","kline":{"close":3351.09,"high":3402.56,"low":3349.47,"netChangeRatio":-1.05,"open":3385.81,"preClose":3386.57}},{"date":"20180829","kline":{"close":3386.57,"high":3398.71,"low":3377.12,"netChangeRatio":-0.4,"open":3393.05,"preClose":3400.17}},{"date":"20180828","kline":{"close":3400.17,"high":3416.59,"low":3388.81,"netChangeRatio":-0.19,"open":3408.15,"preClose":3406.57}},{"date":"20180827","kline":{"close":3406.57,"high":3406.57,"low":3339.26,"netChangeRatio":2.44,"open":3339.39,"preClose":3325.33}},{"date":"20180824","kline":{"close":3325.33,"high":3353.04,"low":3291.87,"netChangeRatio":0.16,"open":3308.48,"preClose":3320.03}},{"date":"20180823","kline":{"close":3320.03,"high":3336.11,"low":3285.81,"netChangeRatio":0.37,"open":3308.46,"preClose":3307.95}},{"date":"20180822","kline":{"close":3307.95,"high":3328.97,"low":3299.39,"netChangeRatio":-0.56,"open":3328.97,"preClose":3326.65}},{"date":"20180821","kline":{"close":3326.65,"high":3331.71,"low":3270.03,"netChangeRatio":1.82,"open":3271.84,"preClose":3267.25}},{"date":"20180820","kline":{"close":3267.25,"high":3267.25,"low":3209.01,"netChangeRatio":1.17,"open":3238.22,"preClose":3229.62}},{"date":"20180817","kline":{"close":3229.62,"high":3311.57,"low":3224.1,"netChangeRatio":-1.44,"open":3305.9,"preClose":3276.73}},{"date":"20180816","kline":{"close":3276.73,"high":3315.2,"low":3231.56,"netChangeRatio":-0.46,"open":3251.86,"preClose":3291.98}},{"date":"20180815","kline":{"close":3291.98,"high":3372.14,"low":3288.71,"netChangeRatio":-2.4,"open":3371.96,"preClose":3372.91}},{"date":"20180814","kline":{"close":3372.91,"high":3391.73,"low":3356.61,"netChangeRatio":-0.51,"open":3386.48,"preClose":3390.34}},{"date":"20180813","kline":{"close":3390.34,"high":3396.19,"low":3336.7,"netChangeRatio":-0.43,"open":3369.98,"preClose":3405.02}},{"date":"20180810","kline":{"close":3405.02,"high":3424.04,"low":3380.57,"netChangeRatio":0.22,"open":3398.41,"preClose":3397.53}},{"date":"20180809","kline":{"close":3397.53,"high":3408.39,"low":3299.62,"netChangeRatio":2.5,"open":3303.48,"preClose":3314.51}},{"date":"20180808","kline":{"close":3314.51,"high":3368.16,"low":3311.77,"netChangeRatio":-1.61,"open":3362.15,"preClose":3368.87}},{"date":"20180807","kline":{"close":3368.87,"high":3368.96,"low":3263.5,"netChangeRatio":2.92,"open":3284.98,"preClose":3273.27}},{"date":"20180806","kline":{"close":3273.27,"high":3344.25,"low":3257.69,"netChangeRatio":-1.27,"open":3312.82,"preClose":3315.28}},{"date":"20180803","kline":{"close":3315.28,"high":3381.34,"low":3315.2,"netChangeRatio":-1.65,"open":3366.66,"preClose":3370.96}},{"date":"20180802","kline":{"close":3370.96,"high":3434.35,"low":3322.1,"netChangeRatio":-2.22,"open":3434.35,"preClose":3447.39}},{"date":"20180801","kline":{"close":3447.39,"high":3543.61,"low":3446.78,"netChangeRatio":-2,"open":3530.03,"preClose":3517.66}},{"date":"20180731","kline":{"close":3517.66,"high":3528.15,"low":3493.15,"netChangeRatio":0.07,"open":3510.47,"preClose":3515.08}},{"date":"20180730","kline":{"close":3515.08,"high":3550.9,"low":3489.55,"netChangeRatio":-0.17,"open":3520.85,"preClose":3521.23}},{"date":"20180727","kline":{"close":3521.23,"high":3545.41,"low":3512.7,"netChangeRatio":-0.42,"open":3533.77,"preClose":3536.25}},{"date":"20180726","kline":{"close":3536.25,"high":3593.92,"low":3528.64,"netChangeRatio":-1.16,"open":3583.32,"preClose":3577.75}},{"date":"20180725","kline":{"close":3577.75,"high":3589.98,"low":3566.31,"netChangeRatio":-0.11,"open":3589.51,"preClose":3581.71}},{"date":"20180724","kline":{"close":3581.71,"high":3596.51,"low":3530.66,"netChangeRatio":1.59,"open":3530.66,"preClose":3525.75}},{"date":"20180723","kline":{"close":3525.75,"high":3527.53,"low":3464.65,"netChangeRatio":0.94,"open":3471.86,"preClose":3492.89}},{"date":"20180720","kline":{"close":3492.89,"high":3505.93,"low":3398.95,"netChangeRatio":1.88,"open":3426.46,"preClose":3428.34}},{"date":"20180719","kline":{"close":3428.34,"high":3466.51,"low":3417.96,"netChangeRatio":-0.09,"open":3444.8,"preClose":3431.32}},{"date":"20180718","kline":{"close":3431.32,"high":3479.26,"low":3430.16,"netChangeRatio":-0.52,"open":3456.61,"preClose":3449.38}},{"date":"20180717","kline":{"close":3449.38,"high":3467.19,"low":3420.97,"netChangeRatio":-0.65,"open":3466.42,"preClose":3472.09}},{"date":"20180716","kline":{"close":3472.09,"high":3506.24,"low":3459.73,"netChangeRatio":-0.59,"open":3488.97,"preClose":3492.69}},{"date":"20180713","kline":{"close":3492.69,"high":3499.76,"low":3474.91,"netChangeRatio":0.33,"open":3488.5,"preClose":3481.06}},{"date":"20180712","kline":{"close":3481.06,"high":3499.1,"low":3403.33,"netChangeRatio":2.16,"open":3403.33,"preClose":3407.53}},{"date":"20180711","kline":{"close":3407.53,"high":3427.57,"low":3375.14,"netChangeRatio":-1.73,"open":3398.93,"preClose":3467.52}},{"date":"20180710","kline":{"close":3467.52,"high":3474.14,"low":3437.27,"netChangeRatio":0.24,"open":3464.91,"preClose":3459.18}},{"date":"20180709","kline":{"close":3459.18,"high":3459.32,"low":3378.91,"netChangeRatio":2.8,"open":3378.91,"preClose":3365.12}},{"date":"20180706","kline":{"close":3365.12,"high":3396.25,"low":3295.73,"netChangeRatio":0.68,"open":3347.06,"preClose":3342.44}},{"date":"20180705","kline":{"close":3342.44,"high":3398.49,"low":3330.71,"netChangeRatio":-0.63,"open":3365.55,"preClose":3363.75}},{"date":"20180704","kline":{"close":3363.75,"high":3418.33,"low":3359.09,"netChangeRatio":-1.34,"open":3398.78,"preClose":3409.28}},{"date":"20180703","kline":{"close":3409.28,"high":3422.04,"low":3319.29,"netChangeRatio":0.04,"open":3410.48,"preClose":3407.96}},{"date":"20180702","kline":{"close":3407.96,"high":3506.9,"low":3383.5,"netChangeRatio":-2.93,"open":3504.46,"preClose":3510.98}},{"date":"20180629","kline":{"close":3510.98,"high":3512.38,"low":3425.22,"netChangeRatio":2.55,"open":3431.96,"preClose":3423.53}},{"date":"20180628","kline":{"close":3423.53,"high":3477.06,"low":3416.95,"netChangeRatio":-1.03,"open":3434.94,"preClose":3459.26}},{"date":"20180627","kline":{"close":3459.26,"high":3537.66,"low":3441.79,"netChangeRatio":-2.03,"open":3525.13,"preClose":3531.11}},{"date":"20180626","kline":{"close":3531.11,"high":3541.78,"low":3478.21,"netChangeRatio":-0.82,"open":3521.59,"preClose":3560.48}},{"date":"20180625","kline":{"close":3560.48,"high":3631.03,"low":3559.03,"netChangeRatio":-1.34,"open":3625.8,"preClose":3608.9}},{"date":"20180622","kline":{"close":3608.9,"high":3609.08,"low":3542.46,"netChangeRatio":0.44,"open":3567.89,"preClose":3592.97}},{"date":"20180621","kline":{"close":3592.97,"high":3673.56,"low":3589.49,"netChangeRatio":-1.17,"open":3633.56,"preClose":3635.44}},{"date":"20180620","kline":{"close":3635.44,"high":3649.34,"low":3578.17,"netChangeRatio":0.4,"open":3602.55,"preClose":3621.12}},{"date":"20180619","kline":{"close":3621.12,"high":3712.82,"low":3583.02,"netChangeRatio":-3.53,"open":3702.67,"preClose":3753.43}},{"date":"20180615","kline":{"close":3753.43,"high":3780.34,"low":3737.43,"netChangeRatio":-0.53,"open":3763.04,"preClose":3773.37}},{"date":"20180614","kline":{"close":3773.37,"high":3808.16,"low":3759.25,"netChangeRatio":-0.4,"open":3774.64,"preClose":3788.34}},{"date":"20180613","kline":{"close":3788.34,"high":3817.45,"low":3782.07,"netChangeRatio":-0.98,"open":3814.62,"preClose":3825.95}},{"date":"20180612","kline":{"close":3825.95,"high":3830.47,"low":3765.26,"netChangeRatio":1.22,"open":3783.19,"preClose":3779.98}},{"date":"20180611","kline":{"close":3779.98,"high":3792.55,"low":3756.51,"netChangeRatio":0.01,"open":3770.21,"preClose":3779.62}},{"date":"20180608","kline":{"close":3779.62,"high":3819.46,"low":3759.27,"netChangeRatio":-1.34,"open":3819.45,"preClose":3831.01}},{"date":"20180607","kline":{"close":3831.01,"high":3859.85,"low":3827.69,"netChangeRatio":-0.17,"open":3846.94,"preClose":3837.35}},{"date":"20180606","kline":{"close":3837.35,"high":3848.33,"low":3830.9,"netChangeRatio":-0.21,"open":3839.68,"preClose":3845.32}},{"date":"20180605","kline":{"close":3845.32,"high":3845.56,"low":3800.93,"netChangeRatio":0.99,"open":3811.29,"preClose":3807.58}},{"date":"20180604","kline":{"close":3807.58,"high":3813.41,"low":3776.62,"netChangeRatio":0.98,"open":3785.19,"preClose":3770.59}},{"date":"20180601","kline":{"close":3770.59,"high":3802.54,"low":3753.84,"netChangeRatio":-0.84,"open":3789.67,"preClose":3802.38}},{"date":"20180531","kline":{"close":3802.38,"high":3804.79,"low":3742.53,"netChangeRatio":2.12,"open":3749.3,"preClose":3723.37}},{"date":"20180530","kline":{"close":3723.37,"high":3767.89,"low":3722.07,"netChangeRatio":-2.12,"open":3755.18,"preClose":3804.01}},{"date":"20180529","kline":{"close":3804.01,"high":3841.78,"low":3800.67,"netChangeRatio":-0.76,"open":3824.19,"preClose":3833.26}},{"date":"20180528","kline":{"close":3833.26,"high":3846.55,"low":3799.32,"netChangeRatio":0.44,"open":3816.26,"preClose":3816.5}},{"date":"20180525","kline":{"close":3816.5,"high":3841.12,"low":3804.13,"netChangeRatio":-0.28,"open":3823.74,"preClose":3827.22}},{"date":"20180524","kline":{"close":3827.22,"high":3859.1,"low":3823.92,"netChangeRatio":-0.71,"open":3853.29,"preClose":3854.58}},{"date":"20180523","kline":{"close":3854.58,"high":3898.27,"low":3854.58,"netChangeRatio":-1.32,"open":3898.27,"preClose":3906.21}},{"date":"20180522","kline":{"close":3906.21,"high":3918.82,"low":3881.17,"netChangeRatio":-0.38,"open":3918.82,"preClose":3921.24}},{"date":"20180521","kline":{"close":3921.24,"high":3937.46,"low":3913.6,"netChangeRatio":0.47,"open":3925.54,"preClose":3903.06}},{"date":"20180518","kline":{"close":3903.06,"high":3903.06,"low":3841.9,"netChangeRatio":1.01,"open":3860.16,"preClose":3864.05}},{"date":"20180517","kline":{"close":3864.05,"high":3899.51,"low":3858.85,"netChangeRatio":-0.74,"open":3895.49,"preClose":3892.84}},{"date":"20180516","kline":{"close":3892.84,"high":3923.34,"low":3889.19,"netChangeRatio":-0.8,"open":3909.82,"preClose":3924.1}},{"date":"20180515","kline":{"close":3924.1,"high":3924.34,"low":3892.92,"netChangeRatio":0.38,"open":3920.14,"preClose":3909.29}},{"date":"20180514","kline":{"close":3909.29,"high":3919.3,"low":3886.87,"netChangeRatio":0.94,"open":3886.87,"preClose":3872.84}},{"date":"20180511","kline":{"close":3872.84,"high":3903.34,"low":3871.95,"netChangeRatio":-0.52,"open":3902.15,"preClose":3893.06}},{"date":"20180510","kline":{"close":3893.06,"high":3894.49,"low":3867.31,"netChangeRatio":0.55,"open":3882.84,"preClose":3871.62}},{"date":"20180509","kline":{"close":3871.62,"high":3878.94,"low":3855.74,"netChangeRatio":-0.18,"open":3876.13,"preClose":3878.68}},{"date":"20180508","kline":{"close":3878.68,"high":3892.07,"low":3833.73,"netChangeRatio":1.16,"open":3834.61,"preClose":3834.19}},{"date":"20180507","kline":{"close":3834.19,"high":3834.59,"low":3776.03,"netChangeRatio":1.58,"open":3782.54,"preClose":3774.6}},{"date":"20180504","kline":{"close":3774.6,"high":3801.52,"low":3770.94,"netChangeRatio":-0.49,"open":3784.32,"preClose":3793}},{"date":"20180503","kline":{"close":3793,"high":3797.53,"low":3732.37,"netChangeRatio":0.78,"open":3756.17,"preClose":3763.65}},{"date":"20180502","kline":{"close":3763.65,"high":3787.3,"low":3744.55,"netChangeRatio":0.18,"open":3769.93,"preClose":3756.88}},{"date":"20180427","kline":{"close":3756.88,"high":3776.98,"low":3714.64,"netChangeRatio":0.04,"open":3771.04,"preClose":3755.49}},{"date":"20180426","kline":{"close":3755.49,"high":3828.71,"low":3744.89,"netChangeRatio":-1.91,"open":3823.39,"preClose":3828.7}},{"date":"20180425","kline":{"close":3828.7,"high":3838.69,"low":3817.03,"netChangeRatio":-0.38,"open":3824.59,"preClose":3843.49}},{"date":"20180424","kline":{"close":3843.49,"high":3854.43,"low":3769.88,"netChangeRatio":2.05,"open":3769.88,"preClose":3766.33}},{"date":"20180423","kline":{"close":3766.33,"high":3787.4,"low":3735.18,"netChangeRatio":0.15,"open":3754.69,"preClose":3760.85}},{"date":"20180420","kline":{"close":3760.85,"high":3815.44,"low":3750.1,"netChangeRatio":-1.34,"open":3801.21,"preClose":3811.84}},{"date":"20180419","kline":{"close":3811.84,"high":3824.03,"low":3767.8,"netChangeRatio":1.21,"open":3774.78,"preClose":3766.28}},{"date":"20180418","kline":{"close":3766.28,"high":3789.66,"low":3708.11,"netChangeRatio":0.47,"open":3785.31,"preClose":3748.64}},{"date":"20180417","kline":{"close":3748.64,"high":3822.63,"low":3745.44,"netChangeRatio":-1.58,"open":3812.87,"preClose":3808.86}},{"date":"20180416","kline":{"close":3808.86,"high":3869.16,"low":3789.61,"netChangeRatio":-1.61,"open":3862.47,"preClose":3871.14}},{"date":"20180413","kline":{"close":3871.14,"high":3929.95,"low":3866.19,"netChangeRatio":-0.71,"open":3920.74,"preClose":3898.64}},{"date":"20180412","kline":{"close":3898.64,"high":3937.78,"low":3896.18,"netChangeRatio":-1.01,"open":3935.67,"preClose":3938.34}},{"date":"20180411","kline":{"close":3938.34,"high":3958.71,"low":3924.96,"netChangeRatio":0.28,"open":3934.17,"preClose":3927.17}},{"date":"20180410","kline":{"close":3927.17,"high":3927.42,"low":3851.8,"netChangeRatio":1.93,"open":3860.72,"preClose":3852.93}},{"date":"20180409","kline":{"close":3852.93,"high":3870.67,"low":3827.41,"netChangeRatio":-0.05,"open":3851.95,"preClose":3854.86}},{"date":"20180404","kline":{"close":3854.86,"high":3898.61,"low":3852.5,"netChangeRatio":-0.2,"open":3873.63,"preClose":3862.48}},{"date":"20180403","kline":{"close":3862.48,"high":3878.15,"low":3839.93,"netChangeRatio":-0.63,"open":3850.15,"preClose":3886.92}},{"date":"20180402","kline":{"close":3886.92,"high":3937.02,"low":3882.89,"netChangeRatio":-0.3,"open":3897.01,"preClose":3898.5}},{"date":"20180330","kline":{"close":3898.5,"high":3915.35,"low":3879.21,"netChangeRatio":0.11,"open":3893.75,"preClose":3894.05}},{"date":"20180329","kline":{"close":3894.05,"high":3913.96,"low":3794.26,"netChangeRatio":1.34,"open":3854.59,"preClose":3842.72}},{"date":"20180328","kline":{"close":3842.72,"high":3907.28,"low":3835.88,"netChangeRatio":-1.8,"open":3865.05,"preClose":3913.27}},{"date":"20180327","kline":{"close":3913.27,"high":3936.78,"low":3881.87,"netChangeRatio":0.86,"open":3927.49,"preClose":3879.89}},{"date":"20180326","kline":{"close":3879.89,"high":3883.9,"low":3829.92,"netChangeRatio":-0.64,"open":3862.69,"preClose":3904.94}},{"date":"20180323","kline":{"close":3904.94,"high":3928.51,"low":3834.94,"netChangeRatio":-2.87,"open":3896.74,"preClose":4020.35}},{"date":"20180322","kline":{"close":4020.35,"high":4072.38,"low":4003.72,"netChangeRatio":-1,"open":4062.07,"preClose":4061.05}},{"date":"20180321","kline":{"close":4061.05,"high":4110.12,"low":4046.24,"netChangeRatio":-0.41,"open":4097.02,"preClose":4077.7}},{"date":"20180320","kline":{"close":4077.7,"high":4080.19,"low":4040.31,"netChangeRatio":0.08,"open":4045.74,"preClose":4074.25}},{"date":"20180319","kline":{"close":4074.25,"high":4074.52,"low":4033.52,"netChangeRatio":0.44,"open":4054.62,"preClose":4056.42}},{"date":"20180316","kline":{"close":4056.42,"high":4110.05,"low":4055.82,"netChangeRatio":-0.97,"open":4096.89,"preClose":4096.16}},{"date":"20180315","kline":{"close":4096.16,"high":4098.99,"low":4058.71,"netChangeRatio":0.56,"open":4058.71,"preClose":4073.34}},{"date":"20180314","kline":{"close":4073.34,"high":4089.09,"low":4066.49,"netChangeRatio":-0.44,"open":4076.06,"preClose":4091.25}},{"date":"20180313","kline":{"close":4091.25,"high":4130.28,"low":4087.56,"netChangeRatio":-0.88,"open":4124.33,"preClose":4127.67}},{"date":"20180312","kline":{"close":4127.67,"high":4139.53,"low":4112.77,"netChangeRatio":0.46,"open":4130.71,"preClose":4108.87}},{"date":"20180309","kline":{"close":4108.87,"high":4110.67,"low":4076.45,"netChangeRatio":0.77,"open":4088.07,"preClose":4077.6}},{"date":"20180308","kline":{"close":4077.6,"high":4078.23,"low":4029.71,"netChangeRatio":1.01,"open":4038.95,"preClose":4036.65}},{"date":"20180307","kline":{"close":4036.65,"high":4089.7,"low":4027.94,"netChangeRatio":-0.74,"open":4063.5,"preClose":4066.56}},{"date":"20180306","kline":{"close":4066.56,"high":4067.55,"low":3998.93,"netChangeRatio":1.21,"open":4034.99,"preClose":4018.1}},{"date":"20180305","kline":{"close":4018.1,"high":4042.83,"low":3995.87,"netChangeRatio":0.04,"open":4021.66,"preClose":4016.46}},{"date":"20180302","kline":{"close":4016.46,"high":4044.42,"low":4006.94,"netChangeRatio":-0.81,"open":4014.95,"preClose":4049.09}},{"date":"20180301","kline":{"close":4049.09,"high":4061.03,"low":3986.89,"netChangeRatio":0.63,"open":3994.87,"preClose":4023.64}},{"date":"20180228","kline":{"close":4023.64,"high":4051.71,"low":3991.71,"netChangeRatio":-0.87,"open":4016.79,"preClose":4058.98}},{"date":"20180227","kline":{"close":4058.98,"high":4120.87,"low":4051.81,"netChangeRatio":-1.44,"open":4120.87,"preClose":4118.42}},{"date":"20180226","kline":{"close":4118.42,"high":4128.74,"low":4048.98,"netChangeRatio":1.16,"open":4093.4,"preClose":4071.09}},{"date":"20180223","kline":{"close":4071.09,"high":4085.2,"low":4035.23,"netChangeRatio":0.45,"open":4061.75,"preClose":4052.73}},{"date":"20180222","kline":{"close":4052.73,"high":4058.79,"low":4009.92,"netChangeRatio":2.16,"open":4020.97,"preClose":3966.96}},{"date":"20180214","kline":{"close":3966.96,"high":3971.4,"low":3923.13,"netChangeRatio":0.8,"open":3945.09,"preClose":3935.63}},{"date":"20180213","kline":{"close":3935.63,"high":3986.98,"low":3925.6,"netChangeRatio":1.17,"open":3925.6,"preClose":3890.1}},{"date":"20180212","kline":{"close":3890.1,"high":3907.84,"low":3828.07,"netChangeRatio":1.29,"open":3846.27,"preClose":3840.65}},{"date":"20180209","kline":{"close":3840.65,"high":3911.29,"low":3759.15,"netChangeRatio":-4.27,"open":3896.17,"preClose":4012.05}},{"date":"20180208","kline":{"close":4012.05,"high":4071.67,"low":3974.68,"netChangeRatio":-0.95,"open":4022.88,"preClose":4050.5}},{"date":"20180207","kline":{"close":4050.5,"high":4212.57,"low":4048.42,"netChangeRatio":-2.37,"open":4205.74,"preClose":4148.89}},{"date":"20180206","kline":{"close":4148.89,"high":4211.52,"low":4131.56,"netChangeRatio":-2.93,"open":4182.33,"preClose":4274.15}},{"date":"20180205","kline":{"close":4274.15,"high":4274.15,"low":4200.14,"netChangeRatio":0.07,"open":4204.46,"preClose":4271.23}},{"date":"20180202","kline":{"close":4271.23,"high":4271.76,"low":4181.78,"netChangeRatio":0.6,"open":4213.94,"preClose":4245.9}},{"date":"20180201","kline":{"close":4245.9,"high":4287.39,"low":4214.29,"netChangeRatio":-0.7,"open":4276.34,"preClose":4275.9}},{"date":"20180131","kline":{"close":4275.9,"high":4287.86,"low":4232.77,"netChangeRatio":0.47,"open":4234.11,"preClose":4256.1}},{"date":"20180130","kline":{"close":4256.1,"high":4308.51,"low":4251.57,"netChangeRatio":-1.07,"open":4286.68,"preClose":4302.02}},{"date":"20180129","kline":{"close":4302.02,"high":4395.91,"low":4287.11,"netChangeRatio":-1.81,"open":4387.06,"preClose":4381.3}},{"date":"20180126","kline":{"close":4381.3,"high":4403.34,"low":4351.49,"netChangeRatio":0.37,"open":4352.22,"preClose":4365.08}},{"date":"20180125","kline":{"close":4365.08,"high":4392.2,"low":4336.24,"netChangeRatio":-0.57,"open":4381.98,"preClose":4389.89}},{"date":"20180124","kline":{"close":4389.89,"high":4397.82,"low":4349.09,"netChangeRatio":0.17,"open":4389.45,"preClose":4382.61}},{"date":"20180123","kline":{"close":4382.61,"high":4383.57,"low":4346.79,"netChangeRatio":1.06,"open":4346.89,"preClose":4336.6}},{"date":"20180122","kline":{"close":4336.6,"high":4338.48,"low":4275.9,"netChangeRatio":1.19,"open":4276.48,"preClose":4285.4}},{"date":"20180119","kline":{"close":4285.4,"high":4316.57,"low":4269.62,"netChangeRatio":0.33,"open":4281.94,"preClose":4271.42}},{"date":"20180118","kline":{"close":4271.42,"high":4292.64,"low":4246.68,"netChangeRatio":0.55,"open":4259.38,"preClose":4248.12}},{"date":"20180117","kline":{"close":4248.12,"high":4283.34,"low":4230.54,"netChangeRatio":-0.24,"open":4261.78,"preClose":4258.47}},{"date":"20180116","kline":{"close":4258.47,"high":4260.21,"low":4213.13,"netChangeRatio":0.79,"open":4215.62,"preClose":4225.24}},{"date":"20180115","kline":{"close":4225.24,"high":4262.93,"low":4216.36,"netChangeRatio":0.01,"open":4229.84,"preClose":4225}},{"date":"20180112","kline":{"close":4225,"high":4227.39,"low":4199.03,"netChangeRatio":0.46,"open":4205.14,"preClose":4205.59}},{"date":"20180111","kline":{"close":4205.59,"high":4211.8,"low":4181.96,"netChangeRatio":-0.05,"open":4197.11,"preClose":4207.81}},{"date":"20180110","kline":{"close":4207.81,"high":4211.05,"low":4175.14,"netChangeRatio":0.44,"open":4187.2,"preClose":4189.3}},{"date":"20180109","kline":{"close":4189.3,"high":4191.28,"low":4153.5,"netChangeRatio":0.7,"open":4157.54,"preClose":4160.16}},{"date":"20180108","kline":{"close":4160.16,"high":4166.32,"low":4127.31,"netChangeRatio":0.52,"open":4140.85,"preClose":4138.75}},{"date":"20180105","kline":{"close":4138.75,"high":4151.28,"low":4123.28,"netChangeRatio":0.24,"open":4133.34,"preClose":4128.81}},{"date":"20180104","kline":{"close":4128.81,"high":4137.64,"low":4105.89,"netChangeRatio":0.42,"open":4114.12,"preClose":4111.39}},{"date":"20180103","kline":{"close":4111.39,"high":4140.05,"low":4088.73,"netChangeRatio":0.59,"open":4091.46,"preClose":4087.4}},{"date":"20180102","kline":{"close":4087.4,"high":4087.78,"low":4045.21,"netChangeRatio":1.4,"open":4045.21,"preClose":4030.85}},{"date":"20171229","kline":{"close":4030.85,"high":4043.14,"low":4012.87,"netChangeRatio":0.3,"open":4022.88,"preClose":4018.9}},{"date":"20171228","kline":{"close":4018.9,"high":4036.7,"low":3980.24,"netChangeRatio":0.69,"open":3993,"preClose":3991.21}},{"date":"20171227","kline":{"close":3991.21,"high":4047.74,"low":3986.74,"netChangeRatio":-1.54,"open":4045.28,"preClose":4053.62}},{"date":"20171226","kline":{"close":4053.62,"high":4056.86,"low":4015.3,"netChangeRatio":0.3,"open":4040.62,"preClose":4041.54}},{"date":"20171225","kline":{"close":4041.54,"high":4086.93,"low":4026.45,"netChangeRatio":-0.32,"open":4057.42,"preClose":4054.6}},{"date":"20171222","kline":{"close":4054.6,"high":4076.8,"low":4048.49,"netChangeRatio":-0.33,"open":4064.91,"preClose":4067.85}},{"date":"20171221","kline":{"close":4067.85,"high":4080.78,"low":4014.65,"netChangeRatio":0.93,"open":4023.08,"preClose":4030.49}},{"date":"20171220","kline":{"close":4030.49,"high":4044.85,"low":4015.63,"netChangeRatio":-0.12,"open":4036.02,"preClose":4035.33}},{"date":"20171219","kline":{"close":4035.33,"high":4035.63,"low":3985.82,"netChangeRatio":1.26,"open":3985.82,"preClose":3985.29}},{"date":"20171218","kline":{"close":3985.29,"high":4008.07,"low":3967.93,"netChangeRatio":0.11,"open":3983.3,"preClose":3980.86}},{"date":"20171215","kline":{"close":3980.86,"high":4020.27,"low":3974.93,"netChangeRatio":-1.12,"open":4018.73,"preClose":4026.15}},{"date":"20171214","kline":{"close":4026.15,"high":4057.62,"low":4013.85,"netChangeRatio":-0.59,"open":4050.9,"preClose":4050.09}},{"date":"20171213","kline":{"close":4050.09,"high":4052.69,"low":4004.74,"netChangeRatio":0.85,"open":4013.83,"preClose":4016.02}},{"date":"20171212","kline":{"close":4016.02,"high":4070.15,"low":4015.45,"netChangeRatio":-1.31,"open":4068.51,"preClose":4069.5}},{"date":"20171211","kline":{"close":4069.5,"high":4069.5,"low":4005.27,"netChangeRatio":1.65,"open":4006.88,"preClose":4003.38}},{"date":"20171208","kline":{"close":4003.38,"high":4014.14,"low":3955.44,"netChangeRatio":0.81,"open":3962.83,"preClose":3971.06}},{"date":"20171207","kline":{"close":3971.06,"high":4017.95,"low":3955.99,"netChangeRatio":-1.11,"open":4003.58,"preClose":4015.82}},{"date":"20171206","kline":{"close":4015.82,"high":4031.75,"low":3964.81,"netChangeRatio":-0.6,"open":4027.12,"preClose":4040.17}},{"date":"20171205","kline":{"close":4040.17,"high":4045.93,"low":4006.54,"netChangeRatio":0.53,"open":4007.94,"preClose":4018.86}},{"date":"20171204","kline":{"close":4018.86,"high":4032.99,"low":3982.32,"netChangeRatio":0.52,"open":3989.05,"preClose":3989.05}}]}}
      )
    }
  }
]
