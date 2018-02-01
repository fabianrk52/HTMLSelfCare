
$.getJSON("includes/js/data.json", function(json) {
    console.log(json);
    var user=json.User[0];
    console.log(user.image);
    console.log(user.name);
    $("#username").text(user.name);
    $(".profile").css("background-image","url("+user.image"+)");
});