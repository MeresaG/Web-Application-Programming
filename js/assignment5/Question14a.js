
window.onload = function() {


function loginForm() {
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
    console.log(document.getElementById("url").value);

    return false;
}

var submitBtn = document.getElementById("submit");
submitBtn.onclick = loginForm;


};
