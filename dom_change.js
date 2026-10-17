const node_for_click_all  = document.getElementById('change_all')
const node_for_click_back = document.getElementById('change_back')

function toLatin() {
    const fio    = document.getElementsByTagName('div')[5]
    const name   = document.getElementsByTagName('div')[6]
    const s_name = document.getElementsByTagName('div')[7]

    if (fio.innerHTML.trim() !== "Шанаурова") return
    fio.innerHTML    = "Shanaurova"
    name.innerHTML   = "Anita"
    s_name.innerHTML = "Konstantinovna"
}

function toCyrillic() {
    const fio    = document.getElementsByTagName('div')[5]
    const name   = document.getElementsByTagName('div')[6]
    const s_name = document.getElementsByTagName('div')[7]

    if (fio.innerHTML.trim() !== "Shanaurova") return
    fio.innerHTML    = "Шанаурова"
    name.innerHTML   = "Анита"
    s_name.innerHTML = "Константиновна"
}

node_for_click_all.addEventListener('click', toLatin)
node_for_click_back.addEventListener('click', toCyrillic)