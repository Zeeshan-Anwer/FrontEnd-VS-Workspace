// fill in javascript code here



document.querySelector("form").addEventListener("submit",show)

function show(event){

    let doc_name=document.getElementById("name").value
let doc_id=document.getElementById("docID").value
let doc_dept=document.getElementById("dept").value
let doc_exp=document.getElementById("exp").value
let doc_email=document.getElementById("email").value
let doc_mbl=document.getElementById("mbl").value

    event.preventDefault()
    let row=document.createElement("tr")
    let c1=document.createElement("td")
    c1.innerText=doc_name
    let c2=document.createElement("td")
    c2.innerText=doc_id
    let c3=document.createElement("td")
    c3.innerText=doc_dept
    let c4=document.createElement("td")
    c4.innerText=doc_exp
    let c5=document.createElement("td")
    c5.innerText=doc_email
    let c6=document.createElement("td")
    c6.innerText=doc_mbl
    let c7=document.createElement("td")
    let doc_role;
  if (doc_exp <= 1) doc_role = "Fresher";
  if (doc_exp >= 2 && doc_exp <=5) emp_role = "Junior";
  if (doc_exp > 5) doc_role = "Senior";
    c7.innerText=doc_role

    let c8=document.createElement("td")
   // delete all data 
   let del=document.createElement("button")
   del.innerText="Delete"
    c8.append(del)
    document.innerHTML=del
    row.append(c1,c2,c3,c4,c5,c6,c7,c8)
    document.querySelector("tbody").append(row)

      
  
}
