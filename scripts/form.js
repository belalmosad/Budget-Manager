document.forms[0].onsubmit= function(e){
    e.preventDefault();
    DataModel.initValues();
    if(+localStorage.remainingBudget < +document.getElementById('cost').value){
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
    location.replace('index.html');
}
