var data;

document.body.onload = function(){
    if(!localStorage["totalBudget"]){
        var totalBudget = +prompt("Enter your total budget");
        localStorage.setItem("totalBudget", totalBudget);
    }
    if(localStorage["data"]) 
    {
        data = JSON.parse(localStorage["data"]);
        addTableData(data);
    }
    if(localStorage["totalBudget"]){
        document.getElementById('total-budget').innerHTML = localStorage["totalBudget"];
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

        categoryData.innerHTML = dataArr[0];
        descriptionData.innerHTML = dataArr[1];
        costData.innerHTML = dataArr[2];
        itemID.innerHTML = parseInt(dataArr[3])+1;

        deleteItemBtn.setAttribute('id', 'delete-item-btn-'+dataArr[3]);
        deleteItemBtn.setAttribute('class', 'del-item-btn');
        deleteItemBtn.addEventListener('click', deleteItem(dataArr[3]));
        deleteItemBtn.innerHTML = '⌦';


        var dataRow = document.createElement('tr');
        dataRow.appendChild(itemID);
        dataRow.appendChild(categoryData);
        dataRow.appendChild(descriptionData);
        dataRow.appendChild(costData);
        dataRow.appendChild(deleteItemBtn);
        document.querySelector('tbody').appendChild(dataRow);
    }
}

document.getElementById('del-all-btn').onclick = function(){
    if(confirm("Do you really want to delete all items?")){
        localStorage.removeItem("data");
        document.querySelector('.data-table table tbody').innerHTML = '';
    }
}

function deleteItem(itemID){
    return function(){
        if(confirm("Are you sure?")){
            delete data[itemID];
            localStorage.setItem("data", JSON.stringify(data));
            location.reload();
        }
    }
}

document.getElementById('edit-total-budget-btn').onclick = function(){
    var totalBudget = prompt("Enter your budget");
    if(totalBudget){
        localStorage.setItem("totalBudget", +totalBudget);
    document.getElementById('total-budget').innerHTML = localStorage["totalBudget"];
    }
    
}