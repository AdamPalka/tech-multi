$(document).ready(function () {
var points = 0;
console.log('weszlo');
$('#page1').hide();
$('#page2').hide();
$('#page3').hide();
$('#table2').hide();
$('#table3').hide();

function ex1() {
    $('#table1').hide();
    $('#page1').show();
}

function ex2() {
    $('#page1').hide();
    $('#table2').show();
}

function ex3() {
    $('#page2').hide();
    $('#table3').show();
}

function nextPage() {
    $('#table2').hide();
    $('#page2').show();
}

function nextPage1() {
    $('#table3').hide();
    $('#page3').show();
}

document.getElementById("zad1").onclick = ex1;

function Zdanie1() {
    var zdanie1 = document.getElementById("z1");
    document.getElementById("zdanie1").innerHTML = "She " + zdanie1.value + " out tomorrow.";
    if (zdanie1.value == "will be") {
        points = points + 1;
        document.getElementById("reakcja1").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja1").innerHTML = "No! Correct answer is: will be";
    console.log(document.getElementById("reakcja1").innerHTML);
    return points;
}
document.getElementById("mybutton1").onclick = Zdanie1;

function Zdanie2() {
    var zdanie2 = document.getElementById("z2");
    document.getElementById("zdanie2").innerHTML = "He " + zdanie2.value + " out last sunday.";
    if (zdanie2.value == "was") {
        points = points + 1;
        document.getElementById("reakcja2").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja2").innerHTML = "No! Correct answer is: was";
    return points;
}
document.getElementById("mybutton2").onclick = Zdanie2;

function Zdanie3() {
    var zdanie3 = document.getElementById("z3");
    document.getElementById("zdanie3").innerHTML = "I " + zdanie3.value + " your dad.";
    if (zdanie3.value == "am") {
        points = points + 1;
        document.getElementById("reakcja3").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja3").innerHTML = "No! Correct answer is: am";
    return points;
}
document.getElementById("mybutton3").onclick = Zdanie3;

function Zdanie4() {
    var zdanie4 = document.getElementById("z4");
    document.getElementById("zdanie4").innerHTML = "We " + zdanie4.value + " with Tom then.";
    if (zdanie4.value == "were") {
        points = points + 1;
        document.getElementById("reakcja4").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja4").innerHTML = "No! Correct answer is: were";
    return points;
}
document.getElementById("mybutton4").onclick = Zdanie4;

function Zdanie5() {
    var zdanie5 = document.getElementById("z5");
    document.getElementById("zdanie5").innerHTML = "You " + zdanie5.value + " really sad today.";
    if (zdanie5.value == "are") {
        points = points + 1;
        document.getElementById("reakcja5").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja5").innerHTML = "No! Correct answer is: are";
    return points;
}
document.getElementById("mybutton5").onclick = Zdanie5;

document.getElementById("zad2").onclick = ex2;

document.getElementById("nextOne").onclick = nextPage;

function Zdanie6() {
    var zdanie6 = document.getElementById("z6");
    document.getElementById("zdanie6").innerHTML = zdanie6.value + " he at your party yesterday?";
    if (zdanie6.value == "Was") {
        points = points + 1;
        document.getElementById("reakcja6").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja6").innerHTML = "No! Correct answer is: was";
    return points;
}
document.getElementById("mybutton6").onclick = Zdanie6;

function Zdanie7() {
    var zdanie7 = document.getElementById("z7");
    document.getElementById("zdanie7").innerHTML = zdanie7.value + " you here now?";
    if (zdanie7.value == "Are") {
        points = points + 1;
        document.getElementById("reakcja7").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja7").innerHTML = "No! Correct answer is: are";
    return points;
}
document.getElementById("mybutton7").onclick = Zdanie7;

function Zdanie8() {
    var zdanie8 = document.getElementById("z8");
    document.getElementById("zdanie8").innerHTML = zdanie8.value + " I there then?";
    if (zdanie8.value == "Was") {
        points = points + 1;
        document.getElementById("reakcja8").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja8").innerHTML = "No! Correct answer is: was";
    return points;
}
document.getElementById("mybutton8").onclick = Zdanie8;

function Zdanie9() {
    var zdanie9 = document.getElementById("z9");
    document.getElementById("zdanie9").innerHTML = zdanie9.value + " Amy home now?";
    if (zdanie9.value == "Is") {
        points = points + 1;
        document.getElementById("reakcja9").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja9").innerHTML = "No! Correct answer is: is";
    return points;
}
document.getElementById("mybutton9").onclick = Zdanie9;

function Zdanie10() {
    var zdanie10 = document.getElementById("z10");
    document.getElementById("zdanie10").innerHTML = zdanie10.value + " they present week ago?";
    if (zdanie10.value == "Were") {
        points = points + 1;
        document.getElementById("reakcja10").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja10").innerHTML = "No! Correct answer is: were";
    return points;
}
document.getElementById("mybutton10").onclick = Zdanie10;

document.getElementById("zad3").onclick = ex3;

document.getElementById("nextOne1").onclick = nextPage1;

function Zdanie11() {
    var zdanie11 = document.getElementById("z11");
    document.getElementById("zdanie11").innerHTML = "I am " + zdanie11.value + " in the queue.";
    if (zdanie11.value == "first") {
        points = points + 1;
        document.getElementById("reakcja11").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja11").innerHTML = "No! Correct answer is: first";
    return points;
}
document.getElementById("mybutton11").onclick = Zdanie11;

function Zdanie12() {
    var zdanie12 = document.getElementById("z12");
    document.getElementById("zdanie12").innerHTML = "I have " + zdanie12.value + " girls in my class.";
    if (zdanie12.value == "three") {
        points = points + 1;
        document.getElementById("reakcja12").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja12").innerHTML = "No! Correct answer is: three";
    return points;
}
document.getElementById("mybutton12").onclick = Zdanie12;

function Zdanie13() {
    var zdanie13 = document.getElementById("z13");
    document.getElementById("zdanie13").innerHTML = "He won " + zdanie13.value + " place.";
    if (zdanie13.value == "second") {
        points = points + 1;
        document.getElementById("reakcja13").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja13").innerHTML = "No! Correct answer is: second";
    return points;
}
document.getElementById("mybutton13").onclick = Zdanie13;

function Zdanie14() {
    var zdanie14 = document.getElementById("z14");
    document.getElementById("zdanie14").innerHTML = "I have " + zdanie14.value + " missed calls.";
    if (zdanie14.value == "nine") {
        points = points + 1;
        document.getElementById("reakcja14").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja14").innerHTML = "No! Correct answer is: nine";
    return points;
}
document.getElementById("mybutton14").onclick = Zdanie14;

function Zdanie15() {
    var zdanie15 = document.getElementById("z15");
    document.getElementById("zdanie15").innerHTML = "It is my " + zdanie15.value + " yellow dress.";
    if (zdanie15.value == "fifth") {
        points = points + 1;
        document.getElementById("reakcja15").innerHTML = "Very well!";
    }
    else
        document.getElementById("reakcja15").innerHTML = "No! Correct answer is: fifth";
    return points;
}
document.getElementById("mybutton15").onclick = Zdanie15;

$('#punktacja').click(function () { Punktacja(); });

function Punktacja() {
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#punkt').text("Your score is : " + points + " points :)");
    if (points < 5) {
        $('#punkt').text("Your score is : " + points + " points :) Try to work harder!");
    }
    if (points >= 5 && points <8) {
        $('#punkt').text("Your score is : " + points + " points :) Keep on learning!");
    }
    if (points >= 8 && points < 11) {
        $('#punkt').text("Your score is : " + points + " points :) Very well!");
    }
    if (points >= 11 && points < 14) {
        $('#punkt').text("Your score is : " + points + " points :) Good!");
    }
    if (points >= 14 && points <= 15) {
        $('#punkt').text("Your score is : " + points + " points :) Excelent!");
    }
}
});