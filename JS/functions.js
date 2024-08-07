function addition(a=10,b=20){
    console.log(a,b)
}

addition()  //The assigned default value in parameter will only be called when no value send during call.
addition(30,50)

//anonymous function

let print= function(){
    console.log("Hello World")
}

//replit 

function mycall(){
    var a=10
    var b=20
    console.log(a+b)
  }
  
  
  
  mycall()
  
  function addition(a,b,c){
    return a+b+c
  }
  
  console.log(addition(10,20,30))
  
  var global_var= " I am gloabal variable, access anywhere"
  
  function localvar(){
    var localVaraiable="I am local Varaiable, access only in local"
  }
  
  console.log(global_var)
  console.log(localvariable)


  //Higher Order Function

  let welcome = function(){
    console.log("Welcome Here")
  }

  function showdata(welcome,name){
    welcome()
    console.log(name)
  }

  showdata(welcome,"Zeeshan")

