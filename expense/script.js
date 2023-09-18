
var app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  
  
  this.FetchAll = function() {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('expense amt');
    el1= document.getElementById('desc');
    el2 = document.getElementById('cat_name');
    // Get the value
    var  task = el.value; + " - "+ el1.value+ " - "+ el2.value;
    var  exp_amt1 = el.value;
    var desc = el1.value;
    var cat_name = el2.value;
    let myobj={
        
    };
    myobj['exp_amt1']=exp_amt1;
    myobj['desc']= desc; 
    myobj['cat_name']= cat_name; 

    let myobj_serial = JSON.stringify(myobj);


    localStorage.setItem("myobj",myobj_serial);
    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = '';
      el1.value = '';
      el2.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    // Display value in the field
    el.value = this.tasks[item];
    // Display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // Get value
      var task = el.value;

      if (task) {
        // Edit value
        self.tasks.splice(item, 1, task.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.tasks.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'expensne';

    if (data) {
        if(data ==1){
            name = 'expensne'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}