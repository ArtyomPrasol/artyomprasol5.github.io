function falseD() {
    alert("Incorrect data");
}
function correct() {
    alert("Correct data");
}

function click1() {
    var f1 = Number(document.getElementById("price").value);
    var f2 = Number(document.getElementById("count").value);
    if (f1 < 0 || f2 < 0) falseD();
    else {
        var r = document.getElementById("result");
        r.innerHTML = "Price for all: " + f1 * f2;
        correct();
    }
    return false;
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener('click', click1);
})
