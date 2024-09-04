

var card=document.getElementById("card-container");


var newElementdiv=document.createElement("div");
newElementdiv.className="divrofile"

card.appendChild(newElementdiv);



// element First_______________
   var newElement1=document.createElement("p");
   newElement1.className="pera1"
   var newText=document.createTextNode("Studetnt Name: ");
   newElement1.appendChild(newText);
   card.appendChild(newElement1);

   var newElement2=document.createElement("span");
   newElement2.id="spanName"
   var newText2=document.createTextNode(" Madan lal");
   newElement2.appendChild(newText2);
   newElement1.appendChild(newElement2);

// element second______________
   var newElement3=document.createElement("p");
   newElement3.className="pera1"
   var newText3=document.createTextNode("Father's Name: ");
   newElement3.appendChild(newText3);
   card.appendChild(newElement3);

   var newElement4=document.createElement("span");
   newElement4.id="spanFather"
   var newText4=document.createTextNode("Inder Chand");
   newElement4.appendChild(newText4);
   newElement3.appendChild(newElement4);

   console.log(card);

   // element third______________
   var newElementp3=document.createElement("p");
   newElementp3.className="pera1"
   var newTextp3=document.createTextNode("Education: ");
   newElementp3.appendChild(newTextp3);
   card.appendChild(newElementp3);

   var newElementspan3=document.createElement("span");
   newElementspan3.id="spaneduca"
   var newTextspan4=document.createTextNode("Intermedate");
   newElementspan3.appendChild(newTextspan4);
   newElementp3.appendChild(newElementspan3);

   
   // element fourth______________
   var newElement3=document.createElement("p");
   newElement3.className="pera1"
   var newText3=document.createTextNode("Course: ");
   newElement3.appendChild(newText3);
   card.appendChild(newElement3);

   var newElement4=document.createElement("span");
   newElement4.id="spanFather"
   var newText4=document.createTextNode("Web development");
   newElement4.appendChild(newText4);
   newElement3.appendChild(newElement4);






   // element fifth______________
   var newElement3=document.createElement("p");
   newElement3.className="pera1"
   var newText3=document.createTextNode("Roll NO: ");
   newElement3.appendChild(newText3);
   card.appendChild(newElement3);

   var newElement4=document.createElement("span");
   newElement4.id="rollNo"
   var newText4=document.createTextNode("108");
   newElement4.appendChild(newText4);
   newElement3.appendChild(newElement4);


var Adrees=document.createElement("div");
    Adrees.className="Adrees";
var  AdreesNode=document.createTextNode("Address");
Adrees.appendChild(AdreesNode);
card.appendChild(Adrees);

 // element SIXTH______________

      var newElement3=document.createElement("DIV");
      newElement3.className="Adrees-name"
      var newText3=document.createTextNode("JAGDISH COLONY BY PASS ROAD MITHI");
      newElement3.appendChild(newText3);
      card.appendChild(newElement3);
  
