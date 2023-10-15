var table = "";
var listArray = [];
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // handle submit
  function clear() {
    document.getElementById("firstname").value = "";
    document.getElementById("secondname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    var inputs = document.querySelectorAll('#defaultCheck1');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  }
  //To get first name
  var firstname = document.getElementById("firstname").value;
  var secondname = document.getElementById("secondname").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  //food
  var checkboxes = document.querySelectorAll("#defaultCheck1");
  var neewvar = 0;
  var count;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      neewvar++;
    }
  }
  if (neewvar < 2) { 
    alert("Please select atleast 2 values");
    var inputs = document.querySelectorAll('#defaultCheck1');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
     
  } 
  else if(neewvar == 0) {
    alert("Please select atleast 2 values ");
    var inputs = document.querySelectorAll('#defaultCheck1');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
    
  }else {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        listArray.push(checkboxes[i].value);
      }
    }
  var tr = document.createElement("tr");
  //represent what data we have to insert
  var td1 = tr.appendChild(document.createElement("td"));
  var td2 = tr.appendChild(document.createElement("td"));
  var td3 = tr.appendChild(document.createElement("td"));
  var td4 = tr.appendChild(document.createElement("td"));
  var td5 = tr.appendChild(document.createElement("td"));
  var td6 = tr.appendChild(document.createElement("td"));
  var td7 = tr.appendChild(document.createElement("td"));
  var td8 = tr.appendChild(document.createElement("td"));
  td1.innerHTML = firstname;
  td2.innerHTML = secondname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = firstname;
  td6.innerHTML = gender;
  td7.innerHTML = state;
  td8.innerHTML = listArray;
  document.getElementById("t_body").appendChild(tr);

  //clear all once the forms get submitted
  clear();
  }
  
});
