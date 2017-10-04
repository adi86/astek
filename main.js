
var activeModules = [
    { name: 'module 1' },
    { name: 'module 2' },
    { name: 'module 11' },
    { name: 'module 30' },
    { name: 'module 10' }
];

var getMaxModule = function () {
    var max = 0;
    for (let i = 0, len = activeModules.length; i < len; i++) {
        let num = parseInt(activeModules[i].name.replace(/[^0-9\.]/g, ''), 10);
        if (!isNaN(num) && num > max) {
            max = num;
        }
    }
    return max;
};

console.log(getMaxModule());