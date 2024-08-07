var obj1 = {
    name: "Zeeshan",
    gender: "Male",
    marks: 50
  }
  
  console.log(obj1)
  
  //Bracket Notation
  console.log(obj1["name"])
  
  // Dot Notation
  console.log(obj1.gender)
  
  //update
  obj1.marks=80
  
  //delete
  
  delete obj1.name
  
  console.log(obj1)

  // let var const

var a = "Zeeshan"


console.log(a[2])

//Object Methods are functions written inside the the objects

let student = {


    marks: function() {
      console.log("Name", "Marks Added")
      console.log("add", "Bangalore")
    }
  
  };
  
  student.marks()

  //write an obj method to add 2 number

let add2no={

    addition: function(a,b){
      console.log(a+b)
    } 
  };
  
  add2no.addition()

  //undefined case 
var y
console.log(y)