let btn_start = document.querySelector(".btn-start")
let start_page = document.querySelector('.start-page')
let btn_ans = document.querySelectorAll('button')
let bord = document.querySelector('.bord')
let exemple = document.querySelector('.exemple')
let end_page = document.querySelector(".end-page")
let count_ans_tag = document.querySelector(".count_ans_tag")
let questions = document.querySelector('.questions')
let count_question = document.querySelector('.count-question')
let game = true
let count_answer = 0
let ans_true = 0
let question_counter = 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr_znc = ['+', '-', '*', '/']
var examples = [];
function renber() {
    exemple.textContent = examples[0][0]
    ans_true = examples[0][1]
    let new_examples = examples[0].slice(1, 6)
    new_examples = new_examples.sort(() => Math.random() - 0.5);
    btn_ans[0].textContent = new_examples[0]
    btn_ans[1].textContent = new_examples[1]
    btn_ans[2].textContent = new_examples[2]
    btn_ans[3].textContent = new_examples[3]
    btn_ans[4].textContent = new_examples[4]
    examples.shift()
}
for (const btn of btn_ans) {
    btn.addEventListener('click', function () {
        if (game === true) {
            if (btn.textContent === ans_true.toString()) {
                console.log('Да')
                count_answer++
            } else {
                console.log('Нет')
            }
            question_counter++
            console.log(question_counter);
        } else {
            count_question.textContent = questions.value
            count_ans_tag.textContent = count_answer
            bord.style.display = "none"
            end_page.style.display = "inline"
        }
        renber()
        if (examples.length === 0) {
            game = false
        }
    })
}
btn_ans = Array.from(btn_ans)
btn_start.addEventListener("click", function () {
    for (let i = 0; i < questions.value; i++) {
        const a = getRandomInt(1, 20);
        const b = getRandomInt(1, 20);
        let ran_znc = arr_znc[getRandomInt(0, 3)]
        let prim = a + ran_znc + b
        let tru = ""
        if (ran_znc === "+") {
            tru = a + b
        } else if (ran_znc === "-") {
            tru = a - b
        } else if (ran_znc === "*") {
            tru = a * b
        } else if (ran_znc === "/") {
            tru = a / b
            tru = Math.round(tru * 100) / 100
        }
        let c = []
        c.push(prim)
        c.push(tru)
        for (let i = 0; i < 4; i++) {
            let random_numder = getRandomInt(tru - 20, tru + 20)
            while (random_numder === tru) {
                random_numder = getRandomInt(tru - 20, tru + 20)
            }
            c.push(random_numder)
        }
        examples.push(c)
    }
    console.log(examples);
    renber()
    btn_start.style.display = "none"
    start_page.style.display = "none"
    bord.style.display = "inline"
})
