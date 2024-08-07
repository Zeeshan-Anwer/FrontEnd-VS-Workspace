// fill in javascript code here

document.querySelector("form").addEventListener("submit",collect)

function collect(event){
  event.preventDefault()
  let emp_name = document.getElementById("name").value;
  let emp_id = document.getElementById("employeeID").value;
  let emp_dep = document.getElementById("department").value;
  let emp_exp = document.getElementById("exp").value;
  let emp_mail = document.getElementById("email").value;
  let emp_mbl = document.getElementById("mbl").value;
  
  let emp_role;
  if (emp_exp <= 1) emp_role = "Fresher";
  if (emp_exp >= 2 && emp_exp <=5) emp_role = "Junior";
  if (emp_exp > 5) emp_role = "Senior";

  let emp={
    emp_name :emp_name,
    emp_id: emp_id,
    emp_dep: emp_dep,
    emp_exp,
    emp_mail,
    emp_mbl,
    emp_role
  };
  data(emp)
}
 





  

  function data(emp){

    let row=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=emp.emp_name;
    let td2=document.createElement("td")
    td2.innerText=emp.emp_id;
    let td3=document.createElement("td")
    td3.innerText=emp.emp_dep;
    let td4=document.createElement("td")
    td4.innerText=emp.emp_exp;
    let td5=document.createElement("td")
    td5.innerText=emp.emp_mail;
    let td6=document.createElement("td")
    td6.innerText=emp.emp_mbl;
    let td7=document.createElement("td")
    td7.innerText=emp.emp_role;
   
    row.append(td1,td2,td3,td4,td5,td6,td7)
    document.querySelector("tbody").append(row)
  
  }


