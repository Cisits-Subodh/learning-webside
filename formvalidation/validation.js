document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault();
    const user_name = document.getElementById("user_name").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpasssword").value;
    if (user_name ==!"")
       {
        alert("Emty");
    return false;

}
});
// function validateForm() {
//   let x = document.forms["user_name"]["user_name"].value;
//   let y=document.forms["password"]["password"].value;
//   let z=document.forms["cpassword"]["cpassword"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }