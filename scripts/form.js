document.forms[0].onsubmit= function(e){
    if(!localStorage["data"]) {
        localStorage.setItem("data", JSON.stringify([]));
    }
    var dataArr = [];
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var cost = document.getElementById('cost').value;
    dataArr.push(category);
    dataArr.push(description);
    dataArr.push(cost);
    var allData = JSON.parse(localStorage.getItem("data"));
    allData.push(dataArr);
    localStorage.setItem("data", JSON.stringify(allData))
}
