// alert("connected!")
const div1 = Array.from(document.getElementById("div1").children)
const div2 = Array.from(document.getElementById("div2").children)
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const h1s = document.querySelectorAll("h1")

button1.addEventListener("click", function(){updateText("div3", h1s)})

button2.addEventListener("click", function(){updateText("div4", div1)})

button3.addEventListener("click", function () { updateText("div5", div2) })

// document.getElementById("div3").innerHTML 

function updateText(target, variable) {
    document.getElementById(target).innerHTML = change(variable);
}

function change(variable) {
    count = 0
    for (var i = 0; i<variable.length; i++) {
        variable[i].classList.toggle("green");
        count++
    }
    if (variable == h1s) {
        return `<p>there are ${count} h1s on this page!</p>`
    } else if (variable == div1) {
        return `<p>there are ${count} h1s in div 1 on this page!</p>`
    } else {
        return `<p>there are ${count} h1s in div 2 on this page!</p>`
    }
}