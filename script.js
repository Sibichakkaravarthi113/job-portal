function filterJobs() {
let filter = document.getElementById("locationFilter").value;
let jobs = document.querySelectorAll(".job-card");

jobs.forEach(job => {
if(filter === "all" || job.dataset.location === filter){
job.style.display="block";
} else {
job.style.display="none";
}
});
}

function validateForm() {
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;

if(email === "" || pass === ""){
alert("Fill all fields");
return false;
}
return true;
}

document.getElementById("password")?.addEventListener("input", function(){
let strength = document.getElementById("strength");
let val = this.value;

if(val.length < 6)
strength.innerHTML="Weak";
else if(val.match(/[0-9]/) && val.match(/[A-Z]/))
strength.innerHTML="Strong";
else
strength.innerHTML="Medium";
});
