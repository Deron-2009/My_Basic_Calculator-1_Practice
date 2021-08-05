const x=document.getElementById("x")
const y=document.getElementById("y")
const add=document.getElementById("add")
const subtract=document.getElementById("subtract")
const multiply=document.getElementById("multiply")
const divide=document.getElementById("divide")
const add_ans=document.getElementById("add_ans")
const sub_ans=document.getElementById("sub_ans")
const mul_ans=document.getElementById("mul_ans")
const div_ans=document.getElementById("div_ans")

add.addEventListener("click",
function(){
    add_ans.className="para"
    const head1=document.createElement("h4")
    head1.innerText="Addition answer:"
    add_ans.append(head1)
    const answer1=document.createElement("h1")
    answer1.innerText= parseInt(x.value) +  parseInt(y.value)
    add_ans.append(answer1)
})
subtract.addEventListener("click",
function(){
    sub_ans.className="para"
    const head2=document.createElement("h4")
    head2.innerText="Subtraction answer:"
    sub_ans.append(head2)
    const answer2=document.createElement("h1")
    answer2.innerText= parseInt(x.value) -  parseInt(y.value)
    sub_ans.append(answer2)
})
multiply.addEventListener("click",
function(){
    mul_ans.className="para"
    const head3=document.createElement("h4")
    head3.innerText="Multiplication answer:"
    mul_ans.append(head3)
    const answer3=document.createElement("h1")
    answer3.innerText= parseInt(x.value) * parseInt(y.value)
    mul_ans.append(answer3)
})
divide.addEventListener("click",
function(){
    div_ans.className="para"
    const head4=document.createElement("h4")
    head4.innerText="Divition answer:"
    div_ans.append(head4)
    const answer4=document.createElement("h1")
    answer4.innerText= parseInt(x.value) /  parseInt(y.value)
    div_ans.append(answer4)
})
