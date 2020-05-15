var Name = document.getElementById("name");
var lastname = document.getElementById("last-name");
var fullname = document.getElementById("full-name")

Name.addEventListener("input", combine);
lastname.addEventListener("input", combine);

function combine(){
    var one = Name.value;
    var two = lastname.value;
    fullname.innerHTML = one + ', ' + two;
}
