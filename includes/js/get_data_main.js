
$.getJSON("/includes/js/data.json", function(json) {
    console.log(json);
    var user=json.User[0];
    console.log(user.image);
    console.log(user.name);
    var name= JSON.stringify(user.name);
    console.log(name);
    var pic= JSON.stringify(user.image);
    console.log(pic);
    $("#username").text(name);
    document.getElementById("#username").innerHTML(name);
});