 
 function createText(){
    var meds = ["Acamol","KalBeten","Civofen"];
    var text=document.createElement("p");
    text.className="nameMedicine";
    text.innerText=meds[i];
    return text;
}

function createCircle(){  
    var color=["#0000ff","#ffff00","#ff0000"];
    var circle=document.createElement("div");
    circle.className="circle";
    circle.style.backgroundColor=color[i];
    return circle;
}

function createLine(){
    var line=document.createElement("li");
    line.className="list-group-item d-flex";
    return line;
}

function createButton(){
    var ref = ["acamol.html","#","#"];
    var button=document.createElement("a");
    button.className="btn buttonInstruction";
    button.href=ref[i];
    button.type="button";
    button.innerText="Instruction";
    return button; 
}   


(function(){
	var content = document.getElementById("wrapper"); 
    var el=document.createElement("ul");  
    el.className="list-group"; 
  	for(i=0;i<3;i++){
  		line = createLine();
        line.appendChild(createText());
        line.insertBefore(createCircle(),line.childNodes[0]);
        line.insertBefore(createButton(),line.childNodes[1]);   
  		el.appendChild(line); 		
  	}
    content.appendChild(el);
})();