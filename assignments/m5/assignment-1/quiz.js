loader()
var ans = []
function an(ansr) {
    ans.push(ansr)
}
function loader() {
    var q1 = {
        question :"CSS Stands for Cascading Style Sheets",
        options: {
            opt1: "true",
            opt2: "false"
        },
        correctAnswer: "opt1",
        hint: "ask google"

    };
    var q2 = {
        question :"Html stands for hypertextmarkup language",
        options: {
            opt1: "true",
            opt2: "false"
        },
        correctAnswer: "opt1",
        hint: "ask google "
    };
    var q3 = {
        question :"AJAX stands for Asynchronous java script and XML",
        options: {
            opt1: "true",
            opt2: "false"
        },
        correctAnswer: "opt1",
        hint: "ask google"
    };
    var ar=[]
    ar.push(q1,q2,q3);
    for(var i = 0; i < 3; i++) {
    document.getElementById("quiz").innerHTML+=
    '<div class="container-fluid">'
    +'<ol>'
        +'<li>'
            +'<h3>'+ar[i].question+'</h3>'
            
            +'<button class="btn btn-primary btn-sm" onclick="warn('+i+')">Hint</button>'

            +'<div id = "hint'+i+'" class = "alert alert-warning alert-dismissable" style="display:none">'
                +'<a href="#" class= "close" data-dismiss="alert" aria-label="close">&times;</a>'
                +'<p>'+ ar[i].hint +'</p>'
            +'</div>'
            
            +'<div>'
                +'<input type="radio" name="question-'+i+'-answers" id="question-1-answers-A" value="A" />'
                +'<label for="question-1-answers-A">A)'+ ar[i].options.opt1 +'</label>'
            +'</div>'
            
            +'<div>'
                +'<input type="radio" name="question-'+i+'-answers" id="question-1-answers-B" value="B" />'
                +'<label for="question-1-answers-B">B)'+ ar[i].options.opt1+'</label>'
            +'</div>'
        +'</li>'
    +'</ol>'   
+'</div>'  ;  
    }  
}

function warn(i) {
    document.getElementById("hint"+i).style.display='block';
}
