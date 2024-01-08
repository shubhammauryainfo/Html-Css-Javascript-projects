let generateOTP =()=>{
const otplength = 6;
const otp = Math.floor(100000 + Math.random() * 900000);
document.getElementById("text").innerText = otp;
};

document
.getElementById("btn")
.addEventListener("click",generateOTP);
window.addEventListener("load",generateOTP);

