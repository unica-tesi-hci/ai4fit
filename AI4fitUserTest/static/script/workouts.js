const workouts = [
    [
        {
            o_distance: 24000,
            o_time: 32920,
            o_pace: 15400,
            d_distance: 150,
            d_time: 209.348,
            d_pace_mean: 0.0882353,
            d_pace_std: 0.283637,
            d_pace_var: 0.0804498,
            r_distance: 200.201,
            r_speed: 0.108451,
            r_time: 195.46,
            r_pace: 28.7152,
            p_running: 0.411765,
            p_walking: 0.529412,
            p_unknown: 0.0294118,
            p_welldone: 0,
            p_has_objective: 0.970588,
            age: 37,
            height: 175,
            weight: 70,
            gender: 1,
            bmi: 22.8571,
            weight_situation: 4,
            calories: 1
        },
        {
            o_distance: 0,
            o_time: 12480,
            o_pace: 0,
            d_distance: 0,
            d_time: 134.134,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 2392.34,
            r_speed: 0.219764,
            r_time: 1119.7,
            r_pace: 13.3724,
            p_running: 0.914286,
            p_walking: 0,
            p_unknown: 0.0285714,
            p_welldone: 0,
            p_has_objective: 0.971429,
            age: 33,
            height: 162,
            weight: 51,
            gender: 0,
            bmi: 19.433,
            weight_situation: 4,
            calories: 27
        },
        {
            o_distance: 0,
            o_time: 14160,
            o_pace: 0,
            d_distance: 0,
            d_time: 144.04,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 4577.4,
            r_speed: 0.228155,
            r_time: 1900.68,
            r_pace: 10.9271,
            p_running: 0.447368,
            p_walking: 0.473684,
            p_unknown: 0.0263158,
            p_welldone: 0,
            p_has_objective: 0.973684,
            age: 33,
            height: 162,
            weight: 51,
            gender: 0,
            bmi: 19.433,
            weight_situation: 4,
            calories: 53
        }
    ],
    [
        {
            o_distance: 0,
            o_time: 27090,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 40157.9,
            r_speed: 5.23293,
            r_time: 27317.3,
            r_pace: 1274.91,
            p_running: 0,
            p_walking: 0.581395,
            p_unknown: 0.0232558,
            p_welldone: 1,
            p_has_objective: 0.976744,
            age: 40,
            height: 158,
            weight: 68,
            gender: 0,
            bmi: 27.2392,
            weight_situation: 5,
            calories: 351
        },
        {
            o_distance: 0,
            o_time: 21780,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 26756.4,
            r_speed: 4.48056,
            r_time: 21805.2,
            r_pace: 7458.17,
            p_running: 0,
            p_walking: 0.581395,
            p_unknown: 0.0232558,
            p_welldone: 1,
            p_has_objective: 0.976744,
            age: 51,
            height: 163,
            weight: 73,
            gender: 0,
            bmi: 27.4756,
            weight_situation: 5,
            calories: 293
        },
        {
            o_distance: 0,
            o_time: 25620,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 33314.7,
            r_speed: 4.0661,
            r_time: 25720,
            r_pace: 4993.73,
            p_running: 0,
            p_walking: 0.55,
            p_unknown: 0.05,
            p_welldone: 1,
            p_has_objective: 0.95,
            age: 40,
            height: 158,
            weight: 68,
            gender: 0,
            bmi: 27.2392,
            weight_situation: 5,
            calories: 291
        }
    ],
    [
        {
            o_distance: 0,
            o_time: 3540,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 7509.34,
            r_speed: 6.42012,
            r_time: 4095.48,
            r_pace: 578.65,
            p_running: 0.357143,
            p_walking: 0.428571,
            p_unknown: 0.0714286,
            p_welldone: 1,
            p_has_objective: 0.928571,
            age: 33,
            height: 152,
            weight: 48.5,
            gender: 0,
            bmi: 20.992,
            weight_situation: 4,
            calories: 328
        },
        {
            o_distance: 0,
            o_time: 3840,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 7004.06,
            r_speed: 6.5897,
            r_time: 4082.53,
            r_pace: 615.601,
            p_running: 0.375,
            p_walking: 0.4375,
            p_unknown: 0.0625,
            p_welldone: 1,
            p_has_objective: 0.9375,
            age: 33,
            height: 152,
            weight: 48.5,
            gender: 0,
            bmi: 20.992,
            weight_situation: 4,
            calories: 306
        },
        {
            o_distance: 0,
            o_time: 4080,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 7614.01,
            r_speed: 6.59581,
            r_time: 4113.63,
            r_pace: 571.871,
            p_running: 0.375,
            p_walking: 0.4375,
            p_unknown: 0.0625,
            p_welldone: 1,
            p_has_objective: 0.9375,
            age: 33,
            height: 152,
            weight: 48.5,
            gender: 0,
            bmi: 20.992,
            weight_situation: 4,
            calories: 332
        }
    ],
    [
        {
            o_distance: 30000,
            o_time: 10500,
            o_pace: 7650,
            d_distance: -0.161419,
            d_time: 1.97315,
            d_pace_mean: 0.0415689,
            d_pace_std: 0.0448374,
            d_pace_var: 0.00201039,
            r_distance: 34746.2,
            r_speed: 11.4861,
            r_time: 10120,
            r_pace: 371.963,
            p_running: 0.545455,
            p_walking: 0.363636,
            p_unknown: 0.0909091,
            p_welldone: 0.1,
            p_has_objective: 0.909091,
            age: 44,
            height: 184,
            weight: 80,
            gender: 1,
            bmi: 23.6295,
            weight_situation: 4,
            calories: 472
        },
        {
            o_distance: 0,
            o_time: 21120,
            o_pace: 0,
            d_distance: 0,
            d_time: 0,
            d_pace_mean: 0,
            d_pace_std: 0,
            d_pace_var: 0,
            r_distance: 35119.4,
            r_speed: 5.65622,
            r_time: 21296,
            r_pace: 590.385,
            p_running: 0,
            p_walking: 0.833333,
            p_unknown: 0.0555556,
            p_welldone: 1,
            p_has_objective: 0.944444,
            age: 41,
            height: 170,
            weight: 70,
            gender: 0,
            bmi: 24.2215,
            weight_situation: 4,
            calories: 105
        },
        {
            o_distance: 6000,
            o_time: 10194,
            o_pace: 6708,
            d_distance: -0.0619292,
            d_time: 1.3101,
            d_pace_mean: 0.0162244,
            d_pace_std: 0.0458685,
            d_pace_var: 0.00210392,
            r_distance: 17031.4,
            r_speed: 6.0921,
            r_time: 9888,
            r_pace: 607.825,
            p_running: 0,
            p_walking: 0.857143,
            p_unknown: 0.0357143,
            p_welldone: 0.851852,
            p_has_objective: 0.964286,
            age: 49,
            height: 169,
            weight: 70,
            gender: 0,
            bmi: 24.5089,
            weight_situation: 4,
            calories: 181
        }
    ],
    [
        {
            o_distance: 40000,
            o_time: 13600,
            o_pace: 1700,
            d_distance: -0.000515562,
            d_time: 0.102941,
            d_pace_mean: 0.0103446,
            d_pace_std: 0.0103446,
            d_pace_var: 0.000107011,
            r_distance: 40052.9,
            r_speed: 11.2625,
            r_time: 13335,
            r_pace: 320.157,
            p_running: 0.5,
            p_walking: 0,
            p_unknown: 0.5,
            p_welldone: 0,
            p_has_objective: 0.5,
            age: 54,
            height: 175,
            weight: 86,
            gender: 1,
            bmi: 28.0816,
            weight_situation: 5,
            calories: 620
        },
        {
            o_distance: 7000,
            o_time: 2560,
            o_pace: 760,
            d_distance: 0,
            d_time: 0.0522992,
            d_pace_mean: 0.0174331,
            d_pace_std: 0.0131288,
            d_pace_var: 0.000172364,
            r_distance: 7014.2,
            r_speed: 11.6189,
            r_time: 2506.13,
            r_pace: 324.803,
            p_running: 0.666667,
            p_walking: 0,
            p_unknown: 0.333333,
            p_welldone: 0,
            p_has_objective: 0.666667,
            age: 28,
            height: 168,
            weight: 72,
            gender: 1,
            bmi: 25.5102,
            weight_situation: 5,
            calories: 455
        },
        {
            o_distance: 16200,
            o_time: 7533,
            o_pace: 4860,
            d_distance: -0.045075,
            d_time: -0.248738,
            d_pace_mean: 0.00988729,
            d_pace_std: 0.0593212,
            d_pace_var: 0.003519,
            r_distance: 18381.4,
            r_speed: 7.42518,
            r_time: 7599,
            r_pace: 526.287,
            p_running: 0.6,
            p_walking: 0.3,
            p_unknown: 0.1,
            p_welldone: 0.222222,
            p_has_objective: 0.9,
            age: 41,
            height: 177,
            weight: 78,
            gender: 1,
            bmi: 24.8971,
            weight_situation: 4,
            calories: 424
        }
    ]
];

var workoutsDescription = [
    "This workout starts with 3 warm-up walking activites of 300 seconds. Then it alternates a running activity with target distance of 50 meters and a walking activity with target time of 80 seconds for 13 repetitions. It finishes with warm-down made of a walking activity of 300 seconds and a rest activity of 300 seconds.",
    "This workout starts with 2 running activities of 600 and 480 seconds and 120 seconds of rest. Then we have 30 running activities with a target time of 60 seconds . It finishes with warm-down made of a resting activity of 120 seconds.",
    "This workout starts with a walking activity of 480 seconds and 120 seconds of rest. Then we have 2 repetitions of 360 seconds of running followed by 120 seconds of walking. After that we have 15 repetitions of 60 seconds of running followed by 60 seconds of walking. It finishes with 180 seconds of rest.",
    "This workout starts with a walking activity of 480 seconds and 120 seconds of rest. Then we have 4 repetitions of this set of activities: 120 seconds of walk, 60 seconds of walk and 30 seconds of rest, all aof them for 3 times followed by another 30 seconds rest.",
    "This workout starts with a walking activity of 600 seconds and 120 seconds of rest. Then we have 4 repetitions of this set of activities: 150 seconds of walk, 60 seconds of walk and 30 seconds of rest, all of them for 3 times followed by another 30 seconds rest.",
    "This workout starts with a walking activity of 600 seconds and 120 seconds of rest. Then we have 5 repetitions of this set of activities: 300 seconds of walk, 180 seconds of walk and 60 seconds of rest. At the end of the 3rd and the 5th repetition, we have 120 seconds of rest.",
    "This workout starts with a walking activity of 720 seconds and 240 seconds of rest. Then we have 5 repetitions of 360 seconds of running followed by 120 seconds of walking. It finishes with 180 seconds of rest.",
    "This workout starts with a walking activity of 600 seconds and 180 seconds of rest. Then we have 6 repetitions of 240 seconds of running followed by 240 seconds of walking. It finishes with 180 seconds of rest.",
    "This workout starts with a walking activity of 480 seconds and 180 seconds of rest. Then we have 6 repetitions of 300 seconds of running followed by 240 seconds of walking. It finishes with 180 seconds of rest.",
    "This workout starts with a running activity of 600 seconds. Then we have 4 repetitions of 120 seconds of running followed by 120 seconds of walking. It finishes with 540 seconds of running.",
    "This workout starts with a walking activity of 480 seconds and 120 seconds of rest. Then we have 3 repetitions of 90 seconds of walking followed by 30 seconds of walking, followed by 4 repetitions of 120 seconds of walking followed by 60 seconds of walking. It finishes with 240 seconds of rest.",
    "This workout starts with a walking activity of 600 seconds and 120 seconds of rest. Then we have 2 repetitions of 279 seconds of walking followed by 120 seconds of walking, followed by a section with 280 + 120 + 280 seconds of walking, which continues with a rest of 120 seconds. Then we have 16 repetitions of 60 seconds of walking. It finishes with 120 seconds of rest.",
    "This workout consists of 2720 seconds of running",
    "This workout consists of 400 seconds of running followed by 2160 of running",
    "This workout starts with a walking activity of 60 seconds and 60 seconds of running. Then we have a section with 30 seconds of walking, 120 seconds of running and 30 seconds of walking, followed by a section with 315 + 1260 + 312 seconds of running. It finishes with 324 seconds of running."
];

/*
var workoutSummary = [
    "Time type objective activities: 54,5% <br>" +
    "Distance type objective activities: 36,4% <br>" +
    "Distance-Time(Pace) type objective activities: 9,1%",

    "Time type objective activities: 100% <br>" +
    "Distance type objective activities: 0% <br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100% <br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 40%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 60%",

    "Time type objective activities: 100%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 0%",

    "Time type objective activities: 85.1%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 14.9%",

    "Time type objective activities: 0%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 100%",

    "Time type objective activities: 0%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 100%",

    "Time type objective activities: 56%<br>" +
    "Distance type objective activities: 0%<br>" +
    "Distance-Time(Pace) type objective activities: 44%"
];
 */

var workoutSummary = [
    "Time: 54,5% <br>" +
    "Distance: 36,4% <br>" +
    "Distance-Time(Pace): 9,1%",

    "Time: 100% <br>" +
    "Distance: 0% <br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100% <br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 40%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 60%",

    "Time: 100%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 0%",

    "Time: 85.1%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 14.9%",

    "Time: 0%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 100%",

    "Time: 0%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 100%",

    "Time: 56%<br>" +
    "Distance: 0%<br>" +
    "Distance-Time(Pace): 44%"
];

var workout_unit = {
    o_distance: "m",
    p_unknown: "%",
    p_walking: "%",
    p_running: "%",
    r_time: "s",
    r_speed: "m/s",
    r_distance: "m",
    r_pace: "mm:ss/km", //??
    o_pace: "mm:ss/km", //??
    o_time: "s",
    p_welldone: "%",
    weight_situation: "", //?
    age: -0.0842126,
    height: "cm",
    weight: "kg",
    gender: 0,
    bmi: 19.9792,
    calories: -0.126402,
    p_has_objective: 0.0541757,
    d_pace_std: -0.000662894,
    d_pace_mean: 0.000461261,
    d_time: "%",
    d_distance: "%",
    d_pace_var: "%"
};


var workoutOrdinato = {
    o_distance: -0.057846,
    p_unknown: -0.0541757,
    p_walking: 0.114791,
    p_running: -0.392162,
    r_time: 0.00832845,
    r_speed: -0.00843242,
    r_distance: 0.112499,
    r_pace: -0.00181375,
    o_pace: -0.0248329,
    o_time: 0.013441,
    p_welldone: 0.505893,
    weight_situation: 4,
    age: -0.0842126,
    height: -0.26717,
    weight: -0.286194,
    gender: 0,
    bmi: 19.9792,
    calories: -0.126402,
    p_has_objective: 0.0541757,
    d_pace_std: -0.000662894,
    d_pace_mean: 0.000461261,
    d_time: -0.0103111,
    d_distance: -0.0126414,
    d_pace_var: -0.000636324
};