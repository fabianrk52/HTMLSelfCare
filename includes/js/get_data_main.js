
$.getJSON("includes/js/data.json", function(json) {
<<<<<<< HEAD
    var user= json.User[0];
=======
    console.log(json);
    var user=json.User[0];
>>>>>>> final

    $("#username").text(user.Title.name);
    $("#profilepic").attr("src",user.Title.image);
    

<<<<<<< HEAD
    $("#namemedicine").text(user.Medication.name);
    $("#logomedicine").addClass(user.Medication.class);

=======
    $("#username").text(user.Title.name);
    $("#profilepic").attr("src",user.Title.image);
    
    $("#logomedicine").addClass(user.Medication.name);
    $("#namemedicine").text(user.Medication.class);
>>>>>>> final
    
    $("#hrname").text(user.Watch.name);
    $("#hrimage").attr("src",user.Watch.image);
    
    $("#appname").text(user.Appointments.name);
    $("#appclass").addClass(user.Appointments.class);

    $("#msgname").text(user.Messages.name);
    $("#msgclass").addClass(user.Messages.class);
    
    $("#tstname").text(user.Test.name);
    $("#tstclass").addClass(user.Test.class);
<<<<<<< HEAD
    });
=======

});
>>>>>>> final
