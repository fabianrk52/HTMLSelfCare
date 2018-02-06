
$.getJSON("includes/js/data.json", function(json) {
    var user= json.User[0];

    $("#username").text(user.Title.name);
    $("#profilepic").attr("src",user.Title.image);

    $("#namemedicine").text(user.Medication.name);
    $("#logomedicine").addClass(user.Medication.class);

    $("#hrname").text(user.Watch.name);
    $("#hrimage").attr("src",user.Watch.image);
    
    $("#appname").text(user.Appointments.name);
    $("#appclass").addClass(user.Appointments.class);

    $("#msgname").text(user.Messages.name);
    $("#msgclass").addClass(user.Messages.class);
    
    $("#tstname").text(user.Test.name);
    $("#tstclass").addClass(user.Test.class);
    });
