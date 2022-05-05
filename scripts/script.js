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
    for(var dataArr of data) {
        if(dataArr === null) continue;
        var itemID = document.createElement('td');
        var categoryData = document.createElement('td');
        var descriptionData = document.createElement('td');
        var costData = document.createElement('td');
        var deleteItemBtn = document.createElement('button');
        var editItemBtn = document.createElement('button');

        categoryData.innerHTML = dataArr[0];
        descriptionData.innerHTML = dataArr[1];
        costData.innerHTML = dataArr[2];
        itemID.innerHTML = parseInt(dataArr[3])+1;

        deleteItemBtn.setAttribute('id', 'delete-item-btn-'+dataArr[3]);
        deleteItemBtn.setAttribute('class', 'item-btn');
        deleteItemBtn.addEventListener('click', deleteItem(dataArr[3]));
        deleteItemBtn.innerHTML = '⌦';

        editItemBtn.setAttribute('id', 'edit-item-btn-'+dataArr[3]);
        editItemBtn.setAttribute('class', 'item-btn');
        editItemBtn.addEventListener('click', openUpdatePage(dataArr));
        editItemBtn.innerHTML = '✎';


        var dataRow = document.createElement('tr');
        dataRow.appendChild(itemID);
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
            var itemCost = +data[itemID][2];
            localStorage.setItem("totalExpenses", +localStorage.totalExpenses - itemCost);
            delete data[itemID];
            localStorage.setItem("data", JSON.stringify(data));
            location.reload();
        }
    }
}

function openUpdatePage(dataArr) {
    return function() {
        localStorage.setItem("updateItemData", JSON.stringify(dataArr));
        location.assign("update-item.html");
    }
}
