const text = document.getElementById("input-box");
const ul = document.getElementById("list");
// console.log(text.nodeValue);

// console.log(text);
function addTasck(){
    if(text.value ===""){
        document.querySelector(".error").style.display = "block";

    }
    else {
        document.querySelector(".error").style.display = "none";
        const li = document.createElement("li");
        li.innerHTML = text.value;
        ul.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = '';
    saveData();
}
ul.addEventListener("click", (e)=>{
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}

},false);

function saveData(){
    localStorage.setItem("Data" , ul.innerHTML)
}
function showData(){
    ul.innerHTML =localStorage.getItem("Data");
}
showData();