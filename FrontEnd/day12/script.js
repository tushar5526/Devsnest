const textarea = document.querySelector('.add-task').children[0];
const todo = document.querySelector('.todo');
const tmptaskDummy = document.querySelector('.task');
const taskDummy = tmptaskDummy.cloneNode(true);
tmptaskDummy.style.display = "none";

const addMoreButton = document.querySelector('.add-more');
addMoreButton.addEventListener('click', addTask);


function addTask() {
    const task = taskDummy.cloneNode(true);
    const text = task.querySelector('.text');
    const deletTaskButton = task.querySelector('.delete-task');
    text.innerHTML = textarea.value;
    task.children[0].addEventListener('change', function () {
        toggleTask(text, this.checked)
    });
    textarea.value = '';
    deletTaskButton.addEventListener('click', () => {
        task.style.display = "none";
    })
    todo.appendChild(task);
}

function toggleTask(text, checked) {
    let html = text.textContent;
    if (checked)
        text.innerHTML = `<strike>${html}<strike>`;
    else
        text.innerHTML = html;
}