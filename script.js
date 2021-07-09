function ratePer() {
    var rate = (parseFloat(document.getElementById("rate").value) * 100).toFixed(2);
    var rateNum = document.getElementById('rateNum')
    rateNum.innerHTML = rate + '%';
}

function compute() {
    var des = document.getElementById('description')
    var pricipal = document.getElementById('principal').value;
    var year = document.getElementById("year").value;
    var yearFuture = 2021 + parseInt(year);
    var rate = (parseFloat(document.getElementById("rate").value) * 100).toFixed(2);

    var result = parseInt(pricipal) * rate * parseInt(year) / 100;
    des.innerHTML = '<br> If you deposit <span class="ye">' + pricipal + '</span>, <br> at an interest rate of <span class="ye">' + rate + '%</span>. <br> You will receive an amount of <span class="ye">' + result + '</span>, <br> in the year <span class="ye">' + yearFuture + '</span>';
}
