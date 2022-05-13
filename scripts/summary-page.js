document.body.onload = function() {
    var header = document.getElementById("summary-header");
    var headerContent = header.innerHTML;
    header.innerHTML='';

    var index = 0;
    var id=setInterval(function() {
        header.innerHTML += headerContent[index++];
        if (index == headerContent.length) {
            clearInterval(id);
        }
    }, 50);
    

    fillProgressBar(localStorage.getItem("totalExpenses"), "exp-amount", "exp-percent");
    fillProgressBar(localStorage.getItem("remainingBudget"), "save-amount", "save-percent");
};


function fillProgressBar(data, elemID, spanID) {
    var totalBudget = localStorage.getItem("totalBudget");
    if(totalBudget == 0) {
        return;
    }
    var percent = (data / totalBudget)*100;
    var i = 0;
    var id = setInterval(function() {
        document.getElementById(elemID).style.width = (i+'%');
        animatePercent(spanID, i+"%");
        if(i >= percent) {
            clearInterval(id);
        }
        i++;
    }, 10) 
}
function animatePercent(id, data) {
    document.getElementById(id).innerHTML = data;
}