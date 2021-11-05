 var pinform=document.getElementById("formInput")

var e = document.getElementById("pincode1");

function numberSelected(event) {
  var strUser = e.value;
  event.preventDefault();
    if(strUser.length==6){
        location.href="./index2.html"
    }
    else{
        alert("Invalid Input!")
    }
  console.log("button", strUser);
//   containerSelected(strUser);

}

pinform.addEventListener("submit",numberSelected)
