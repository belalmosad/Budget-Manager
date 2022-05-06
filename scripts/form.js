if(localStorage.nextID == undefined){
    localStorage.setItem("nextID", 0);
}

document.forms[0].onsubmit= function(e){
    e.preventDefault();
    if(!localStorage["data"]) {
        localStorage.setItem("data", JSON.stringify([]));
    }
    if(+localStorage.remainingBudget < (+localStorage.totalExpenses + +document.getElementById('cost').value)){
        e.preventDefault();
        alert("You do not have enough money");
        return;
    }
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var cost = document.getElementById('cost').value;
    var itemID = localStorage.nextID;
    var expeseItem = new ExpenseItem(itemID,category, description, cost);
    DataModel.addExpenseItem(expeseItem);

    localStorage.setItem("totalExpenses", +localStorage.totalExpenses + +cost);
    location.replace('index.html');
}
