// All the JS Code for the Add Students Page Goes Here



    let st_name=document.querySelector("#name").value
    let st_email=document.querySelector("#email").value
    let st_phone=document.querySelector("#phone").value
    let st_gender=document.querySelector("#gender").value 
    let st_course=document.querySelector("#course").value

    let student = {
         st_name: st_name,
         st_email: st_email,
        st_phone: st_phone,
        st_gender: st_gender,
        st_course: st_course,
    };

    document.getElementById("form").addEventListener("click",show(student))

    function show(student){
        localStorage.setItem("admission",JSON.stringify(student))

    }
