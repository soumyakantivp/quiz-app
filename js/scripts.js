/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/


const quizArray = [
    {
        id: "0",
        question: "In the last month, how often have you been upset because of something that happened unexpectedly?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "1",
        question: "In the last month, how often have you felt that you were unable to control the important things in your life?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "In the last month, how often have you felt nervous and stressed?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "3",
        question: "In the last month, how often have you felt confident about your ability to handle your personal problems?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "4",
        question: "In the last month, how often have you felt that things were going your way?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "In the last month, how often have you found that you could not cope with all the things that you had to do?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    }, 
    {
        id: "6",
        question: "In the last month, how often have you been able to control irritations in your life?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "7",
        question: "In the last month, how often have you felt that you were on top of things?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "8",
        question: "In the last month, how often have you been angered because of things that happened that were outside of your control?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
    {
        id: "9",
        question: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
        options: ["never", "almost never", "sometimes", "fairly often", "very often"],
    },
];

function calc(){
    /*
    var q1a = document.querySelector('input[name = "question-1-answers"]:checked').value;
    console.log(q1a);
    var q2a = document.querySelector('input[name = "question-2-answers"]:checked').value;
    console.log(q2a);
    var q3a = document.querySelector('input[name = "question-3-answers"]:checked').value;
    console.log(q3a);

    var q4a = document.querySelector('input[name = "question-4-answers"]:checked').value; //
    console.log(q4a);
    var q5a = document.querySelector('input[name = "question-5-answers"]:checked').value; //
    console.log(q5a);
    var q6a = document.querySelector('input[name = "question-6-answers"]:checked').value;
    console.log(q6a);

    var q7a = document.querySelector('input[name = "question-7-answers"]:checked').value; //
    console.log(q7a);
    var q8a = document.querySelector('input[name = "question-8-answers"]:checked').value; //
    console.log(q8a);
    var q9a = document.querySelector('input[name = "question-9-answers"]:checked').value;
    console.log(q9a);
    var q10a = document.querySelector('input[name = "question-10-answers"]:checked').value;
    console.log(q10a);

    //calculate pss score
    var q1_score;
    if(q1a === "A") q1_score=0
    if(q1a === "B") q1_score=1
    if(q1a === "C") q1_score=2
    if(q1a === "D") q1_score=3
    if(q1a === "E") q1_score=4

    var q2_score;
    if(q2a === "A") q2_score=0
    if(q2a === "B") q2_score=1
    if(q2a === "C") q2_score=2
    if(q2a === "D") q2_score=3
    if(q2a === "E") q2_score=4

    var q3_score;
    if(q3a === "A") q3_score=0
    if(q3a === "B") q3_score=1
    if(q3a === "C") q3_score=2
    if(q3a === "D") q3_score=3
    if(q3a === "E") q3_score=4

    var q4_score;
    if(q4a === "A") q4_score=4
    if(q4a === "B") q4_score=3
    if(q4a === "C") q4_score=2
    if(q4a === "D") q4_score=1
    if(q4a === "E") q4_score=0

    var q5_score;
    if(q5a === "A") q5_score=4
    if(q5a === "B") q5_score=3
    if(q5a === "C") q5_score=2
    if(q5a === "D") q5_score=1
    if(q5a === "E") q5_score=0

    var q6_score;
    if(q6a === "A") q6_score=0
    if(q6a === "B") q6_score=1
    if(q6a === "C") q6_score=2
    if(q6a === "D") q6_score=3
    if(q6a === "E") q6_score=4

    var q7_score;
    if(q7a === "A") q7_score=4
    if(q7a === "B") q7_score=3
    if(q7a === "C") q7_score=2
    if(q7a === "D") q7_score=1
    if(q7a === "E") q7_score=0

    var q8_score;
    if(q8a === "A") q8_score=4
    if(q8a === "B") q8_score=3
    if(q8a === "C") q8_score=2
    if(q8a === "D") q8_score=1
    if(q8a === "E") q8_score=0

    var q9_score;
    if(q9a === "A") q9_score=0
    if(q9a === "B") q9_score=1
    if(q9a === "C") q9_score=2
    if(q9a === "D") q9_score=3
    if(q9a === "E") q9_score=4

    var q10_score;
    if(q10a === "A") q10_score=0
    if(q10a === "B") q10_score=1
    if(q10a === "C") q10_score=2
    if(q10a === "D") q10_score=3
    if(q10a === "E") q10_score=4

    var pss_score = q1_score + q2_score + q3_score
    +q4_score +q5_score +q6_score +q7_score + 
    +q8_score +q9_score +q10_score;

    console.log(pss_score);
*/
    //calculate profiling score
    var q2a = document.querySelector('input[name = "question-2-response"]:checked').value;
    console.log(q2a);
    var q3a = document.querySelector('input[name = "question-3-response"]:checked').value;
    console.log(q3a);

    var q4a = document.querySelector('input[name = "question-4-response"]:checked').value; //
    console.log(q4a);
    var q5a = document.querySelector('input[name = "question-5-response"]:checked').value; //
    console.log(q5a);
    var q6a = document.querySelector('input[name = "question-6-response"]:checked').value;
    console.log(q6a);

    var q7a = document.querySelector('input[name = "question-7-response"]:checked').value; //
    console.log(q7a);
    var q8a = document.querySelector('input[name = "question-8-response"]:checked').value; //
    console.log(q8a);
    var q9a = document.querySelector('input[name = "question-9-response"]:checked').value;
    console.log(q9a);
    var q10a = document.querySelector('input[name = "question-10-response"]:checked').value;
    console.log(q10a);
    var q11a = document.querySelector('input[name = "question-11-response"]:checked').value;
    console.log(q11a);
    var q12a = document.querySelector('input[name = "question-12-response"]:checked').value;
    console.log(q12a);
    var q13a = document.querySelector('input[name = "question-13-response"]:checked').value;
    console.log(q13a);

    var profile_score =Number(q2a )+ Number(q3a
        )+Number(q4a )+Number(q5a )+Number(q6a )+Number(q7a )+ 
        +Number(q8a )+Number(q9a )+Number(q10a )+Number(q11a)+Number(q12a )+Number(q13a);

    console.log(profile_score)
}



