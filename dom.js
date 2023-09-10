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