function functionName() {
    document.getElementById("answer_first").textContent = "";
    document.getElementById("answer_second").textContent = "";

    var first = document.getElementById('id_first').value;
    var second = document.getElementById('id_second').value;
    var third = document.getElementById('id_third').value;
    var fourth = document.getElementById('id_fourth').value;
    var fifth = document.getElementById('id_fifth').value;
    var sixth = document.getElementById('id_sixth').value;
    var seventh = document.getElementById('id_seventh').value;
    var eighth = document.getElementById('id_eighth').value;

    let answer_first = 0.0;
    let answer_second = 0.0;

    if(document.getElementById('gridRadios1').checked == true) {   
        if (parseFloat(first) < 130)
            answer_first += 5;
        
    } else {  
        if (parseFloat(first) < 120) {
            answer_first += 5;
        }   
    }

    if (parseFloat(second) > 120)
            answer_first += 7.3;

    if (parseFloat(third) > 5)
        answer_first += 5.8;

    if (parseFloat(fourth) < 40)
        answer_first += 5.3;

    if (fifth.toLowerCase() == "да")
        answer_first += 5.2;
    else if (fifth.toLowerCase() == "нет")
        answer_first += 0;
    else
        document.getElementById("answer_first").textContent = "Ошибка";

    if (sixth.toLowerCase() == "да")
        answer_first += 7.3;
    else if (sixth.toLowerCase() == "нет")
        answer_first += 0;
    else
        document.getElementById("answer_first").textContent = "Ошибка";

    if (seventh.toLowerCase() == "да")
        answer_first += 43;
    else if (seventh.toLowerCase() == "нет")
        answer_first += 0;
    else
        document.getElementById("answer_first").textContent = "Ошибка";

    if (eighth.toLowerCase() == "да")
        answer_first += 20.9;
    else if (eighth.toLowerCase() == "нет")
        answer_first += 0;
    else
        document.getElementById("answer_first").textContent = "Ошибка";

    if (document.getElementById("answer_first").textContent == "")
        document.getElementById("answer_first").textContent = "Вероятность исхода в: " + answer_first + " %";



    
    if (parseFloat(first) < 120) {
        answer_second += 2;
    }

    if (parseFloat(second) > 120) {
        answer_second += 3;
    }

    if (parseFloat(third) > 5) {
        answer_second += 2;
    }

    if (parseFloat(fourth) < 40) {
        answer_second += 2;
    }

    if (fifth.toLowerCase() == "да")
        answer_second += 2;
    else if (fifth.toLowerCase() == "нет")
        answer_second += 0;
    else
        document.getElementById("answer_second").textContent = "Ошибка";


    if (sixth.toLowerCase() == "да")
        answer_second += 3;
    else if (sixth.toLowerCase() == "нет")
        answer_second += 0;
    else
        document.getElementById("answer_second").textContent = "Ошибка";


    if (seventh.toLowerCase() == "да")
        answer_second += 8;
    else if (seventh.toLowerCase() == "нет")
        answer_second += 0;
    else
        document.getElementById("answer_second").textContent = "Ошибка";
    

    if (eighth.toLowerCase() == "да")
        answer_second += 6;
    else if (eighth.toLowerCase() == "нет")
        answer_second += 0;
    else
        document.getElementById("answer_second").textContent = "Ошибка";
    
    if (document.getElementById("answer_second").textContent == "")
        document.getElementById("answer_second").textContent = "Итоговые баллы: " + answer_second;
}