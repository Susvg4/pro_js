var  menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.getElementById("text");
var btn = document.getElementById("zer");
var myMenu = document.getElementById("menu");
var cont = 1;
//menuItem[0].innerHTML ='Hello World';
//menuItem[1].innerHTML ='Hello World';
//menuItem[2].innerHTML ='Hello World';

//for (i = 0 ; i < menuItem.length ; i++){
   // menuItem[i].innerHTML ='عنوان جديد';
  //        menuItem[i].addEventListener("click",selectItem);
    //    }

//function
myMenu.addEventListener("click",selectItem);
function selectItem(n){
    //alert("تم التحديد");
    if (n.target.nodeName == "LI"){
        headLine.innerHTML = n.target.innerHTML;
        for(i=0 ; i<menuItem.length;i++){
             menuItem[i].classList.remove("selected");
            }
         n.target.classList.add("selected");
    }
    
}
btn.addEventListener("click", newItem);

function newItem(){
   // headLine.innerHTML  ="Hello World";
    //btn.innerHTML ="اضغط هنا";
    //menuItem[0].innerHTML = 'JS';
    myMenu.innerHTML += "<li> new line "+ cont +" </li>";
    cont++;
}