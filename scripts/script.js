var data;
document.body.onload = function(){
    if(!localStorage["totalBudget"]){
        var totalBudget = +prompt("Enter your total budget");
        localStorage.setItem("totalBudget", totalBudget);
    }
    if(!localStorage["totalExpenses"]){
        localStorage.setItem("totalExpenses", 0);
    }
    if(!localStorage["remainingBudget"]){
        var remainingBudget = parseInt(localStorage.totalBudget - localStorage.totalExpenses);
        localStorage.setItem("remainingBudget", remainingBudget);
    }

    if(localStorage["data"]) 
    {
        data = JSON.parse(localStorage["data"]);
        addTableData(data);
    }
    if(localStorage["totalBudget"]){
        document.getElementById('total-budget').innerHTML = localStorage["totalBudget"];
    }
    if(localStorage["totalExpenses"]){
        document.getElementById('total-expenses').innerHTML = localStorage["totalExpenses"];
    }
    if(localStorage["remainingBudget"]){
        localStorage.setItem("remainingBudget", +localStorage.totalBudget - +localStorage.totalExpenses)
        document.getElementById('remaining-budget').innerHTML = localStorage["remainingBudget"];
    }
}

function addTableData(){
    for(var e of data) {
        if(JSON.stringify(e) === JSON.stringify({}) || e === null) continue;
        var expeseItem = JSON.parse(e);
        var categoryData = document.createElement('td');
        var descriptionData = document.createElement('td');
        var costData = document.createElement('td');
        var deleteItemBtn = document.createElement('button');
        var editItemBtn = document.createElement('button');

        categoryData.innerHTML = expeseItem.category;
        descriptionData.innerHTML = expeseItem.description
        costData.innerHTML = expeseItem.cost;

        deleteItemBtn.setAttribute('id', 'delete-item-btn-'+expeseItem.ID);
        deleteItemBtn.setAttribute('class', 'item-btn');
        deleteItemBtn.addEventListener('click', deleteItem(expeseItem.ID));
        deleteItemBtn.innerHTML = '⌦';

        editItemBtn.setAttribute('id', 'edit-item-btn-'+expeseItem.ID);
        editItemBtn.setAttribute('class', 'item-btn');
        editItemBtn.addEventListener('click', openUpdatePage(expeseItem));
        editItemBtn.innerHTML = '✎';


        var dataRow = document.createElement('tr');
        dataRow.appendChild(categoryData);
        dataRow.appendChild(descriptionData);
        dataRow.appendChild(costData);
        dataRow.appendChild(deleteItemBtn);
        dataRow.appendChild(editItemBtn);
        document.querySelector('tbody').appendChild(dataRow);
    }
}

document.getElementById('del-all-btn').onclick = function(){
    if(confirm("Do you really want to delete all items?")){
        localStorage.removeItem("data");
        localStorage.removeItem("totalExpenses");
        localStorage.removeItem("nextID");
        location.reload();
    }
}

document.getElementById('edit-total-budget-btn').onclick = function(){
    
    var totalBudget = prompt("Enter your budget");
    while(isNaN(totalBudget) || totalBudget < 0){
        alert("Please enter valid number");
        totalBudget = prompt("Enter your budget");
    }
    while(+totalBudget < +localStorage.totalExpenses && totalBudget != null){
        alert("Your budget cannot be changed since it's less than your expenses");
        totalBudget = prompt("Enter your budget");
    }
    if(totalBudget){
        localStorage.setItem("totalBudget", +totalBudget);
        localStorage.setItem("remainingBudget", +totalBudget - +localStorage.totalExpenses);
        location.reload();
    }
}

function deleteItem(itemID){
    return function(){
        if(confirm("Are you sure?")){
            DataModel.removeExpenseItem(itemID);
            location.reload();
        }
    }
}

function openUpdatePage(expeseItem) {
    return function() {
        localStorage.setItem("updateItemData", JSON.stringify(expeseItem));
        location.assign("update-item.html");
    }
}
