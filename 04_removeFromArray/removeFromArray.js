const removeFromArray = function(lst, ...args) {
    return lst.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
