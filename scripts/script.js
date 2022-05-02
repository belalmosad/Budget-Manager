document.body.onload = function(){
    if(localStorage["data"]) 
    {
        var allData = JSON.parse(localStorage["data"]);
        addTableData(allData);
    }
}

function addTableData(data){
    for(var dataArr of data) {
        var itemID = document.createElement('td');
        var categoryData = document.createElement('td');
        var descriptionData = document.createElement('td');
        var costData = document.createElement('td');
        var deleteItemBtn = document.createElement('button');

        categoryData.innerHTML = dataArr[0];
        descriptionData.innerHTML = dataArr[1];
        costData.innerHTML = dataArr[2];
        itemID.innerHTML = dataArr[3];

        deleteItemBtn.setAttribute('id', 'delete-item-btn-'+dataArr[3]);
        deleteItemBtn.setAttribute('class', 'del-item-btn');
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
        localStorage.clear();
        document.querySelector('.data-table table tbody').innerHTML = '';
    }
}