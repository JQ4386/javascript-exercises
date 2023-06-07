const repeatString = function(str, repetitions) {
    if (repetitions < 0) {
        return "ERROR"
    } 
    return str.repeat(repetitions);
};

// Do not edit below this line
module.exports = repeatString;
