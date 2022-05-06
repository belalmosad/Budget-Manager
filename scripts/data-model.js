var DataModel = {
    initValues: function() {
        if(localStorage["nextID"] === undefined){
            localStorage.setItem("nextID", 0);
        }
        if(localStorage["data"] === undefined){
            localStorage.setItem("data", JSON.stringify([]));
        }
        
    },

    addExpenseItem: function(item){
        var allData = JSON.parse(localStorage.getItem("data"));
        var itemID = item.ID;
        allData[itemID] = JSON.stringify(item);
        localStorage.setItem("nextID", parseInt(localStorage.nextID) + 1);
        localStorage.setItem("totalExpenses", +localStorage.totalExpenses + +item.cost);
        localStorage.setItem("data", JSON.stringify(allData));
    },

    removeExpenseItem: function(itemID){
        var itemCost = +JSON.parse(data[itemID]).cost;
        localStorage.setItem("totalExpenses", +localStorage.totalExpenses - itemCost);
        delete data[itemID];
        localStorage.setItem("data", JSON.stringify(data));
    }
}