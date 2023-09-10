var headerTitle = document.getElementById('header-title');
headerTitle.style.color ="#999";
var x = document.getElementById('xyz');
x.style.color = "green";
x.style.fontWeight = "bold";
var y = document.querySelectorAll("li");
y[2].style.backgroundColor = "green";
for(let i=0 ; i<y.length;i++)
{
    y[i].style.fontWeight= "bold";
}
var z= document.getElementsByTagName("li")[4];
z.style.backgroundColor= "red";


var itemList  = document.querySelector('#items');
itemList.parentNode.style.backgroundColor= "yellow";
//itemList.childNode.style.backgroundColor= "blue";
itemList.children[1].style.backgroundColor= 'yellow';//item2
itemList.firstChild.style.backgroundColor= "yellow"; //text node
itemList.firstElementChild.textContent = 'hello1'; //item1  nto hello1
itemList.lastElementChild.textContent = 'hello1'; //item1  nto hello1


//insert a element before item lister
var newd = document.createElement('div');
newd.className = 'hello1';
newd.id = 'hello';
//newd.setAttribue('title', 'hello div');
var newtext = document.createTextNode('HEllo');
newd.appendChild(newtext);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newd, h1);
/*
//insert text before item1 
var newl = document.createElement('li');
newl.className = 'hello2';
newl.id = 'hello2';
//newd.setAttribue('title', 'hello div');
newl.innerHTML = "hello2";
newl.appendChild(newtext1);

var container2 = document.querySelector('ul .list-group-item');
var h2 = document.getElementsByClassName("list-group-item")[0];
//h2.style.backgroundColor= "blue";
container.insertBefore(newl, h2);
*/

var ele =  document.getElementsByClassName("list-group-item")[0];
var newe= document.createElement("li");
newe.innerHTML = "hello2";
ele.parentNode.insertBefore(newe, ele.previousSibling);
newe.className= "list-group-item";
newe.style.fontWeight = "bold";