function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}
function divide(num1, num2) {
    return num1/num2;
}


function getAndCalculate(e) {
    e.preventDefault();
    let ans = [];
    ans.push(parseInt(document.getElementById("num1").value));
    ans.push(parseInt(document.getElementById("num2").value));
    const operation = document.querySelector("input[name='operation']:checked").value;

    if(operation==="add") {
        ans.push(add(ans[0], ans[1]));
    } else if(operation==="subtract") {
        ans.push(subtract(ans[0], ans[1]));
    } else if(operation==="multiply") {
        ans.push(multiply(ans[0], ans[1]));
    } else {
        ans.push(divide(ans[0], ans[1]));
    }

    return ans;
}

function displayAnsAndHistory(history) {
    let num1 = history[history.length-1][0];
    let num2 = history[history.length-1][1];
    let ans = history[history.length-1][2];
    document.getElementById("ans").innerText = num1 + " " + num2 + " " + ans;
}


window.addEventListener("load", function(){
    let history = [];
    document.querySelector("form").addEventListener("submit", function(e) {
        const ans = getAndCalculate(e);
        history.push(ans);
        displayAnsAndHistory(history);
    });
});