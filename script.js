function add() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function sub() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function mul() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function div() {
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);

    if (b == 0) {
        alert("Cannot divide by zero");
    }
    else {
        document.getElementById("result").innerHTML = "Result: " + (a / b);
    }
}