document.body.onload = function() {
    var header = document.getElementById("summary-header");
    var headerContent = header.innerHTML;
    header.innerHTML='';

    var index = 0;
    var id=setInterval(function() {
        header.innerHTML += headerContent[index++];
        if (index == headerContent.length) {
            clearInterval(id);
        }
    }, 100);
};