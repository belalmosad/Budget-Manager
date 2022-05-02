if(localStorage.nextID == undefined){
    localStorage.setItem("nextID", 0);
}

document.forms[0].onsubmit= function(e){
    if(!localStorage["data"]) {
        localStorage.setItem("data", JSON.stringify([]));
    }

    var dataArr = [];
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var cost = document.getElementById('cost').value;
    var itemID = localStorage.nextID;

    dataArr.push(category);
    dataArr.push(description);
    dataArr.push(cost);
    dataArr.push(itemID);

    var allData = JSON.parse(localStorage.getItem("data"));
    allData.push(dataArr);

    localStorage.setItem("data", JSON.stringify(allData));
    localStorage.setItem("nextID", parseInt(localStorage.nextID) + 1);
}
