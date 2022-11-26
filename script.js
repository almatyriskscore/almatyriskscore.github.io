function functionName() {
    document.getElementById("answer_first").textContent = "";

    var first = document.getElementById('id_first').value;
    var second = document.getElementById('id_second').value;
    var third = document.getElementById('id_third').value;
    var fourth = document.getElementById('id_fourth').value;

    let answer_first = 0.0;

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

    if (document.getElementById('gridRadios3').checked == true)
        answer_first += 5.2;

    if (document.getElementById('gridRadios5').checked == true)
        answer_first += 7.3;

    if (document.getElementById("selectFirst").value == "4")
        answer_first += 43;
    
    if (document.getElementById('gridRadios9').checked == true)
        answer_first += 20.9;

    if (document.getElementById("answer_first").textContent == "")
        document.getElementById("answer_first").textContent = "Вероятность исхода в: " + answer_first + " %";
}
