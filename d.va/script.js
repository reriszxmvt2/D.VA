(function() 
 {
  var allQuestions = [{
    question: '<img class="image" src="lovedva.jpg" width="450" height="300">',
    options: ["D.VA", "TRACER", "WIDOWMAKER", "BRIGITTE"],
    answer: 0
  }, {
    question: '<img class="image" src="widowmaker.jpg" width="450" height="300">',
    options: ["D.VA", "TRACER", "WIDOWMAKER", "BRIGITTE"],
    answer: 2
  }, {
    question: '<img class="image" src="brigitte.jpg" width="450" height="300">',
    options: ["D.VA", "TRACER", "WIDOWMAKER", "BRIGITTE"],
    answer: 3
  },{
    question: '<img class="image" src="genji.png" width="450" height="300">',
    options: ["GENJI", "HANSO", "JUNKRAT", "MOIRA"],
    answer: 0
  }, {
    question:'<img class="image" src="hanso.png" width="450" height="300">',
    options: ["GENJI", "HANSO", "JUNKRAT", "MOIRA"],
    answer: 1
  },{
    question: '<img class="image" src="juckrat.jpg" width="450" height="300">',
    options: ["GENJI", "HANSO", "JUNKRAT", "MOIRA"],
    answer: 2
  },{
    question: '<img class="image" src="moira.jpg" width="450" height="300">',
    options: ["GENJI", "HANSO", "JUNKRAT", "MOIRA"],
    answer: 3
  },{
    question: '<img class="image" src="mercy.jpg" width="450" height="300">',
    options: ["MERCY", "TRACER", "WIDOWMAKER", "MCCREE"],
    answer: 0
  },{
    question: '<img class="image" src="mccree.jpg" width="450" height="300">',
    options: ["MERCY", "TRACER", "WIDOWMAKER", "MCCREE"],
    answer: 3
  },{
    question: '<img class="image" src="tracer.png" width="450" height="300">',
    options: ["MERCY", "TRACER", "WIDOWMAKER", "MCCREE"],
    answer: 1
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
	

  function createElement(index) 
    {
		var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + '/10 :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();