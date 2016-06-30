document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('myBtn');
    // onClick's logic below:
    link.addEventListener('click', function() {
      document.getElementById("demo").innerHTML = Date();
    });
});



function displayDate() {
  document.getElementById("demo").innerHTML = "LLL";
}

