function ratePer() {
    var rate = (parseFloat(document.getElementById("rate").value) * 100).toFixed(2);
    var rateNum = document.getElementById('rateNum')
    rateNum.innerHTML = rate + '%';
}

function compute() {
    var des = document.getElementById('description')
    var pricipal = parseInt(document.getElementById('principal').value);
    var year = parseInt(document.getElementById("year").value);
    var yearFuture = 2021 + year;
    var rate = (parseFloat(document.getElementById("rate").value) * 100).toFixed(2);
    if (validateForm() === true) {
        var result = pricipal * rate * year / 100;
        des.innerHTML = '<br> If you deposit <span class="ye">' + pricipal + '</span>, <br> at an interest rate of <span class="ye">' + rate + '%</span>. <br> You will receive an amount of <span class="ye">' + result + '</span>, <br> in the year <span class="ye">' + yearFuture + '</span>';
    }
}

function validateForm() {
    var pricipal = parseInt(document.getElementById('principal').value);
    var year = parseInt(document.getElementById("year").value);

    if (pricipal <= 0) {
        alert("Please input a positive number");
        document.getElementById('principal').focus();
        return false;
    }

    if (!pricipal) {
        alert("Please input a positive number");
        document.getElementById('principal').focus();
        return false;
    }

    if (!year) {
        alert("Please choose how many years");
        document.getElementById('year').focus();
        return false;
    }

    return true;
}