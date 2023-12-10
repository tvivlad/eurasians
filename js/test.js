var myQuestions = [
    {
        question: "Как называлась книга Н.С. Трубецкого, с обсуждения которой в 1921 году в Софии зародилось евразийство",
        answers: {
            a: '«Европа и человечество»',
            b: '«Россия и Европа»',
            c: '«Закат Европы»'
        },
        correctAnswer: 'a'
    },
    {
        question: "Как назывался первый сборник евразийцев?",
        answers: {
            a: '«Поворот к Востоку»',
            b: '«Исход к Востоку»',
            c: '«Свет с Востока»'
        },
        correctAnswer: 'b'
    },
	{
        question: "Кто был автором статьи «Два подвига святого Александра Невского» в «Евразийском Временнике» 1925 года?",
        answers: {
            a: 'М.В. Шихматов',
            b: 'С.Г. Пушкарев',
            c: 'Г.В. Вернадский'
        },
        correctAnswer: 'c'
    },
	{
        question: "Кто был автором фразы «в 16 веке ханская ставка переехала из Сарая в Москву»?",
        answers: {
            a: 'П.Н. Савицкий',
            b: 'Г.В. Вернадский',
            c: 'Н.С. Трубецкой'
        },
        correctAnswer: 'c'
    },
	{
        question: "Как называется центральный термин евразийской геополитики?",
        answers: {
            a: 'местообитание',
            b: 'месторазвитие',
            c: 'местоположение'
        },
        correctAnswer: 'b'
    },
	{
        question: "Как назывался еженедельник, который выпускали левые, парижские евразийцы?",
        answers: {
            a: '«Евразийские тетради»',
            b: '«Поток Евразия»',
            c: '«Евразия»'
        },
        correctAnswer: 'c'
    },
	{
        question: "Какой русский религиозный философ оказал особое влияние на левых, парижских евразийцев?",
        answers: {
            a: 'Н.Ф. Федоров',
            b: 'В.С. Соловьев',
            c: 'П.А. Флоренский'
        },
        correctAnswer: 'a'
    },
	{
        question: "Кто назвал евразийство «славянофильством эпохи футуризма»?",
        answers: {
            a: 'Н.А. Бердяев',
            b: 'Ф.А. Степун',
            c: 'П.Б. Струве'
        },
        correctAnswer: 'b'
    },
	{
        question: "В каком государстве евразийцы видели  геополитический исток Московской Руси?",
        answers: {
            a: 'в Византии',
            b: 'в Монгольской империи',
            c: 'в Киевской Руси'
        },
        correctAnswer: 'b'
    },
	{
        question: "Когда произошел раскол евразийства на правое и левое крыло?",
        answers: {
            a: 'в 1923',
            b: 'в 1925',
            c: 'в 1929'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + [i+1]+'. ' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
		var correctRate=numCorrect/questions.length;
		var finalMark=2;
		if (correctRate>0.34) {finalMark=3;}
		if (correctRate>0.70) {finalMark=4;}
		if (correctRate>0.89) {finalMark=5;}
		
        // show number of correct answers out of total
        resultsContainer.innerHTML = 'Правильны ' + numCorrect + ' из ' + questions.length + '. Оценка: '+ finalMark;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}