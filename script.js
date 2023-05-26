

let hide = document.getElementsByClassName("hid");
let image = document.getElementById("img");
let select = document.getElementById("group");
let bGroup = ["A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

for (let i = 0; i < bGroup.length; i++) {

    let opt = document.createElement("option");
    opt.value = bGroup[i];
    opt.innerText = bGroup[i];
    select.append(opt);
}

let namee = document.getElementById("name");
let phone = document.getElementById("tel");
let mail = document.getElementById("mail");
let telReg = /^[7-9][0-9]{9}$/;
let nameReg = /^[a-zA-Z\s]{3,30}$/;
let emailReg = /^[a-z0-9]*\.?\-?\_?[a-z0-9]{1,15}\@[a-z^0-9]*\.[a-z]{2,3}$/i;
let submit = document.getElementById("submit");
submit.addEventListener("click", func);

function func(e) {
    e.preventDefault();

    if (telReg.test(phone.value)) {
        console.log("CORRECT PHONE NUMBER");
        phone.style.border = "1px solid green";
        hide[2].setAttribute("hidden", "true");
        phone.classList.remove("shake");
    }
    else {
        console.log("INCORRECT PHONE NUMBER");
        phone.style.border = "1px solid red";
        phone.className = "shake";
        hide[2].removeAttribute("hidden");
    }
    if (nameReg.test(namee.value)) {
        console.log("CORRECT NAME");
        namee.style.border = "1px solid green";
        hide[0].setAttribute("hidden", "true")
        namee.classList.remove("shake");
    }
    else {
        console.log("INCORRECT  NAME");
        namee.style.border = "1px solid red";
        namee.className = "shake";
        hide[0].removeAttribute("hidden");
    }
    if (emailReg.test(mail.value)) {
        console.log("CORRECT MAILLL");
        mail.style.border = "1px solid green";
        hide[1].setAttribute("hidden", "true");
        mail.classList.remove("shake");
    }
    else {
        console.log("INCORRECT  MAILLL");
        mail.style.border = "1px solid red";
        mail.className = "shake";
        hide[1].removeAttribute("hidden");
    }

    if (telReg.test(phone.value) == false && nameReg.test(namee.value) == false && emailReg.test(mail.value) == false) {
        image.style.marginTop = "-567px";
    }
   else if (telReg.test(phone.value) == true && nameReg.test(namee.value) == true && emailReg.test(mail.value) == true) {
        image.style.marginTop = "-550px";
    }

}
