const item = JSON.parse(localStorage.getItem("updateItemData"));
document.getElementById('category').value = item[0];
document.getElementById('description').value = item[1];
document.getElementById('cost').value = item[2];

localStorage.totalExpenses -= +document.getElementById('cost').value;
localStorage.remainingBudget += +document.getElementById('cost').value;


document.forms[0].onsubmit = function(e) {
    e.preventDefault();
    var updatedData = [];
    var allData = JSON.parse(localStorage.data);
    var itemID = item[3];

    var updatedCategory = document.getElementById('category').value;
    var updatedDescription = document.getElementById('description').value;
    var updatedCost = document.getElementById('cost').value;

    if(+updatedCost > +localStorage.remainingBudget){
        alert("You Don't have enough budget");
        return;
    }

    updatedData.push(updatedCategory);
    updatedData.push(updatedDescription);
    updatedData.push(updatedCost);
    updatedData.push(itemID);

    allData[itemID] = updatedData;
    localStorage.setItem("data", JSON.stringify(allData));
    localStorage.setItem("totalExpenses", +localStorage.totalExpenses + +updatedCost);
    localStorage.removeItem("updateItemData");
    location.replace('index.html');
}

