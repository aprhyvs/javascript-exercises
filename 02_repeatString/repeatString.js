let result = ""

//expect(repeatString        ('hey', 3)).toEqual('heyheyhey');
const repeatString = function(string, num) {
    for (let i = 0; i < num; i++){
        result += string
    } return result
};

// Do not edit below this line
module.exports = repeatString;
