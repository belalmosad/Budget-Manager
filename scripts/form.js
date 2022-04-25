var userData = {};
document.getElementById('submit-btn').onclick= function(e){
    
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;
    var cost = document.getElementById('cost').value;

    localStorage.setItem("category", category);
    localStorage.setItem("description", description);
    localStorage.setItem("cost", cost); 
}
