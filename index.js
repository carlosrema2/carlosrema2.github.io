
var defaultThemeColors = Survey
.StylesManager
.ThemeColors["default"];
defaultThemeColors["$main-color"] = "#652f80";
defaultThemeColors["$main-hover-color"] = "#2e55f2";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#652f80";

defaultThemeColors["$header-background-color"] = "#CFD3D1";
defaultThemeColors["$body-container-background-color"] = "#A7B2AB";

Survey
    .StylesManager
    .applyTheme();
 

var quiz = {
    title: "Java Script Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10, //Seconds for question
    maxTimeToFinish: 30, //Seconds for Quiz
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start a quiz qbout basics of JavaScript. <br/>You have 10 seconds for every page and 30 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "JSQuestion1",
                    title: "Which of the following is true about typeof operator in JavaScript?",
                    choices: [
                        "The typeof is a unary operator that is placed before its single operand which can be of any type", 
                        "Its value is a string indicating the data type of the operand", "Both of the above", "None of the above"
                    ],
                    correctAnswer: "Its value is a string indicating the data type of the operand"
                    
                   }
            ]
           
        }, 
        
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "JSQuestion2",
                    title: "Which of the following type of variable takes precedence over other if names are same?",
                    choices: [
                        "Global variable", "Local variable", "Both of the above", "None of the above."],
                    correctAnswer: "Local variable"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "JSQuestion3",
                    title: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
                    choices: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
                    correctAnswer: "charCodeAt()"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "JSQuestion4",
                    title: "Which of the following function of Array object joins all elements of an array into a string?",
                    choices: ["charAt()", "charCodeAt()", "concat()", "join()"],
                    correctAnswer: "join()"
                }
            ]
        },

    ],
    completedHtml: "<h1>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h1>"
    
};


window.survey = new Survey.Model(quiz);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            // .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            var totalResult = JSON.stringify(result.data);
            var respounseToQuestion = totalResult.split(",");             
            let n = 15;
            respounseToQuestion[0] = respounseToQuestion[0].slice(n);
            respounseToQuestion[1] = respounseToQuestion[1].slice(n);
            respounseToQuestion[2] = respounseToQuestion[2].slice(n);
            respounseToQuestion[3] = respounseToQuestion[3].slice(n);
            respounseToQuestion[3] = respounseToQuestion[3].replace('}', ''); 
            console.log(respounseToQuestion);
            
            if(respounseToQuestion[0]== '"Its value is a string indicating the data type of the operand"'){
                $("#chartContainer").append("-Your answer to the question; Which of the following is true about typeof operator in JavaScript?:\n" + respounseToQuestion[0]+ ' is correct</br></br>');   
            };
            if(respounseToQuestion[1]== 'Local variable"'){
                $("#chartContainer").append('-Your answer to the question; Which of the following type of variable takes precedence over other if names are same?:\n"' + respounseToQuestion[1]+ '" is correct</br></br>');
            };
            if(respounseToQuestion[2]== 'charCodeAt()"'){
                $("#chartContainer").append("-Your answer to the question; Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?:\n" + respounseToQuestion[2]+ ' is correct</br></br>');
            };
            if(respounseToQuestion[3]== 'join()"'){
                $("#chartContainer").append('-Your answer to the question; Which of the following function of Array object joins all elements of an array into a string?:\n"' + respounseToQuestion[3]+ ' is correct</br>');
            };
    });
   
$("#surveyElement").Survey({model: survey});
