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

    var categoryCosts = getCategoriesTotalCosts();
    fillCategoryCosts(categoryCosts["Grocery"], "groc-amount", "groc-percent");
    fillCategoryCosts(categoryCosts["Rent"], "rent-amount", "rent-percent");
    fillCategoryCosts(categoryCosts["Transportation"], "transport-amount", "transport-percent");
    fillCategoryCosts(categoryCosts["Utilities"], "utility-amount", "utility-percent");
    fillCategoryCosts(categoryCosts["Personal Spending"], "personal-amount", "personal-percent");

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

function getCategoriesTotalCosts() {
    var categoriesCosts = []; // Associative array to record cost of each category.
    var allData = JSON.parse(localStorage.data); // array of stringified data.
    allData.forEach(element => {
        if(element != null) {
            var itemData = JSON.parse(element); // Json format of item.
            var category = itemData["category"];
            
            if(categoriesCosts[category] == undefined) {
                categoriesCosts[category] = 0;
            }
            categoriesCosts[category] += +itemData["cost"];
        }
    });
    return categoriesCosts;
}

function fillCategoryCosts(cost, itemID, spanID) {
    if(cost == undefined) {
        return;
    }
    var i = 0;
    var totalExpenses = localStorage.getItem("totalExpenses");
    var costPercent = (cost / totalExpenses)*100;
    var id = setInterval(function() {
        document.getElementById(itemID).style.width = i+'%';
        animatePercent(spanID, i+"%");
        if(i >= costPercent) {
            clearInterval(id);
        }
        i++;
    }, 10);
}