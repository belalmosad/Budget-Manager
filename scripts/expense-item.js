function ExpenseItem(_ID,_category, _description, _cost) {
    if(isNaN(_ID) || _ID == null || _ID == undefined){
        throw new Error("You must provide an ID");
    }
    this.ID = _ID;
    this.category = _category;
    this.description = _description;
    this.cost = _cost;

}
