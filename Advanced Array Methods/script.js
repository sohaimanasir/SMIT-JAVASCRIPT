// ************* ADVANCED ARRAY *****************

// ==== 01: Reduce => 2 params (call back function(previous value, current value, current index, array)
//  and initial value) ====

const ratings = [9.0, 8.3, 7.9, 8.8, 7.6]

const total = ratings.reduce((acc, curr) => {
    return acc + curr
},0)

console.log(total);

const scores = [88, 92, 75, 95, 61, 84];

const sum = scores.reduce((acc, curr) => {
    return (acc + curr)
}, 0)

const avg = sum/scores.length

console.log(avg);
