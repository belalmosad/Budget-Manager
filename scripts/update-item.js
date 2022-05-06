const item = JSON.parse(localStorage.getItem("updateItemData"));
const oldCost = item.cost;
const oldDescription = item.description;
const oldCategory = item.category;
document.getElementById('category').value = oldCategory;
document.getElementById('description').value = oldDescription;
document.getElementById('cost').value = oldCost;




document.forms[0].onsubmit = function(e) {
    e.preventDefault();
    var allData = JSON.parse(localStorage.data);
    var itemID = item.ID;

    var updatedCategory = document.getElementById('category').value;
    var updatedDescription = document.getElementById('description').value;
    var updatedCost = document.getElementById('cost').value;

    if(+updatedCost > (+localStorage.remainingBudget + +oldCost)){
        alert("You Don't have enough budget");
        return;
    }

    var updatedExpenseItem = new ExpenseItem(itemID, updatedCategory, 
                                                updatedDescription, updatedCost);

    allData[itemID] = JSON.stringify(updatedExpenseItem);
    localStorage.setItem("data", JSON.stringify(allData));
    localStorage.setItem("totalExpenses", (+localStorage.totalExpenses - +oldCost) + +updatedCost);
    localStorage.setItem("remainingBudget", +localStorage.totalBudget - +localStorage.totalExpenses);
    localStorage.removeItem("updateItemData");
    location.replace('index.html');
}

