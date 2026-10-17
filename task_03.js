const elementA      = document.getElementById("a")
const elementB      = document.getElementById("b")
const elementX      = document.getElementById("x")
const elementResult = document.getElementById("result")
const elementVerify = document.getElementById("verify")
const elementSend   = document.getElementById("send")

let check = false

function verify() {
    let a = parseFloat(elementA.value)
    let b = parseFloat(elementB.value)
    let x = parseFloat(elementX.value)

    if (isNaN(a) || isNaN(b) || isNaN(x)) {
        elementResult.value = "Введите числа a, b и X"
        check = false
        return false
    }

    check = x >= Math.min(a, b) && x <= Math.max(a, b)
    elementResult.value = check
        ? "X принадлежит заданному промежутку"
        : "X не принадлежит заданному промежутку"
    return true
}

function send() {
    if (!verify()) { alert("Заполните все числа"); return }
    document.getElementById("UserEnter").submit()
}


elementVerify.addEventListener('click', verify)
elementSend.addEventListener('click', send)