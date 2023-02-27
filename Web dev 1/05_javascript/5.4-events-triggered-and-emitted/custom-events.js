let btn = document.querySelector("#roll-button");

btn.addEventListener('click', function(){
        rollDice();
    });

document.addEventListener('rollDice', (e)=> {
    var varones = toNumber(parseInt(document.querySelector("#ones p").textContent));
    var vartwos = toNumber(parseInt(document.querySelector("#twos p").textContent));
    var varthrees = toNumber(parseInt(document.querySelector("#threes p").textContent));
    var varfours = toNumber(parseInt(document.querySelector("#fours p").textContent));
    var varfives = toNumber(parseInt(document.querySelector("#fives p").textContent));
    var varsixes = toNumber(parseInt(document.querySelector("#sixes p").textContent));
    var vartemplate = document.querySelector("#roll-button span").textContent;
    //    alert(e.detail.value);
    if (e.detail.value == 1){
        varones = varones + 1;
        vartemplate = "&#9856;";
        // alert("Var1:" + varones);
    }
    if (e.detail.value == 2){
        vartwos = vartwos + 1;
        vartemplate = "&#9857;";
    }
    if (e.detail.value == 3){
        varthrees = varthrees + 1;
        vartemplate = "&#9858;";
    }
    if (e.detail.value == 4){
        varfours = varfours + 1;
        vartemplate = "&#9859;";
    }
    if (e.detail.value == 5){
        varfives = varfives + 1;
        vartemplate = "&#9860;";
    }
    if (e.detail.value == 6){
        varsixes = varsixes + 1;
        vartemplate = "&#9861;";
    }
    total = varones + vartwos + varthrees + varfours + varfives +  varsixes;
 
document.querySelector("#ones p").textContent = varones;
document.querySelector("#twos p").textContent = vartwos;
document.querySelector("#threes p").textContent = varthrees;
document.querySelector("#fours p").textContent = varfours;
document.querySelector("#fives p").textContent = varfives;
document.querySelector("#sixes p").textContent = varsixes;
document.querySelector("#totals p span").textContent = total;
document.querySelector("#roll-button span").innerHTML = vartemplate;
 });

function toNumber(a) {
    return isNaN(a) ? 0 : a;
}



