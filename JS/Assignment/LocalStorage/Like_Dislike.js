document.getElementById("lp1").addEventListener("click",countLike)
document.getElementById("ld1").addEventListener("click",countDislike)

let lcount=localStorage.getItem("llcount") || 0
let dcount=localStorage.getItem("dlcount") || 0

document.querySelector("#sp1").innerText= "Your Likes "+localStorage.getItem("llcount")
document.querySelector("#sp2").innerText= "Your disLikes "+localStorage.getItem("dlcount")

function countLike(){
  
    lcount++
    localStorage.setItem("llcount",lcount)
    document.querySelector("#sp1").innerText= "Your Likes "+localStorage.getItem("llcount")

}

function countDislike(){
    
    dcount++
    localStorage.setItem("dlcount",dcount)
    document.querySelector("#sp2").innerText= "Your disLikes "+localStorage.getItem("dlcount")

}