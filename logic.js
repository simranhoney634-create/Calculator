let input=document.querySelector(".write")
let equalbutton=document.querySelector(".equal")
let clearbutton=document.querySelector(".ac")
let delbutton=document.querySelector(".del")
let buttons=document.querySelectorAll(".type")
let arrbutton=Array.from(buttons)
for(let button of arrbutton){
    button.addEventListener("click",()=>{
        input.value=input.value+button.innerText
    })
}
equalbutton.addEventListener("click",()=>{
    let a=String(input.value).replace('%','/100');
    let res=eval(a);
    input.value=res;  
})
clearbutton.addEventListener("click",()=>{
    input.value=""
})
delbutton.addEventListener("click",()=>{
    let str=String(input.value);
    let newstr=str.slice(0,-1)  
    input.value=newstr;
})
