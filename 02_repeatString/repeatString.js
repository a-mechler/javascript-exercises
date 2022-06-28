const repeatString = function(String, Num) {
    let reString = '';
    if (Num < 0) return 'ERROR';
    for (i = 0; i < Num; i++){
        reString += String;
    }
    return reString;
};

// Do not edit below this line
module.exports = repeatString;
