
$.getJSON("includes/js/data.json", function(json) {
    console.log(json);
    var user=json.User[0];
    var medicine=json.Medication[0];
    var hr=json.Watch[0];
    var app=json.Appointments[0];
    var msg=json.Messages[0];
    var tst=json.Test[0];

    console.log(user.image);
    console.log(user.name);
    console.log(medicine.class);
    console.log(medicine.name);
    console.log(hr.name);
    

    $("#username").text(user.name);
    $("#profilepic").attr("src",user.image);
    
    $("#logomedicine").addClass(medicine.class);
    $("#namemedicine").text(medicine.name);
    
    $("#hrname").text(hr.name);
    $("#hrimage").attr("src",hr.image);
    
    $("#appname").text(app.name);
    $("#appclass").addClass(app.class);

    $("#msgname").text(msg.name);
    $("#msgclass").addClass(msg.class);
    
    $("#tstname").text(tst.name);
    $("#tstclass").addClass(tst.class);

});
