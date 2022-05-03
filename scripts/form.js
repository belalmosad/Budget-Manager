if(localStorage.nextID == undefined){
    localStorage.setItem("nextID", 0);
}

document.forms[0].onsubmit= function(e){
    if(!localStorage["data"]) {
        localStorage.setItem("data", JSON.stringify([]));
    }
    if(+localStorage.remainingBudget < (+localStorage.totalExpenses + +document.getElementById('cost').value)){
        e.preventDefault();
        alert("You do not have enough money");
        return;
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
    allData[itemID] = dataArr;

    localStorage.setItem("data", JSON.stringify(allData));
    localStorage.setItem("nextID", parseInt(localStorage.nextID) + 1);
    localStorage.setItem("totalExpenses", +localStorage.totalExpenses + +cost);
}
