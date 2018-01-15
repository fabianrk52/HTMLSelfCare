 
 

var el=[];

function profilePic(){
    var pic = document.createElement("img");
    pic.src="images/profilepic.jpg";
    pic.className="imgProfile";
    return pic;
}

function medPic(){
    var pic = document.createElement("img");
    var currentdate = new Date();
    
	if(currentdate.getHours()>20){
        g_el[1].style.background="linear-gradient(to bottom, #999966 0%, #669999 100%)";
        pic.src="images/night.png";
        pic.width="100%;"
        pic.className="imgWeather";
	}
	else if(currentdate.getHours()>12){
        g_el[1].style.background="linear-gradient(to bottom, rgba(241,231,103,1) 0%, rgba(241,231,103,0.77) 17%, rgba(246,159,65,0.35) 48%, rgba(255,38,0,0.35) 100%)";
        pic.src="images/afternoon.png";
        pic.width="100%;"
        pic.className="imgWeather";
	}
	else{
        g_el[1].style.background="linear-gradient(to bottom, #00ccff 0%, #99ff99 100%)";
        pic.src="images/morning.png";
        pic.width="100%;"
        pic.className="imgWeather";
	}
    
    return pic;
}


function medText(){
	var text = document.createElement("article");
	var currentdate = new Date();

	text.className="textWeather";
    
	if(currentdate.getHours()>20){
		text.innerText="Good Night, you have some medications to take";
	}
	else if(currentdate.getHours()>12){
		text.innerText="Good Afternoon, you have some medications to take";
		
	}
	else{
		text.innerText="Good Morning, you have some medications to take";
	}
	return text;
}

function profileText(){
    var text = document.createElement("article");
   
    text.className="nameProfile";
    text.innerText="David Polisanov";
    var id =  document.createElement("span");
    id.className="idProfile";
    id.innerText="ID 12345678";
    text.appendChild(id);
      
    return text;
}



function createIcon(){
    var pic = document.createElement("i");
    pic.className="fa fa-heartbeat fa-3x heartbeat";
    g_el[2].appendChild(pic);
    pic = document.createElement("i");
    pic.className="fa fa-heart fa-3x heart";
    g_el[2].insertBefore(pic,g_el[2].childNodes[0]);
}

function TextIcon(){
    var value=["68","130/65"];

    var pressure = document.createElement("article");
    pressure.className="pressure";
    pressure.innerText=value[1];
    g_el[2].appendChild(pressure);

    var pulse = document.createElement("article");
    pulse.className="pulse";
    pulse.innerText=value[0];
    g_el[2].insertBefore(pulse,g_el[2].childNodes[1]);
}

function showNotification(){
    var notification = document.getElementById("notification");
    if(notification.style.display=="none"){
        notification.style.display="block";
    }
    else{
        notification.style.display="none";
    }
    
}

var g_el=[];


(function(){
	var content = document.getElementById("wrapper"); 

 	for(i=0;i<3;i++){
  	  g_el[i]=document.createElement("section");
  	  g_el[i].className="box";
    } 
    
    g_el[0].appendChild(profileText());
    g_el[0].insertBefore(profilePic(),g_el[0].childNodes[0]);
    g_el[1].appendChild(medPic());
    g_el[1].insertBefore(medText(),g_el[1].childNodes[0]);
    createIcon();
    TextIcon();
    for(i=0;i<3;i++){
    content.appendChild(g_el[i]);
    }
})();