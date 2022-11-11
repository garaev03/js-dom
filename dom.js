const body=document.querySelector("body")
const input=document.getElementById("value")
const button=document.querySelector("button")
var color
button.addEventListener("click", function(){
    color=input.value 
    body.style.backgroundColor=color 
})

// if(color=="black"){
//     body.style.color="white"
// }
//-------------------------------------------------------------------------------------------------
const divTags=document.querySelectorAll("div")
var dataID

divTags.forEach(function(element){
    dataID=element.getAttribute("data-id")
    if(dataID>5){
        console.log(element)
    }
})
