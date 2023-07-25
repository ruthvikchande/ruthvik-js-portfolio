const question = [
  {
    gue: "which of the folowing is markup language",
    a: "html",
    b: "css",
    c: "javascript",
    d: "php",
    correct: "a",
  },
  {
    gue: "which of the folowing is styling language",
    a: "html",
    b: "css",
    c: "javascript",
    d: "php",
    correct: "b",
  },
  {
    gue: "which of the folowing is backend language",
    a: "html",
    b: "css",
    c: "javascript",
    d: "php",
    correct: "d",
  },
  {
    gue: "how to make the button responsive whith which language",
    a: "html",
    b: "css",
    c: "javascript",
    d: "php",
    correct: "c",
  },
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const quebox = document.getElementById("quebox");
const optioninput = document.querySelectorAll(".options");
const loadquestion = () => {
    if(index === total){
        return endquiz();
    }
    reset()
  const data = question[index];
  console.log(data);

  quebox.innerText = ` ${index + 1} ${data.gue}`;
  optioninput[0].nextElementSibling.innerText = data.a;
  optioninput[1].nextElementSibling.innerText = data.b;
  optioninput[2].nextElementSibling.innerText = data.c;
  optioninput[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
  const data = question[index];
  const ans = getanswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return;
};

const getanswer = () => {
    let answer;
  optioninput.forEach((input) => {
    if (input.checked) {
      answer=input.value;
    }
  });
  return answer;
};

const reset=()=>{
    optioninput.forEach((input) => {
        input.checked==false;
        }
      );
}

const endquiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>thank you playing</h3> 
    <h2>${right} / ${total} are correct</h2>`
}
loadquestion();
