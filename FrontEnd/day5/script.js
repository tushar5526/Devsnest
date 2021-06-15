document.addEventListener("DOMContentLoaded", function (event) {
    let tmp = document.querySelectorAll('.cbtn')
    console.log(tmp);
    tmp.forEach((item) => {
        item.addEventListener('click', function () {
            updateValue(item.textContent);
        });
    });
});


function updateValue(p) {
    let val = document.querySelector('.display').innerHTML;

    if (p === "=") {
        val = eval(val);
        document.querySelector('.display').textContent = val;
        return;
    } else if (p === "C") {
        val = "";
        document.querySelector('.display').textContent = val;
        return;
    }
    document.querySelector('.display').textContent = val + p;
}