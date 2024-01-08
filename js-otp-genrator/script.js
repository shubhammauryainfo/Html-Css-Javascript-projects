let generateOTP =()=>{
const otplength = 8;
const otp = Math.floor(10000000 + Math.random() * 90000000);
document.getElementById("text").innerText = otp;
};

document
.getElementById("btn")
.addEventListener("click",generateOTP);
window.addEventListener("load",generateOTP);

