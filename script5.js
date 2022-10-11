document.addEventListener('DOMContentLoaded', function () {
    function calculate(){

        var count = document.getElementById("count").value;
        var cost = document.getElementById("cost").value;
        var calc = count * cost;
        var here = document.getElementById("calculate");
        console.log(calc);
        here.innerText = calc;
    }
   

    timerId = setInterval(calculate, 200);
});