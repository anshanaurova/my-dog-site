const change = document.getElementById("change");
change.addEventListener("click", change_all);

function change_all() {
    if (document.getElementsByTagName('div')[5].innerHTML.trim() === "Шанаурова") {
        document.getElementsByTagName('div')[5].innerHTML = "Shanaurova";
        document.getElementsByTagName('div')[6].innerHTML = "Anita";
        document.getElementsByTagName('div')[7].innerHTML = "Konstantinovna";
    }
    else {
        document.getElementsByTagName('div')[5].innerHTML = "Шанаурова";
        document.getElementsByTagName('div')[6].innerHTML = "Анита";
        document.getElementsByTagName('div')[7].innerHTML = "Константиновна";
    }
}
