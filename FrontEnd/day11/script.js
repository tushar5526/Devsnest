const page = document.querySelector('.page')

const dummy_tmp = document.querySelector('.card');
const dummy = dummy_tmp.cloneNode(true)
dummy_tmp.classList.add('dummy');

fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple')
    .then(response => response.json())
    .then(data => renderQuestions(data));

function renderQuestions(data) {
    data.results.forEach((ele, i) => {
        const card = dummy.cloneNode(true);
        card.querySelector('.question').innerHTML = ele.question;
        const options = card.querySelector('.options');
        const dummyChoice = options.querySelector('.choice');
        options.textContent = '';



        ele.incorrect_answers.forEach((val) => {
            const choice = dummyChoice.cloneNode(true);
            choice.children[0].name = i;
            choice.innerHTML += val;
            choice.children[0].id = 'N';
            let id = parseInt(Math.random() * 79) % options.children.length;
            if (id === NaN)
                id = 0
            options.insertBefore(choice, options.children[id]);
        })

        const choice = dummyChoice.cloneNode(true);
        choice.children[0].name = i;
        choice.children[0].id = 'A';
        choice.innerHTML += ele.correct_answer;
        let id = parseInt(Math.random() * 79) % options.children.length;
        options.insertBefore(choice, options.children[id]);

        card.querySelector('.answer').textContent = `The correct answer is : ${ele.correct_answer}`
        page.appendChild(card);
    })

    const btn = document.createElement('button');
    btn.classList.add('submit');
    btn.textContent = 'Submit';
    btn.addEventListener('click', submit);
    page.appendChild(btn);
    dummy.classList.add('dummy');
}

function submit() {
    let submitted_ans = document.querySelectorAll('input:checked');
    submitted_ans.forEach(ele => {
        console.log(ele.id);
        if (ele.id === 'A')
            ele.parentNode.classList.add('right');
        else ele.parentNode.classList.add('wrong');
    })
    document.querySelectorAll('.answer').forEach(ele => {
        ele.classList.add('answer-show');
    })
}