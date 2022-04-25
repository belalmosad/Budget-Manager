document.body.onload = function(){
    if(localStorage.description) 
    {
        addTableData(localStorage);
    }
}

function addTableData(data){
    var categoryData = document.createElement('td');
    var descriptionData = document.createElement('td');
    var costData = document.createElement('td');

    categoryData.innerHTML = data.category;
    descriptionData.innerHTML = data.description;
    costData.innerHTML = data.cost;

    var dataRow = document.createElement('tr');
    dataRow.appendChild(categoryData);
    dataRow.appendChild(descriptionData);
    dataRow.appendChild(costData);
    document.querySelector('tbody').appendChild(dataRow);
}