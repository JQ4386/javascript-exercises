const sumAll = function(min, max) {
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }


    let counter = 0;

    for (let i = min; i <= max; i++) {
        counter += i;
    }

    return counter;

};

// Do not edit below this line
module.exports = sumAll;
