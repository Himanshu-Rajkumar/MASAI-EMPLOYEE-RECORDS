// fill in javascript code here

let myform=document.getElementById("myform")
let Name=document.getElementById("name")
let employeeID=document.getElementById("employeeID")
let department=document.getElementById("department")
let exp=document.getElementById("exp")
let email=document.getElementById("email")
let mbl=document.getElementById("mbl")
let role=document.getElementById("role")
let del=document.getElementById("del")
let tbody=document.getElementById("tbody")



let AllData=[]

myform.addEventListener("submit",function(e){
    e.preventDefault()
    let Data={}
    Data.name=Name.value
    Data.employeeID=employeeID.value
    Data.department=department.value
    Data.exp=exp.value
    Data.email=email.value
    Data.mbl=mbl.value
    Data.del=del.value
    Data.role=role.value
    
  
    AllData.push(Data)
    console.log(AllData)

    tbody.innerText=""
    

    AllData.map(ele=>
        {
            let row=document.createElement("tr")
            let td1=document.createElement("td")
            let td2=document.createElement("td")
            let td3=document.createElement("td")
            let td4=document.createElement("td")
            let td5=document.createElement("td")
            let td6=document.createElement("td")
            let td7=document.createElement("td")
            let td8=document.createElement("td")
            td1.innerText=ele.name
            td2.innerText=ele.employeeID
            td3.innerText=ele.department
            td4.innerText=ele.exp
            td5.innerText=ele.email
            td6.innerText=ele.mbl
            td7.innerText=ele.role
            td8.innerText=ele.del
            
            
            row.append(td1,td2,td3,td4,td5,td6,td7,td8)
            
            
           
            tbody.append(row)
            
        })


})