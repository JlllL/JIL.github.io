var  myimage=document.querySelector('img');
myimage.onclick=function(){
    var mysrc=myimage.getAttribute('src');
    if(mysrc==='images/firefox-icon.png')
      {myimage.setAttribute('src','images/anotherfox.png');}
    else{myimage.setAttribute('src','images/firefox-icon.png');}
}
var myButton = document.querySelector('button');
var myHeading= document.querySelector('h1');
function setUserName(){var myName=prompt('Please     enter your name');
    localStorage.setItem('name',myName);           
    myHeading.textContent='Mozilla is cool,'+myName;
                      }
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storeName=localStorage.getItem('name');
        myHeading.textContent='Mozilla is cool,'+storeName;

}
myButton.onclick=function(){setUserName();}