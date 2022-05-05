const item = JSON.parse(localStorage.getItem("updateItemData"));
const oldCost = item[2];
const oldDescription = item[1];
const oldCategory = item[0];
document.getElementById('category').value = oldCategory;
document.getElementById('description').value = oldDescription;
document.getElementById('cost').value = oldCost;




document.forms[0].onsubmit = function(e) {
    e.preventDefault();
    var updatedData = [];
    var allData = JSON.parse(localStorage.data);
    var itemID = item[3];

    var updatedCategory = document.getElementById('category').value;
    var updatedDescription = document.getElementById('description').value;
    var updatedCost = document.getElementById('cost').value;

    if(+updatedCost > (+localStorage.remainingBudget + +oldCost)){
        alert("You Don't have enough budget");
        return;
    }

    updatedData.push(updatedCategory);
    updatedData.push(updatedDescription);
    updatedData.push(updatedCost);
    updatedData.push(itemID);

    allData[itemID] = updatedData;
    localStorage.setItem("data", JSON.stringify(allData));
    localStorage.setItem("totalExpenses", (+localStorage.totalExpenses - +oldCost) + +updatedCost);
    localStorage.setItem("remainingBudget", +localStorage.totalBudget - +localStorage.totalExpenses);
    localStorage.removeItem("updateItemData");
    location.replace('index.html');
}

