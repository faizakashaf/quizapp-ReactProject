import { useState } from 'react';

export default function QuizScreen() {
 let  questionsArray = [
    {
      question : "Which CSS property is used to change the text color of an element?",
      options : ["font-color", "color", "text-color", "background-color"],
      correctAnswer : "color"
    },
    {
      question : "Which HTML tag is used to define an internal style sheet?",
      options : ["<style>", "<css>", "<script>", "<link>"],
      correctAnswer : "<style>"
    },
    {
      question : "How do you create a function in JavaScript?",
      options : ["function myFunction()", "function = myFunction()", "function:myFunction()", "create function myFunction()"],
      correctAnswer : "function myFunction()"
    },
    {
      question: "Which CSS property is used to change the background color of an element?",
      options: ["color", "bgcolor", "background-color", "background"],
      correctAnswer: "background-color"
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correctAnswer: "<ul>"
    }
  ]

const [currentIndex,setCurrentIndex] = useState(0)
const [marks,setMarks] = useState(0)

function questionDispaly(){
    questionsArray.map((x)=>{
return  setCurrentIndex(currentIndex+1)

})}

function checkCorrectAnswer(userSelectedAnswer, correctanswer){
if(userSelectedAnswer === correctanswer){
setMarks(marks + 1)
setCurrentIndex(currentIndex + 1)
}
if (currentIndex+ 1 === questionsArray.length){
alert(`Your total score is ${marks}`)
setCurrentIndex(0)
setMarks(0)
}
else{
    setCurrentIndex(currentIndex + 1)
}
}


  return  <> 
      <div className='text-center bg-success  p-2'>
<h1 className="display-6 fw-bold text-white">Quiz App</h1>
      </div>
      <div className="container d-flex flex-column align-items-center">
          <p className="mt-4 fs-4 text-dark">
      {currentIndex + 1}/6
        </p>

<h4 className="m-4">Que:{currentIndex+1} {questionsArray[currentIndex].question}</h4>
<div className="row w-50  p-2">
    {questionsArray[currentIndex].options.map((option,i)=>{
        return <button onClick={()=>checkCorrectAnswer(option,questionsArray[currentIndex].correctAnswer)} key={i} className="btn btn-secondary rounded-0 w-100 m-2 p-2 fs-5 rounded-3">{option}</button>
    })}
</div>
<div >
<button onClick={questionDispaly} className="btn btn-primary  fs-4 me-4 mt-3 text-center">Skip</button>
<button className='btn btn-success  fs-4 mt-3 text-center'>Score {marks}/6</button>
</div>
      </div>
  
  </>
}

