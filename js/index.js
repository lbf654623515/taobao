var f = (
    function f() {
        return 1;
    },
        function () {
            return '2';
        }
)();
console.log(typeof f);