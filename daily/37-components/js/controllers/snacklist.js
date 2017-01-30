
module.exports = {
    name: 'SnackListController',
    func: function ($scope) {
        $scope.snacks = [
            { name: 'Capn Crunch Berries', count: 8, price: 4.59 },
            { name: 'Golden Grahams', count: 0, price: 3.19 },
            { name: 'Golden Oreos', count: 13, price: 2.18 },
        ];

        $scope.buy = function (what) {
            console.log(`Buying ${what.name}`);
            if (what.count > 0) {
                what.count--;
            }
        };
    },
};